module.exports = app => {
    const controller = app.controllers.listCustomerWallets;
  
    app.route('/api/v1/customer-wallets')
      .get(controller.listCustomerWallets);
}