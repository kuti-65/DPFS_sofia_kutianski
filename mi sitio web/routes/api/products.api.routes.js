const express = require("express");
const { products, detail, lastProduct, deleteProduct, createProduct } = require("../../controllers/api/products.api.controller");
const { uploadProd } = require("../../middleware/multer");
const router = express.Router();


// Endpoint de productos
router.get("/", products);

// Endpoint del detalle del producto
router.get("/detail/:id", detail);

// Endpoint del ultimo producto
router.get('/last-product', lastProduct);

// router.get("/create", admin , createForm);
router.post("/create", uploadProd.single('image'), createProduct);

/* Delete process to delete product. */
router.delete("/delete/:id", deleteProduct);

module.exports = router;

