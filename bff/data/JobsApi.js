const { RESTDataSource } = require('apollo-datasource-rest');

class CustomersApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:4859/api';
  }

  async getJob(id) {
    return this.get(`jobs/${id}`, { }, { ttl: 6000}).catch(e => {
      console.log(e)
    })
  }
}

module.exports = CustomersApi;