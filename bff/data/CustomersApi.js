const { RESTDataSource } = require('apollo-datasource-rest');

class CustomersApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:4859/api';
  }

  async getAllCustomers(i) {
    return this.get(`customers`);
  } 
}

module.exports = CustomersApi;