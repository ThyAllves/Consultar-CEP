Consulta de CEP com ViaCEP

Este projeto é uma aplicação simples em HTML + JavaScript que consome diretamente a API pública do ViaCEP
.

🚀 Funcionalidades

Consulta de endereços a partir de um CEP informado.

Frontend simples feito em HTML, CSS e JavaScript.

Consumo direto da API ViaCEP usando fetch.

📂 Estrutura do Projeto
.
├── index.html      # Interface principal
├── script.js       # Código JavaScript para buscar o CEP
└── style.css       # (opcional) Estilos da aplicação

🔧 Tecnologias Utilizadas

HTML5

CSS3

JavaScript (ES6+)

▶️ Como executar

Clone este repositório:

git clone git@github.com:ThyAllves/Consultar-CEP.git


Abra o arquivo index.html no navegador.

Digite um CEP no campo de busca e veja os dados retornados pela API.

📌 Exemplo de Uso

Requisição feita ao ViaCEP:

https://viacep.com.br/ws/01001000/json/


Resposta (JSON):

{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP"
}

📜 Licença

Este projeto é open source e pode ser usado livremente para estudos e melhorias.
