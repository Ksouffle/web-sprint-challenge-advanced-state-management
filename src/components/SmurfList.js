import React, { useEffect } from "react";
import Smurf from "./Smurf";
import { fetchSmurfs } from "../actions";
import { connect } from "react-redux";

const SmurfList = (props) => {
  const getSmurfs = (e) => {
    e.preventDefault();
    props.fetchSmurfs();
  };

  if (props.isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="listContainer">
      {props.smurfs.map((smurf) => (
        <Smurf key={smurf.id} smurf={smurf} />
      ))}
      <button onClick={getSmurfs}>Fetch Smurfs</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  smurfs: state.smurfs,
  isLoading: state.isLoading,
});

export default connect(mapStateToProps, { fetchSmurfs })(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.
