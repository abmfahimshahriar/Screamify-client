import React from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
// MUI imports
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatIcon from "@material-ui/icons/Chat";
// redux
import { connect } from "react-redux";

type Props = {
  classes: any;
};

class Notifications extends React.Component<Props> {
  state = {
    anchorEl: null,
  };
  render() {
    return <div></div>;
  }
}

const mapStateToProps = (state: any) => ({});

const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(Notifications);
