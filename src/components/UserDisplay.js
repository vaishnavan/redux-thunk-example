import { useEffect } from "react";
import { connect } from "react-redux";
import { addActionData } from "../actions";

function UserDisplay(props) {
  useEffect(() => {
    props.getService();
  }, []);

  console.log(props.mydata);

  return <></>;
}

const mapStateToProps = (state) => {
  console.log(state.apiReducer);
  // return {
  //   mydata: state.apiReducer.message
  // }
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     apiCall: () => dispatch(addActionData())
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    getService: () => dispatch(addActionData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDisplay);
