import type { SiteConfig} from 'vitepress';
import type { DefaultTheme} from 'vitepress/types/default-theme.d.ts';

/** vite config */
export interface UserConfig {
  vitepress: SiteConfig
}

export interface FolderInfo extends DefaultTheme.SidebarItem {
  /** 是否是sidebar页面 */
  isSidebar?: boolean;
  /** 当前文件/目录路径 */
  path?: string;
  /** 下层 */
  items?: FolderInfo[];
}

export interface AutoSidebarOption {
  /** 文档根路径 */
  docRoot: string;
}
