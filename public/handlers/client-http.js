//A wrapper around http requests for the client.
export default function(url) {
  return new Promise((resolve, reject) => {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState === 4) {
        if (xmlhttp.status === 200) {
          return resolve(xmlhttp.responseText);
        }

        return reject();
      }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  });
}
