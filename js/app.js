var acc = document.getElementsByClassName("detail");
var d;
for (d = 0; d < acc.length; d++) {
  acc[d].onclick = function () {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("show");
  };
}

function redirInstagram() {
  window.location.href = "https://instagram.com/mekal.tabuni";
}

function redirWhatsapp() {
  window.location.href = "https://wa.me/+6281248069721";
}
function redirGithub() {
  window.location.href = "https://github.com/anjastabuni";
}
function redirLinkend() {
  window.location.href = "https://linkedin.com/reblytabuni22";
}
function redirEmail() {
  window.location.href = "https://mail.google.com";
}
