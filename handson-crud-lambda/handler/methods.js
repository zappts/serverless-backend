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
const DynamoDB = require('../aws/dymano');

module.exports.createProduto = async (event) => {
    const requestBody = JSON.parse(event.body);
    let id = requestBody.id;
    let nome = requestBody.nome;
    let quantidade = requestBody.quantidade;
    const dynamoDB = new DynamoDB();
    const produto = {
        id,
        nome,
        quantidade
    }
    await dynamoDB.put(produto, 'produto');
    const response = {
        statusCode: 201,
        body: JSON.stringify({ message: 'Produto criado com sucesso!' }),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT',
            'Access-Control-Allow-Credentials': true,
        },
    }
    return response;
}