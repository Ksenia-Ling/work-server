const Product = require('../models/product');

module.exports.getRandomProducts = (req, res, next) => {
    const length = req.params.length;
    Product.find({})
        .then((products) => {
            const result = products.sort(() => Math.random() - 0.5).slice(0, length);
            res.send(result)
        })
        .catch(next);
};

module.exports.getProducts = (req, res, next) => {
    Product.find({})
        .then((products) => {
            const result = products.sort(() => Math.random() - 0.5).slice(0, 10);
            res.send(result)
        })
        .catch(next);
};

module.exports.createProduct = (req, res, next) => {
    const { label, price } = req.body;

    Product.create({ label, price })
        .then(product => res.send({ data: product }))
        .catch((err) => {
            res.status(500).send({ message: 'Ошибка обработки запроса' })
            next(err);
        });
};

