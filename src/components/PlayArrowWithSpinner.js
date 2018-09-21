// PlayArrowWithSpinner.js

import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import PlayArrow from "@material-ui/icons/PlayArrow";
import CheckIcon from "@material-ui/icons/Check";
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import {styles } from "../styles/styles"

/**
 * Play arrow material-ui icon with loading spinner
 **/

// injected styles


class PlayArrowWithSpinner extends React.Component {
  render() {
    const { success, classes } = this.props;

    let loading = success === undefined

    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <Button
            variant="fab"
            color="primary"
            onClick={this.props.onClick}
            className={classes.playArrowWithSpinner}
          >
            {success ? <CheckIcon /> : <PlayArrow className={classes.playArrowWithSpinner} />}
          </Button>
          {loading && <CircularProgress size={68} className={classes.fabProgress} />}
        </div>
      </div>
    );
  }
}

PlayArrowWithSpinner.propTypes = {
  classes: PropTypes.object.isRequired, // classes for styles
  onClick : PropTypes.func.isRequired, // callback for when clicked
  success : PropTypes.bool // if undefined, means it's currently loading
};

export default withStyles(styles)(PlayArrowWithSpinner);