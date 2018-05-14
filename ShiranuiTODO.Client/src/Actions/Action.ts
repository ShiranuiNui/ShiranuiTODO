import { ActionResult, ActionsType } from "hyperapp";
import IState from "../States/IState";

export default interface IActions {
    add: (value: string) => (state: IState) => ActionResult<IState>;
}

export const Actions: ActionsType<IState, IActions> = {
    add: (value: string) => (state: IState) => ({
        todolist: [...state.todolist, value],
    }),
};
