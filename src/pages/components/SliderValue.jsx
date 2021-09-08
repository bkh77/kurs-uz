import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: 400,
  },
});

function SliderValue({ amount, setAmount }) {
  function valuetext(value) {
    setAmount(value);
    return `$${value}`;
  }
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        Miqdorni tanlang
      </Typography>
      <Slider
        defaultValue={amount}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        min={100}
        max={1000}
      />
    </div>
  );
}

export default SliderValue;
