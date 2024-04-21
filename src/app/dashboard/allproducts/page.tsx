import { TFish } from "@/types";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeOutlinedIcon from "@mui/icons-material/ModeOutlined";
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
      <div className="mb-12">
        <h2 className="text-[28px] font-semibold text-[#010937]">All Fishes</h2>
        <div className="h-[2px] w-[160px] rounded-full bg-gradient-to-r from-transparent via-[#0095CF] to-transparent"></div>
      </div>

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
              <TableCell
                sx={{
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                Edit
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                Delete
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
                <TableCell>
                  <button className="border border-solid border-[#0095CF] p-[2px] rounded-[4px]">
                    <ModeOutlinedIcon color="primary" />
                  </button>
                </TableCell>
                <TableCell>
                  <button>
                    <DeleteOutlineOutlinedIcon fontSize="large" color="error" />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Container>
  );
};

export default AllProductsPage;
