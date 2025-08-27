const btnConsultar = document.getElementById('btnConsultar');
const resultado = document.getElementById('resultado');

async function buscarCep() {
    const cep = document.getElementById("cep").value;
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        if (!response.ok) {
            throw new Error("Erro na API");
        }
        const dados = await response.json();
        if (dados.erro) {
            resultado.innerHTML = "CEP não encontrado.";
            return;
        }
        resultado.innerHTML = `
            <p><strong>CEP:</strong> ${dados.cep}</p>
            <p><strong>Logradouro:</strong> ${dados.logradouro}</p>
            <p><strong>Bairro:</strong> ${dados.bairro}</p>
            <p><strong>Cidade:</strong> ${dados.localidade}</p>
            <p><strong>Estado:</strong> ${dados.uf}</p>
        `;
    } catch (error) {
        resultado.innerHTML = "Erro ao buscar CEP.";
        console.error(error);
    }
}

btnConsultar.addEventListener('click', buscarCep);

// Permite buscar ao pressionar Enter no input do CEP
const cepInput = document.getElementById('cep');
if (cepInput) {
    cepInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            buscarCep();
        }
    });
}
