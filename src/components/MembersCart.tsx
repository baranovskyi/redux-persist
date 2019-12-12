import React from "react";
import List from "./List";
import "../styles/style.css";
class MembersCart extends React.Component {
  render() {
    return (
      <div className="membersCart">
        <h3>all members</h3>
        <List />
      </div>
    );
  }
}

export default MembersCart;
