import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { editDetailsStyle } from "../../Profile/EditDetails/editDetailsStyles";
// MUI imports
import withStyles from "@material-ui/core/styles/withStyles";
import Menu from "@material-ui/core/Menu";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatIcon from "@material-ui/icons/Chat";
// redux
import { connect } from "react-redux";
import { markNotificationsRead } from "../../../redux/actions/userActions";
const styles = editDetailsStyle;
type Props = {
  notifications: any[];
  markNotificationsRead: Function;
};
interface State {
  anchorEl: any;
}
class Notifications extends React.Component<Props, State> {
  state: State = {
    anchorEl: null,
  };
  handleOpen = (event: any) => {
    this.setState({ anchorEl: event.target });
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  onMenuEntered = () => {
    let unreadNotifications = this.props.notifications
      .filter((noti) => !noti.read)
      .map((noti) => noti.notificationId);
    this.props.markNotificationsRead(unreadNotifications);
  };
  render() {
    const notifications = this.props.notifications;
    const anchorEl = this.state.anchorEl;
    dayjs.extend(relativeTime);
    let notificationsIcon = <NotificationsIcon />;
    let unreadItems = notifications.filter((noti) => noti.read === false);
    if (notifications.length > 0) {
        if(unreadItems.length > 0) {
            notificationsIcon = (
                <Badge
                  badgeContent={
                    notifications.filter((noti) => noti.read === false).length
                  }
                  color="secondary"
                >
                  <NotificationsIcon />
                </Badge>
              )
        }
        else {
            notificationsIcon = <NotificationsIcon />;
        }
    } else {
      notificationsIcon = <NotificationsIcon />;
    }
    let notificationsMarkup =
      notifications && notifications.length > 0 ? (
        notifications.map((noti) => {
          const verb = noti.type === "like" ? "liked" : "commented on";
          const time = dayjs(noti.createdAt).fromNow();
          const iconColor = noti.read ? "primary" : "secondary";
          const icon =
            noti.type === "like" ? (
              <FavoriteIcon color={iconColor} style={{ marginRight: 10 }} />
            ) : (
              <ChatIcon color={iconColor} style={{ marginRight: 10 }} />
            );

          return (
            <MenuItem key={noti.createdAt} onClick={this.handleClose}>
              {icon}
              <Typography
                component={Link}
                color="inherit"
                variant="body1"
                to={`/users/${noti.recipient}/scream/${noti.screamId}`}
              >
                {noti.sender} {verb} your scream {time}
              </Typography>
            </MenuItem>
          );
        })
      ) : (
        <MenuItem onClick={this.handleClose}>
          You have no notifications yet.
        </MenuItem>
      );
    return (
      <Fragment>
        <Tooltip placement="top" title="Notifications">
          <IconButton
            aria-owns={anchorEl ? "simple-menu" : undefined}
            aria-haspopup="true"
            onClick={this.handleOpen}
          >
            {notificationsIcon}
          </IconButton>
        </Tooltip>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          onEntered={this.onMenuEntered}
        >
          {notificationsMarkup}
        </Menu>
      </Fragment>
    );
  }
}

const mapStateToProps = (state: any) => ({
  notifications: state.user.notifications,
});

const mapActionsToProps = {
  markNotificationsRead,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(Notifications));

