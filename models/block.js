const mongoose = require('mongoose');

const blockSchema = new mongoose.Schema({
    id: {
        type: String
    },
    items: [
        {
            label: {
                type: String
            },
            price: {
                type: Number
            },
            value: {
                type: Number
            },
            parentId: {
                type: Number
            },
            checked: {
                type: Boolean,
                default: false
            }
        }
    ]
});

module.exports = mongoose.model('block', blockSchema);