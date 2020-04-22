module.exports = () => {
    const customerWalletsDB = app.data.customerWallets;
    const controller = {};

    controller.listCustomerWaller = (req, res) => res.status(200).json(customerWalletsDB);
    
    return controller;
}