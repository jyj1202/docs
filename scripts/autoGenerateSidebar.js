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
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export default function autoGenerateSidebar(options) {
  console.log(options);
  const { docsPath } = options
  const root = path.join(__dirname, docsPath)
  
  const config = async () => {
    const res = await getFolderInfo(root, root)
    let sidebar = generateSidebar(res.items)
    fs.writeFile(path.join(__dirname, './dist.json'), JSON.stringify(sidebar))
    return {
      vitepress: {
        site: {
          themeConfig: {
            sidebar
          }
        },
        userConfig: {
          themeConfig: {
            sidebar
          }
        }
      }
    }
  }

  return {
    name: 'vite-plugin-vitepress-autoSidebar',
    config,
    // configResolved(resolvedConfig) {
    //   fs.writeFile(path.join(__dirname, './dist.json'), JSON.stringify(resolvedConfig))
    // },
  }
}

export async function getSidebar(docsPath) {
  const root = path.join(__dirname, docsPath)
  const res = await getFolderInfo(root, root)
  return generateSidebar(res.items)
}


/**
 * @param {array} items 
 * @param {object} sidebar 
 * @returns default {}
 */
function generateSidebar(items, sidebar={}) {
  items.forEach(item => {
    const { items: subItems, isSidebar, path} = item
    if (isSidebar) {
      sidebar[`/${path}/`] = [item]
    } else {
      generateSidebar(subItems, sidebar)
    }
  })
  return sidebar
}

/**
 * 
 * @param {string} root 
 * @param {string} absoluteDir 
 * @returns 
 */
async function getFolderInfo(root, absoluteDir) {
  const foldernameWithoutExt = getNameWithoutExt(absoluteDir)
  const items = []
  const isSidebar = foldernameWithoutExt.endsWith('-sidebar')
  const relativeDir = path.relative(root, absoluteDir).replace(/\\/g, '/');
  const folderInfo = {
    text: foldernameWithoutExt.replace(/-sidebar$/, ''),
    items,
    isSidebar,
    path: relativeDir,
    collapsed: true
  }

  const files = await fs.readdir(absoluteDir);
  
  for (const filename of files) {
    const filePath = path.join(absoluteDir, filename);
    const stat = await fs.stat(filePath);
    const fileNameWithoutExt = getNameWithoutExt(filename)
    
    if (fileNameWithoutExt.endsWith('-hide')) {
      continue
    }

    if (stat.isDirectory()) {
      items.push(await getFolderInfo(root, filePath))
      continue
    }
    if (path.extname(filename).toLowerCase() === '.md') {
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

function getNameWithoutExt(filePath) {
  const fileName = path.basename(filePath);
  const fileNameWithoutExt = path.parse(fileName).name;
  return fileNameWithoutExt;
}
