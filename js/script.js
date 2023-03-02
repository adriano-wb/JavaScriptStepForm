window.onload = () => {
  let indiceEtapasConteudo = 0; // Variável que representará o índice do .content
  //let indexEtapas = 0;
  let indiceEtapasNumero = 0;
  const etapasConteudo = document.getElementsByClassName("content");
  const etapasNumeroAtual = document.getElementsByClassName("etapas-item__number");
  const botaoVoltarEtapa = document.getElementById("prev"); // Botão para voltar etapas
  botaoVoltarEtapa.style.visibility = "hidden"; // Botão de voltar por padrão invisível

  const botaoProximaEtapa = document.getElementById("next"); // Botão para avançar etapas

  // Campo de entrada para inserir o nome ETAPA 01
  const formularioCampoNome = document.querySelector(".form-item__input[name='nome']");
  const formularioCampoEmail = document.querySelector(".form-item__input[name='email']");
  const formularioCampoTelefone = document.querySelector(".form-item__input[name='phone']");

  // ETAPA 02 Planos
  const planosContent = document.getElementsByClassName("c-ofertas-item");
  const moOrYrCheck = document.getElementById("monthOrYearCheckbox");

  // ETAPA 03 Add-ons
  const addOnItens = document.querySelectorAll(".c-add-on-item");

  // ETAPA 04 Confirmar produtos
  const confirmDadosPlano = document.querySelector(".plan-confirm-data");
  const addOnSubTotal = document.querySelector(".plan-confirm-subtotal");
  const confirmPlanoTotal = document.querySelector(".plan-confirm-total");
  const opcionaisNoPlano = document.querySelector(".plan-confirm-options");
  const totalPrecoValor = document.querySelector(".total-price__value");

  /* Função para fazer com que todos os conteúdos
    das etapas sejam ocultos para exibir somente um */
  function conteudoEtapasExibirSomenteUm(n) {
    for (let i = 0; i < etapasConteudo.length; i++) {
      etapasConteudo[i].style.display = "none"; // Oculta todos os conteúdos
    }

    /* Exibe somente o conteúdo que tenha o indiceEtapasConteudo atual
    como indice */
    etapasConteudo[indiceEtapasConteudo].style.display = "block";
  }
  conteudoEtapasExibirSomenteUm(indiceEtapasConteudo);

  /* Função que adiciona efeito ao número
    no sidebar que especifica as etapas atuais na página */
  function numeroDaEtapaAtualDestacar(n) {
    for (let i = 0; i < etapasNumeroAtual.length; i++) {
      /* Oculta todos os estilos de destaque do número */
      etapasNumeroAtual[i].classList.remove("etapas-item__number--atual");
    }

    /* Exibe o número com destaque que tenha seu índice como o do indexEtapasNumeros */
    etapasNumeroAtual[indiceEtapasNumero].classList.add("etapas-item__number--atual");
  }
  numeroDaEtapaAtualDestacar(indiceEtapasNumero);

  /* ------------------------- BOTÕES DAS ETAPAS ------------------------- */

  /* Função para retroceder para o conteúdo contendo a etapa anterior
    VOLTA UMA ETAPA */
  function botaoRetrocederEtapasNumeroEConteudo() {
    if (indiceEtapasConteudo >= 1) {
      conteudoEtapasExibirSomenteUm(indiceEtapasConteudo -= 1);

      /* Faz o número no sidebar seguir a linha das etapas */
      if (indiceEtapasConteudo < 3) {
        numeroDaEtapaAtualDestacar(indiceEtapasNumero -= 1);
      }

      /* Se o índice for menor que 4 reexibe o botão de avançar */
      if (indiceEtapasConteudo < 4) {
        botaoProximaEtapa.style.visibility = "visible";
      }

      /* Se o índice do conteúdo de etapas for igual a 1
        oculta o botão de retroceder etapas, pois finalizou o processo */
      if (indiceEtapasConteudo === 0) {
        this.style.visibility = "hidden";
      }
    }
  }

  /* Função para avançar para o próximo conteúdo contendo a etapa seguinte
    AVANÇA UMA ETAPA */
  function botaoAvancarEtapasNumeroEConteudo() {
    /* Se os campos da primeira etapa estiverem vazios
      mostra a mensagem de feedback */
    if (formularioCampoNome.value.length === 0) {
      // Exibe a mensagem de campo obrigatório "This field is required"
      formularioCampoNome.previousElementSibling.lastElementChild.style.display = "block";

      // Adicionar animação de pisacar mensagem "this field is required"
      formularioCampoNome.previousElementSibling.lastElementChild.classList.add("text-help-anim");

      // Adiciona a borda vermelha ao redor do campo
      formularioCampoNome.classList.add("form-item__input--required");
    }

    if (formularioCampoEmail.value.length === 0) {
      // Exibe a mensagem de campo obrigatório "This field is required"
      formularioCampoEmail.previousElementSibling.lastElementChild.style.display = "block";

      // Adicionar animação de pisacar mensagem "this field is required"
      formularioCampoEmail.previousElementSibling.lastElementChild.classList.add("text-help-anim");


      // Adiciona a borda vermelha ao redor do campo
      formularioCampoEmail.classList.add("form-item__input--required");
    }

    if (formularioCampoTelefone.value.length === 0) {
      // Exibe a mensagem de campo obrigatório "This field is required"
      formularioCampoTelefone.previousElementSibling.lastElementChild.style.display = "block";

      // Adicionar animação de pisacar mensagem "this field is required"
      formularioCampoTelefone.previousElementSibling.lastElementChild.classList.add("text-help-anim");

      // Adiciona a borda vermelha ao redor do campo
      formularioCampoTelefone.classList.add("form-item__input--required");
    }

    /* Enquanto o indiceEtapasConteudo for menor que 4 e
      campos estiverem preenchidos na primeira etapa,
      faz as etapas avançarem a partir do clique no botão */
    if (
      formularioCampoNome.value.length > 0 &&
      formularioCampoEmail.value.length > 0 &&
      formularioCampoTelefone.value.length > 0 &&
      indiceEtapasConteudo < 4) {
      conteudoEtapasExibirSomenteUm(indiceEtapasConteudo += 1);

      /* Faz o número no sidebar seguir a linha das etapas */
      if (indiceEtapasConteudo <= 3) {
        numeroDaEtapaAtualDestacar(indiceEtapasNumero += 1);
      }

      /* Se o índice for maior que 1 reexibe o botão de retroceder */
      if (indiceEtapasConteudo >= 1) {
        botaoVoltarEtapa.style.visibility = "visible";
      }

      /* Somar valores e exibí-los na etapa 04 */
      if (indiceEtapasConteudo === 3) {
        // Obtêm número no nó de texto do título
        const precoApenasNumeroPlano =
        Number(confirmDadosPlano.lastElementChild.firstChild.nodeValue.match(/[0-9]/g).join(""));

        // Obtêm o número do valor do plano "Online service"
        const precoSubtotalAddOnPlan1 =
        Number(addOnSubTotal.children[0].firstChild.nodeValue.match(/[0-9]/g).join(""));

        // Obtêm o número do valor do plano "Large storage"
        const precoSubtotalAddOnPlan2 =
        Number(addOnSubTotal.children[1].firstChild.nodeValue.match(/[0-9]/g).join(""));

        // Obtêm o número do valor do plano "Customize Profile"
        const precoSubtotalAddOnPlan3 =
        Number(addOnSubTotal.children[2].firstChild.nodeValue.match(/[0-9]/g).join(""));

        let somaTotal = 0;

        if (addOnSubTotal.children[0].style.display === "block") {
          somaTotal = precoApenasNumeroPlano + precoSubtotalAddOnPlan1;
        }

        if (addOnSubTotal.children[1].style.display === "block") {
          somaTotal = precoApenasNumeroPlano + precoSubtotalAddOnPlan2;
        }

        if (addOnSubTotal.children[2].style.display === "block") {
          somaTotal = precoApenasNumeroPlano + precoSubtotalAddOnPlan3;
        }

        if (addOnSubTotal.children[0].style.display === "block" &&
            addOnSubTotal.children[1].style.display === "block") {
          somaTotal = precoApenasNumeroPlano + precoSubtotalAddOnPlan1 + precoSubtotalAddOnPlan2;
        }

        if (addOnSubTotal.children[1].style.display === "block" &&
            addOnSubTotal.children[2].style.display === "block") {
          somaTotal = precoApenasNumeroPlano + precoSubtotalAddOnPlan2 + precoSubtotalAddOnPlan3;
        }

        if (addOnSubTotal.children[0].style.display === "block" &&
            addOnSubTotal.children[2].style.display === "block") {
          somaTotal = precoApenasNumeroPlano + precoSubtotalAddOnPlan1 + precoSubtotalAddOnPlan3;
        }

        if (addOnSubTotal.children[0].style.display === "block" &&
            addOnSubTotal.children[2].style.display === "block" &&
            addOnSubTotal.children[2].style.display === "block") {
          somaTotal =
            precoApenasNumeroPlano + precoSubtotalAddOnPlan1 + precoSubtotalAddOnPlan2 + precoSubtotalAddOnPlan3;
        }

        // Espaço para a soma total do produto
        totalPrecoValor.firstChild.nodeValue =
        totalPrecoValor.firstChild.nodeValue.replace(totalPrecoValor.firstChild.nodeValue.match(/[0-9]/g).join(""), somaTotal);
        console.log(precoSubtotalAddOnPlan1);
      }

      /* Se o índice do conteúdo de etapas for igual a 4
        oculta o botão de avançar etapas, pois finalizou o processo */
      if (indiceEtapasConteudo === 4) {
        this.style.visibility = "hidden";
      }
    }
  }

  /* -------------------- FIM DOS BOTÕES DAS ETAPAS --------------------- */



  /* ------------------ SEÇÃO ETAPA "Personal info" ------------------ */

  /* PRIMEIRA ETAPA TRATAMENTO DE FORMULARIO */
  function resetarMensagemDeCampoVazio() {
    /* CAMPO NOME */
    // Oculta a mensagem de campo obrigatório "This field is required"
    formularioCampoNome.previousElementSibling.lastElementChild.style.display = "none";

    // Remove a borda vermelha ao redor do campo
    formularioCampoNome.classList.remove("form-item__input--required");

    /* CAMPO E-MAIL */
    // Oculta a mensagem de campo obrigatório "This field is required"
    formularioCampoEmail.previousElementSibling.lastElementChild.style.display = "none";

    // Remove a borda vermelha ao redor do campo
    formularioCampoEmail.classList.remove("form-item__input--required");

    /* CAMPO TELEFONE */
    // Oculta a mensagem de campo obrigatório "This field is required"
    formularioCampoTelefone.previousElementSibling.lastElementChild.style.display = "none";

    // Remove a borda vermelha ao redor do campo
    formularioCampoTelefone.classList.remove("form-item__input--required");
  }
  resetarMensagemDeCampoVazio();

  function validarCampoDeNome() {
    /* Se o campo de nome NÃO ESTIVER VAZIO */
    if (!formularioCampoNome.valueMissing) {

      // Oculta a mensagem de campo obrigatório "This field is required"
      formularioCampoNome.previousElementSibling.lastElementChild.style.display = "none";

      // Remove a borda vermelha ao redor do campo
      formularioCampoNome.classList.remove("form-item__input--required");

    /* Se o campo de nome ESTIVER VAZIO */
    } else {
      // Exibe a mensagem de campo obrigatório "This field is required"
      formularioCampoNome.previousElementSibling.lastElementChild.style.display = "block";
      // Adiciona a borda vermelha ao redor do campo
      formularioCampoNome.classList.add("form-item__input--required");
    }
  }

  /* Função ao focar no campo de nome para exibir mensagem de campo vazio */
  function exibirMensagemDeCampoNomeVazio() {
    // Exibe a mensagem de campo obrigatório "This field is required"
    formularioCampoNome.previousElementSibling.lastElementChild.style.display = "block";
    // Adiciona a borda vermelha ao redor do campo
    formularioCampoNome.classList.add("form-item__input--required");

    /* Se o campo já estiver preenchido ao focar não exibe mensagem nem borda de cor vermelha */
    if (formularioCampoNome.value.length > 0) {
      // Oculta a mensagem de campo obrigatório "This field is required"
      formularioCampoNome.previousElementSibling.lastElementChild.style.display = "none";

      // Remove a borda vermelha ao redor do campo
      formularioCampoNome.classList.remove("form-item__input--required");
    }
  }

  function validarCampoDeEmail() {
    /* Se o campo de nome NÃO ESTIVER VAZIO */
    if (!formularioCampoEmail.valueMissing) {

      // Oculta a mensagem de campo obrigatório "This field is required"
      formularioCampoEmail.previousElementSibling.lastElementChild.style.display = "none";

      // Remove a borda vermelha ao redor do campo
      formularioCampoEmail.classList.remove("form-item__input--required");

    /* Se o campo de nome ESTIVER VAZIO */
    } else {
      // Exibe a mensagem de campo obrigatório "This field is required"
      formularioCampoEmail.previousElementSibling.lastElementChild.style.display = "block";
      // Adiciona a borda vermelha ao redor do campo
      formularioCampoEmail.classList.add("form-item__input--required");
    }
  }

  /* Função ao focar no campo de email para exibir mensagem de campo vazio */
  function exibirMensagemDeCampoEmailVazio() {
    // Exibe a mensagem de campo obrigatório "This field is required"
    formularioCampoEmail.previousElementSibling.lastElementChild.style.display = "block";
    // Adiciona a borda vermelha ao redor do campo
    formularioCampoEmail.classList.add("form-item__input--required");

    /* Se o campo já estiver preenchido ao focar não exibe mensagem nem borda de cor vermelha */
    if (formularioCampoEmail.value.length > 0) {
      // Oculta a mensagem de campo obrigatório "This field is required"
      formularioCampoEmail.previousElementSibling.lastElementChild.style.display = "none";

      // Remove a borda vermelha ao redor do campo
      formularioCampoEmail.classList.remove("form-item__input--required");
    }
  }

  function validarCampoDeTelefone() {
    /* Se o campo de nome NÃO ESTIVER VAZIO */
    if (!formularioCampoTelefone.valueMissing) {

      // Oculta a mensagem de campo obrigatório "This field is required"
      formularioCampoTelefone.previousElementSibling.lastElementChild.style.display = "none";

      // Remove a borda vermelha ao redor do campo
      formularioCampoTelefone.classList.remove("form-item__input--required");

    /* Se o campo de nome ESTIVER VAZIO */
    } else {
      // Exibe a mensagem de campo obrigatório "This field is required"
      formularioCampoTelefone.previousElementSibling.lastElementChild.style.display = "block";
      // Adiciona a borda vermelha ao redor do campo
      formularioCampoTelefone.classList.add("form-item__input--required");
    }
  }

  /* Função ao focar no campo de email para exibir mensagem de campo vazio */
  function exibirMensagemDeCampoTelefoneVazio() {
    // Exibe a mensagem de campo obrigatório "This field is required"
    formularioCampoTelefone.previousElementSibling.lastElementChild.style.display = "block";
    // Adiciona a borda vermelha ao redor do campo
    formularioCampoTelefone.classList.add("form-item__input--required");

    /* Se o campo já estiver preenchido ao focar não exibe mensagem nem borda de cor vermelha */
    if (formularioCampoTelefone.value.length > 0) {
      // Oculta a mensagem de campo obrigatório "This field is required"
      formularioCampoTelefone.previousElementSibling.lastElementChild.style.display = "none";

      // Remove a borda vermelha ao redor do campo
      formularioCampoTelefone.classList.remove("form-item__input--required");
    }
  }

  /* ---------------- FINAL SEÇÃO ETAPA 01 "Personal info" ------------------ */

  /* --------------- SEÇÃO ETAPA 02 "Select your plan" ------------------ */

  /* Por padrão o primeiro plano será escolhido */
  function primeiroPlanoPadrao() {
    // Obtêm o título do primeiro plano da etapa 02
    const tituloPrimeiroPlano = planosContent[0].lastElementChild.firstElementChild.innerText;

    // Obtêm o preço do plano da etapa 02
    const precoPrimeiroPlano = planosContent[0].lastElementChild.children[1].innerText;

    /* Exibir primeiro por padrão na etapa 04 */
    // Exibir título na etapa 04
    confirmDadosPlano.firstElementChild.firstElementChild.firstChild.nodeValue = tituloPrimeiroPlano + " (Monthly)";

    // Exibir preço do plano na etapa 04
    confirmDadosPlano.lastElementChild.firstChild.nodeValue = precoPrimeiroPlano;

    // Exibir borda primeiro por padrão
    planosContent[0].classList.add("c-ofertas-item--active");
  }
  primeiroPlanoPadrao();

  /* Selecione o plano atual e trabalhe com os valores
    para exibir na etapa de confirmação dos plano
    escolhidos, no caso, na Etapa 04 */
  function selecionarPlanoEObterValores() {
    // Obter seu texto de título (Arcade ou Advanced ou Pro)
    const textoTituloPlano = this.lastElementChild.firstElementChild.innerText;

    // Obter preço do plano
    const textoPrecoPlano = this.lastElementChild.children[1].innerText;

    // Exibir título na etapa 03 e etapa 04
    if (moOrYrCheck.checked) {


      /* Exibir o padrão na etapa 03 */
      for (let i = 0; i < addOnItens.length; i++) {
        addOnItens[i].lastElementChild.firstElementChild.firstChild.nodeValue =
        addOnItens[i].lastElementChild.firstElementChild.firstChild.nodeValue.replace("/", "0/");

        addOnItens[i].lastElementChild.firstElementChild.firstChild.nodeValue =
        addOnItens[i].lastElementChild.firstElementChild.firstChild.nodeValue.replace("mo", "yr");
      }

      /* Se o plano é anual */

      // Muda o título na etapa 04
      confirmDadosPlano.firstElementChild.firstElementChild.firstChild.nodeValue = textoTituloPlano + " (Yearly)";

      /* Alterar o tipo total na etapa 04 para year */
      confirmPlanoTotal.firstElementChild.firstElementChild.firstChild.nodeValue =
      confirmPlanoTotal.firstElementChild.firstElementChild.firstChild.nodeValue.replace("month", "year");
    } else {
      /* Se o plano é mensal */

      /* Exibir o padrão na etapa 03 */
      for (let i = 0; i < addOnItens.length; i++) {
        addOnItens[i].lastElementChild.firstElementChild.firstChild.nodeValue =
        addOnItens[i].lastElementChild.firstElementChild.firstChild.nodeValue.replace("0/", "/");
        addOnItens[i].lastElementChild.firstElementChild.firstChild.nodeValue =
        addOnItens[i].lastElementChild.firstElementChild.firstChild.nodeValue.replace("yr", "mo");
      }

      // Muda o título na etapa 04
      confirmDadosPlano.firstElementChild.firstElementChild.firstChild.nodeValue = textoTituloPlano + " (Monthly)";

      /* Alterar o título total na etapa 04 para month */
      confirmPlanoTotal.firstElementChild.firstElementChild.firstChild.nodeValue =
      confirmPlanoTotal.firstElementChild.firstElementChild.firstChild.nodeValue.replace("year", "month")
    }

    // Exibir preço do plano na etapa 04
    confirmDadosPlano.lastElementChild.firstChild.nodeValue = textoPrecoPlano;

    // Remover todas as bordar e deixar destacado a do primeiro
    for (let i = 0; i < planosContent.length; i++) {
      planosContent[i].classList.remove("c-ofertas-item--active");
    }

    // Alternar entre adicionar e remover borda roxa
    this.classList.toggle("c-ofertas-item--active");
  }

  /* Trabalhar com o checkbox de mês ou ano */
  // Funcao no checkbox
  function alterarAnoOuMes() {
    /* Obter preço todos os planos */

    /* Se o plano for anual */
    if (moOrYrCheck.checked) {
      for (let i = 0; i < planosContent.length; i++) {
        // Altere o texto do preço do plano de mês para ano
        planosContent[i].lastElementChild.children[1].innerText = planosContent[i].lastElementChild.children[1].innerText.replace("mo", "yr");

        // Adiciona um valor diferente
        planosContent[i].lastElementChild.children[1].innerText = planosContent[i].lastElementChild.children[1].innerText.replace("/", "0/");

        // Exibi mensagem de dois meses grátis
        for (let j = 0; j < planosContent.length; j++) {
          planosContent[j].lastElementChild.children[2].style.display = "block";
        }
      }

      /* Exibir o padrão na etapa 03 */
      for (let i = 0; i < addOnItens.length; i++) {
        addOnItens[i].lastElementChild.firstElementChild.firstChild.nodeValue =
        addOnItens[i].lastElementChild.firstElementChild.firstChild.nodeValue.replace("/", "0/");

        addOnItens[i].lastElementChild.firstElementChild.firstChild.nodeValue =
        addOnItens[i].lastElementChild.firstElementChild.firstChild.nodeValue.replace("mo", "yr");
      }

      /* Altere os preços e mensagens na etapa 04 */
      // Exibi "Yearly"
      confirmDadosPlano.firstElementChild.firstElementChild.firstChild.nodeValue = confirmDadosPlano.firstElementChild.firstElementChild.firstChild.nodeValue.replace("Monthly", "Yearly");

      // Muda o valor do preço no título da etapa 04
      confirmDadosPlano.lastElementChild.firstChild.nodeValue =
      confirmDadosPlano.lastElementChild.firstChild.nodeValue.replace("mo", "yr");

      confirmDadosPlano.lastElementChild.firstChild.nodeValue =
      confirmDadosPlano.lastElementChild.firstChild.nodeValue.replace("/", "0/");

      /* Alterar valor e mensalidade ou anuidade dos add-ons escolhidos
        em exibição na etapa 04 valor em subtotal */
      for (let i = 0; i < addOnSubTotal.children.length; i++) {
        addOnSubTotal.children[i].firstChild.nodeValue =
        addOnSubTotal.children[i].firstChild.nodeValue.replace("mo", "yr");
        addOnSubTotal.children[i].firstChild.nodeValue =
        addOnSubTotal.children[i].firstChild.nodeValue.replace("/", "0/");
      }

      /* Valor total alterar mensalidade ou anuidade */
      totalPrecoValor.firstChild.nodeValue =
      totalPrecoValor.firstChild.nodeValue.replace("mo", "yr");

      /* Alterar o tipo total na etapa 04 para year */
      confirmPlanoTotal.firstElementChild.firstElementChild.firstChild.nodeValue =
      confirmPlanoTotal.firstElementChild.firstElementChild.firstChild.nodeValue.replace("month", "year");

    /* Se o plano for mensal */
    } else {
      for (let i = 0; i < planosContent.length; i++) {
        // Altere o texto do preço do plano de mês para ano
        planosContent[i].lastElementChild.children[1].innerText = planosContent[i].lastElementChild.children[1].innerText.replace("yr", "mo");

        // Adiciona um valor diferente
        planosContent[i].lastElementChild.children[1].innerText = planosContent[i].lastElementChild.children[1].innerText.replace("0/", "/");

        // Oculta mensagem de dois meses grátis
        for (let j = 0; j < planosContent.length; j++) {
          planosContent[j].lastElementChild.children[2].style.display = "none";
        }

        /* Exibir o padrão na etapa 03 */
        for (let i = 0; i < addOnItens.length; i++) {
          addOnItens[i].lastElementChild.firstElementChild.firstChild.nodeValue =
          addOnItens[i].lastElementChild.firstElementChild.firstChild.nodeValue.replace("0/", "/");

          addOnItens[i].lastElementChild.firstElementChild.firstChild.nodeValue =
          addOnItens[i].lastElementChild.firstElementChild.firstChild.nodeValue.replace("yr", "mo");
        }

        /* Altere os preços e mensagens na etapa 04 */
        // Exibi "Yearly"
        confirmDadosPlano.firstElementChild.firstElementChild.firstChild.nodeValue = confirmDadosPlano.firstElementChild.firstElementChild.firstChild.nodeValue.replace("Yearly", "Monthy");

        // Muda o valor do plano no título da etapa 04
        confirmDadosPlano.lastElementChild.firstChild.nodeValue =
        confirmDadosPlano.lastElementChild.firstChild.nodeValue.replace("yr", "mo")

        confirmDadosPlano.lastElementChild.firstChild.nodeValue =
        confirmDadosPlano.lastElementChild.firstChild.nodeValue.replace("0/", "/")

        /* Alterar valor e mensalidade ou anuidade dos add-ons escolhidos
          em exibição na etapa 04 */
        for (let i = 0; i < addOnSubTotal.children.length; i++) {
          addOnSubTotal.children[i].firstChild.nodeValue =
          addOnSubTotal.children[i].firstChild.nodeValue.replace("yr", "mo");
          addOnSubTotal.children[i].firstChild.nodeValue =
          addOnSubTotal.children[i].firstChild.nodeValue.replace("0/", "/");
        }

        /* Valor total alterar mensalidade ou anuidade */
        totalPrecoValor.firstChild.nodeValue =
        totalPrecoValor.firstChild.nodeValue.replace("yr", "mo");

        /* Alterar o título total na etapa 04 para month */
        confirmPlanoTotal.firstElementChild.firstElementChild.firstChild.nodeValue =
        confirmPlanoTotal.firstElementChild.firstElementChild.firstChild.nodeValue.replace("year", "month")
      }
    }
  }
  /* --------------- FINAL ETAPA 02 "Select your plan" ---------------- */

  /* --------------- SEÇÃO ETAPA 03 "Pick add-ons" ------------------ */

  /* Por padrão os dois primerios itens adicionais serão escolhidos */
  function addOnsEscolhaPadrao() {
    // Checa o checkbox
    addOnItens[0].firstElementChild.firstElementChild.checked = true;
    addOnItens[1].firstElementChild.firstElementChild.checked = true;

    // Exibir borda primeiro por padrão
    addOnItens[0].classList.add("c-add-on-item--active");
    addOnItens[1].classList.add("c-add-on-item--active");

    /* Exibir escolhas de add-ons por padrão na etapa 04 */

    // Título
    opcionaisNoPlano.firstElementChild.children[0].style.display = "block";
    opcionaisNoPlano.firstElementChild.children[1].style.display = "block";
    opcionaisNoPlano.firstElementChild.children[2].style.display = "none";

    // Preço
    opcionaisNoPlano.lastElementChild.children[0].style.display = "block";
    opcionaisNoPlano.lastElementChild.children[1].style.display = "block";
    opcionaisNoPlano.lastElementChild.children[2].style.display = "none";
  }
  addOnsEscolhaPadrao();

  /* Escolher add-ons para adicionar */
  function escolhaDeAddons() {

    if (this.firstElementChild.firstElementChild.checked) {
      this.firstElementChild.firstElementChild.checked = false;
      if (this.id === "item01") {
       opcionaisNoPlano.firstElementChild.children[0].style.display = "none";
       opcionaisNoPlano.lastElementChild.children[0].style.display = "none";
      }

      if (this.id === "item02") {
        opcionaisNoPlano.firstElementChild.children[1].style.display = "none";
        opcionaisNoPlano.lastElementChild.children[1].style.display = "none";
      }

      if (this.id === "item03") {
        opcionaisNoPlano.firstElementChild.children[2].style.display = "none";
        opcionaisNoPlano.lastElementChild.children[2].style.display = "none";
      }

    } else {
      if (this.id === "item01") {
        opcionaisNoPlano.firstElementChild.children[0].style.display = "block";
        opcionaisNoPlano.lastElementChild.children[0].style.display = "block";
      }

      if (this.id === "item02") {
        opcionaisNoPlano.firstElementChild.children[1].style.display = "block";
        opcionaisNoPlano.lastElementChild.children[1].style.display = "block";
      }

      if (this.id === "item03") {
        opcionaisNoPlano.firstElementChild.children[2].style.display = "block";
        opcionaisNoPlano.lastElementChild.children[2].style.display = "block";
      }

      this.firstElementChild.firstElementChild.checked = true;
    }
  }
  /* --------------- FINAL ETAPA 03 "Pick add-ons" ------------------ */


  /* --------------- ! SEÇÃO ETAPA 04 SOMAS NO BOTÃO DE AVANÇAR !
    ------------------ */

  /* Alternativa de callback para navegadores que não ofereçam suporte ao addEventListener */
  if (document.addEventListener) {
    /* Eventos para botões de próximo e anterior */
    botaoVoltarEtapa.addEventListener("click", botaoRetrocederEtapasNumeroEConteudo);
    botaoProximaEtapa.addEventListener("click", botaoAvancarEtapasNumeroEConteudo);

    /* ---------- EVENTOS ETAPA 01 ---------- */

    /* Eventos para campo de entrada de nome */
    formularioCampoNome.addEventListener("input", validarCampoDeNome);
    formularioCampoNome.addEventListener("focus", exibirMensagemDeCampoNomeVazio);

    /* Eventos para campo de entrada de e-mail */
    formularioCampoEmail.addEventListener("input", validarCampoDeEmail);
    formularioCampoEmail.addEventListener("focus", exibirMensagemDeCampoEmailVazio);

    /* Eventos para campo de entrada de telefone */
    formularioCampoTelefone.addEventListener("input", validarCampoDeTelefone);
    formularioCampoTelefone.addEventListener("focus", exibirMensagemDeCampoTelefoneVazio);

    /* Evento para remover a classe de animação que faz piscar mensagem de campo vázio quando a animação da mesma finalizar */
    formularioCampoNome.previousElementSibling.lastElementChild.addEventListener("animationend", function() {
      this.classList.remove("text-help-anim")
    })
    formularioCampoEmail.previousElementSibling.lastElementChild.addEventListener("animationend", function() {
      this.classList.remove("text-help-anim")
    })
    formularioCampoTelefone.previousElementSibling.lastElementChild.addEventListener("animationend", function() {
      this.classList.remove("text-help-anim")
    })
    /* -------- FIM EVENTOS ETAPA 01 --------- */

    /* ---------- EVENTOS ETAPA 02 ---------- */
    for (let i = 0; i < planosContent.length; i++) {
      planosContent[i].addEventListener("click", selecionarPlanoEObterValores);
    }

    moOrYrCheck.addEventListener("change", alterarAnoOuMes);

    /* ------------ FIM EVENTOS ETAPA 02 --------------- */

    /* ------------ EVENTOS ETAPA 03 --------------------*/
    for (let i = 0; i < addOnItens.length; i++) {
      addOnItens[i].addEventListener("click", escolhaDeAddons);
    }
  } else {
    /* Eventos para botões de próximo e anterior */
    botaoVoltarEtapa.attachEvent("onclick", botaoRetrocederEtapasNumeroEConteudo);
    botaoProximaEtapa.attachEvent("onclick", botaoAvancarEtapasNumeroEConteudo);

    /* ---------- EVENTOS ETAPA 01 ---------- */
    /* Eventos para campo de entrada de nome */
    formularioCampoNome.attachEvent("oninput", validarCampoDeNome);
    formularioCampoNome.attachEvent("onfocus", exibirMensagemDeCampoNomeVazio);

    /* Eventos para campo de entrada de e-mail */
    formularioCampoEmail.attachEvent("oninput", validarCampoDeEmail);
    formularioCampoEmail.attachEvent("onfocus", exibirMensagemDeCampoEmailVazio);


    /* Eventos para campo de entrada de telefone */
    formularioCampoTelefone.attachEvent("oninput", validarCampoDeTelefone);
    formularioCampoTelefone.attachEvent("onfocus", exibirMensagemDeCampoTelefoneVazio);

    /* Evento para remover a classe de animação que faz piscar mensagem de campo vázio quando a animação da mesma finalizar */
    formularioCampoNome.previousElementSibling.lastElementChild.attachEvent("onanimationend", function() {
      this.classList.remove("text-help-anim")
    })

    formularioCampoEmail.previousElementSibling.lastElementChild.attachEvent("onanimationend", function() {
      this.classList.remove("text-help-anim")
    })

    formularioCampoTelefone.previousElementSibling.lastElementChild.attachEvent("onanimationend", function() {
      this.classList.remove("text-help-anim")
    })
    /* -------- FIM EVENTOS ETAPA 01 --------- */

    /* ---------- EVENTOS ETAPA 02 ---------- */
    for (let i = 0; i < planosContent.length; i++) {
      planosContent[i].attachEvent("onclick", selecionarPlanoEObterValores);
    }

    moOrYrCheck.attachEvent("onchange", alterarAnoOuMes);

    /* ------------ FIM EVENTOS ETAPA 02 --------------- */

    /* ------------ EVENTOS ETAPA 03 --------------------*/
    for (let i = 0; i < addOnItens.length; i++) {
      addOnItens[i].attachEvent("onclick", escolhaDeAddons);
    }
  }
}
