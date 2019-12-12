import { AppState } from "../state/model/types";
import { addMember, deleteMember } from "../state/actions/actions";

const mapStateToProps = (state: AppState) => {
  return {
    allMembers: state.members,
    ids: state.members.ids
  };
};

const mapDispatchToProps = {
  addMember,
  deleteMember
};

export { mapStateToProps, mapDispatchToProps };
