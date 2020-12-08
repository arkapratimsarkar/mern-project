const category = require('../models/category');

exports.getCategoryById = (eq, res, next, id) => {

    category.findById(id).exec((err, cate) =>{
        if(err){
            return res.staus(400).json({
                error: "Category not found in DB"
            });
        }
        req.category = cate;
        next();
    })
};

exports.createCategory = (req, res) => {
    const category = new Category(req.body);
    category.save((err, category) => {
            if (err) {
                return res.staus(400).json({
                    error: "NOT able to save category in DB"
                });
            }
            res.json({ category });
        });
};

exports.getCategory = (req, res) => {
    return res.json(req.category);
};

exports.getAllCategory = (req, res) => {
    Category.find().exec((err, categories) =>{
        if (err) {
            return res.staus(400).json({
                error: "NO categories found"
            });
        }
        res.json(categories);
    })
};

exports.updateCategory = (req, res) =>{
    const category = req.category;
    //name is being set by frontend request
    category.name = req.body.name;

    category.save((err, updatedCategory) =>{
        if (err) {
            return res.staus(400).json({
                error: "Failed to update category"
            });
        }
        res.json(updatedCategory);
    });
};