/* eslint-disable camelcase */
const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const ong_id = request.headers.authorization;

    if (!ong_id) {
      response.status(400).json({ error: 'Ong id not found' });
    }

    const incitends = await connection('incidents')
      .where('ong_id', ong_id)
      .select('*');

    return response.json(incitends);
  },
};
