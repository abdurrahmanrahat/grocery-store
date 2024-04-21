"use client";

import LoadingPage from "@/app/loading";
import {
  useDeleteFishIntoDbMutation,
  useGetAllFishesFromDbQuery,
} from "@/redux/api/fishApi";
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
import { useState } from "react";
import toast from "react-hot-toast";
import FishModal from "./components/FishModal";

const AllProductsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: fishes, isLoading } = useGetAllFishesFromDbQuery({});
  // console.log(fishes);

  const [deleteFishIntoDb] = useDeleteFishIntoDbMutation();

  // handle fish delete
  const handleFishDelete = async (fishId: string) => {
    try {
      const res = await deleteFishIntoDb(fishId).unwrap();
      // console.log(res);
      if (res.success) {
        toast.success(res?.message);
      }
    } catch (error: any) {
      console.error(error?.message);
    }
  };

  if (isLoading) {
    return <LoadingPage />;
  }

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
            {fishes?.data?.map((fish: TFish, index: number) => (
              <TableRow key={fish._id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell
                  sx={{
                    display: "flex",
                    gap: "4px",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "auto",
                      height: "auto",
                    }}
                  >
                    <Image
                      src={fish.image[0]}
                      width={80}
                      height={80}
                      alt={fish.title}
                      className="rounded-md"
                    />
                  </Box>
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
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="border border-solid border-[#0095CF] p-[2px] rounded-[4px]"
                  >
                    <ModeOutlinedIcon color="primary" />
                  </button>
                  <FishModal
                    open={isModalOpen}
                    setOpen={setIsModalOpen}
                    fishId={fish._id}
                    fish={fish}
                  />
                </TableCell>
                <TableCell>
                  <button onClick={() => handleFishDelete(fish._id)}>
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
