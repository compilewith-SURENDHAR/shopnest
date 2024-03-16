const Product = require('../models/Products')

module.exports = {
    createProduct: async (req, res) => {
        const newProuct = new Product(rq.body)
        try {
            await newProuct.save()
            res.status(200).json("product crrated successfully")
        } catch (error) {
            res.status(500).json("product creation failed")
        }
    },

    getAllProduct: async (req, res) => {
        try {
            const products = await Product.find().sort({createdAt: -1})
            res.status(200).json(products)
        } catch (error) {
            res.status(500).json("failed to get the product")
        }
    },

    getProduct: async (req, res) => {
        try {
            const product = await Product.findById(req.params.id)
            res.status(200).json(product)
        } catch (error) {
            res.status(500).json("failed to get product")
        }
    },

    searchProducts: async (req, res) => {
        try {
            const result = await Product.aggregate(
                [
                    {
                      $search: {
                        index: "things",
                        text: {
                          query: req.params.key,
                          path: {
                            wildcard: "*"
                          }
                        }
                      }
                    }
                  ]
            )
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json("failed to get the product")
        }
    }

}