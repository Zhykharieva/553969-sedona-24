var modalForm = document.querySelector(".search-form");
var popup = document.querySelector(".modal-form");
var close = popup.querySelector(".search-form");


 modalForm.addEventListener("click", function (evt) {
   evt.preventDefault();
   popup.classList.toggle("modal-hidden");
 });
 
