import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "@mui/material/Link";
import React from "react";

// Generate Order Data
function createData(
  id: number,
  date: string,
  name: string,
  shipTo: string,
  paymentMethod: string,
  amount: number
) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    "16 Mar, 2019",
    "Elvis Presley",
    "Tupelo, MS",
    "VISA ⠀•••• 3719",
    312.44
  ),
  createData(
    1,
    "16 Mar, 2019",
    "Paul McCartney",
    "London, UK",
    "VISA ⠀•••• 2574",
    866.99
  ),
  createData(
    2,
    "16 Mar, 2019",
    "Tom Scholz",
    "Boston, MA",
    "MC ⠀•••• 1253",
    100.81
  ),
  createData(
    3,
    "16 Mar, 2019",
    "Michael Jackson",
    "Gary, IN",
    "AMEX ⠀•••• 2000",
    654.39
  ),
  createData(
    4,
    "15 Mar, 2019",
    "Bruce Springsteen",
    "Long Branch, NJ",
    "VISA ⠀•••• 5919",
    212.79
  ),
];

const Orders = () => {
  return (
    <React.Fragment>
      <h2 className="text-[24px] font-semibold text-[#0095CF]">
        Recent Orders
      </h2>

      <div className="">
        {/* <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Ship To</TableCell>
              <TableCell>Payment Method</TableCell>
              <TableCell align="right">Sale Amount</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.shipTo}</TableCell>
                <TableCell>{row.paymentMethod}</TableCell>
                <TableCell align="right">{`$${row.amount}`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table> */}

        <Table className="mt-8 md:mt-0">
          <TableHeader>
            <TableRow className="text-md text-[#333333] md:text-xl font-semibold">
              <TableHead>Date</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Ship To</TableHead>
              <TableHead>Payment Method</TableHead>
              <TableHead>Sale Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.shipTo}</TableCell>
                <TableCell>{row.paymentMethod}</TableCell>
                <TableCell align="right">{`$${row.amount}`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Link color="primary" href="#" sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
};

export default Orders;
