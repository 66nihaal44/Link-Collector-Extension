const links = document.querySelectorAll("a");
const linkList = [];
for(var i = 0; i < links.length; i++){
  links.push({
    text: links[i].innerText;
    url: links[i].href;
  })
}
