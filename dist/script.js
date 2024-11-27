function login() {
    const username = document.getElementById("username").value;
  
  
    const password = document.getElementById("password").value;

    // Simulação de login simples
    if (username === "Alyssa Lorenna" && password === "1234") {
        alert("Login bem-sucedido!");
        document.getElementById("login-section").style.display = "none";
        document.getElementById("production-section").style.display = "block";
    } else {
        alert("Usuário ou senha inválidos!");
    }
}

function addBarcode() {
    const barcode = document.getElementById("barcode").value;

    if (barcode) {
        const list = document.getElementById("barcode-list");
        const listItem = document.createElement("li");
        listItem.textContent = barcode;
        list.appendChild(listItem);
        document.getElementById("barcode").value = ""; // Limpar campo
    } else {
        alert("Insira um código de barras válido!");
    }
}