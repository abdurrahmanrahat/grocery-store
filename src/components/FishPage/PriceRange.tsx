"use client";

import { Checkbox, FormControlLabel } from "@mui/material";

const PriceRange = () => {
  //   const router = useRouter();
  //   console.log(router);

  //   const handleFilterPrice = (minPrice, maxPrice) => {
  //     const queryParams = {
  //       ...router.query,
  //       minPrice,
  //       maxPrice,
  //     };

  //     router.push({
  //       pathname: router.pathname,
  //       query: queryParams,
  //     });
  //   };

  // console.log(searchParams);

  // const handleFilterPrice = (priceAmount) => {
  //   const queryParams = new URLSearchParams();
  //   queryParams.set("price", priceAmount);
  //   console.log(queryParams);
  // };

  return (
    <div className="flex flex-col mt-4">
      <FormControlLabel
        control={<Checkbox />}
        onClick={() => handleFilterPrice("200")}
        label="$200 - $300"
      />
      <FormControlLabel control={<Checkbox />} label="$300 - $400" />
      <FormControlLabel control={<Checkbox />} label="$400 - $500" />
      <FormControlLabel control={<Checkbox />} label="$500 - $600" />
    </div>
  );
};

export default PriceRange;
