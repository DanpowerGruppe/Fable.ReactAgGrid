import { render as render_1 } from "./AgGrid/View.js";
import { Msg } from "./Types.js";
import * as react from "react";
import { keyValueList } from "./.fable/fable-library.3.0.0-nagareyama-rc-005/MapUtil.js";

export const spacing = ["style", {
    padding: 20,
}];

export function render(state, dispatch) {
    const children = [render_1(state.AgGrid, (arg) => {
        dispatch((new Msg(1, arg)));
    })];
    return react.createElement("div", keyValueList([spacing], 1), ...children);
}

