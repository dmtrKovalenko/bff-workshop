const AutomatizeDataSource = require("./AutomatizeDataSource");

module.exports = class TripsApi extends (
  AutomatizeDataSource
) {
  async getTrips() {
    return this.post("io/trips/search", {
      params: {
        status: ["Needs Review", "In Progress"],
      },
      projection: {
        "collapsedItem.geoJson": 0,
        "collapsedItem.predictedRoute": 0,
      },
      paginate: { reverse: true, amount: 25 },
    }).then((res) => res.results);
  }
};
