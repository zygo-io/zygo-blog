export default {
  "component": "zygo-blog/app/page.jsx!",

  "/post/:pid": "zygo-blog/app/article.jsx!",

  "/category/:cid": {
    "component": "zygo-blog/app/article-list.jsx!",

    "/post/:pid": "zygo-blog/app/article.jsx!"
  }
};
