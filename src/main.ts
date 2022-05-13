import express from 'express';
import { Request, Response } from 'express';
const app = express();
const port = 3000;

/**
 * 使用JSON中间件
 */
app.use(express.json());

app.listen(port, () => {
  console.log('服务已启动~~');
});
app.get('/', (request: Request, response: Response) => {
  response.send('你好');
});

const data = [
  {
    id: 1,
    title: '忆江南',
    content: '江南好，风景旧曾谙',
  },
  {
    id: 2,
    title: '静夜思',
    content: '床前明月光，疑是地上霜',
  },
  {
    id: 3,
    title: '琵琶行',
    content: '同是天涯沦落人，相逢何必曾相识',
  },
];
app.get('/posts', (request: Request, response: Response) => {
  response.send(data);
});

app.get('/posts/:postId', (request: Request, response: Response) => {
  //获取内容ID
  const { postId } = request.params;

  //查找具体内容
  const posts = data.filter(item => item.id == parseInt(postId, 10));

  //做出响应
  response.send(posts[0]);
});

/**
 * 创建内容
 */
app.post('/posts', (request: Request, response: Response) => {
  //获取请求里的数据
  const { content } = request.body;
  response.status(201);
  //输出请求头部数据
  console.log(request.headers['sing-along']);
  //设置响应头部数据
  response.set('Sing-Along', 'How I wonder what you are');
  response.send({
    message: `成功创建了内容: ${content}`,
  });
});
