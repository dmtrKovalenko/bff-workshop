const { RESTDataSource } = require('apollo-datasource-rest');

class CustomersApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:4859/api';
  }

  async getAllCustomers(i) {
    return this.get(`customers`);
  } 

  async getCustomer(id) {
    return this.get(`customers/${id}`)
  }

  async updateCustomer(id, customer) { 
    return this.post(`customers/${id}`, {...customer})
  }
}

module.exports = CustomersApi;