// POST /produto
// evento => request HTTP

// POSTMAN
/* 
{
    "id": number,
    "nome": string,
    "quantidade": number
}  =>>> string 

*/
const Produto = require('../business/produto');
const produto = new Produto();

module.exports.createProduto = async (event) => {
    const requestBody = JSON.parse(event.body);
    const response = await produto.create(requestBody.id, requestBody.nome,
                                requestBody.quantidade);
    return response;
}