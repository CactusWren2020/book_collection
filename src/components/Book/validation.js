const Validation = require('../validation');

class BookValidation extends Validation {

    findById(data) {
        return this.Joi 
            .object({
                id: this.Joi.objectId(),
            })
            .validate(data);
    }

    create(book) {
        return this.Joi 
            .object({
                title: this.Joi.string().min(1).max(100),
                author: this.Joi.string().min(1).max(50),
                ISBN: this.Joi.string().min(17).max(17)
            })
            .validate(book);
    }

    updateById(data) {
        return this.Joi
            .object({
                id: this.Joi.objectId(),
                title: this.Joi.string().min(1).max(100),
                author: this.Joi.string().min(1).max(50),
                ISBN: this.Joi.string().min(17).max(17)
            })
            .validate(data);
    }

    deleteById(data) {
        return this.Joi 
            .object({
                id: this.Joi.objectId(),
            })
            .validate(data);
    }
}

module.exports = new BookValidation();