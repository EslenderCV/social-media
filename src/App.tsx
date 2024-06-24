import Topbar from "./Components/Topbar";
import { Grid, Paper, Box, Typography } from "@mui/material";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";

const user = {
  name: "Eslender Cruz",
  photo: "../src/assets/userpfp.jpeg",
};

const stories = [
  {
    name: "Jakiry",
    pfp: "./src/assets/pfp2.jpeg",
    toview: true,
  },
  {
    name: "Isaac",
    pfp: "./src/assets/pfp.jpeg",
    toview: false,
  },
  {
    name: "Clemencia",
    pfp: "./src/assets/pfp5.jpeg",
    toview: false,
  },
  {
    name: "Sherman",
    pfp: "./src/assets/pfp3.jpeg",
    toview: false,
  },
  {
    name: "Daniel",
    pfp: "./src/assets/pfp7.jpeg",
    toview: false,
  },
  {
    name: "Richard",
    pfp: "./src/assets/pfp6.jpeg",
    toview: false,
  },
  {
    name: "Angel",
    pfp: "./src/assets/pfp4.jpeg",
    toview: false,
  },
];

function App() {
  return (
    <>
      <Topbar />
      <br />
      <Grid container sx={{ width: "100%", height: "87vh" }}>
        <Grid item lg={2} sx={{ display: "flex", justifyContent: "center" }}>
          <Grid container>
            <Paper
              sx={{
                borderRadius: 4,
                backgroundColor: "#202020",
                padding: 3,
                width: "100%",
                margin: 1.3,
              }}
              elevation={0}
            >
              <Grid item lg={12}>
                {" "}
                item 1
              </Grid>
            </Paper>
            <Paper
              sx={{
                borderRadius: 4,
                backgroundColor: "transparent",
                padding: 3,
                width: "100%",
                margin: 1.3,
              }}
              elevation={0}
            >
              <Grid item lg={12}>
                Item 2
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <Grid
          item
          lg={8}
          sx={{ display: "flex", justifyContent: "center", height: "100%" }}
        >
          <Grid container direction="column" alignItems="stretch">
            <Paper
              sx={{
                borderRadius: 4,
                backgroundColor: "transparent",
                padding: 0,
                margin: 1.3,
                height: "15%",
                marginBottom: 0,
                display: "flex",
                alignItems: "center",
              }}
              elevation={0}
            >
              <KeyboardArrowLeftOutlinedIcon sx={{ color: "white" }} />
              <Box
                sx={{
                  display: "flex",
                  overflow: "hidden",
                  width: "100%",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                {stories.map((item) => {
                  return (
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{
                          marginRight: 3,
                          borderRadius: 4,
                          overflow: "hidden",
                          width: "50px",
                          height: "50px",
                          padding: "5px",
                          border: `1px solid ${
                            item.toview ? "#2e7d32" : "gray"
                          }`,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          src={item.pfp}
                          width="100%"
                          height="100%"
                          className="story"
                        />
                      </Box>
                      <Typography
                        sx={{
                          color: `${item.toview ? "white" : "#999"}`,
                          fontSize: 12,
                          textAlign: "center",
                          marginRight: 3,
                          marginTop: 1,
                        }}
                      >
                        {item.name}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
              <KeyboardArrowRightOutlinedIcon sx={{ color: "white" }} />
            </Paper>
            <Paper
              sx={{
                borderRadius: 4,
                backgroundColor: "#202020",
                padding: 2,
                margin: 1.3,
                height: "14%",
                marginTop: 3,
              }}
              elevation={0}
            >
              <Grid item>
                <Grid container sx={{ display: "flex", alignItems: "center" }}>
                  <Grid lg={1}>
                    <Box
                      sx={{
                        width: "40px",
                        height: "40px",
                        overflow: "hidden",
                        borderRadius: 2,
                        border: "3px solid #151515",
                      }}
                    >
                      <img src={user.photo} width="100%" />
                    </Box>
                  </Grid>
                  <Grid lg={11}>
                    <input
                      type="text"
                      className="inputPost"
                      placeholder="Tell your friends about your thoughts..."
                    />
                  </Grid>
                  <Grid lg={3}>
                    <Paper>photo</Paper>
                  </Grid>
                  <Grid lg={3}>video</Grid>
                  <Grid lg={3}>poll</Grid>
                  <Grid lg={3}>schedule</Grid>
                </Grid>
              </Grid>
            </Paper>
            <Paper
              sx={{
                borderRadius: 4,
                backgroundColor: "#202020",
                padding: 3,
                margin: 1.3,
                height: "43%",
              }}
              elevation={0}
            >
              <Grid item lg={2}>
                Item 2
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <Grid item lg={2} sx={{ display: "flex", justifyContent: "center" }}>
          <Paper
            sx={{
              borderRadius: 4,
              backgroundColor: "#202020",
              padding: 3,
              width: "100%",
              margin: 1.3,
              height: "89%",
            }}
            elevation={0}
          ></Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
