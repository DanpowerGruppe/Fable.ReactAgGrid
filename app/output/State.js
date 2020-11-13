import { update as update_1, init as init_1 } from "./AgGrid/State.js";
import { Msg, State, Page } from "./Types.js";
import { Cmd_none, Cmd_map, Cmd_batch } from "./.fable/Fable.Elmish.3.1.0/cmd.fs.js";
import { singleton } from "./.fable/fable-library.3.0.0-nagareyama-rc-005/List.js";

export function init() {
    const patternInput = init_1();
    const initAgGridState = patternInput[0];
    const initAgGridCmd = patternInput[1];
    return [new State(new Page(0), initAgGridState), Cmd_batch(singleton(initAgGridCmd))];
}

export function update(msg, state) {
    if (msg.tag === 1) {
        const msg_1 = msg.fields[0];
        const patternInput = update_1(msg_1, state.AgGrid);
        const nextAgGridState = patternInput[0];
        const nextAgGridCmd = patternInput[1];
        const nextState = new State(state.CurrentPage, nextAgGridState);
        return [nextState, Cmd_map((arg0) => (new Msg(1, arg0)), nextAgGridCmd)];
    }
    else {
        const page = msg.fields[0];
        return [new State(page, state.AgGrid), Cmd_none()];
    }
}

