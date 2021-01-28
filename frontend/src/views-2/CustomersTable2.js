// @ts-check
import * as React from "react";
import { useCustomersQuery } from "../generated/graphql";
import { Table, TableBody, TableRow, TableCell } from "@material-ui/core";

export function CustomersTable2() {
  const { loading, error, data } = useCustomersQuery();

  if (loading) {
    return "...loading";
  }

  if (error || !data) {
    return "something went wrong";
  }

  return (
    <>
      <h1> Customers 2</h1>
      <Table>
        <TableBody>
    
          {data.customers?.map((customer) => (
            <TableRow key={customer?.email}>
              <TableCell>{customer?.name}</TableCell>
              <TableCell>{customer?.email}</TableCell>
              <TableCell>{customer?.job?.title}</TableCell>
            </TableRow>
          ))}
        </TableBody>
    </Table>
    </>
  );
}
