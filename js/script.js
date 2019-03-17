var link = document.querySelector(".button-write-us");
var popup = document.querySelector(".modal-write-us");
var close = document.querySelector(".modal-close");
var login = document.querySelector("[name=name]");
var form = document.querySelector(".write-form");
var password = document.querySelector("[name=password]");
var isStorageSupport = true;
var storage = "";

var mapLink = document.querySelector(".contacts-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = document.querySelector(".map-close");

var popUpCart = document.querySelector(".modal-cart-add");
var orderLink = document.querySelectorAll(".button-buy");
var backLink = document.querySelector(".button-back");
var index;
var element;

var slide = document.querySelectorAll(".sld");
var btnLeft = document.querySelector(".toggle-left");
var btnRight = document.querySelector(".toggle-right");
var i;

for (index = 0; index < orderLink.length; index++) {
  element = orderLink[index];
  element.addEventListener("click", function(evt) {
  evt.preventDefault();
  popUpCart.classList.add("modal-show");
});

  backLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    popUpCart.classList.remove("modal-show")
  });
}

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

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
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

window.addEventListener("keydown", function(evt) {
  if(evt.keyCode === 27) {
    evt.preventDefault();
    if(mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

  btnLeft.addEventListener("click", function() {
    for (i = 0; i < slide.length; i++)
    {
      if (slide[i].classList.contains("show"))
      {
        slide[i].classList.remove("show");
        if (i < slide.length - 1)
        {
          slide[i + 1].classList.add("show")
        } else {
          slide[0].classList.add("show");
        }
        break;
      }
    }
  });

  btnRight.addEventListener("click", function() {
    for (i = 0; i < slide.length; i++)
    {
      if (slide[i].classList.contains("show"))
      {
        slide[i].classList.remove("show");
        if (i < slide.length - 1)
        {
          slide[i + 1].classList.add("show")
        } else {
          slide[0].classList.add("show");
        }
        break;
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
