// PlayArrowWithSpinner.js

import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import PlayArrow from "@material-ui/icons/PlayArrow";
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

// colors
import red from "@material-ui/core/colors/red";
import green from '@material-ui/core/colors/green';
import yellow from '@material-ui/core/colors/yellow';

/**
 * Play arrow material-ui icon with loading spinner
 **/

// injected styles
const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    margin: theme.spacing.unit,
    position: 'relative',
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  fabProgress: {
    color: green[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
});

class PlayArrowWithSpinner extends React.Component {
  render() {
    const { success } = this.props;

    return (
      <React.Fragment>
        <Button
          variant="fab"
          color="primary"
          onClick={this.props.onClick}
        >
          <PlayArrow/>
        </Button>
        <CircularProgress size={68} />
      </React.Fragment>
    );
  }
}

PlayArrowWithSpinner.propTypes = {
  classes: PropTypes.object.isRequired, // classes for styles
  onClick : PropTypes.func.isRequired, // callback for when clicked
  success : PropTypes.bool // if undefined, means it's currently loading
};

export default withStyles(styles)(PlayArrowWithSpinner);