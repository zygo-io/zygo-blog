export function handler(context) {
  return new Promise((resolve, reject) => {
    //Already got the thumbs?
    if (context.thumbs) return resolve();

    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState === 4) {
        if (xmlhttp.status === 200) {
          context.thumbs = JSON.parse(xmlhttp.responseText)
          context.meta.title = "Zygo Blog";
          return resolve();
        }

        return reject();
      }
    };

    xmlhttp.open("GET", "/db/thumbs", true);
    xmlhttp.send();
  });
}
