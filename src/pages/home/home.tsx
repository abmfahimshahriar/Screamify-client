import React from "react";
import Grid from "@material-ui/core/Grid";
import ScreamSkeleton from "../../util/components/ScreamSkeleton/ScreamSleleton";
// import models
import { ScreamModel } from "../../models/home";
// import components
import Scream from "../../components/Scream/Scream/Scream";
import Profile from "../../components/Profile/Profile/Profile";

// Redux
import { connect } from "react-redux";
import { getScreams } from "../../redux/actions/dataActions";

type Props = {
  getScreams: Function;
  data: any;
};
interface State {
  screams: ScreamModel[];
}
class home extends React.Component<Props, State> {
  componentDidMount() {
    this.props.getScreams();
  }
  render() {
    const { screams, loading } = this.props.data;
    let recentScreamsMarkup = !loading ? (
      screams.map((scream: any) => (
        <Scream key={scream.screamId} scream={scream} />
      ))
    ) : (
      <ScreamSkeleton/>
    );
    return (
      <Grid container spacing={2}>
        <Grid item sm={8} xs={12}>
          {recentScreamsMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          <Profile />
        </Grid>
      </Grid>
    );
  }
}
const mapStateToProps = (state: any) => ({
  data: state.data,
});

const mapActionsToProps = {
  getScreams,
};
export default connect(mapStateToProps, mapActionsToProps)(home);
