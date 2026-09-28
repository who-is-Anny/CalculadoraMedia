const botao = document.getElementById("calcular");

botao.addEventListener("click", function () {

    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);

    const mediaElemento = document.getElementById("media");
    const situacaoElemento = document.getElementById("situacao");

    // Verifica se todas as notas foram preenchidas
    if (
        isNaN(nota1) ||
        isNaN(nota2) ||
        isNaN(nota3)
    ) {
        mediaElemento.textContent = "--";
        situacaoElemento.textContent = "Preencha todas as notas";
        situacaoElemento.className = "situacao";
        return;
    }

    // Verifica se as notas estão entre 0 e 10
    if (
        nota1 < 0 || nota1 > 10 ||
        nota2 < 0 || nota2 > 10 ||
        nota3 < 0 || nota3 > 10
    ) {
        mediaElemento.textContent = "--";
        situacaoElemento.textContent = "As notas devem estar entre 0 e 10";
        situacaoElemento.className = "situacao";
        return;
    }

    // Calcula a média
    const media = (nota1 + nota2 + nota3) / 3;

    mediaElemento.textContent = media.toFixed(1);

    // Remove classes anteriores
    situacaoElemento.className = "situacao";

    // Define a situação do aluno
    if (media >= 7) {
        situacaoElemento.textContent = "✓ Aprovado";
        situacaoElemento.classList.add("aprovado");

    } else if (media >= 5) {
        situacaoElemento.textContent = "↻ Recuperação";
        situacaoElemento.classList.add("recuperacao");

    } else {
        situacaoElemento.textContent = "✕ Reprovado";
        situacaoElemento.classList.add("reprovado");
    }
});
