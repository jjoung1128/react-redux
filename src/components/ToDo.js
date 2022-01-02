import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

function ToDo({ id, text, deleteToDo }) {
    return (
        <li>
            <Link to={`/${id}`}>
                {text} <button onClick={deleteToDo}>DEL</button>
            </Link>
        </li>
    )
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        deleteToDo: () => dispatch(actionCreators.deleteTodo(ownProps.id))
    };
}

export default connect(null, mapDispatchToProps)(ToDo);