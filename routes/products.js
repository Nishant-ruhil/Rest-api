const express = require('express');
const router = express.Router();
// import { getAllProducts,getAllProductsTesting } from '../controllers/products';  isme assa nahi hota ye react me hota tha
const {getAllProducts,getAllProductsTesting} = require('../controllers/products');

router.route('/').get(getAllProducts);
router.route('/testing').get(getAllProductsTesting);

module.exports = router;