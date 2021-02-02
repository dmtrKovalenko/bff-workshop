// @ts-check
import * as React from "react";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
} from "@material-ui/core";
import { useTripsQuery } from "../generated/graphql";

export function Trips2() {
  const { loading, error, data } = useTripsQuery({
    variables: {
      status: ["Needs Review", "In Progress"],
      paginate: {
        amount: 25,
        reverse: true,
      },
    },
  });

  if (loading) {
    return "loading...";
  }

  if (error || !data) {
    return "something went wrong";
  }

  return (
    <>
      <Typography variant="h2"> Trip </Typography>
      <Table>
        <TableBody>
          {data.trips?.map((trip) => {
            return (
              <TableRow key={trip?._id}>
                <TableCell>{trip?.collapsedItem?.status}</TableCell>
                <TableCell>{trip?.collapsedItem?.tripStart}</TableCell>
                <TableCell>{trip?.collapsedItem?.email}</TableCell>
                <TableCell>{trip?.driver?.equipment}</TableCell>
                <TableCell>{trip?.driver?.emails?.join(",")}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}
