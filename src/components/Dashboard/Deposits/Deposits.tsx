import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import React from "react";

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

const Deposits = () => {
  return (
    <React.Fragment>
      <h2 className="text-[24px] font-semibold text-[#0095CF]">
        Recent Deposits
      </h2>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Deposits;
