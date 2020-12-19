import React, { Fragment } from "react";
import { screamSkeletonStyle } from "./screamSkeletonStyle";
import NoImg from "../../../images/no-img.png";
// MUI imports
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

const styles = screamSkeletonStyle;

type Props = {
  classes: any;
};

const ScreamSkeleton: React.FC<Props> = (props: Props) => {
  const { classes } = props;
  const content = Array.from({ length: 5 }).map((item, index) => (
    <Card className={classes.card} key={index}>
      <CardMedia className={classes.cover} image={NoImg} />
      <CardContent className={classes.cardContent}>
        <div className={classes.handle} />
        <div className={classes.date} />
        <div className={classes.fullLine} />
        <div className={classes.fullLine} />
        <div className={classes.halfLine} />
      </CardContent>
    </Card>
  ));
  return <Fragment>{content}</Fragment>;
};

export default withStyles(styles)(ScreamSkeleton);
