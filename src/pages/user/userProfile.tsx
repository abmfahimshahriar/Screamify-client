import React from "react";
import { userStyle } from "./userProfileStyle";
import axios from "axios";
import Scream from "../../components/Scream/Scream/Scream";
import StaticProfile from "../../components/Profile/StaticProfile/StaticProfile";
// MUI imports
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
// redux
import { connect } from "react-redux";
import { getUserData } from "../../redux/actions/dataActions";

const styles = userStyle;

type Props = {
  classes: any;
  getUserData: Function;
  match: any;
  data: any;
};
interface State {
  profile: any;
  screamIdParam: string;
}
class userProfile extends React.Component<Props, State> {
  state: State = {
    profile: null,
    screamIdParam: "",
  };
  componentDidMount() {
    const handle = this.props.match.params.handle;
    const screamId = this.props.match.params.screamId;
    if (screamId) this.setState({ screamIdParam: screamId });
    this.props.getUserData(handle);
    axios
      .get(`/user/${handle}`)
      .then((res) => {
        this.setState({
          profile: res.data.user,
        });
      })
      .catch((err) => console.log(err));
  }
  render() {
    const { screams, loading } = this.props.data;
    const {screamIdParam} = this.state;
    const screamsMarkup = !loading ? (
      screams.length === 0 ? (
        <p>No screams for this user</p>
      ) : !screamIdParam ? (
        screams.map((scream: any) => (
          <Scream key={scream.screamId} scream={scream} />
        ))
      ) : (
        screams.map((scream:any) => {
          if(scream.screamId !== screamIdParam) return <Scream key={scream.screamId} scream={scream} />
          else return <Scream key={scream.screamId} scream={scream} openDialog/>
        })
      )
    ) : (
      <p>Loading...</p>
    );
    return (
      <Grid container spacing={2}>
        <Grid item sm={8} xs={12}>
          {screamsMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          {this.state.profile === null ? (
            <p>Loading profile...</p>
          ) : (
            <StaticProfile profile={this.state.profile} />
          )}
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state: any) => ({
  data: state.data,
});

const mapActionsToProps = {
  getUserData,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(userProfile));
