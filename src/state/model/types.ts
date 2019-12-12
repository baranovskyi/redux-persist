export type AppState = {
  members: Members;
};
export type Members = {
  ids: number[];
  [key: string]: any;
};
export type MemberType = {
  firstName: string;
  lastName: string;
};

export namespace Actions {
  export type AddMember = {
    type: "ADD_MEMBER";
  };
  export type DeleteMember = {
    type: "DELETE_MEMBER";
    id: number;
  };
}
