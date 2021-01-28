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
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    customers: [Customer]
    customer(id: Int!): Customer
  }
`;

module.exports = {
  typeDefs,
};
