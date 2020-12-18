import React from "react";
import {commentFormStyle} from "./commentFormStyle";
// MUI imports
import withStyles from "@material-ui/core/styles/withStyles";

// redux
import { connect } from "react-redux";

const styles = commentFormStyle;

type Props = {
  classes: any;
  screamId: string;
};

class CommentForm extends React.Component<Props> {
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
  )(withStyles(styles)(CommentForm));