import Topbar from "./Components/Topbar";
import { Grid, Paper, Box, Typography } from "@mui/material";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import {
  CalendarMonth,
  ChatBubbleOutlineOutlined,
  Favorite,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  IosShareOutlined,
  List,
  MoreVertOutlined,
  Photo,
  Verified,
  VideoCall,
} from "@mui/icons-material";
import { useState } from "react";

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
    at: "@Soribel23",
  },
  {
    name: "Isaac",
    pfp: "./src/assets/pfp.jpeg",
    toview: false,
    at: "@Isaaccruz",
  },
  {
    name: "Clemencia",
    pfp: "./src/assets/pfp5.jpeg",
    toview: false,
    at: "@ClemenV",
  },
  {
    name: "Sherman",
    pfp: "./src/assets/pfp3.jpeg",
    toview: false,
    at: "@Shermanpi",
  },
  {
    name: "Daniel",
    pfp: "./src/assets/pfp7.jpeg",
    toview: false,
    at: "@Juan_daniel",
  },
  {
    name: "Richard",
    pfp: "./src/assets/pfp6.jpeg",
    toview: false,
    at: "@MoralesR",
  },
  {
    name: "Angel",
    pfp: "./src/assets/pfp4.jpeg",
    toview: false,
    at: "@Daviddiaz",
  },
];

