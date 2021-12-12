import { useEffect } from "react";
import { connect } from "react-redux";
import { addActionData } from "../actions";

function UserDisplay(props) {
  useEffect(() => {
    props.getService();
  }, []);

  console.log(props.loadingData);

  return (
    <>
      {props.loadingData && <h1>loading...</h1>}
      {props.mydata &&
        props.mydata.map((data) => {
          return (
            <div key={data.id}>
              <h1>{data.username}</h1>
            </div>
          );
        })}
    </>
  );
}

const mapStateToProps = (state) => {
  console.log(state.apiReducer);
  return {
    mydata: state.apiReducer.message,
    loadingData: state.apiReducer.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getService: () => dispatch(addActionData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDisplay);
