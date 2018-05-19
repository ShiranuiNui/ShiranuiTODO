import * as React from "react";
import { TodoList } from "./Components/TodoList";

export interface ITodoState { todolist: string[]; }

export default class Application extends React.Component<{}, ITodoState> {
    constructor() {
        super({});
        this.state = { todolist: ["私はしぶりんめう", "ぬい"] };
    }
    public render(): JSX.Element {
        return (
            <div>
                <TodoList todolist={this.state.todolist} />
            </div>
        );
    }
}
