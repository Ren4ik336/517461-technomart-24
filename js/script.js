var link = document.querySelector(".button-write-us");
var popup = document.querySelector(".modal-write-us");
var close = popup.querySelector(".modal-close");
var login = popup.querySelector("[name=name]");
var form = popup.querySelector(".write-form");
var password = popup.querySelector("[name=password]");
var isStorageSupport = true;
var storage = "";

var mapLink = document.querySelector(".contacts-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

try {
  storage = localStorage.getItem("login");
} catch(err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt)
{
  evt.preventDefault();
  popup.classList.add("modal-show");

  if(storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }

  login.focus();
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});


form.addEventListener("submit", function(evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");

  } else {
    if(isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if(evt.keyCode === 27) {
    evt.preventDefault();
    if(popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

mapLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if(evt.keyCode === 27) {
    evt.preventDefault();
    if(mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
