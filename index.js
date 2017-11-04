class Products {
    create() {
        const a = db.products.create({
            user: { name: 'erick' }, product: {
                price: 23.0, description: 'Mortadela', barcode: { code: '123123123' },
                date: '2013/01/01'
            },
        })
    }
    list() {
        db.
        products.find({ 'user.name': 'erick', 'product.price': { $gt: 10 }, })
    }
}
