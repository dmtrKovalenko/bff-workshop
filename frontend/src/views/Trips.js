import * as React from "react";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
} from "@material-ui/core";

const AUTH_TOKEN =
  "jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZjdiNTg2NGVkZDc2YTAwMTk5YjJlYWUiLCJjb21wYW55SWQiOiI1ZjRiZWEzYzU3ZTI2OTAwMWE3ZWRjOTIiLCJjb21wYW55TmFtZSI6IkF1dG9tYXRpemUiLCJlbWFpbHMiOlsiYnJpYW5AYXV0b21hdGl6ZS5jb20iXSwibmFtZSI6IkJyaWFuIFRob21wc29uIiwiaWF0IjoxNjExNjcxNjU3fQ.ipaEBJGaFXILc49et30htKeePpQpUh82OzqkrhJJzOc";

const fetchTrips = () => {
  return fetch("https://dev-api.automatize.app/io/trips/search", {
    method: "POST",
    headers: {
      Authorization: AUTH_TOKEN,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      params: { status: ["Needs Review", "In Progress"] },
      projection: {
        "collapsedItem.geoJson": 0,
        "collapsedItem.predictedRoute": 0,
      },
      paginate: { reverse: true, amount: 25 },
    }),
  }).then((res) => res.json());
};

const fetchDrivers = () => {
  return fetch("https://dev-api.automatize.app/api/drivers/units/search", {
    method: "POST",
    headers: {
      Authorization: AUTH_TOKEN,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      params: {},
    }),
  }).then((res) => res.json());
};

export function Trips() {
  const [trips, setTrips] = React.useState(null);
  const [drivers, setDrivers] = React.useState(null);

  React.useEffect(() => {
    fetchTrips().then((trips) => {
      setTrips(trips.results);
    });

    fetchDrivers().then((drivers) => {
      setDrivers(drivers);
    });
  }, []);

  if (!trips || !drivers) {
    return "loading...";
  }

  return (
    <>
      <Typography variant="h2"> Trip </Typography>
      <Table>
        <TableBody>
          {trips.map(({ collapsedItem: trip }) => {
            const driver = drivers.find(
              (driver) => driver.unitId === trip.assignedToDriver?.id
            );

            return (
              <TableRow key={trip.id}>
                <TableCell>{trip.status}</TableCell>
                <TableCell>{trip.tripStart}</TableCell>
                <TableCell>{trip.email}</TableCell>
                <TableCell>{driver?.equipment}</TableCell>
                <TableCell>{driver?.emails.join(",")}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}
