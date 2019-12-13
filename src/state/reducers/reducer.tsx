import faker from "faker";
import { AppState, Actions, Members } from "../model/types";
import { ADD_MEMBER, DELETE_MEMBER } from "../actions/actions-types";
const initialState = {
  members: {
    another: {
      firstName: "anton",
      lastName: "bez"
    },
    ids: []
  }
};

function getNewMemberName(arr: number[]) {
  return `member-${!arr.length ? 0 : arr[arr.length - 1] + 1}`;
}

function getNewIds(arr: number[]) {
  if (!arr.length) {
    return [0];
  }
  return [...arr, arr[arr.length - 1] + 1];
}

function getNewState(state: Members, id: number) {
  let newState = { ...state };
  delete newState[`member-${id}`];
  return newState;
}

export default function reducer(
  state: AppState = initialState,
  action: Actions.AddMember | Actions.DeleteMember
): AppState {
  switch (action.type) {
    case ADD_MEMBER:
      return {
        ...state,
        members: {
          ...state.members,
          ids: getNewIds(state.members.ids),
          [getNewMemberName(state.members.ids)]: {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName()
          }
        }
      };
    case DELETE_MEMBER:
      return {
        ...state,
        members: {
          ...getNewState(state.members, action.id),
          ids: state.members.ids.filter((item: number) => item !== action.id)
        }
      };
    default:
      return state;
  }
}
