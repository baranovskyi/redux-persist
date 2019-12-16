import { createSelector } from "reselect";
import { AppState } from "../state/model/types";

export const getMembers = (state: AppState) => state.members;

export const getMemberIds = createSelector(getMembers, members => members.ids);
