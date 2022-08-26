/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const ProdutoRepository = require('../repository/produtoRepository');
const produtoRepository = new ProdutoRepository();
const ProdutoSchema = require('../schema/produtoSchema');
const produtoSchema = new ProdutoSchema();

class Produto {
  async create(id, nome, quantidade) {
    try {
        await produtoSchema.validade(id, nome, quantidade);
        // validar se já existe no banco
        // get do id no banco
        // veria se existe
        await produtoRepository.createProduto(id, nome, quantidade);
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
    } catch(error) {
        const errorResponse = { 
            statusCode: 400,
            body: JSON.stringify({ message: 'Parâmetros inválidos! Erro!' }),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT',
                'Access-Control-Allow-Credentials': true,
            },
        }
        return errorResponse;
    }
  }
}

module.exports = Produto;