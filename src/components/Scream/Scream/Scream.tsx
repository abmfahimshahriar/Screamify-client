import React from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { screamStyle } from "./screamStyle";
import MyButton from "../../../util/components/MyButton";
import DeleteScream from "../DeleteScream/DeleteScream";
import ScreamDialog from "../ScreamDialog/ScreamDialog";
import LikeButton from "../LikeButton/LikeButton";
// MUI imports
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ChatIcon from "@material-ui/icons/Chat";

// import models
import { ScreamModel } from "../../../models/home";

// Redux
import { connect } from "react-redux";

const styles = screamStyle;

type Props = {
  scream: ScreamModel;
  classes: any;
  user: any;
  openDialog?: any;
};

class Scream extends React.Component<Props> {
  render() {
    dayjs.extend(relativeTime);
    const {
      classes,
      scream: {
        body,
        createdAt,
        userImage,
        screamId,
        likeCount,
        commentCount,
        userHandle,
      },
      user: {
        authenticated,
        credentials: { handle },
      },
    } = this.props;

    const deleteButton =
      authenticated && userHandle === handle ? (
        <DeleteScream screamId={screamId} />
      ) : null;
    return (
      <Card className={classes.card}>
        <CardMedia
          image={userImage}
          title="Profile Image"
          className={classes.image}
        />
        <CardContent className={classes.content}>
          <Typography
            variant="h5"
            component={Link}
            to={`/users/${userHandle}`}
            color="primary"
          >
            {userHandle}
          </Typography>
          {deleteButton}
          <Typography variant="body2" color="textSecondary">
            {dayjs(createdAt).fromNow()}
          </Typography>
          <Typography variant="body1">{body}</Typography>
          <LikeButton screamId={screamId} />
          <span>{likeCount} Likes</span>
          <MyButton tip="comments">
            <ChatIcon color="primary" />
          </MyButton>
          <span>{commentCount} Comments</span>
          <ScreamDialog screamId={screamId} userHandle={userHandle} openDialog={this.props.openDialog}/>
        </CardContent>
      </Card>
    );
  }
}

const mapStateToProps = (state: any) => ({
  user: state.user,
});

const mapActionsToProps = {};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(Scream));
