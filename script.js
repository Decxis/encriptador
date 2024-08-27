function validarTexto(texto) {
    // Expresión regular para permitir solo letras minúsculas sin acentos
    const regex = /^[a-z\s]+$/;

    if (!regex.test(texto)) {
        alert("El texto solo puede contener letras minúsculas sin acentos ni caracteres especiales.");
        return false;
    }

    return true;
}

function encriptar() {
    const texto = document.getElementById("inputText").value;

    if (validarTexto(texto)) {
        // Aquí va la lógica de encriptación
        let textoEncriptado = texto
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");

        document.getElementById("outputText").value = textoEncriptado;
        document.getElementById("resultadoInicial").style.display = "none";
        document.getElementById("resultadoFinal").style.display = "flex";
    }
}

function desencriptar() {
    const texto = document.getElementById("inputText").value;

    if (validarTexto(texto)) {
        // Aquí va la lógica de desencriptación
        let textoDesencriptado = texto
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");

        document.getElementById("outputText").value = textoDesencriptado;
        document.getElementById("resultadoInicial").style.display = "none";
        document.getElementById("resultadoFinal").style.display = "flex";
    }
}

function copiarTexto() {
    const texto = document.getElementById("outputText");
    texto.select();
    texto.setSelectionRange(0, 99999); // Para móviles

    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}
