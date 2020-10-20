import { update as State_update, init as State_init } from "./AgGrid/State.fs.js";
import { Msg as Types_Msg, State as Types_State, Page as Types_Page } from "./Types.fs.js";
import { Cmd_none as cmd_Cmd_none, Cmd_map as cmd_Cmd_map, Cmd_batch as cmd_Cmd_batch } from "./.fable/Fable.Elmish.3.1.0/cmd.fs.js";
import { List as Types_List } from "./.fable/fable-library.3.0.0-nagareyama-alpha-015/Types.js";

export function init() {
    const patternInput = State_init();
    const initAgGridState = patternInput[0];
    const initAgGridCmd = patternInput[1];
    return [new Types_State(new Types_Page(0), initAgGridState), cmd_Cmd_batch(new Types_List(initAgGridCmd, new Types_List()))];
}

export function update(msg, state) {
    if (msg.tag === 1) {
        const msg_1 = msg.fields[0];
        const patternInput = State_update(msg_1, state.AgGrid);
        const nextAgGridState = patternInput[0];
        const nextAgGridCmd = patternInput[1];
        const nextState = new Types_State(state.CurrentPage, nextAgGridState);
        return [nextState, cmd_Cmd_map((arg0) => (new Types_Msg(1, arg0)), nextAgGridCmd)];
    }
    else {
        const page = msg.fields[0];
        return [new Types_State(page, state.AgGrid), cmd_Cmd_none()];
    }
}

