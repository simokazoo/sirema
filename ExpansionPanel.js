import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import red from '@material-ui/core/colors/red';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  // holder: {
  //   width: 250,
  //   height: 250,
  //   margin: 20,
  //   padding: 20,
  //   borderStyle: "solid",
  //   borderWidth: 1,
  //   borderColor: "blue"
  // },
  circle: {
    width:100,
    height:100,
    background: "radial-gradient(circle at center, white 60%, transparent 60.5%), -webkit-gradient(linear, left top, right top, from(green), color-stop(50%, green), color-stop(50%, red))",
    borderRadius:"50%",
  }, 
  textContainer: {
    width : '70%',
	height : '70%',
	maxWidth : '70%',
	maxHeight : '70%',
	margin : 0,
    padding : 0,
    position : 'relative',
	left : '15%',
	// top : '15%',
  },
  circleText: {
  color: red[500], 
	textAlign : 'center',
	
	/* vertical centering technique */
	position : 'relative',
	top : '50%',
  }
}));

export default function Expansion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={6}
          style={{ borderStyle: "solid", borderWidth: "3", borderColor: "red" }}
        >
          <div className={classes.holder}>
            <div className={classes.circle}>
              <div className={classes.textContainer}>
                <div className={classes.circleText}>
                  Text circle
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          style={{ borderStyle: "solid", borderWidth: "3", borderColor: "red" }}
        >
          right
        </Grid>
      </Grid>
    </div>
  );
}
