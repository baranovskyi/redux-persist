import React, { FormEvent } from "react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./container";
import "../styles/style.css";
class List extends React.Component<{
  allMembers: { ids: number[]; [key: string]: any };
  deleteMember: (id: number) => void;
}> {
  deleteMember = (e: FormEvent<HTMLInputElement>) => {
    this.props.deleteMember(Number(e.currentTarget.id));
  };

  render() {
    return (
      <ul className="memberList">
        {this.props.allMembers.ids.map((i: number, index: number) => {
          return (
            <li key={index}>
              {i} <span>First name:</span>{" "}
              {Object.values(this.props.allMembers[`member-${i}`])[0]}.{" "}
              <span>Last name:</span>{" "}
              {Object.values(this.props.allMembers[`member-${i}`])[1]}
              <input
                className="btnAdd"
                id={`${i}`}
                onClick={this.deleteMember}
                type="submit"
                value="delete"
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
