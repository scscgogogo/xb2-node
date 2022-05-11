const http = require('http');

const server = http.createServer((request, response) => {
  // console.log(request.headers["user-agent"]);
  // response.writeHead(200, {
  //   "Content-Type": "text/html",
  // });
  // response.write(`<input />`);
  // response.end();
  // switch (request.url) {
  //   case "/":
  //     response.write("hello~");
  //     break;
  //   case "/posts":
  //     response.write("post");
  //     break;
  //   case "/signup":
  //     response.write("signup");
  //     break;
  //   default:
  //     response.writeHead(404);
  //     response.write("404");
  //     break;
  // }

  const data = {
    id: 1,
    title: '静夜思',
    content: '床前明月光，疑是地上霜',
  };
  const jsonData = JSON.stringify(data);
  response.writeHead(200, {
    'Content-Type': 'application/json;charset=utf-8',
  });
  response.write(jsonData);
  response.end();
});

server.listen(3000, () => {
  console.log('🚀服务已启动！');
});
