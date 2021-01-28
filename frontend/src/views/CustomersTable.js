import * as React from "react";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
} from "@material-ui/core";

export function CustomersTable() {
  const [customers, setCustomers] = React.useState(null);
  const [jobs, setJobs] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:4859/api/customers")
      .then((res) => res.json())
      .then((customers) => {
        setCustomers(customers);

        fetch("http://localhost:4859/api/jobs")
          .then((res) => res.json())
          .then((jobs) => {
            setJobs(jobs);
          });
      });
  }, []);

  if (!customers || !jobs) {
    return "loading...";
  }

  return (
    <>
      <Typography variant="h2"> Customers </Typography>
      <Table>
        <TableBody>
          {customers.map((customer) => {
            const job = jobs.find((job) => job.id === customer.id);
            return (
              <TableRow key={customer.id}>
                <TableCell>{customer.name}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{job?.title}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}
