import React from "react";
import {Link} from "react-router-dom";
// MUI imports
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

// import models
import { ScreamModel } from "../models/home";

const styles = {
  card: {
    display: "flex",
    marginBottom: 20,
  },
  image: {
      minWidth: 200,
  },
  content: {
      padding: 25,
  }
};

type Props = {
  scream: ScreamModel;
  classes: any;
};

class Scream extends React.Component<Props> {
  render() {
    const {
      classes,
      scream: { body, createdAt, userImage, screamId, likeCount, commentCount,userHandle },
    } = this.props;
    return (
      <Card className={classes.card}>
        <CardMedia image={userImage} title="Profile Image" className={classes.image}/>
        <CardContent className={classes.content}>
            <Typography variant="h5" component={Link} to={`/users/${userHandle}`} color="primary">{userHandle}</Typography>
            <Typography variant="body2" color="textSecondary">{createdAt}</Typography>
            <Typography variant="body1">{body}</Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(Scream);
