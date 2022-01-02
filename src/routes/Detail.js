import { connect } from "react-redux";

function Detail({toDos}) {
    return (
        <div>
            <h1>
                Detail
            </h1>

        </div>
    )
}

function mapStateToProps(state, ownProps) {
    console.log(ownProps);
    return {toDos: state};
}

export default connect(mapStateToProps) (Detail);