import { TFish } from "@/types";
import {
  Box,
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import Image from "next/image";

const AllProductsPage = async () => {
  const res = await fetch(
    "https://grocery-store-server-one.vercel.app/api/v1/fishes"
  );
  const { data: fishes } = await res.json();

  return (
    <Container
      sx={{
        margin: "32px 0px",
      }}
    >
      <h2 className="text-[28px] font-semibold text-[#010937] mb-6">
        All Products
      </h2>

      {/* table */}
      <div className="overflow-hidden overflow-x-auto">
        <Table size="small">
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: "#ddd",
              }}
            >
              <TableCell
                sx={{
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                SL NO
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                Items
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                Category
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                Ratings
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                Price
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {fishes?.map((fish: TFish, index: number) => (
              <TableRow key={fish._id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell
                  sx={{
                    display: "flex",
                    gap: "4px",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={fish.image[0]}
                    width={80}
                    height={80}
                    alt={fish.title}
                    className="rounded-md"
                  />
                  <Box
                    sx={{
                      fontSize: "20px",
                      fontWeight: "500",
                    }}
                  >
                    {fish.title}
                  </Box>
                </TableCell>
                <TableCell>{fish.category}</TableCell>
                <TableCell>{fish.ratings}</TableCell>
                <TableCell>{fish.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Container>
  );
};

export default AllProductsPage;