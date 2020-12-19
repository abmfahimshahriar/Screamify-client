import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import { staticProfileStyle } from "./staticProfileStyle";

// MUI imports
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";
import MuiLink from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import LocationOn from "@material-ui/icons/LocationOn";
import LinkIcon from "@material-ui/icons/Link";
import CalendarToday from "@material-ui/icons/CalendarToday";
// redux
import { connect } from "react-redux";

const styles = staticProfileStyle;

type Props = {
  classes: any;
  profile: any;
};

class StaticProfile extends React.Component<Props> {
  render() {
    const {
      classes,
      profile: { handle, createdAt, imageUrl, bio, website, location },
    } = this.props;
    let profileMarkup = (
      <Paper className={classes.paper}>
        <div className={classes.profile}>
          <div className="image-wrapper">
            <img src={imageUrl} alt="profile" className="profile-image" />
          </div>
          <hr />
          <div className="profile-details">
            <MuiLink
              component={Link}
              to={`/users/${handle}`}
              color="primary"
              variant="h5"
            >
              @{handle}
            </MuiLink>
            <hr />
            {bio && <Typography variant="body2">{bio}</Typography>}
            <hr />
            {location && (
              <Fragment>
                <LocationOn color="primary" /> <span>{location}</span>
                <hr />
              </Fragment>
            )}
            {website && (
              <Fragment>
                <LinkIcon color="primary" />
                <a href={website} target="_blank" rel="noopener noreferrer">
                  {" "}
                  {website}
                </a>
                <hr />
              </Fragment>
            )}
            <CalendarToday color="primary" />{" "}
            <span>Joined {dayjs(createdAt).format("MMM YYYY")} </span>
          </div>
        </div>
      </Paper>
    );
    return profileMarkup;
  }
}

const mapStateToProps = (state: any) => ({});

const mapActionsToProps = {};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(StaticProfile));
