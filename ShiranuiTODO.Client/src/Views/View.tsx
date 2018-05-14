import { Component, h, View } from "hyperapp";
import IAction from "../Actions/Action";
import { Todoitem } from "../Components/todolist";
import IState from "../States/IState";

export const view: View<IState, IAction> = (state, actions) => {
    const todoes = state.todolist.map((x, i) =>
        <Todoitem
            id={i}
            name={x} > </Todoitem >);
    return (
        <ul>
            {todoes}
        </ul>
    );
};
