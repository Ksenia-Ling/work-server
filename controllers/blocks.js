const Block = require('../models/block');

module.exports.saveBlockAttributes = (req, res, next) => {
    const { id, items } = req.body;

    if (items.length > 0) {

        Block.create({ id, items })
            .then(block => res.send(block))
            .catch((err) => {
                res.status(500).send({ message: 'Ошибка обработки запроса' })
                next(err);
            });
    } else {
        
        res.send({ message: 'Нет массива услуг для сохранения в базе' })
    }
};

module.exports.getBlockAttributes = (req, res, next) => {
    Block.findOne({ "id": req.params.blockId }) //в параметрах будет то, что мы дописали в роуте после двоеточия. '/blocks/:blockId'
        .then((block) => res.send(block))
        .catch(next);
};