function App() {
  const [like, setLike] = useState(true);
  return (
    <>
      <Topbar />
      <Grid container sx={{ width: "100%", height: "89vh" }}>
        <Grid item lg={3} sx={{ display: "flex", justifyContent: "center" }}>
          <Grid container>
            <Paper
              sx={{
                borderRadius: 4,
                backgroundColor: "#202020",
                width: "100%",
                margin: 1.3,
                marginBottom: 0,
                overflow: "hidden",
                height: "48%",
              }}
              elevation={2}
            >
              <Box sx={{ position: "relative" }}>
                <img
                  src="../../../src/assets/backgroundUser.jpg"
                  width="100%"
                  height="120px"
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
                    left: "38%",
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
                width: "100%",
                paddingTop: 0,
                padding: 2,
                color: "#FFF",
                display: "flex",
                flexDirection: "column",
                height: "37%",
              }}
              elevation={0}
            >
              <Typography sx={{ fontWeight: "bold", fontSize: 15 }}>
                Recent chats
              </Typography>
              <Box sx={{ display: "flex", marginTop: 1, gap: 1 }}>
                <Box
                  sx={{
                    width: "40px",
                    height: "40px",
                    overflow: "hidden",
                    borderRadius: 2,
                    border: "2px solid #151515",
                  }}
                >
                  <img src={stories[0].pfp} width="100%" />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography sx={{ fontSize: 13 }}>
                    {stories[0].name}
                  </Typography>
                  <Typography sx={{ fontSize: 12, color: "#6D6D6D" }}>
                    {stories[0].at}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", marginTop: 1, gap: 1 }}>
                <Box
                  sx={{
                    width: "40px",
                    height: "40px",
                    overflow: "hidden",
                    borderRadius: 2,
                    border: "2px solid #151515",
                  }}
                >
                  <img src={stories[1].pfp} width="100%" />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography sx={{ fontSize: 13 }}>
                    {stories[1].name}
                  </Typography>
                  <Typography sx={{ fontSize: 12, color: "#6D6D6D" }}>
                    {stories[1].at}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", marginTop: 1, gap: 1 }}>
                <Box
                  sx={{
                    width: "40px",
                    height: "40px",
                    overflow: "hidden",
                    borderRadius: 2,
                    border: "2px solid #151515",
                  }}
                >
                  <img src={stories[2].pfp} width="100%" />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography sx={{ fontSize: 13 }}>
                    {stories[2].name}
                  </Typography>
                  <Typography sx={{ fontSize: 12, color: "#6D6D6D" }}>
                    {stories[2].at}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", marginTop: 1, gap: 1 }}>
                <Box
                  sx={{
                    width: "40px",
                    height: "40px",
                    overflow: "hidden",
                    borderRadius: 2,
                    border: "2px solid #151515",
                  }}
                >
                  <img src={stories[3].pfp} width="100%" />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography sx={{ fontSize: 13 }}>
                    {stories[3].name}
                  </Typography>
                  <Typography sx={{ fontSize: 12, color: "#6D6D6D" }}>
                    {stories[3].at}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
        <Grid
          item
          lg={6}
          sx={{ display: "flex", justifyContent: "center", height: "100%" }}
        >
          <Grid container direction="column">
            <Paper
              sx={{
                backgroundColor: "transparent",
                padding: 0,
                height: "15%",
                marginBottom: 0,
                display: "flex",
                alignItems: "center",
                width: "100%",
                justifyContent: "center",
                gap: 3,
              }}
              elevation={0}
            >
              <KeyboardArrowLeftOutlinedIcon sx={{ color: "white" }} />
              {stories.map((item) => {
                return (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      sx={{
                        borderRadius: 4,
                        overflow: "hidden",
                        width: "40px",
                        height: "40px",
                        padding: "5px",
                        border: `1px solid ${item.toview ? "#2e7d32" : "gray"}`,
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
                        marginTop: 1,
                      }}
                    >
                      {item.name}
                    </Typography>
                  </Box>
                );
              })}
              <KeyboardArrowRightOutlinedIcon sx={{ color: "white" }} />
            </Paper>
            <Paper
              sx={{
                borderRadius: 4,
                backgroundColor: "#202020",
                marginTop: 0,
                height: "14%",
                width: "95%",
                padding: 2,
              }}
              elevation={2}
            >
              <Grid container sx={{ display: "flex", alignItems: "center" }}>
                <Grid lg={1}>
                  <Box
                    sx={{
                      width: "40px",
                      height: "40px",
                      overflow: "hidden",
                      borderRadius: 2,
                      border: "2px solid #151515",
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
            </Paper>
            <Paper
              sx={{
                borderRadius: 4,
                backgroundColor: "#202020",
                height: "58%",
                width: "95%",
                display: "flex",
                flexDirection: "column",
                padding: 2,
                marginTop: 1,
              }}
              elevation={2}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Box
                    sx={{
                      width: "30px",
                      height: "30px",
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
                        fontSize: 10,
                        display: "flex",
                        alignItems: "center",
                        gap: 0.3,
                      }}
                    >
                      {stories[3].at}{" "}
                      <Verified sx={{ fontSize: 10, color: "lightblue" }} />
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 13,
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
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography sx={{ color: "#FFF", fontSize: 12 }}>
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
                    height: "100%",
                    paddingTop: "10px",
                  }}
                >
                  <img
                    src="../../../src/assets/postImg.png"
                    width="100%"
                    height="265x"
                    className="roundedImg"
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    height: "30px",
                    width: "100%",
                    justifyContent: "center",
                    gap: 2,
                  }}
                >
                  {like ? (
                    <Favorite
                      onClick={() => setLike(like ? false : true)}
                      color="warning"
                      sx={{
                        fontSize: 16,
                        transition: ".2s",
                        "&:hover": {
                          scale: "1.2",
                        },
                      }}
                    />
                  ) : (
                    <FavoriteBorderOutlined
                      onClick={() => setLike(like ? false : true)}
                      sx={{
                        color: "#6D6D6D",
                        fontSize: 16,
                        transition: ".2s",
                        "&:hover": {
                          scale: "1.2",
                        },
                      }}
                    />
                  )}
                  <IosShareOutlined sx={{ color: "#6D6D6D", fontSize: 16 }} />
                  <ChatBubbleOutlineOutlined
                    sx={{ color: "#6D6D6D", fontSize: 16 }}
                  />
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
        <Grid item lg={3} sx={{ display: "flex", justifyContent: "center" }}>
          <Paper
            sx={{
              borderRadius: 4,
              backgroundColor: "#202020",
              padding: 2,
              width: "100%",
              margin: 1.3,
              height: "92%",
              display: "flex",
              flexDirection: "column",
              color: "white",
            }}
            elevation={2}
          >
            <Typography
              sx={{ fontWeight: "bold", color: "white", fontSize: 18 }}
            >
              Trends for you
            </Typography>
            <br />
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography sx={{ fontSize: 14 }}>#HurricaneBeryl</Typography>
                  <Typography sx={{ color: "#6D6D6D", fontSize: 12 }}>
                    33.2K posts
                  </Typography>
                </Box>
                <MoreVertOutlined sx={{ color: "#6D6D6D" }} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography sx={{ fontSize: 14 }}>Epstein</Typography>
                  <Typography sx={{ color: "#6D6D6D", fontSize: 12 }}>
                    211K posts
                  </Typography>
                </Box>
                <MoreVertOutlined sx={{ color: "#6D6D6D" }} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography sx={{ fontSize: 14 }}>#ALERTA</Typography>
                  <Typography sx={{ color: "#6D6D6D", fontSize: 12 }}>
                    8,814 posts
                  </Typography>
                </Box>
                <MoreVertOutlined sx={{ color: "#6D6D6D" }} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography sx={{ fontSize: 14 }}>La Romana</Typography>
                  <Typography sx={{ color: "#6D6D6D", fontSize: 12 }}>
                    2,402 posts
                  </Typography>
                </Box>
                <MoreVertOutlined sx={{ color: "#6D6D6D" }} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography sx={{ fontSize: 14 }}>Osiris</Typography>
                  <Typography sx={{ color: "#6D6D6D", fontSize: 12 }}>
                    1,979 posts
                  </Typography>
                </Box>
                <MoreVertOutlined sx={{ color: "#6D6D6D" }} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography sx={{ fontSize: 14 }}>Michelle Obama</Typography>
                  <Typography sx={{ color: "#6D6D6D", fontSize: 12 }}>
                    35.3K posts
                  </Typography>
                </Box>
                <MoreVertOutlined sx={{ color: "#6D6D6D" }} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography sx={{ fontSize: 14 }}>Senado</Typography>
                  <Typography sx={{ color: "#6D6D6D", fontSize: 12 }}>
                    39K posts
                  </Typography>
                </Box>
                <MoreVertOutlined sx={{ color: "#6D6D6D" }} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography sx={{ fontSize: 14 }}>Isla Beata</Typography>
                  <Typography sx={{ color: "#6D6D6D", fontSize: 12 }}>
                    1,373 posts
                  </Typography>
                </Box>
                <MoreVertOutlined sx={{ color: "#6D6D6D" }} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography sx={{ fontSize: 14 }}>14 Pro Max</Typography>
                  <Typography sx={{ color: "#6D6D6D", fontSize: 12 }}>
                    18.9K posts
                  </Typography>
                </Box>
                <MoreVertOutlined sx={{ color: "#6D6D6D" }} />
              </Box>
              <Typography
                sx={{
                  color: "lightblue",
                  textAlign: "right",
                  position: "relative",
                  top: "20px",
                  fontSize: 14,
                }}
              >
                Show more
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
