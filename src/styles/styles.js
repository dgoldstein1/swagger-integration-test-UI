// styles.js

import { createMuiTheme } from '@material-ui/core/styles';

// colors
import red from "@material-ui/core/colors/red";
import green from '@material-ui/core/colors/green';
import yellow from '@material-ui/core/colors/yellow';

// decipher theme
const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: green,
  }
});

const styles = theme => ({
  appBar: {
    position: "relative"
  },
  icon: {
    marginRight: theme.spacing.unit * 2
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper
  },
  heroContent: {
    maxWidth: 600,
    margin: "0 auto",
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6
  },
  statusAvatarloading : { // loading
    backgroundColor: yellow[700],
    height : "60px",
    width : "60px"
  },
  statusAvatarfailure : { // test failed
    backgroundColor: red[600],
    height : "60px",
    width : "60px"
  },
  statusAvatarsuccess : { // success!
    backgroundColor: green[600],
    height : "60px",
    width : "60px"
  },
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

export { styles, theme };
