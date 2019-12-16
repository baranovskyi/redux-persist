import { AppState } from "../state/model/types";
import { addMember, deleteMember } from "../state/actions/actions";
import { createSelector } from "reselect";
import { getMembers, getMemberIds } from "./selectors";
export const getAllMembers = (state: AppState) => state.members;
export const getIds = (state: AppState) => state.members.ids;

const mapStateToProps = (state: AppState) => {
  return {
    ids: getMemberIds(state),
    allMembers: getMembers(state)
  };
};

const mapDispatchToProps = {
  addMember,
  deleteMember
};

export { mapStateToProps, mapDispatchToProps };
