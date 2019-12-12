import React from "react";
import "../styles/style.css";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./container";
import MembersCart from "./MembersCart";
class Members extends React.Component<{
  addMember: () => void;
}> {
  addMember = () => {
    this.props.addMember();
  };
  render() {
    return (
      <div>
        <button className="btnAdd" onClick={this.addMember}>
          add
        </button>
        <MembersCart />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Members);
