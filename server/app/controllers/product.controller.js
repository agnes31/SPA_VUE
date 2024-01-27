const db = require('../models')
const Product = db.products 

//fait appel a la base de donnée pour récupérer les produits

exports.findAll = (req, res) => { 
    // Validate request
    Product.findAll() 
    .then(data => { 
        res.send(data) 
    })
    .catch(err => {
        res.status(500).send({ message: "Erreur lors de la récupération des produits." 
        })
    })
}

//création d'un produit

exports.create = (req, res) => {
if (!req.body.name) {
    res.status(400).send({ message: "Le nom est obligatoire." 
});
    return;
}
Product.create(req.body)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({ message: "Impossible d'insérer les données." });
    });
}

//récupération d'un produit

exports.findOne = (req, res) => {
    const id = req.params.id
    Product.findByPk(id)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Une erreur s'est produite"
        })
    })
}

//modification d'un produit

exports.update = (req, res) => {
// récupération de l'id dans l'url
const id = req.params.id;
Product.update(req.body, {
    where: { id: id }
})
    .then(num => {
        if (num == 1) {
            res.send({ message: "Produit modifié." });
        } else {
            res.status(404).send({ message: "Produit non trouvé." });
        }
    })
    .catch(err => {
        res.status(500).send({ 
            message: "Erreur lors de la modification du produit." });
    });
}

//suppression d'un produit

exports.delete = (req, res) => {
    // récupération de l'id dans l'url
    const id = req.params.id;

    Product.destroy({
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({ message: "Produit supprimé." });
        } else {
            res.status(404).send({ message: "Produit non trouvé." 
            });
        }
    })
    .catch(err => {
        res.status(500).send({ message: "Erreur lors de la suppression du produit." });
    });
}
