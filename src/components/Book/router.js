const { Router } = require('express');
const BookComponent = require('../Book');

const router = Router();

// /v1/books

router.get('/', BookComponent.findAll);

// get book by id

router.get('/:id', BookComponent.findById);

// create new book

router.post('/', BookComponent.create);

// update book

router.put('/', BookComponent.updateById);

// delete book

router.delete('/', BookComponent.deleteById);

module.exports = router;