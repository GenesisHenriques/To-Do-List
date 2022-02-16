const { expect } = require('chai');
const { describe, it } = require('jest');

const MoviesModel = {
  /*
    Como ainda não temos a implementação, vamos fixar
    um objeto simulando os métodos que iremos desenvolver,
    porém, eles não terão nenhum comportamento
  */
  create: () => {}
};

describe('Insere uma nova task no BD', () => {
  const payloadMovie = {
    title: 'Fazer o almoço',
    description: 'Preparar o arroz, esquentar o feijão, montar a salada e fritar o bife',
    status: 'pendente',
  }

  describe('quando é inserido com sucesso', () => {
    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object')
    });

    it('tal objeto possui o "id" da nova task inserida', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id')
    });
  });
});