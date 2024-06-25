const Order = require('../models/order');

exports.createOrder = async (req, res) => {
    try {
        const order = new Order(req.body);
        await order.save();
        res.status(201).json(order);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate('user products');
        res.status(200).json(orders);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
