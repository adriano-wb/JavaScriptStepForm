window.onload=()=>{function b(){for(let n=0;n<y.length;n++)y[n].style.display="none";y[s].style.display="block"}function k(){for(let n=0;n<p.length;n++)p[n].classList.remove("etapas-item__number--atual");p[l].classList.add("etapas-item__number--atual")}function d(){s>=1&&(b(s-=1),s<3&&k(l-=1),s<4&&(w.style.visibility="visible"),s===0&&(this.style.visibility="hidden"))}function g(){if(t.value.length===0&&(t.previousElementSibling.lastElementChild.style.display="block",t.previousElementSibling.lastElementChild.classList.add("text-help-anim"),t.classList.add("form-item__input--required")),i.value.length===0&&(i.previousElementSibling.lastElementChild.style.display="block",i.previousElementSibling.lastElementChild.classList.add("text-help-anim"),i.classList.add("form-item__input--required")),r.value.length===0&&(r.previousElementSibling.lastElementChild.style.display="block",r.previousElementSibling.lastElementChild.classList.add("text-help-anim"),r.classList.add("form-item__input--required")),t.value.length>0&&i.value.length>0&&r.value.length>0&&s<4){if(b(s+=1),s<=3&&k(l+=1),s>=1&&(a.style.visibility="visible"),s===3){const i=Number(e.lastElementChild.firstChild.nodeValue.match(/[0-9]/g).join("")),r=Number(n.children[0].firstChild.nodeValue.match(/[0-9]/g).join("")),u=Number(n.children[1].firstChild.nodeValue.match(/[0-9]/g).join("")),f=Number(n.children[2].firstChild.nodeValue.match(/[0-9]/g).join(""));let t=0;n.children[0].style.display==="block"&&(t=i+r);n.children[1].style.display==="block"&&(t=i+u);n.children[2].style.display==="block"&&(t=i+f);n.children[0].style.display==="block"&&n.children[1].style.display==="block"&&(t=i+r+u);n.children[1].style.display==="block"&&n.children[2].style.display==="block"&&(t=i+u+f);n.children[0].style.display==="block"&&n.children[2].style.display==="block"&&(t=i+r+f);n.children[0].style.display==="block"&&n.children[1].style.display==="block"&&n.children[2].style.display==="block"&&(t=i+r+u+f);n.children[0].style.display==="none"&&n.children[1].style.display==="none"&&n.children[2].style.display==="none"&&(t=i);c.firstChild.nodeValue=c.firstChild.nodeValue.replace(c.firstChild.nodeValue.match(/[0-9]/g).join(""),t);console.log(r)}s===4&&(this.parentNode.style.display="none")}}function ht(){t.previousElementSibling.lastElementChild.style.display="none";t.classList.remove("form-item__input--required");i.previousElementSibling.lastElementChild.style.display="none";i.classList.remove("form-item__input--required");r.previousElementSibling.lastElementChild.style.display="none";r.classList.remove("form-item__input--required")}function nt(){t.valueMissing?(t.previousElementSibling.lastElementChild.style.display="block",t.classList.add("form-item__input--required")):(t.previousElementSibling.lastElementChild.style.display="none",t.classList.remove("form-item__input--required"))}function tt(){t.previousElementSibling.lastElementChild.style.display="block";t.classList.add("form-item__input--required");t.value.length>0&&(t.previousElementSibling.lastElementChild.style.display="none",t.classList.remove("form-item__input--required"))}function it(){i.valueMissing?(i.previousElementSibling.lastElementChild.style.display="block",i.classList.add("form-item__input--required")):(i.previousElementSibling.lastElementChild.style.display="none",i.classList.remove("form-item__input--required"))}function rt(){i.previousElementSibling.lastElementChild.style.display="block";i.classList.add("form-item__input--required");i.value.length>0&&(i.previousElementSibling.lastElementChild.style.display="none",i.classList.remove("form-item__input--required"))}function ut(){r.valueMissing?(r.previousElementSibling.lastElementChild.style.display="block",r.classList.add("form-item__input--required")):(r.previousElementSibling.lastElementChild.style.display="none",r.classList.remove("form-item__input--required"))}function ft(){r.previousElementSibling.lastElementChild.style.display="block";r.classList.add("form-item__input--required");r.value.length>0&&(r.previousElementSibling.lastElementChild.style.display="none",r.classList.remove("form-item__input--required"))}function ct(){const n=u[0].lastElementChild.firstElementChild.innerText,t=u[0].lastElementChild.children[1].innerText;e.firstElementChild.firstElementChild.firstChild.nodeValue=n+" (Monthly)";e.lastElementChild.firstChild.nodeValue=t;u[0].classList.add("c-ofertas-item--active")}function et(){const n=this.lastElementChild.firstElementChild.innerText,t=this.lastElementChild.children[1].innerText;v.checked?(e.firstElementChild.firstElementChild.firstChild.nodeValue=n+" (Yearly)",h.firstElementChild.firstElementChild.firstChild.nodeValue=h.firstElementChild.firstElementChild.firstChild.nodeValue.replace("month","year")):(e.firstElementChild.firstElementChild.firstChild.nodeValue=n+" (Monthly)",h.firstElementChild.firstElementChild.firstChild.nodeValue=h.firstElementChild.firstElementChild.firstChild.nodeValue.replace("year","month"));e.lastElementChild.firstChild.nodeValue=t;for(let n=0;n<u.length;n++)u[n].classList.remove("c-ofertas-item--active");this.classList.toggle("c-ofertas-item--active")}function ot(){if(v.checked){for(let n=0;n<u.length;n++){u[n].lastElementChild.children[1].innerText=u[n].lastElementChild.children[1].innerText.replace("mo","yr");u[n].lastElementChild.children[1].innerText=u[n].lastElementChild.children[1].innerText.replace("/","0/");for(let n=0;n<u.length;n++)u[n].lastElementChild.children[2].style.display="block"}for(let n=0;n<f.length;n++)f[n].lastElementChild.firstElementChild.firstChild.nodeValue=f[n].lastElementChild.firstElementChild.firstChild.nodeValue.replace("/","0/"),f[n].lastElementChild.firstElementChild.firstChild.nodeValue=f[n].lastElementChild.firstElementChild.firstChild.nodeValue.replace("mo","yr");e.firstElementChild.firstElementChild.firstChild.nodeValue=e.firstElementChild.firstElementChild.firstChild.nodeValue.replace("Monthly","Yearly");e.lastElementChild.firstChild.nodeValue=e.lastElementChild.firstChild.nodeValue.replace("mo","yr");e.lastElementChild.firstChild.nodeValue=e.lastElementChild.firstChild.nodeValue.replace("/","0/");for(let t=0;t<n.children.length;t++)n.children[t].firstChild.nodeValue=n.children[t].firstChild.nodeValue.replace("mo","yr"),n.children[t].firstChild.nodeValue=n.children[t].firstChild.nodeValue.replace("/","0/");c.firstChild.nodeValue=c.firstChild.nodeValue.replace("mo","yr");h.firstElementChild.firstElementChild.firstChild.nodeValue=h.firstElementChild.firstElementChild.firstChild.nodeValue.replace("month","year")}else for(let t=0;t<u.length;t++){u[t].lastElementChild.children[1].innerText=u[t].lastElementChild.children[1].innerText.replace("yr","mo");u[t].lastElementChild.children[1].innerText=u[t].lastElementChild.children[1].innerText.replace("0/","/");for(let n=0;n<u.length;n++)u[n].lastElementChild.children[2].style.display="none";for(let n=0;n<f.length;n++)f[n].lastElementChild.firstElementChild.firstChild.nodeValue=f[n].lastElementChild.firstElementChild.firstChild.nodeValue.replace("0/","/"),f[n].lastElementChild.firstElementChild.firstChild.nodeValue=f[n].lastElementChild.firstElementChild.firstChild.nodeValue.replace("yr","mo");e.firstElementChild.firstElementChild.firstChild.nodeValue=e.firstElementChild.firstElementChild.firstChild.nodeValue.replace("Yearly","Monthy");e.lastElementChild.firstChild.nodeValue=e.lastElementChild.firstChild.nodeValue.replace("yr","mo");e.lastElementChild.firstChild.nodeValue=e.lastElementChild.firstChild.nodeValue.replace("0/","/");for(let t=0;t<n.children.length;t++)n.children[t].firstChild.nodeValue=n.children[t].firstChild.nodeValue.replace("yr","mo"),n.children[t].firstChild.nodeValue=n.children[t].firstChild.nodeValue.replace("0/","/");c.firstChild.nodeValue=c.firstChild.nodeValue.replace("yr","mo");h.firstElementChild.firstElementChild.firstChild.nodeValue=h.firstElementChild.firstElementChild.firstChild.nodeValue.replace("year","month")}}function lt(){f[0].firstElementChild.firstElementChild.checked=!0;f[1].firstElementChild.firstElementChild.checked=!0;f[0].classList.add("c-add-on-item--active");f[1].classList.add("c-add-on-item--active");o.firstElementChild.children[0].style.display="block";o.firstElementChild.children[1].style.display="block";o.firstElementChild.children[2].style.display="none";o.lastElementChild.children[0].style.display="block";o.lastElementChild.children[1].style.display="block";o.lastElementChild.children[2].style.display="none"}function st(){this.firstElementChild.firstElementChild.checked?(this.firstElementChild.firstElementChild.checked=!1,this.classList.remove("c-add-on-item--active"),this.id==="item01"&&(o.firstElementChild.children[0].style.display="none",o.lastElementChild.children[0].style.display="none"),this.id==="item02"&&(o.firstElementChild.children[1].style.display="none",o.lastElementChild.children[1].style.display="none"),this.id==="item03"&&(o.firstElementChild.children[2].style.display="none",o.lastElementChild.children[2].style.display="none")):(this.classList.add("c-add-on-item--active"),this.id==="item01"&&(o.firstElementChild.children[0].style.display="block",o.lastElementChild.children[0].style.display="block"),this.id==="item02"&&(o.firstElementChild.children[1].style.display="block",o.lastElementChild.children[1].style.display="block"),this.id==="item03"&&(o.firstElementChild.children[2].style.display="block",o.lastElementChild.children[2].style.display="block"),this.firstElementChild.firstElementChild.checked=!0)}let s=0,l=0;const y=document.getElementsByClassName("content"),p=document.getElementsByClassName("etapas-item__number"),a=document.getElementById("prev");a.style.visibility="hidden";const w=document.getElementById("next"),t=document.querySelector(".form-item__input[name='nome']"),i=document.querySelector(".form-item__input[name='email']"),r=document.querySelector(".form-item__input[name='phone']"),u=document.getElementsByClassName("c-ofertas-item"),v=document.getElementById("monthOrYearCheckbox"),f=document.querySelectorAll(".c-add-on-item"),e=document.querySelector(".plan-confirm-data"),n=document.querySelector(".plan-confirm-subtotal"),h=document.querySelector(".plan-confirm-total"),o=document.querySelector(".plan-confirm-options"),c=document.querySelector(".total-price__value");if(b(s),k(l),ht(),ct(),lt(),document.addEventListener){a.addEventListener("click",d);w.addEventListener("click",g);t.addEventListener("input",nt);t.addEventListener("focus",tt);i.addEventListener("input",it);i.addEventListener("focus",rt);r.addEventListener("input",ut);r.addEventListener("focus",ft);t.previousElementSibling.lastElementChild.addEventListener("animationend",function(){this.classList.remove("text-help-anim")});i.previousElementSibling.lastElementChild.addEventListener("animationend",function(){this.classList.remove("text-help-anim")});r.previousElementSibling.lastElementChild.addEventListener("animationend",function(){this.classList.remove("text-help-anim")});for(let n=0;n<u.length;n++)u[n].addEventListener("click",et);v.addEventListener("change",ot);for(let n=0;n<f.length;n++)f[n].addEventListener("click",st)}else{a.attachEvent("onclick",d);w.attachEvent("onclick",g);t.attachEvent("oninput",nt);t.attachEvent("onfocus",tt);i.attachEvent("oninput",it);i.attachEvent("onfocus",rt);r.attachEvent("oninput",ut);r.attachEvent("onfocus",ft);t.previousElementSibling.lastElementChild.attachEvent("onanimationend",function(){this.classList.remove("text-help-anim")});i.previousElementSibling.lastElementChild.attachEvent("onanimationend",function(){this.classList.remove("text-help-anim")});r.previousElementSibling.lastElementChild.attachEvent("onanimationend",function(){this.classList.remove("text-help-anim")});for(let n=0;n<u.length;n++)u[n].attachEvent("onclick",et);v.attachEvent("onchange",ot);for(let n=0;n<f.length;n++)f[n].attachEvent("onclick",st)}};
