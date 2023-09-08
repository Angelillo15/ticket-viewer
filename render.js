var content = document.getElementById("content");

url = document.location.pathname.replace("/https:/", "");

fetch(url)
  .then((html) => {
    content.innerHTML = html;
  })
  .catch((error) => {
    content.innerHTML = "<h1>404</h1>"
  });
