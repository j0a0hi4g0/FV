function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ')
            c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0)
            return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999; path=/';
}

function exemploCookies() {
    setCookie("nome", "João", 7);

    var nome = getCookie("nome");
    console.log("Nome: " + nome);

    eraseCookie("nome");
}

function validarDataNascimento() {
    var dataNascimento = document.getElementById("dataNascimento").value;
    var padraoData = /^\d{2}\/\d{2}\/\d{4}$/;
  
    if (!padraoData.test(dataNascimento)) {
      alert("A data de nascimento deve estar no formato DD/MM/AAAA");
      return false;
    }
    
    return true;
  }
  
  function validarLimiteCartao(event) {
    var tecla = event.which || event.keyCode;
    
    if (tecla < 48 || tecla > 57) {
      event.preventDefault();
    }
  }
  
  function validarCEP(event) {
    var tecla = event.which || event.keyCode;
    
    if (tecla < 48 || tecla > 57) {
      event.preventDefault();
    }
  }
  
  document.getElementById("dataNascimento").addEventListener("blur", validarDataNascimento);
  document.getElementById("limiteCartao").addEventListener("keypress", validarLimiteCartao);
  document.getElementById("cep").addEventListener("keypress", validarCEP);
  