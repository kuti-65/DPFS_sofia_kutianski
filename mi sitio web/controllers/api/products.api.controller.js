const { where } = require("sequelize");
const db = require("../../database/models");

module.exports = {
    detail: async (req, res) => {
        try {
            let model = await db.Product.findByPk(req.params.id);

            const modelDetail = model.toJSON();

            // Agregar campos adicionales
            modelDetail.imageUrl = `http://localhost:3000/images/modelos/${model.image}`;

            res.json(modelDetail);
        } catch (error) {
            console.log(error);
        }
    },


    products: async (req, res) => {
        try {
            let models = await db.Product.findAll();

            const modelUrls = models.map(model => {
                return {
                    ...model.toJSON(),
                    imageUrl: `http://localhost:3000/images/modelos/${model.image}`,
                    url: `http://localhost:3000/api/products/detail/${model.id}`,
                }
            });

            // Transformar a objeto
           
            res.json({
                count: modelUrls.length,
                models: modelUrls,
            })
        } catch (error) {
            console.log(error);

        }
    },

    createProduct: async (req, res) => {
        try {
            // Armamos el nuevo producto en base a lo que  viene en el formulario
            const newProduct = {
                name: req.body.name,
                description: req.body.description,
                image: req.file?.filename || "not-found.jpg",
                price: req.body.price,
                
            };
            // Insertamos el nuevo registro en nuestra tabla
            await db.Product.create(newProduct);
            // Redireccionamos
            res.json({ msg: "Success" });
        } catch (error) {
            console.log(error);
        }
    },

    lastProduct: async (req, res) => {
        try {
            let model = await db.Product.findOne({
                order: [['id', 'DESC']]
            });

            const lastModel = model.toJSON();

            // Agregar campos adicionales
            lastModel.imageUrl = `http://localhost:3000/images/modelos/${model.image}`;

            res.json(lastModel)
        } catch (error) {
            console.log(error);
        }
    },

    deleteProduct: async (req, res) => {
        try {
            await db.Product.destroy({
                where: {
                    id: req.params.id,
                },
            });
            res.json({ msg: "Success" });
        } catch (error) {
            console.log(error);
        }
    },
}