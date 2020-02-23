import React, { Fragment } from "react";
import { Box, Typography, Button, Link, Divider } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";

//  import feature  from './dummyData'

const features = [
    {
        name: 'Monday',
        type:'Subscribe',
        startdate: '05.02.2019'
    },
    {
        name: 'Tuesday',
        type:'SingleType',
        startdate: '07.02.2019'
    },
    {
        name: 'Sunday',
        type:'DoubleType',
        startdate: '09.02.2019'
    }

]

const useStyles = makeStyles(() =>
  createStyles({
    featureNameHeading: {
      textTransform: "uppercase",
      fontWeight: "bold"
    },
    licencesBlock: {
      width: "50%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between"
    },
    aboBlock: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      borderBlockColor: "red"
    },
    aboInfoText: {
      padding: "0 0 0 1.5rem"
    }
  })
);

export default function Oreder() {
  const classes = useStyles();
  return (
    <Fragment>
      <h1>Order</h1>
      <Box margin="2rem 0 3rem 0">
        <Box margin="2rem 0 3rem 0" display="flex" borderBottom={`3px solid `}>
          <Box width="50%" flexGrow="1" textAlign="left">
            <Box display="flex" alignItems="center">
              <Box marginRight={4}>Product.Img</Box>
              <Typography variant="h2">Product.Name</Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box display="flex" margin="3rem 1rem 2rem 1rem">
        <Box
          width="25%"
          flexGrow="2"
          order="1"
          borderLeft={`2.3px solid`}
          paddingLeft="1rem"
        >
          <Typography variant="h3">kit.name</Typography>
          <Typography variant="body1" color="primary">
            kit.price
          </Typography>
          <Typography variant="body2" color="textSecondary">
            kit.info.join(' | ')
          </Typography>
          <Typography variant="body2" color="textSecondary">
            `Produkttyp: kit.typ`
          </Typography>
        </Box>
        <Box
          width="20%"
          flexGrow="1"
          order="2"
          borderLeft={`2.3px solid `}
          paddingLeft="2rem"
        >
          <Typography>feature.name</Typography>
        </Box>
        <Box width="20%" flexGrow="2" order="3" textAlign="right">
          <Box
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
          >
            <div>
              <Button variant="contained" color="primary">
                <Typography>
                  kit.owned && kit.typ === 'Abonnement' && 'Abonniert'
                  !kit.owned && kit.typ === 'Abonnement' && 'Abonnieren'
                  kit.owned && kit.typ === 'Einmal-Kauf' && 'Gekauft' !kit.owned
                  && kit.typ === 'Einmal-Kauf' && 'Bestellen'
                </Typography>
              </Button>
            </div>
            <div>
              <Typography variant="body1">
                <Link to="/">kit.trial.text</Link>
              </Typography>
              <Typography variant="subtitle2">kit.trial.subtext</Typography>
            </div>
          </Box>
        </Box>
      </Box>
      <Divider light variant="middle" />
      <Box >
      {features.map(feature => (
        // <Typography variant='h3' className={classes.featureNameHeading}>
        //     {feature.name}
        // </Typography>
                   
        // // <Typography variant='caption' color='textSecondary'>
        // //     Produkttyp: {feature.type}
        // // </Typography>
                   
       
      <Box component="div" className={classes.aboBlock} border={3} borderColor="red" height={1} padding={2} margin={3}>
        <Typography variant="body1" color="textSecondary">
          Order:
        </Typography>
        <Typography variant="body1" className={classes.aboInfoText}>
          {feature.startdate}
        </Typography>
      </Box>
      
      ))}
      </Box>
    </Fragment>

  )
}
