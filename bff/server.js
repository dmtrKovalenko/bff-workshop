// @ts-check
const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const CustomersApi = require("./data/CustomersApi");
const JobsApi = require("./data/JobsApi");
const TripsApi = require("./data/TripsApi");
const DriversApi = require("./data/DriversApi");

const resolvers = {
  Query: {
    customers: (_source, _args, { dataSources }) =>
      dataSources.customersApi.getAllCustomers(),
    customer: (_source, args, { dataSources }) =>
      dataSources.customersApi.getCustomer(args.id),
    trips: (_source, args, { dataSources }) =>
      dataSources.tripsApi.getTrips(args.status, args.paginate),
  },
  Customer: {
    job: (source, _args, { dataSources }) => {
      return dataSources.jobsApi.getJob(source.jobId);
    },
    jobBatched: (source, _args, { dataSources }) => {
      return dataSources.jobsApi.getJobBatched(source.jobId);
    },
  },
  Trip: {
    driver: (source, _arg, { dataSources }) => {
      if (
        source &&
        source.collapsedItem &&
        source.collapsedItem.assignedToDriver &&
        source.collapsedItem.assignedToDriver.id
      ) {
        return dataSources.driversApi.getDriver(
          source.collapsedItem.assignedToDriver.id
        );
      }

      return null;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      customersApi: new CustomersApi(),
      jobsApi: new JobsApi(),
      driversApi: new DriversApi(),
      tripsApi: new TripsApi(),
    };
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
