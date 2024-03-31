const {Router} = require('express');

const route = Router();

const{getDonante, postDonante, putDonante, deleteDonante} = require('../controller/donantes');

route.get('/', getDonante)
route.post('/', postDonante)
route.put('/:id_Donante', putDonante)
route.delete('/:id_Donante', deleteDonante)

module.exports = route