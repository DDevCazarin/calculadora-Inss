document.getElementById("salario").addEventListener("input", calcularFolha);

function calcularFolha() {
    let salarioBruto = parseFloat(document.getElementById("salario").value) || 0;

    let inss = 0;
    if (salarioBruto <= 1412.00) {
        inss = salarioBruto * 0.075;
    } else if (salarioBruto <= 2666.68) {
        inss = salarioBruto * 0.09 - 21.18;
    } else if (salarioBruto <= 4000.03) {
        inss = salarioBruto * 0.12 - 101.18;
    } else if (salarioBruto <= 7786.02) {
        inss = salarioBruto * 0.14 - 181.18;
    } else {
        inss = 7786.02 * 0.14 - 181.18;
    }

    let fgts = salarioBruto * 0.08;

    let salarioLiquido = salarioBruto - inss;

    document.getElementById("inss").textContent = `R$ ${inss.toFixed(2)}`;
    document.getElementById("fgts").textContent = `R$ ${fgts.toFixed(2)}`;
    document.getElementById("liquido").textContent = `R$ ${salarioLiquido.toFixed(2)}`;
}