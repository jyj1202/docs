/**
 * 只有目录可以作为sidebar;
 * 作为sidebar的目录必须以"-sidebar"结尾，并且只有最外层以-sidebar结尾的目录才会作为sidebar，子目录忽略
 * 如果文件或目录以"-hide"结尾，则不会出现在sidebar中
 * 如果目录名为"xxx-hide-sidebar"，则仍然会作为sidebar，对应sidebar名称为"xxx-hide"
 * 如果目录名为"xxx-sidebar-hide"，则不作为sidebar
*/

// const fs = require('fs').promises;
// const path = require('path');

import * as fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'path';
import type { Plugin, ViteDevServer } from 'vite';
import type { UserConfig, FolderInfo, AutoSidebarOption } from "./type";
import type { DefaultTheme} from 'vitepress/types/default-theme.d.ts';

const __filename = fileURLToPath(import.meta.url);
console.log(__filename);
const __dirname = path.dirname(__filename);



function generateSidebar(items: FolderInfo[], sidebar={}): DefaultTheme.Sidebar {
  items.forEach(item => {
    const { items: subItems, isSidebar, path} = item
    if (isSidebar) {
      sidebar[`/${path}/`] = [item]
    } else if (subItems) {
      generateSidebar(subItems, sidebar)
    }
  })
  return sidebar
}

async function getFolderInfo(root: string, absoluteDir: string): Promise<FolderInfo> {
  const foldernameWithoutExt = getNameWithoutExt(absoluteDir)
  const items: FolderInfo[] = []
  const isSidebar = foldernameWithoutExt.endsWith('-sidebar')
  const relativeDir = path.relative(root, absoluteDir).replace(/\\/g, '/');
  const folderInfo: FolderInfo = {
    text: foldernameWithoutExt.replace(/-sidebar$/, ''),
    isSidebar,
    path: relativeDir,
    collapsed: true,
    items,
  }

  const files = await fs.readdir(absoluteDir);
  
  for (const filename of files) {
    const filePath = path.join(absoluteDir, filename);
    const stat = await fs.stat(filePath);
    const fileNameWithoutExt = getNameWithoutExt(filename)
    
    // 如果是隐藏文件，则跳过当前循环
    if (fileNameWithoutExt.endsWith('-hide')) {
      continue
    }
    // 如果是目录，则递归
    if (stat.isDirectory()) {
      items.push(await getFolderInfo(root, filePath))
      continue
    }
    // 如果后缀名是.md（忽略大小写），则需要添加link属性
    if (path.extname(filename).toLowerCase() === '.md') {
      // 如果是index.md，则向folderInfo上添加link属性，否则向folderInfo.items添加
      if (fileNameWithoutExt.toLowerCase() === 'index') {
        folderInfo.link = `/${relativeDir}/index.html`
      } else {
        items.push({
          text: fileNameWithoutExt,
          link: `/${relativeDir}/${fileNameWithoutExt}.html`
        })
      }
    }
  }

  return folderInfo
}

function getNameWithoutExt(filePath: string) {
  const fileName = path.basename(filePath);
  const fileNameWithoutExt = path.parse(fileName).name;
  return fileNameWithoutExt;
}


export default function autoGenerateSidebar(options: AutoSidebarOption): Plugin {
  console.log(options);
  const { docRoot } = options
  const root = path.resolve(__dirname, docRoot)
  
  return {
    name: 'vite-plugin-vitepress-autoSidebar',
    configureServer ({
      watcher,
      restart
    }: ViteDevServer) {
      const fsWatcher = watcher.add('*.md');
      fsWatcher.on('all', async (event, path) => {
        if (event !== 'change') {
          console.log(`${event} ${path}`);
          try {
            await restart();
            // ws.send({
            //   type: 'full-reload',
            // })
            console.log('update sidebar...');
          } catch {
            console.log(`${event} ${path}`);
            console.log('update sidebar failed');
          }
        }
      });
    },
    async config(config) {
      const folderInfo = await getFolderInfo(root, root);
      (config as UserConfig).vitepress.site.themeConfig.sidebar = folderInfo.items ? generateSidebar(folderInfo.items) : {}
      return config
    }
  }
}
