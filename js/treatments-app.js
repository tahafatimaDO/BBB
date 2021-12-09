const accordionItemHeaders=document.querySelectorAll(".accordion-item-header");accordionItemHeaders.forEach(e=>{e.addEventListener("click",t=>{e.classList.toggle("active");const c=e.nextElementSibling;e.classList.contains("active")?c.style.maxHeight=c.scrollHeight+"px":c.style.maxHeight=0})});

 function init() {
var vidDefer = document.getElementsByTagName('iframe');
for (var i=0; i<vidDefer.length; i++) {
if(vidDefer[i].getAttribute('data-src')) {
vidDefer[i].setAttribute('src',vidDefer[i].getAttribute('data-src'));
} } }
window.onload = init;