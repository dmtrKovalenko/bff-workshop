const AutomatizeDataSource = require("./AutomatizeDataSource");

module.exports = class TripsApi extends (
  AutomatizeDataSource
) {
  async getTrips(status, paginate) {
    return this.post("io/trips/search", {
      params: {
        status,
      },
      paginate,
      projection: {
        "collapsedItem.geoJson": 0,
        "collapsedItem.predictedRoute": 0,
      },
    }).then((res) => res.results);
  }
};
