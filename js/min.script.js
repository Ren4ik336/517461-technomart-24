var index,element,i,link=document.querySelector(".button-write-us"),popup=document.querySelector(".modal-write-us"),close=document.querySelector(".modal-close"),login=document.querySelector("[name=name]"),form=document.querySelector(".write-form"),email=document.querySelector("[name=email]"),isStorageSupport=!0,storage="",mapLink=document.querySelector(".contacts-map"),mapPopup=document.querySelector(".modal-map"),mapClose=document.querySelector(".map-close"),popUpCart=document.querySelector(".modal-cart-add"),orderLink=document.querySelectorAll(".button-buy"),backLink=document.querySelector(".button-back"),slide=document.querySelectorAll(".sld"),btnLeft=document.querySelector(".toggle-left"),btnRight=document.querySelector(".toggle-right");for(index=0;index<orderLink.length;index++)(element=orderLink[index]).addEventListener("click",function(e){e.preventDefault(),popUpCart.classList.add("modal-show")}),backLink.addEventListener("click",function(e){e.preventDefault(),popUpCart.classList.remove("modal-show")});try{storage=localStorage.getItem("login")}catch(e){isStorageSupport=!1}link.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal-show"),storage?(login.value=storage,email.focus()):login.focus()}),form.addEventListener("submit",function(e){login.value&&email.value?isStorageSupport&&localStorage.setItem("login",login.value):(e.preventDefault(),popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-error"))}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-show"),popup.classList.remove("modal-error")}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),popup.classList.contains("modal-show")&&(popup.classList.remove("modal-show"),popup.classList.remove("modal-error")))}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),mapPopup.classList.contains("modal-show")&&(mapPopup.classList.remove("modal-show"),popup.classList.remove("modal-error")))}),btnLeft.addEventListener("click",function(){for(i=0;i<slide.length;i++)if(slide[i].classList.contains("show")){slide[i].classList.remove("show"),i<slide.length-1?slide[i+1].classList.add("show"):slide[0].classList.add("show");break}}),btnRight.addEventListener("click",function(){for(i=0;i<slide.length;i++)if(slide[i].classList.contains("show")){slide[i].classList.remove("show"),i<slide.length-1?slide[i+1].classList.add("show"):slide[0].classList.add("show");break}}),mapLink.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.add("modal-show")}),mapClose.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.remove("modal-show")});
