import React from "react";
import MyButton from "../../util/components/MyButton";
import {deleteScreamStyle} from "./deleteScreamStyle";
// MUI imports
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
// redux
import { connect } from "react-redux";

const styles = deleteScreamStyle;

type Props = {
  classes: any;
};

class DeleteScream extends React.Component<Props> {
    render() {
        return <div></div>
    }
}


const mapStateToProps = (state: any) => ({
  });
  
  const mapActionsToProps = {
  };
  
  export default connect(
    mapStateToProps,
    mapActionsToProps
  )(withStyles(styles)(DeleteScream));