const Order = require('../models/Order');

// Controller to create a new order
exports.createOrder = async (req, res) => {
  try {

    // create a new order using req.body
    const newOrder = await Order.create(req.body);
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller to get orders for a specific user
exports.getUserOrders = async (req, res) => {
  try {
    // Logic to fetch orders for a specific user
    const userOrders = await Order.find({ user: req.params.userId });
    res.status(200).json(userOrders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
