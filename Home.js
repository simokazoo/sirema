import React, { useState, useEffect } from "react";
import { Button, Divider, Slider, TextField } from "@material-ui/core";
import { ButtonGroup } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export function Home() {
  const matches = useMediaQuery("(max-width:500px)");
  const [range, setRange] = useState([0, 100]);

    // useEffect(() => {
    //     function handler() {
    //         console.log("window changed", testing.matches)
    //         }
        
    //     const testing = window.matchMedia("(max-width:100px)");
    //     testing.addEventListener("change", handler);
    //     return () => {
    //         testing.removeEventListener("change", handler);
    //     };
    // }, []);

  return (
    <div>
      <h1>Home</h1>
      <div>
        <Button variant="contained">Click me!</Button>
        <Button variant="contained">Click me!</Button>
        <Button variant="contained">Click me!</Button>
      </div>
      <div>
        <p></p>
      </div>
      <Divider />
      <div>
        <p></p>
      </div>
      <div>
        <ButtonGroup variant="contained">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </div>
      <Slider />
      <Slider valueLabelDisplay="auto" />
      <Slider valueLabelDisplay="auto" step={10} />
      <Slider
        valueLabelDisplay="auto"
        step={10}
        value={range}
        onChange={(e, value) => setRange(value)}
      />
      <div style={{ display: "grid", gridGap: 40 }}>
        <TextField variant="filled" label="Name" />
        <TextField variant="filled" />
        <TextField
          variant="filled"
          hiddenLabel
        //   inputProps={{ disabledUnderLine: true }}
        />
      </div>
      <div>
        <h1>MediaQuery</h1>
        <span>{matches && <p>Active</p>}</span>
      </div>
      <span>{`(max-width:100px) matches: ${matches}`}</span>
    </div>
  );
}

export default Home;
