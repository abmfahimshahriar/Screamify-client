import React, { Fragment } from "react";
import { commentsStyle } from "./commentsStyle";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
// MUI imports
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// redux
import { connect } from "react-redux";

const styles = commentsStyle;

type Props = {
  classes: any;
  comments: any[];
};

class Comments extends React.Component<Props> {
  render() {
    let { classes, comments } = this.props;
    comments = comments.length > 0 ? comments : [];
    const singleComment = comments.map((comment: any,index:any) => {
      const { body, createdAt, userImage, userHandle } = comment;
          return (
            <Fragment key={createdAt}>
              <Grid item sm={12} >
                <Grid container>
                  <Grid item sm={2}>
                    <img
                      src={userImage}
                      alt="comment"
                      className={classes.commentImage}
                    />
                  </Grid>
                  <Grid item sm={9}>
                    <div className={classes.commentData}>
                      <Typography
                        variant="h5"
                        component={Link}
                        to={`/users/${userHandle}`}
                        color="primary"
                      >
                        {userHandle}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {dayjs(createdAt).format("h:mm a,MMMM DD YYYY")}
                      </Typography>
                      <hr className={classes.invisibleSeparator} />
                      <Typography variant="body1">{body}</Typography>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              {index !== comments.length-1 && (<hr className={classes.visibleSeparator} />)}
            </Fragment>
          );
    });
    return singleComment;
  }
}

const mapStateToProps = (state: any) => ({});

const mapActionsToProps = {};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(Comments));
