import {writeFile} from 'node:fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';
import { getSidebar } from "./autoGenerateSidebar.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sidebar = await getSidebar('../src')
writeFile(path.join(__dirname, '../.vitepress/sidebar.json'), JSON.stringify(sidebar))
