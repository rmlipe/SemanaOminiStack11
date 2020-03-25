const crypto  = require('crypto');

const connection = require('../database/connection')

module.exports = {

    async index (request, response) {
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },

    async create(request, response){
    
        //  const params = request.query;   // Usado com Parâmetro Query
        //  const params = request.params;  // Usado com Parâmetro Route
        //  const body   = request.body;     // Usado com Parâmetro Body
        
            const { name, email, whatsapp, city, uf } = request.body;
    
            const id = crypto.randomBytes(4).toString('HEX');

            await connection('ongs').insert({
                id,
                name,
                email,
                whatsapp,
                city,
                uf,
            })

            return response.json({ id })
    }
};