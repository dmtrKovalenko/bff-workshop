const AutomatizeDataSource = require("./AutomatizeDataSource");

module.exports = class TripsApi extends (
  AutomatizeDataSource
) {
  async getDriver(unitId) {
    return this.get(`api/drivers/units/${unitId}`);
  }
};
