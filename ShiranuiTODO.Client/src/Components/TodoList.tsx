import * as React from "react";

interface ITodoListProps {
    todolist: string[];
}

export const TodoList: React.SFC<ITodoListProps> = (props) => (
    <ul>
        {
            props.todolist.map((x) => (
                <li>{x}</li>
            ))
        }
    </ul>
);
