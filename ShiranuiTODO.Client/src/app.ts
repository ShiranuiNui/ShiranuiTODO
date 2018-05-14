import { app, h, View } from "hyperapp";
import { Actions } from "./Actions/Action";
import { InitialState } from "./States/";
import { view } from "./Views/View";

/*
class State {
    public constructor(public readonly count: number) {
        console.log("CSTR CALLED");
    }
}

class Actions {

    public down() {
        return (state: State) => new State(state.count - 1);
    }
    public up() {
        return (state: State) => new State(state.count + 1);
    }
}

const view: View<State, Actions> = (state, actions) => {
    return h("main", {}, [
        h("h1", {}, state.count),
        h("button", { onclick: actions.down, disabled: state.count <= 0 }, "-"),
        h("button", { onclick: actions.up }, "+")
    ]);
}
*/

const mainApp = app(InitialState, Actions, view, document.body);
