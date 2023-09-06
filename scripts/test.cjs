/**
 * test path.resolve and path.join
 */
const path = require('path')
const root = path.join(__dirname, './autoGenerateSidebar.js')
const root1 = path.resolve(__dirname, './autoGenerateSidebar.js')

console.log(__dirname);
console.log(path.resolve('./autoGenerateSidebar.js'));
console.log(path.resolve('/src', 'a'));
console.log(root);
console.log(root1);