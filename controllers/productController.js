const fs = require("fs");
const path = require("path")

const controller = {
    productslist: (req, res) =>{
        res.render("productos/productslist")
    },

}

module.exports = controller;