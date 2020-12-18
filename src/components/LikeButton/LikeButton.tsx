import React from "react";
import { likeButtonStyle } from "./likeButtonStyle";
import MyButton from "../../util/components/MyButton";
import { Link } from "react-router-dom";

// MUI imports
import withStyles from "@material-ui/core/styles/withStyles";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

// redux
import { connect } from "react-redux";
import { likeScream, unlikeScream } from "../../redux/actions/dataActions";

const styles = likeButtonStyle;

type Props = {
  classes: any;
  likeScream: Function;
  unlikeScream: Function;
  screamId: string;
  user: any;
};

class LikeButton extends React.Component<Props> {
  likedScream = () => {
    if (
      this.props.user.likes &&
      this.props.user.likes.find(
        (like: any) => like.screamId === this.props.screamId
      )
    )
      return true;
    else return false;
  };

  likeScream = () => {
    this.props.likeScream(this.props.screamId);
  };
  unlikeScream = () => {
    this.props.unlikeScream(this.props.screamId);
  };
  render() {
    const {
      user: { authenticated },
    } = this.props;
    const likeButton = !authenticated ? (
      <Link to="login">
        <MyButton tip="Like">
          <FavoriteBorder color="primary" />
        </MyButton>
      </Link>
    ) : this.likedScream() ? (
      <MyButton tip="Unlike" onClick={this.unlikeScream}>
        <FavoriteIcon color="primary" />
      </MyButton>
    ) : (
      <MyButton tip="Like" onClick={this.likeScream}>
        <FavoriteBorder color="primary" />
      </MyButton>
    );
    return likeButton;
  }
}

const mapStateToProps = (state: any) => ({
  user: state.user,
});

const mapActionsToProps = {
  likeScream,
  unlikeScream,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(LikeButton));
