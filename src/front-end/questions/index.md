# 问题合集
## [CORS request not HTTP](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp)
### 哪里错了？
CORS 请求只能用于 HTTP 或 HTTPS URL 方案，但请求指定的 URL 可能是不同类型。这种情况经常发生在 URL 指定本地文件，例如使用了 file:/// 的 URL。

要解决此问题，请确保在发出涉及 CORS 的请求时使用 HTTPS URL，例如 XMLHttpRequest、Fetch API、Web 字体（@font-face）、WebGL 纹理以及 XSL 样式表。

### 加载本地文件
来自相同的目录或者子目录的本地文件在历史上被视为同源的。这意味着在测试期间可以从本地目录或子目录加载文件以及它的所有子资源，而不会触发 CORS 错误。

不幸地是，这有安全隐患，正如此公告所述：CVE-2019-11730。很多浏览器，包括 Firfox 和 Chrome，现在将所有本地文件视为不透明来源（默认）。因此，加载包含本地资源的本地文件现在会导致 CORS 错误。

开发者如果想要在本地进行测试，现在要设置一个本地服务器。由于所有的文件都来自同种方案和域（loaclhost），它们都有相同的源，并不会触发跨源错误。