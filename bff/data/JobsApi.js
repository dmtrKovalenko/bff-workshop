const DataLoader = require("dataloader");
const { RESTDataSource } = require("apollo-datasource-rest");

class CustomersApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:4859/api";
  }


  async getJob(id) {
    return this.get(`jobs/${id}`, {}, { ttl: 6000 }).catch((e) => {
      console.log(e);
    });
  }

  batchedJobsLoader = new DataLoader(async (jobIds) => {
    const allJobs = await this.get("jobs");

    return jobIds.map(id => allJobs.find(job => job.id === id))
  });

  async getJobBatched(id) {
    return this.batchedJobsLoader.load(id)
  }
}

module.exports = CustomersApi;
