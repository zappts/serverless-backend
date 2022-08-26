/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const DynamoDB = require('../aws/dymano');
const dynamoDB = new DynamoDB();
const TABLE_NAME = 'produto';

class ProdutoRepository {
  async createProduto(id, nome, quantidade) {
    const produto = {
        id,
        nome,
        quantidade
    }
    await dynamoDB.put(produto, TABLE_NAME)
  }
}

module.exports = ProdutoRepository;