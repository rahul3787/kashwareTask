import React, { useState } from "react";
import List from "@material-ui/core/List";
import back1 from "./back1.png";
import IconButton from "@material-ui/core/IconButton";
import pan from "./pan.png";
import Grid from "@material-ui/core/Grid";
import { Drawer, Hidden, ListItem } from "@material-ui/core";
import getapp from "./getapp.svg";
import logoo from "./logoo.svg";
import start from "./start.svg";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
const theme = createMuiTheme({
  overrides: {
    MuiDrawer: {
      paperAnchorLeft: {
        backgroundColor: "#F8F6F1",
        width: "170px",
      },
    },
    MuiSvgIcon: {
      root: {
        width: "50px",
        height: "50px",
      },
    },
  },
});
function Home() {
  const [action, setAction] = useState("false");
  const [state, setState] = useState(false);
  function nextPage() {
    setAction("true");
    document.getElementById("btnAction").style.display = "none";
  }
  const toggle = (open) => (event) => {
    setState(open);
  };
  const list = () => (
    <List>
      <ListItem button>kard</ListItem>
      <ListItem button>kardless</ListItem>
      <ListItem button>security</ListItem>
      <ListItem button>rewards</ListItem>
    </List>
  );
  return (
    <>
      <Grid container spacing={3}>
        <Hidden smDown>
          <Grid
            xs={12}
            style={{
              color: "#F8F6F1",
              textAlign: "center",
              backgroundColor: "#191919",
              fontSize: "14px",
            }}
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
          >
            <Grid item xs={3}>
              <img src={logoo} style={{ height: "40px", marginTop: "20px" }} />
            </Grid>
            <Grid
              container
              xs={8}
              spacing={1}
              justify="space-evenly"
              direction="row"
              alignItems="flex-start"
              style={{ color: "#E5DFD8" }}
            >
              <Grid item xs={1}>
                <h1>kard</h1>
              </Grid>
              <Grid item xs={1} style={{ marginLeft: "-50px" }}>
                <h1>kardless</h1>
              </Grid>
              <Grid item xs={1}>
                <h1>security</h1>
              </Grid>
              <Grid item xs={1}>
                <h1>rewards</h1>
              </Grid>

              <Grid item xs={1}>
                <img
                  src={getapp}
                  style={{ marginTop: "17px", height: "40px" }}
                />
              </Grid>
              <Grid item xs={1}></Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} style={{ marginTop: "-10px" }}>
            <div
              style={{
                height: "100vh",
                width: "100vw",
                backgroundImage: `url(${back1})`,
                backgroundColor: "#000",
              }}
            >
              <div id="btnAction" style={{ textAlign: "center" }}>
                <div style={{ position: "absolute", top: "30%", left: "2%" }}>
                  <h1 style={{ fontSize: "80px", color: "#E5DFD8" }}>
                    Kashware is an exclusive <br /> ecosystem that unites your
                    money.
                  </h1>
                  <h3 style={{ fontSize: "28px", color: "#AAA6A1" }}>
                    #Spend #Save #StaySecured #EarnRewards #JoinTheKlub
                  </h3>

                  <IconButton onClick={nextPage}>
                    <img src={start} />
                  </IconButton>
                </div>
              </div>

              {action == "true" ? <div class="element"></div> : null}
            </div>
          </Grid>
        </Hidden>

        {/* mobile view */}
        <Hidden smUp>
          <div
            style={{ height: "80px", width: "100%", border: "2px solid white" }}
          >
            <Grid
              xs={12}
              style={{
                color: "#F8F6F1",
                textAlign: "center",
                backgroundColor: "#191919",
                fontSize: "14px",
              }}
              container
              direction="row"
              justify="space-between"
              alignItems="flex-start"
            >
              <Grid item xs={3}>
                <img
                  src={logoo}
                  style={{ height: "40px", marginTop: "20px" }}
                />
              </Grid>
              <Grid item xs={3}>
                <ThemeProvider theme={theme}>
                  <IconButton
                    onClick={toggle(true)}
                    color="inherit"
                    size="large"
                  >
                    <MenuIcon Style={{ height: "40px" }} />
                  </IconButton>
                  <Drawer anchor={"left"} open={state} onClose={toggle(false)}>
                    {list()}
                  </Drawer>
                </ThemeProvider>
              </Grid>
            </Grid>
          </div>
          <div style={{ color: "#fff" }} >
            <img
              src={pan}
              style={{
                height: "300px",
                width: "90%",
                marginLeft: "15px",
                marginTop: "30px",
              }}
            />

            <div style={{ textAlign: "center" }}>
              <h1>
                One App. One card <br />
                For all others.
              </h1>
            </div>
          </div>
        </Hidden>
      </Grid>
    </>
  );
}

export default Home;
