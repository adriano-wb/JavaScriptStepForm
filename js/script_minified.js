window.onload=()=>{function b(){for(let n=0;n<y.length;n++)y[n].style.display="none";y[s].style.display="block"}function k(){for(let n=0;n<p.length;n++)p[n].classList.remove("etapas-item__number--atual");p[l].classList.add("etapas-item__number--atual")}function d(){s>=1&&(b(s-=1),s<3&&k(l-=1),s<4&&(w.style.visibility="visible"),s===0&&(this.style.visibility="hidden"))}function g(){if(i.value.length===0&&(i.previousElementSibling.lastElementChild.style.display="block",i.previousElementSibling.lastElementChild.classList.add("text-help-anim"),i.classList.add("form-item__input--required")),r.value.length===0&&(r.previousElementSibling.lastElementChild.style.display="block",r.previousElementSibling.lastElementChild.classList.add("text-help-anim"),r.classList.add("form-item__input--required")),u.value.length===0&&(u.previousElementSibling.lastElementChild.style.display="block",u.previousElementSibling.lastElementChild.classList.add("text-help-anim"),u.classList.add("form-item__input--required")),i.value.length>0&&r.value.length>0&&u.value.length>0&&s<4){if(b(s+=1),s<=3&&k(l+=1),s>=1&&(a.style.visibility="visible"),s===3){const i=Number(e.lastElementChild.firstChild.nodeValue.match(/[0-9]/g).join("")),r=Number(t.children[0].firstChild.nodeValue.match(/[0-9]/g).join("")),u=Number(t.children[1].firstChild.nodeValue.match(/[0-9]/g).join("")),f=Number(t.children[2].firstChild.nodeValue.match(/[0-9]/g).join(""));let n=0;t.children[0].style.display==="block"&&(n=i+r);t.children[1].style.display==="block"&&(n=i+u);t.children[2].style.display==="block"&&(n=i+f);t.children[0].style.display==="block"&&t.children[1].style.display==="block"&&(n=i+r+u);t.children[1].style.display==="block"&&t.children[2].style.display==="block"&&(n=i+u+f);t.children[0].style.display==="block"&&t.children[2].style.display==="block"&&(n=i+r+f);t.children[0].style.display==="block"&&t.children[2].style.display==="block"&&t.children[2].style.display==="block"&&(n=i+r+u+f);c.firstChild.nodeValue=c.firstChild.nodeValue.replace(c.firstChild.nodeValue.match(/[0-9]/g).join(""),n);console.log(r)}s===4&&(this.style.visibility="hidden")}}function ht(){i.previousElementSibling.lastElementChild.style.display="none";i.classList.remove("form-item__input--required");r.previousElementSibling.lastElementChild.style.display="none";r.classList.remove("form-item__input--required");u.previousElementSibling.lastElementChild.style.display="none";u.classList.remove("form-item__input--required")}function nt(){i.valueMissing?(i.previousElementSibling.lastElementChild.style.display="block",i.classList.add("form-item__input--required")):(i.previousElementSibling.lastElementChild.style.display="none",i.classList.remove("form-item__input--required"))}function tt(){i.previousElementSibling.lastElementChild.style.display="block";i.classList.add("form-item__input--required");i.value.length>0&&(i.previousElementSibling.lastElementChild.style.display="none",i.classList.remove("form-item__input--required"))}function it(){r.valueMissing?(r.previousElementSibling.lastElementChild.style.display="block",r.classList.add("form-item__input--required")):(r.previousElementSibling.lastElementChild.style.display="none",r.classList.remove("form-item__input--required"))}function rt(){r.previousElementSibling.lastElementChild.style.display="block";r.classList.add("form-item__input--required");r.value.length>0&&(r.previousElementSibling.lastElementChild.style.display="none",r.classList.remove("form-item__input--required"))}function ut(){u.valueMissing?(u.previousElementSibling.lastElementChild.style.display="block",u.classList.add("form-item__input--required")):(u.previousElementSibling.lastElementChild.style.display="none",u.classList.remove("form-item__input--required"))}function ft(){u.previousElementSibling.lastElementChild.style.display="block";u.classList.add("form-item__input--required");u.value.length>0&&(u.previousElementSibling.lastElementChild.style.display="none",u.classList.remove("form-item__input--required"))}function ct(){const n=f[0].lastElementChild.firstElementChild.innerText,t=f[0].lastElementChild.children[1].innerText;e.firstElementChild.firstElementChild.firstChild.nodeValue=n+" (Monthly)";e.lastElementChild.firstChild.nodeValue=t;f[0].classList.add("c-ofertas-item--active")}function et(){const t=this.lastElementChild.firstElementChild.innerText,i=this.lastElementChild.children[1].innerText;if(v.checked){for(let t=0;t<n.length;t++)n[t].lastElementChild.firstElementChild.firstChild.nodeValue=n[t].lastElementChild.firstElementChild.firstChild.nodeValue.replace("/","0/"),n[t].lastElementChild.firstElementChild.firstChild.nodeValue=n[t].lastElementChild.firstElementChild.firstChild.nodeValue.replace("mo","yr");e.firstElementChild.firstElementChild.firstChild.nodeValue=t+" (Yearly)";h.firstElementChild.firstElementChild.firstChild.nodeValue=h.firstElementChild.firstElementChild.firstChild.nodeValue.replace("month","year")}else{for(let t=0;t<n.length;t++)n[t].lastElementChild.firstElementChild.firstChild.nodeValue=n[t].lastElementChild.firstElementChild.firstChild.nodeValue.replace("0/","/"),n[t].lastElementChild.firstElementChild.firstChild.nodeValue=n[t].lastElementChild.firstElementChild.firstChild.nodeValue.replace("yr","mo");e.firstElementChild.firstElementChild.firstChild.nodeValue=t+" (Monthly)";h.firstElementChild.firstElementChild.firstChild.nodeValue=h.firstElementChild.firstElementChild.firstChild.nodeValue.replace("year","month")}e.lastElementChild.firstChild.nodeValue=i;for(let n=0;n<f.length;n++)f[n].classList.remove("c-ofertas-item--active");this.classList.toggle("c-ofertas-item--active")}function ot(){if(v.checked){for(let n=0;n<f.length;n++){f[n].lastElementChild.children[1].innerText=f[n].lastElementChild.children[1].innerText.replace("mo","yr");f[n].lastElementChild.children[1].innerText=f[n].lastElementChild.children[1].innerText.replace("/","0/");for(let n=0;n<f.length;n++)f[n].lastElementChild.children[2].style.display="block"}for(let t=0;t<n.length;t++)n[t].lastElementChild.firstElementChild.firstChild.nodeValue=n[t].lastElementChild.firstElementChild.firstChild.nodeValue.replace("/","0/"),n[t].lastElementChild.firstElementChild.firstChild.nodeValue=n[t].lastElementChild.firstElementChild.firstChild.nodeValue.replace("mo","yr");e.firstElementChild.firstElementChild.firstChild.nodeValue=e.firstElementChild.firstElementChild.firstChild.nodeValue.replace("Monthly","Yearly");e.lastElementChild.firstChild.nodeValue=e.lastElementChild.firstChild.nodeValue.replace("mo","yr");e.lastElementChild.firstChild.nodeValue=e.lastElementChild.firstChild.nodeValue.replace("/","0/");for(let n=0;n<t.children.length;n++)t.children[n].firstChild.nodeValue=t.children[n].firstChild.nodeValue.replace("mo","yr"),t.children[n].firstChild.nodeValue=t.children[n].firstChild.nodeValue.replace("/","0/");c.firstChild.nodeValue=c.firstChild.nodeValue.replace("mo","yr");h.firstElementChild.firstElementChild.firstChild.nodeValue=h.firstElementChild.firstElementChild.firstChild.nodeValue.replace("month","year")}else for(let i=0;i<f.length;i++){f[i].lastElementChild.children[1].innerText=f[i].lastElementChild.children[1].innerText.replace("yr","mo");f[i].lastElementChild.children[1].innerText=f[i].lastElementChild.children[1].innerText.replace("0/","/");for(let n=0;n<f.length;n++)f[n].lastElementChild.children[2].style.display="none";for(let t=0;t<n.length;t++)n[t].lastElementChild.firstElementChild.firstChild.nodeValue=n[t].lastElementChild.firstElementChild.firstChild.nodeValue.replace("0/","/"),n[t].lastElementChild.firstElementChild.firstChild.nodeValue=n[t].lastElementChild.firstElementChild.firstChild.nodeValue.replace("yr","mo");e.firstElementChild.firstElementChild.firstChild.nodeValue=e.firstElementChild.firstElementChild.firstChild.nodeValue.replace("Yearly","Monthy");e.lastElementChild.firstChild.nodeValue=e.lastElementChild.firstChild.nodeValue.replace("yr","mo");e.lastElementChild.firstChild.nodeValue=e.lastElementChild.firstChild.nodeValue.replace("0/","/");for(let n=0;n<t.children.length;n++)t.children[n].firstChild.nodeValue=t.children[n].firstChild.nodeValue.replace("yr","mo"),t.children[n].firstChild.nodeValue=t.children[n].firstChild.nodeValue.replace("0/","/");c.firstChild.nodeValue=c.firstChild.nodeValue.replace("yr","mo");h.firstElementChild.firstElementChild.firstChild.nodeValue=h.firstElementChild.firstElementChild.firstChild.nodeValue.replace("year","month")}}function lt(){n[0].firstElementChild.firstElementChild.checked=!0;n[1].firstElementChild.firstElementChild.checked=!0;n[0].classList.add("c-add-on-item--active");n[1].classList.add("c-add-on-item--active");o.firstElementChild.children[0].style.display="block";o.firstElementChild.children[1].style.display="block";o.firstElementChild.children[2].style.display="none";o.lastElementChild.children[0].style.display="block";o.lastElementChild.children[1].style.display="block";o.lastElementChild.children[2].style.display="none"}function st(){this.firstElementChild.firstElementChild.checked?(this.firstElementChild.firstElementChild.checked=!1,this.id==="item01"&&(o.firstElementChild.children[0].style.display="none",o.lastElementChild.children[0].style.display="none"),this.id==="item02"&&(o.firstElementChild.children[1].style.display="none",o.lastElementChild.children[1].style.display="none"),this.id==="item03"&&(o.firstElementChild.children[2].style.display="none",o.lastElementChild.children[2].style.display="none")):(this.id==="item01"&&(o.firstElementChild.children[0].style.display="block",o.lastElementChild.children[0].style.display="block"),this.id==="item02"&&(o.firstElementChild.children[1].style.display="block",o.lastElementChild.children[1].style.display="block"),this.id==="item03"&&(o.firstElementChild.children[2].style.display="block",o.lastElementChild.children[2].style.display="block"),this.firstElementChild.firstElementChild.checked=!0)}let s=0,l=0;const y=document.getElementsByClassName("content"),p=document.getElementsByClassName("etapas-item__number"),a=document.getElementById("prev");a.style.visibility="hidden";const w=document.getElementById("next"),i=document.querySelector(".form-item__input[name='nome']"),r=document.querySelector(".form-item__input[name='email']"),u=document.querySelector(".form-item__input[name='phone']"),f=document.getElementsByClassName("c-ofertas-item"),v=document.getElementById("monthOrYearCheckbox"),n=document.querySelectorAll(".c-add-on-item"),e=document.querySelector(".plan-confirm-data"),t=document.querySelector(".plan-confirm-subtotal"),h=document.querySelector(".plan-confirm-total"),o=document.querySelector(".plan-confirm-options"),c=document.querySelector(".total-price__value");if(b(s),k(l),ht(),ct(),lt(),document.addEventListener){a.addEventListener("click",d);w.addEventListener("click",g);i.addEventListener("input",nt);i.addEventListener("focus",tt);r.addEventListener("input",it);r.addEventListener("focus",rt);u.addEventListener("input",ut);u.addEventListener("focus",ft);i.previousElementSibling.lastElementChild.addEventListener("animationend",function(){this.classList.remove("text-help-anim")});r.previousElementSibling.lastElementChild.addEventListener("animationend",function(){this.classList.remove("text-help-anim")});u.previousElementSibling.lastElementChild.addEventListener("animationend",function(){this.classList.remove("text-help-anim")});for(let n=0;n<f.length;n++)f[n].addEventListener("click",et);v.addEventListener("change",ot);for(let t=0;t<n.length;t++)n[t].addEventListener("click",st)}else{a.attachEvent("onclick",d);w.attachEvent("onclick",g);i.attachEvent("oninput",nt);i.attachEvent("onfocus",tt);r.attachEvent("oninput",it);r.attachEvent("onfocus",rt);u.attachEvent("oninput",ut);u.attachEvent("onfocus",ft);i.previousElementSibling.lastElementChild.attachEvent("onanimationend",function(){this.classList.remove("text-help-anim")});r.previousElementSibling.lastElementChild.attachEvent("onanimationend",function(){this.classList.remove("text-help-anim")});u.previousElementSibling.lastElementChild.attachEvent("onanimationend",function(){this.classList.remove("text-help-anim")});for(let n=0;n<f.length;n++)f[n].attachEvent("onclick",et);v.attachEvent("onchange",ot);for(let t=0;t<n.length;t++)n[t].attachEvent("onclick",st)}};