import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export type Job = {
  __typename?: 'Job';
  title: Maybe<Scalars['String']>;
};

export type Customer = {
  __typename?: 'Customer';
  id: Maybe<Scalars['Int']>;
  email: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  address: Maybe<Scalars['String']>;
  country: Maybe<Scalars['String']>;
  phone: Maybe<Scalars['String']>;
  region: Maybe<Scalars['String']>;
  discount: Maybe<Scalars['Int']>;
  createdAt: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['String']>;
  job: Maybe<Job>;
  jobBatched: Maybe<Job>;
};

export type Driver = {
  __typename?: 'Driver';
  name: Maybe<Scalars['String']>;
  unitId: Maybe<Scalars['String']>;
  equipment: Maybe<Scalars['String']>;
  emails: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type TripCollapsedItem = {
  __typename?: 'TripCollapsedItem';
  id: Maybe<Scalars['String']>;
  status: Maybe<Scalars['String']>;
  tripStart: Maybe<Scalars['String']>;
  email: Maybe<Scalars['String']>;
  assignedToDriver: Maybe<Scalars['String']>;
};

export type Trip = {
  __typename?: 'Trip';
  _id: Maybe<Scalars['String']>;
  itemId: Maybe<Scalars['String']>;
  email: Maybe<Scalars['String']>;
  collapsedItem: Maybe<TripCollapsedItem>;
  driver: Maybe<Driver>;
};

export type Paginate = {
  reverse: Scalars['Boolean'];
  amount: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  customers: Maybe<Array<Maybe<Customer>>>;
  customer: Maybe<Customer>;
  trips: Maybe<Array<Maybe<Trip>>>;
};


export type QueryCustomerArgs = {
  id: Scalars['Int'];
};


export type QueryTripsArgs = {
  status: Array<Scalars['String']>;
  paginate: Paginate;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type CustomersQueryVariables = Exact<{ [key: string]: never; }>;


export type CustomersQuery = (
  { __typename?: 'Query' }
  & { customers: Maybe<Array<Maybe<(
    { __typename?: 'Customer' }
    & Pick<Customer, 'name' | 'email'>
    & { jobBatched: Maybe<(
      { __typename?: 'Job' }
      & Pick<Job, 'title'>
    )> }
  )>>> }
);

export type TripsQueryVariables = Exact<{
  status: Array<Scalars['String']> | Scalars['String'];
  paginate: Paginate;
}>;


export type TripsQuery = (
  { __typename?: 'Query' }
  & { trips: Maybe<Array<Maybe<(
    { __typename?: 'Trip' }
    & Pick<Trip, '_id'>
    & { collapsedItem: Maybe<(
      { __typename?: 'TripCollapsedItem' }
      & Pick<TripCollapsedItem, 'id' | 'status' | 'tripStart' | 'email'>
    )>, driver: Maybe<(
      { __typename?: 'Driver' }
      & Pick<Driver, 'equipment' | 'emails'>
    )> }
  )>>> }
);


export const CustomersDocument = gql`
    query customers {
  customers {
    name
    email
    jobBatched {
      title
    }
  }
}
    `;

/**
 * __useCustomersQuery__
 *
 * To run a query within a React component, call `useCustomersQuery` and pass it any options that fit your needs.
 * When your component renders, `useCustomersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCustomersQuery({
 *   variables: {
 *   },
 * });
 */
export function useCustomersQuery(baseOptions?: Apollo.QueryHookOptions<CustomersQuery, CustomersQueryVariables>) {
        return Apollo.useQuery<CustomersQuery, CustomersQueryVariables>(CustomersDocument, baseOptions);
      }
export function useCustomersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CustomersQuery, CustomersQueryVariables>) {
          return Apollo.useLazyQuery<CustomersQuery, CustomersQueryVariables>(CustomersDocument, baseOptions);
        }
export type CustomersQueryHookResult = ReturnType<typeof useCustomersQuery>;
export type CustomersLazyQueryHookResult = ReturnType<typeof useCustomersLazyQuery>;
export type CustomersQueryResult = Apollo.QueryResult<CustomersQuery, CustomersQueryVariables>;
export const TripsDocument = gql`
    query trips($status: [String!]!, $paginate: Paginate!) {
  trips(status: $status, paginate: $paginate) {
    _id
    collapsedItem {
      id
      status
      tripStart
      email
    }
    driver {
      equipment
      emails
    }
  }
}
    `;

/**
 * __useTripsQuery__
 *
 * To run a query within a React component, call `useTripsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTripsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTripsQuery({
 *   variables: {
 *      status: // value for 'status'
 *      paginate: // value for 'paginate'
 *   },
 * });
 */
export function useTripsQuery(baseOptions: Apollo.QueryHookOptions<TripsQuery, TripsQueryVariables>) {
        return Apollo.useQuery<TripsQuery, TripsQueryVariables>(TripsDocument, baseOptions);
      }
export function useTripsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TripsQuery, TripsQueryVariables>) {
          return Apollo.useLazyQuery<TripsQuery, TripsQueryVariables>(TripsDocument, baseOptions);
        }
export type TripsQueryHookResult = ReturnType<typeof useTripsQuery>;
export type TripsLazyQueryHookResult = ReturnType<typeof useTripsLazyQuery>;
export type TripsQueryResult = Apollo.QueryResult<TripsQuery, TripsQueryVariables>;