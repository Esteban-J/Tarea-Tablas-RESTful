const express = require('express');
const router = express.Router();
const controller = require('../controllers/results');

/* POST */
router.post('/', controller.multiplicar);

/* GET */
router.get('/:n1/:n2', controller.sumar);

/* PUT */
router.put('/', controller.dividir); 

/* PATCH */
router.patch('/', controller.potencia); 

/* DELETE */
router.delete('/:n1/:n2', controller.resta); 


module.exports = router;
