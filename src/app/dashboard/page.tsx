// import Chart from "@/components/Dashboard/Chart/Chart";
// import Deposits from "@/components/Dashboard/Deposits/Deposits";
import Orders from "@/components/Dashboard/Orders/Orders";
import { Container, Grid, Paper } from "@mui/material";

const DashboardHomePage = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
              overflow: "hidden",
            }}
          >
            {/* <Chart /> */}
            <h2>chart</h2>
          </Paper>
        </Grid>

        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            {/* <Deposits /> */}
            <h2>Deposit</h2>
          </Paper>
        </Grid>

        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Orders />
            {/* <h2>orders</h2> */}
          </Paper>
        </Grid>
      </Grid>
      {/* <Copyright sx={{ pt: 4 }} /> */}
      <div>
        <small className="flex justify-center pt-4">
          @ ALL RIGHTS RESERVED BY{" "}
          <span className="font-extrabold ms-1">FISH MART</span>
        </small>
      </div>
    </Container>
  );
};

export default DashboardHomePage;
