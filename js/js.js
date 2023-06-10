// Função para definir um cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Função para obter o valor de um cookie
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

// Função para excluir um cookie
function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999; path=/';
}

// Exemplo de uso
function exemploCookies() {
    // Definindo um cookie
    setCookie("nome", "João", 7);

    // Obtendo o valor de um cookie
    var nome = getCookie("nome");
    console.log("Nome: " + nome);

    // Excluindo um cookie
    eraseCookie("nome");
}
