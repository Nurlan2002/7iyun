const CategoriesModel = require("../models/categoryModel");

const categoryController = {

    // Get All
    getAll: async (req, res) => {
        const { name } = req.query;
        const categories = await CategoriesModel.find();
        if (!name) {
            res.status(200).send({ categories });
        } else {
            res.status(200).send(
                categories.filter((x) =>
                    x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
                )
            );
        }
    },
    // Get by ID
    getByID: async (req, res) => {
        const id = req.params.id;
        const category = await CategoriesModel.findById(id);
        if (!category) {
            res.status(204).send("category not found!");
        } else {
            res.status(200).send(category);
        }
    },
    // Delete
    delete: async (req, res) => {
        const { id } = req.params;
        const deletedCategory = await CategoriesModel.findByIdAndDelete(id);
        await CategoriesModel.deleteMany({ sliderID: id });
        if (!deletedCategory) {
            res.status(404).send("category not found");
        } else {
            res.status(203).send(deletedCategory);
        }
    },

    // Post
    post: async (req, res) => {
        const { name } = req.body;
        const newCategory = new CategoriesModel({
            name: name,
        });
        await newCategory.save();
        res.status(201).send("created");
    },
    // Edit
    edit: async (req, res) => {
        const { id } = req.params;
        const { name } = req.body;
        const existedCategory = await CategoriesModel.findByIdAndUpdate(id, {
            name: name,
        });
        if (!existedCategory) {
            res.status(404).send("category not found!");
        } else {
            res.status(200).send(`${name} updated successfully!`);
        }
    },
};

module.exports = categoryController;