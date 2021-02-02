const { gql } = require("apollo-server");

const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
  type Job {
    title: String
  }

  type Customer {
    id: Int
    email: String
    name: String
    address: String
    country: String
    phone: String
    region: String
    discount: Int
    createdAt: String
    updatedAt: String
    job: Job
    jobBatched: Job
  }

  type Driver {
    name: String
    unitId: String
    equipment: String
    emails: [String]
  }

  type TripCollapsedItem {
    id: String
    status: String
    tripStart: String
    email: String
    assignedToDriver: String
  }

  type Trip {
    _id: String
    itemId: String
    email: String
    collapsedItem: TripCollapsedItem
    driver: Driver
  }

  input Paginate {
    reverse: Boolean!
    amount: Int!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "customers" query returns an array of zero or more Customers (defined above).
  type Query {
    customers: [Customer]
    customer(id: Int!): Customer
    trips(status: [String!]!, paginate: Paginate!): [Trip]
  }
`;

module.exports = {
  typeDefs,
};
