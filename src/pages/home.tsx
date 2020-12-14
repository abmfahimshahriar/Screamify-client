import React from "react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

import {Scream} from './models/home';

interface State {
  screams: Scream[]
}
class home extends React.Component<State> {
  state: State = {
    screams: [],
  };
  componentDidMount() {
    axios
      .get("/screams")
      .then((res) => {
        this.setState({
          screams: res.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  render() {
    let recentScreamsMarkup = this.state.screams ? (
      this.state.screams.map((scream) => (
        <p key={scream.screamId}>{scream.body}</p>
      ))
    ) : (
      <p>Loading...</p>
    );
    return (
      <Grid container spacing={2}>
        <Grid item sm={8} xs={12}>
          {recentScreamsMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          <p>Profile....</p>
        </Grid>
      </Grid>
    );
  }
}

export default home;
