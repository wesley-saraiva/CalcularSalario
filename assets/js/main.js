const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputSalario = form.querySelector('#salario');
    const inputDias = form.querySelector('#dias-tra');

    const salario = Number(inputSalario.value);
    const diasTra = Number(inputDias.value);

    if (!salario) {
        setResultado('Salario invalido', false);
        return;
    }
    if (!diasTra) {
        setResultado('Dias trabalhados invalido', false);
        return;
    }

    function getValorDia(salario, diasTra) {
        const valorDia = salario / 30 * diasTra;
        return valorDia.toFixed(2);
    }
    const valorDia = getValorDia(salario, diasTra);
    const msg = `Valor do salario por dia é ${valorDia}`;

    setResultado(msg, true);

    function criarP() {
        const p = document.createElement('p');
        return p;
    }
    function setResultado(msg, isValid) {
        const resultado = document.querySelector('#resultado');
        resultado.innerHTML = '';
        const p = criarP();
        if (isValid) {
            p.classList.add('paragrafo-resultado');

        } else {
            p.classList.add('bad');
        }
        p.innerHTML = msg;
        resultado.appendChild(p);
    }
});