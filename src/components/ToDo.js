import { connect } from "react-redux";
import { remove } from "../store";
import { Link } from "react-router-dom";

function ToDo({ id, text, deleteToDo }) {
    return (
        <li>
            <Link to={`/${id}`}>{text}</Link>
            <button onClick={deleteToDo}>DEL</button>
        </li>
    )
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        deleteToDo: () => dispatch(remove(ownProps.id))
    };
}

export default connect(null, mapDispatchToProps)(ToDo);