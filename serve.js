// Zero-dependency static server for the portfolio.
// Run:  node serve.js      then open the printed URL.
const http = require('http'), fs = require('fs'), path = require('path');
const ROOT = __dirname, PORT = process.env.PORT || 5173;
const TYPES = { '.html':'text/html', '.js':'text/javascript', '.json':'application/json', '.css':'text/css', '.svg':'image/svg+xml', '.png':'image/png', '.jpg':'image/jpeg', '.webp':'image/webp', '.gif':'image/gif' };

http.createServer((req, res) => {
  let url = decodeURIComponent(req.url.split('?')[0]);
  if (url === '/' ) url = '/studio.html';                 // land on the control page
  const filePath = path.join(ROOT, path.normalize(url).replace(/^(\.\.[/\\])+/, ''));
  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404, {'Content-Type':'text/plain'}); return res.end('Not found'); }
    res.writeHead(200, {'Content-Type': TYPES[path.extname(filePath).toLowerCase()] || 'application/octet-stream'});
    res.end(data);
  });
}).listen(PORT, () => {
  console.log('\n  Portfolio Studio running:');
  console.log('  → Studio (edit here):  http://localhost:' + PORT + '/studio.html');
  console.log('  → Portfolio (public):  http://localhost:' + PORT + '/index.html\n');
});
