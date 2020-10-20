import { render as View_render } from "./AgGrid/View.fs.js";
import { Msg as Types_Msg } from "./Types.fs.js";
import * as react from "react";
import { keyValueList as MapUtil_keyValueList } from "./.fable/fable-library.3.0.0-nagareyama-alpha-015/MapUtil.js";

export const spacing = ["style", {
    padding: 20,
}];

export function render(state, dispatch) {
    const children = [View_render(state.AgGrid, (arg) => {
        dispatch((new Types_Msg(1, arg)));
    })];
    return react.createElement("div", MapUtil_keyValueList([spacing], 1), ...children);
}

