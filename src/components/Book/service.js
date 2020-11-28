const BookModel = require('./model');

const findAll = () => {
    return BookModel.find({}).exec();
}

const findById = (id) => {
    return BookModel.findById(id).exec();
}

const create = (book) => {
    return BookModel.create(book);
}

function updateById(_id, newBook) {
    return BookModel.updateOne({ _id }, newBook).exec();
}

const deleteById = (_id) => {
    return BookModel.deleteOne({ _id }).exec();
}

module.exports = {
    findAll,
    findById,
    create,
    updateById,
    deleteById
}


