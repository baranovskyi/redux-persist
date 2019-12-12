import { Actions } from "../model/types";
import { ADD_MEMBER, DELETE_MEMBER } from "../actions/actions-types";

export const addMember = (): Actions.AddMember => ({ type: ADD_MEMBER });
export const deleteMember = (id: number): Actions.DeleteMember => ({
  type: DELETE_MEMBER,
  id: id
});
