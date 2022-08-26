/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const Joi = require('joi');

class ProdutoSchema {
  async validade(id, nome, quantidade) {
    const produto = {
        id,
        nome,
        quantidade
    }
    const schema = Joi.object({
        id: Joi.number().required(),
        nome: Joi.string().max(20).required(),
        quantidade: Joi.number().required()
    });
    const { error } = schema.validate(produto);
    if (error) {
        throw error;
    }
  }
}

module.exports = ProdutoSchema;