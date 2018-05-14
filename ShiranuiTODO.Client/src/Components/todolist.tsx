import { Component, h, View } from "hyperapp";
import IAction from "../Actions/Action";
import IState from "../States/IState";

interface ITodoLIstProps {
    id: number;
    name: string;
}

export const Todoitem: Component<ITodoLIstProps> = ({ id, name }) => (
    <li>
        <span>{name}</span>
    </li>
);
