const http = require("http");
const app = http.createServer((request, response) => {
  const _url = request.url;
  const fullUrl = new URL("http://localhost:4000" + _url);
  const pathName = fullUrl.pathname;
  if (pathName === "/") {
    response.writeHead(200, {
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Credentials": "true",
      "Content-Type": "text/html;charset= utf-8",
      "Set-Cookie": [
        "yummy_cookie=choco",
        "tasty_cookie=strawberry; HttpOnly; Max-Age=${60 * 60 * 24 * 30}; Secure; SameSite=none;",
      ],
    });

    response.end(`<h1>Set-Cookie Test</<h1>`);
  }
  if (pathName === "/test") {
    response.writeHead(200, {
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Content-Type": "text/html;charset= utf-8",
    });

    response.end(`<h1>Get-Cookie Test</<h1>` + request.headers.cookie);
  }
});

app.listen(4000, () => {
  //포트번호 4000으로 서버 구동
  console.log("서버 시작 주소: http://localhost:4000");
});
