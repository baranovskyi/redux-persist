import { AppState } from "../state/model/types";
import { addMember, deleteMember } from "../state/actions/actions";
import { createSelector } from "reselect";

export const getAllMembers = (state: AppState) => state.members;
export const getIds = (state: AppState) => state.members.ids;

const getStateMembers = createSelector([getAllMembers], getAllMembers => {
  return getAllMembers;
});
const getStateIds = createSelector([getIds], getIds => {
  return getIds;
});
const mapStateToProps = (state: AppState) => {
  return {
    ids: getStateIds(state),
    allMembers: getStateMembers(state)
  };
};

const mapDispatchToProps = {
  addMember,
  deleteMember
};

export { mapStateToProps, mapDispatchToProps };
