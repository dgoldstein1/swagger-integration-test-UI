import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import PlayArrow from "@material-ui/icons/PlayArrow";
import Replay from "@material-ui/icons/Replay";
import Collapse from "@material-ui/core/Collapse";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../styles/styles";
import classnames from "classnames";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PlayArrowWithSpinner from "./PlayArrowWithSpinner"
import Tooltip from '@material-ui/core/Tooltip';


let getStatusAsString = tests => {
  for (let i in tests) {
    if (tests[i].success === false) return "failure";
    if (tests[i].success === undefined) return "loading";
  }
  return "success";
};

class TestCard extends React.Component {
  state = { expanded: true };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    let status = getStatusAsString(this.props.tests);

    return (
      <Grid item md={3}>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar className={classes["statusAvatar" + status]}>
                {this.props.pathType}
              </Avatar>
            }
            title={this.props.path}
          />
          {status === "loading" && (
            <div style={{ display: "flex", justifyContent: "center" }}>
            </div>
          )}
          {status === "failure" && <div>FAILURE</div>}
          {status === "success" && (
            <CardMedia
              className={classes.cardMedia}
              image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" // eslint-disable-line max-len
              title="Image title"
            />
          )}
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="headline" component="h2">
              {status}
            </Typography>
            <Typography>{this.props.data.summary}</Typography>
          </CardContent>
          <CardActions>
            <IconButton aria-label="Run tests">
              <Tooltip title="Run All" placement="top">
                <PlayArrow
                  onClick={() =>
                    this.props.tests.forEach(test =>
                      this.props.runTest(
                        this.props.pathType + this.props.path,
                        test.ID,
                        test.test
                      )
                    )
                  }
                />
              </Tooltip>
            </IconButton>
            <IconButton aria-label="Run failed tests">
              <Tooltip title="Run failing" placement="top">
                <Replay
                  onClick={() =>
                    this.props.tests.forEach(test => {
                      if (!test.success)
                        this.props.runTest(
                          this.props.pathType + this.props.path,
                          test.ID,
                          test.test
                        );
                    })
                  }
                />
              </Tooltip>
            </IconButton>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              {this.state.expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <List component="nav">
                {this.props.tests.map((test, i) => (
                  <ListItem key={i} onClick={() => {
                    this.props.runTest(
                      this.props.pathType + this.props.path,
                      test.ID,
                      test.test
                    )
                  }} button>
                    <ListItemIcon>
                      <PlayArrowWithSpinner classes={this.props.classes} success={test.success}/>
                    </ListItemIcon>
                    <ListItemText inset primary={test.name} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Collapse>
        </Card>
      </Grid>
    );
  }
}

TestCard.propTypes = {
  classes: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired, // e.g. "/examples/services/hello"
  pathType: PropTypes.string.isRequired, // e.g. "get"
  data: PropTypes.object.isRequired, // e.g. {"summary":"HelloProxy says 'hello' in a form that is handled by the gateway proxy.","operationId":"HelloProxy","responses":{"200":{"description":"","schema":{"$ref":"#/definitions/protobufHelloResponse"}}},"parameters":[{"name":"hello_text","in":"query","required":false,"type":"string"}],"tags":["Exemplar"]}
  tests: PropTypes.array.isRequired, // [{name : accepts HelloProxy Request, success : true, test : () => {}}]
  runTest: PropTypes.func.isRequired // callback for running the test
};

export default withStyles(styles)(TestCard);
