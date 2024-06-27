import Topbar from "./Components/Topbar";
import { Grid, Paper, Box, Typography } from "@mui/material";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import {
  CalendarMonth,
  ChatBubbleOutlineOutlined,
  Favorite,
  IosShareOutlined,
  List,
  MoreVertOutlined,
  Photo,
  Verified,
  VideoCall,
} from "@mui/icons-material";

const user = {
  name: "Eslender Cruz",
  photo: "../src/assets/userpfp.jpeg",
};

const options = [
  {
    name: "Photo",
    icon: <Photo sx={{ color: "#00FE99" }} />,
  },
  {
    name: "Video",
    icon: <VideoCall sx={{ color: "#0099FE" }} />,
  },
  {
    name: "Poll",
    icon: <List sx={{ color: "#FE9900" }} />,
  },
  {
    name: "Schedule",
    icon: <CalendarMonth sx={{ color: "#FE6FBB" }} />,
  },
];

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
      <Grid container sx={{ width: "100%", height: "89vh" }}>
        <Grid item lg={2} sx={{ display: "flex", justifyContent: "center" }}>
          <Grid container>
            <Paper
              sx={{
                borderRadius: 4,
                backgroundColor: "#202020",
                width: "100%",
                margin: 1.3,
                overflow: "hidden",
              }}
              elevation={0}
            >
              <Box sx={{ position: "relative" }}>
                <img
                  src="../../../src/assets/backgroundUser.jpg"
                  width="100%"
                />
                <MoreVertOutlined
                  sx={{
                    color: "#FFF",
                    position: "absolute",
                    right: 0,
                    marginTop: 1,
                  }}
                />
                <Box
                  sx={{
                    width: "70px",
                    height: "70px",
                    overflow: "hidden",
                    borderRadius: 2,
                    border: "3px solid #151515",
                    position: "absolute",
                    top: "85px",
                    left: "32%",
                  }}
                >
                  <img src={user.photo} width="100%" />
                </Box>
                <Box
                  sx={{
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    width: "100%",
                    top: "170px",
                  }}
                >
                  <Typography sx={{ fontSize: 14, fontWeight: "bold" }}>
                    Eslender Cruz
                  </Typography>
                  <Typography
                    sx={{ fontSize: 12, color: "#6D6D6D", fontWeight: "light" }}
                  >
                    @whoseslender
                  </Typography>
                  <Typography
                    sx={{ fontSize: 11, color: "#2e7d32", fontWeight: "bold" }}
                  >
                    Full-Stack Developer
                  </Typography>
                  <Box sx={{ display: "flex", gap: 3, marginTop: 4 }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Typography sx={{ fontWeight: "bold", fontSize: 12 }}>
                        1.2K
                      </Typography>
                      <Typography sx={{ fontSize: 12, color: "#6D6D6D" }}>
                        Following
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Typography sx={{ fontWeight: "bold", fontSize: 12 }}>
                        11K
                      </Typography>
                      <Typography sx={{ fontSize: 12, color: "#6D6D6D" }}>
                        Followers
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
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
                marginTop: 0,
                margin: 1.3,
                height: "14%",
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
                  <Grid
                    container
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {options.map((item, idx) => (
                      <Grid
                        lg={3}
                        key={idx}
                        sx={{ display: "flex", justifyContent: "center" }}
                      >
                        <Paper
                          sx={{
                            display: "flex",
                            color: "#FFF",
                            marginTop: 2,
                            gap: 1,
                            background: "#151515",
                            width: "60%",
                            padding: 0.5,
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {item.icon}
                          <Typography sx={{ fontSize: 12 }}>
                            {item.name}
                          </Typography>
                        </Paper>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
            <Paper
              sx={{
                borderRadius: 4,
                backgroundColor: "#202020",
                padding: 3,
                margin: 1.3,
                height: "50%",
                display: "flex",
                flexDirection: "column",
              }}
              elevation={0}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box
                    sx={{
                      width: "40px",
                      height: "40px",
                      overflow: "hidden",
                      borderRadius: 2,
                      border: "3px solid #151515",
                    }}
                  >
                    <img src={stories[3].pfp} width="100%" />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      color: "#FFF",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#6D6D6D",
                        fontSize: 11,
                        display: "flex",
                        alignItems: "center",
                        gap: 0.3,
                      }}
                    >
                      @Shermanpi{" "}
                      <Verified sx={{ fontSize: 11, color: "lightblue" }} />
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 15,
                        fontWeight: "bold",
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      {stories[3].name} Perez
                      <div className="ago">
                        <li>
                          <span>1hr ago</span>
                        </li>
                      </div>
                    </Typography>
                  </Box>
                </Box>
                <MoreVertOutlined sx={{ color: "#FFF" }} />
              </Box>
              <Box
                sx={{
                  padding: 1,
                  paddingLeft: 0,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography sx={{ color: "#FFF", fontSize: 14 }}>
                  Just finished building this beautiful looking music player,
                  you can find it on{" "}
                  <a
                    href="https://music-player-dun-eta.vercel.app/"
                    target="_blank"
                  >
                    https://music-player-dun-eta.vercel.app/
                  </a>
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    width: "100%",
                    paddingTop: "10px",
                  }}
                >
                  <img
                    src="../../../src/assets/postImg.png"
                    height="200px"
                    width="360px"
                    className="roundedImg"
                  />
                  <img
                    src="../../../src/assets/postImg2.png"
                    height="200px"
                    width="360px"
                    className="roundedImg"
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    height: "50px",
                    width: "100%",
                    justifyContent: "right",
                    gap: 1,
                  }}
                >
                  <Favorite color="warning" />
                  <IosShareOutlined sx={{ color: "#6D6D6D" }} />
                  <ChatBubbleOutlineOutlined sx={{ color: "#6D6D6D" }} />
                </Box>
              </Box>
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
