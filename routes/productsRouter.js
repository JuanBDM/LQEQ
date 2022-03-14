const express = require("express")
const router = express.Router();
const productController = require("../controllers/productController");


//Formulario registro
router.get('/productslist',  productController.productslist);


router.get('/productslist/:idProducts', function(req,res){
    res.send("Bienvenido al detalle del producto " + req.params.idProducts)
}) 

router.get('/productslist/:idProducts/comentarios/:idComentario?', function(req,res){
    if (req.params.idComentario == undefined) {
        res.send("Bienvenidos a los comentarios del producto " + req.params.idProducts)}
    else {
        res.send("Bienvenido a los comentarios del producto " + req.params.idProducts + " y estas enfocado en el comentario " + req.params.idComentario)
    }
}) 


module.exports = router;