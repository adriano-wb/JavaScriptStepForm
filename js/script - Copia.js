window.onload = () => {
  /* Variáveis etapa 01 (formulário) */
  const formInptName = document.querySelector("input[name='nome']");
  const formInptEmail = document.querySelector("input[name='email']");
  const formInptTel = document.querySelector("input[name='phone']");
  const etapasContent = document.querySelectorAll(".content");

  /* Botão de avançar */
  const btnSubmit = document.getElementById("next");

  const etapasNumber = document.querySelectorAll(".etapas-item__number");
  const moOrYrsCheck = document.getElementById("monthOrYearCheckbox");
  const itemsAdicionais = document.querySelectorAll(".c-ofertas-item");
  const promoTwoMonthMsg = document.querySelectorAll(".c-ofertas-item-preco__promo");
  const addOnItens = document.querySelectorAll(".c-add-on-item");

  /* Finish confirmar */
  const titlePlanoDate = document.querySelector(".plan-date-head__title");
  const planoTitulo = document.getElementsByClassName("plan-confirm-head");
  const planoPreco = document.getElementsByClassName("plan-confirm-subtotal");

  let indexEtapas = 0;
  let indexEtapasNum = 0;
  /* Botão de "Go Back" oculto */
  btnSubmit.previousElementSibling.style.display = "none";

  formInptName.previousElementSibling.lastElementChild.style.display = "none";
  formInptEmail.previousElementSibling.lastElementChild.style.display = "none";
  formInptTel.previousElementSibling.lastElementChild.style.display = "none";

  /* Ocultar mensagem promoção 2 meses grátis */
  for (let i = 0; i < promoTwoMonthMsg.length; i++) {
    promoTwoMonthMsg[i].style.display = "none";
  }

  function numEtapas(n) {
    for (let i = 0; i < etapasNumber.length; i++) {
      etapasNumber[i].classList.remove("etapas-item__number--atual");
    }

    console.log(!(indexEtapasNum < 3));

    etapasNumber[indexEtapasNum].classList.add("etapas-item__number--atual");
  }
  numEtapas(indexEtapasNum);

  function resetEtapas(n) {
    for (let i = 0; i < etapasContent.length; i++) {
      etapasContent[i].style.display = "none";
    }


    etapasContent[indexEtapas].style.display = "block";
  }
  resetEtapas(indexEtapas);

  function formValidationName() {
    if (!formInptName.valueMissing && formInptName.value.length != 0) {
      formInptName.previousElementSibling.lastElementChild.style.display = "none";
      formInptName.classList.remove("form-item__input--required");
    } else {
      formInptName.previousElementSibling.lastElementChild.style.display = "block";
      formInptName.classList.add("form-item__input--required");
    }
  }

  function formValidationEmail() {
    if (!formInptEmail.valueMissing && formInptEmail.value.length != 0) {
      formInptEmail.previousElementSibling.lastElementChild.style.display = "none";
      formInptEmail.classList.remove("form-item__input--required");
    } else {
      formInptEmail.previousElementSibling.lastElementChild.style.display = "block";
      formInptEmail.classList.add("form-item__input--required");
    }
  }

  function formValidationTel() {
    if (!formInptTel.valueMissing && formInptTel.value.length != 0) {
      formInptTel.previousElementSibling.lastElementChild.style.display = "none";
      formInptTel.classList.remove("form-item__input--required");
    } else {
      formInptTel.previousElementSibling.lastElementChild.style.display = "block";
      formInptTel.classList.add("form-item__input--required");
    }
  }

  function checkMonthOrYears() {
    const precoMooOrYrs = document.querySelectorAll(".c-ofertas-item-preco__small");

    if (moOrYrsCheck.checked) {
      /* Por ano */
      moOrYrsCheck.parentNode.previousElementSibling.classList.remove("month-or-yrs__text--active");
      moOrYrsCheck.parentNode.nextElementSibling.classList.add("month-or-yrs__text--active");
      for (let i = 0; i < promoTwoMonthMsg.length; i++) {
        promoTwoMonthMsg[i].style.display = "block";
      }

      titlePlanoDate.parentNode.nextElementSibling.innerText =
      titlePlanoDate.parentNode.nextElementSibling.innerText.replace("mo", "yr");

      titlePlanoDate.parentNode.nextElementSibling.innerText =
      titlePlanoDate.parentNode.nextElementSibling.innerText.replace("/", "0/");

      for (let i = 0; i < addOnItens.length; i++) {
        addOnItens[i].lastElementChild.firstElementChild.innerText =
        addOnItens[i].lastElementChild.firstElementChild.innerText.replace("mo", "yr");
        addOnItens[i].lastElementChild.firstElementChild.innerText =
        addOnItens[i].lastElementChild.firstElementChild.innerText.replace("/", "0/");
      }

      for (let i = 0; i < precoMooOrYrs.length; i++) {
        precoMooOrYrs[i].innerText =
        precoMooOrYrs[i].innerText.replace("mo", "yr");

        precoMooOrYrs[i].innerText =
        precoMooOrYrs[i].innerText.replace("/", "0/");
      }
    } else {
      /* Por mês */
      moOrYrsCheck.parentNode.previousElementSibling.classList.add("month-or-yrs__text--active");
      moOrYrsCheck.parentNode.nextElementSibling.classList.remove("month-or-yrs__text--active");
      for (let i = 0; i < promoTwoMonthMsg.length; i++) {
        promoTwoMonthMsg[i].style.display = "none";
      }

      titlePlanoDate.parentNode.nextElementSibling.innerText =
      titlePlanoDate.parentNode.nextElementSibling.innerText.replace("yr", "mo");

      titlePlanoDate.parentNode.nextElementSibling.innerText =
      titlePlanoDate.parentNode.nextElementSibling.innerText.replace("0/", "/");


      for (let i = 0; i < precoMooOrYrs.length; i++) {
        precoMooOrYrs[i].innerText =
        precoMooOrYrs[i].innerText.replace("yr", "mo");

        precoMooOrYrs[i].innerText =
        precoMooOrYrs[i].innerText.replace("0/", "/");
      }
    }
  }

  function addItensEffect() {
    this.classList.add("c-add-on-item--active");
  }

  console.log(itemsAdicionais);

  /* Reset ofertas item */
  function resetOfertasItens() {
    for (let i = 0; i < itemsAdicionais.length; i++) {
      itemsAdicionais[i].classList.remove("selected");
    }

    itemsAdicionais[0].classList.add("selected");
  }
  resetOfertasItens();

  /* Adicionar conteúdo adicional do site */
  for (let i = 0; i < itemsAdicionais.length; i++) {
    itemsAdicionais[i].addEventListener("click", function() {
      for (let j = 0; j < itemsAdicionais.length; j++) {
        itemsAdicionais[j].classList.remove("selected");
      }
      this.classList.toggle("selected");

      titlePlanoDate.firstElementChild.innerText =
      this.lastElementChild.firstElementChild.innerText;

      titlePlanoDate.parentNode.nextElementSibling.innerText = this.lastElementChild.children[1].firstChild.nodeValue;
    });
  }

  function btnVoltaAcao() {
    resetEtapas(indexEtapas -= 1);

    if (indexEtapas < 3) {
        numEtapas(indexEtapasNum -= 1);
    }

    if (indexEtapas < 4) {
      btnSubmit.style.visibility = "visible";
    }

    if (indexEtapas < 1) {
      btnSubmit.previousElementSibling.style.display = "none";
    }
  }

  function btnSubmitAcao() {
    if (formInptName.value.length === 0) {
      formInptName.previousElementSibling.lastElementChild.style.display = "block";
      formInptName.classList.add("form-item__input--required");
    }

    if (formInptEmail.value.length === 0) {
      formInptEmail.previousElementSibling.lastElementChild.style.display = "block";
      formInptEmail.classList.add("form-item__input--required");
    }

    if (formInptTel.value.length === 0) {
      formInptTel.previousElementSibling.lastElementChild.style.display = "block";
      formInptTel.classList.add("form-item__input--required");
    }

    if (formInptName.value.length > 0 &&
        formInptEmail.value.length > 0 &&
        formInptTel.value.length > 0 &&
        indexEtapas < 4) {
      resetEtapas(indexEtapas += 1);
      console.log(indexEtapas);
      btnSubmit.previousElementSibling.style.display = "block";
      if (indexEtapas === 4) {
        btnSubmit.style.visibility = "hidden";
      }

      if (indexEtapas <= 3) {
        numEtapas(indexEtapasNum += 1);
      }

      if (indexEtapas === 3 ) {
        console.log(true)
        if (moOrYrsCheck.checked) {
          if (planoPreco.children) {
            for (let i = 0; i < planoPreco.children.length; i++) {
              planoPreco[i].firstElementChild.innerText =
              planoPreco[i].firstElementChild.innerText.replace("yr", "mo");

              planoPreco[i].firstElementChild.innerText =
              planoPreco[i].firstElementChild.innerText.replace("0/", "/");
            }
          }
        } else {
          if (planoPreco.children) {
            for (let i = 0; i < planoPreco.children.length; i++) {
              planoPreco[i].firstElementChild.innerText =
              planoPreco[i].firstElementChild.innerText.replace("mo", "yr");

              planoPreco[i].firstElementChild.innerText =
              planoPreco[i].firstElementChild.innerText.replace("/", "0/");
            }
          }
        }
      }
    }
  }

  formInptName.addEventListener("input", formValidationName);
  formInptName.addEventListener("focus", () => {
    formInptName.previousElementSibling.lastElementChild.style.display = "block";
    formInptName.classList.add("form-item__input--required");

    if (formInptName.value.length > 0) {
      formInptName.previousElementSibling.lastElementChild.style.display = "none";
      formInptName.classList.remove("form-item__input--required");
    }
  })

  formInptEmail.addEventListener("input", formValidationEmail);
  formInptEmail.addEventListener("focus", () => {
    formInptEmail.previousElementSibling.lastElementChild.style.display = "block";
    formInptEmail.classList.add("form-item__input--required");

    if (formInptEmail.value.length > 0) {
      formInptEmail.previousElementSibling.lastElementChild.style.display = "none";
      formInptEmail.classList.remove("form-item__input--required");
    }
  })

  formInptTel.addEventListener("input", formValidationTel);
  formInptTel.addEventListener("focus", () => {
    formInptTel.previousElementSibling.lastElementChild.style.display = "block";
    formInptTel.classList.add("form-item__input--required");

    if (formInptTel.value.length > 0) {
      formInptTel.previousElementSibling.lastElementChild.style.display = "none";
      formInptTel.classList.remove("form-item__input--required");
    }
  })

  for (let i = 0; i < addOnItens.length; i++) {
    addOnItens[i].addEventListener("click", function() {

      if (!this.firstElementChild.firstElementChild.checked) {
        this.firstElementChild.firstElementChild.checked = true;

        planoTitulo[0].innerHTML += "<span class='plan-confirm-head__title'>" + this.children[1].firstElementChild.innerText + "</span>";

        planoPreco[0].innerHTML += "<span class='plan-confirm-subtotal__price'>" + this.children[2].firstElementChild.innerText + "</span>";
      } else {

        if (planoTitulo[0].innerText.indexOf(this.children[1].firstElementChild.innerText) > -1) {
          planoTitulo[0].removeChild(document.querySelectorAll("span[class=plan-confirm-head__title]")[0]);
        }

        if (planoPreco[0].innerText.indexOf(this.children[2].firstElementChild.innerText) > -1) {
          planoPreco[0].removeChild(document.querySelectorAll("span[class=plan-confirm-subtotal__price]")[0]);
        }
        this.firstElementChild.firstElementChild.checked = false;
      }
    })
  }

  moOrYrsCheck.addEventListener("change", checkMonthOrYears)

  btnSubmit.addEventListener("click", btnSubmitAcao);
  btnSubmit.previousElementSibling.addEventListener("click", btnVoltaAcao);
}
