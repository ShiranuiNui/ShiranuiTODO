import * as React from "react";

export interface IHelloState { name: string; }

class Application extends React.Component<{}, IHelloState> {
    constructor() {
        super({});
        this.state = { name: "HELLO REACT WORLD" };
    }
    public render(): JSX.Element {
        return (
            <div>
                <h1>{this.state.name}</h1>
            </div>
        );
    }
}

export default Application;
