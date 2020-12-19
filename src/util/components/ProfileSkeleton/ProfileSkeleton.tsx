import React from "react";
import { profileSkeletonStyle } from "./profileSkeletonStyle";
import NoImg from "../../../images/no-img.png";
// MUI imports
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";
import LocationOn from "@material-ui/icons/LocationOn";
import CalendarToday from "@material-ui/icons/CalendarToday";
import LinkIcon from "@material-ui/icons/Link";


const styles = profileSkeletonStyle;

type Props = {
  classes: any;
};

const ProfileSkeleton: React.FC<Props> = (props: Props) => {
  const { classes } = props;
 
  return (
    <Paper className={classes.paper}>
    <div className={classes.profile}>
      <div className="image-wrapper">
        <img src={NoImg} alt="profile" className="profile-image" />
      </div>
      <hr />
      <div className="profile-details">
      <div className={classes.handle} />
        <hr />
        <div className={classes.fullLine} />
        <div className={classes.fullLine} />
        <hr />
        <LocationOn color="primary"/> <span>Location</span>
        <hr/>
        <LinkIcon color="primary"/> www.yourwebsite.com
        <hr/>
        <CalendarToday color="primary"/> <span>Joined date</span>
      </div>
    </div>
  </Paper>
  )
};

export default withStyles(styles)(ProfileSkeleton);
