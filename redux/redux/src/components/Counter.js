// import * as actions from "../actions";
// import { connect } from "react-redux";
import { inc, dec, rnd } from "../actions";
import { useDispatch, useSelector } from "react-redux";

// const Counter = ({ counter, inc, dec, rnd }) => {
const Counter = () => {
  const counter = useSelector((state) => state.value);
  const dispatch = useDispatch();
  return (
    <div className="jumbotron">
      <h1>{counter}</h1>
      <button className="btn btn-primary" onClick={() => dispatch(dec())}>
        DEC
      </button>
      <button className="btn btn-primary" onClick={() => dispatch(inc())}>
        INC
      </button>
      <button className="btn btn-primary" onClick={() => dispatch(rnd())}>
        RND
      </button>
    </div>
  );
};
// const mapStateToProps = (state) => ({ counter: state.value });
// export default connect(mapStateToProps, actions)(Counter);
export default Counter;
