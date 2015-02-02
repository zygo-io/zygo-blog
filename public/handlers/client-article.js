export function handler(context) {
  var id = context.loadingRequest.options.id;

  return new Promise((resolve, reject) => {
    //Already got the post?
    if (context.posts && context.posts[id]) return resolve();
    if (!context.posts) context.posts = {};

    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState === 4) {
        if (xmlhttp.status === 200)
          return resolve(context.posts[id] = JSON.parse(xmlhttp.responseText));
          return reject();
        }
      };

      xmlhttp.open("GET", "/db/post/" + id, true);
      xmlhttp.send();
    });
  }
