import { Record, Union } from "./.fable/fable-library.3.0.0-nagareyama-rc-005/Types.js";
import { record_type, union_type } from "./.fable/fable-library.3.0.0-nagareyama-rc-005/Reflection.js";
import { Msg$reflection as Msg$reflection_1, State$reflection as State$reflection_1 } from "./AgGrid/Types.js";

export class Page extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["AgGridExample", "Usage"];
    }
}

export function Page$reflection() {
    return union_type("App.Types.Page", [], Page, () => [[], []]);
}

export class State extends Record {
    constructor(CurrentPage, AgGrid) {
        super();
        this.CurrentPage = CurrentPage;
        this.AgGrid = AgGrid;
    }
}

export function State$reflection() {
    return record_type("App.Types.State", [], State, () => [["CurrentPage", Page$reflection()], ["AgGrid", State$reflection_1()]]);
}

export class Msg extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["View", "AgGridMsg"];
    }
}

export function Msg$reflection() {
    return union_type("App.Types.Msg", [], Msg, () => [[["Item", Page$reflection()]], [["Item", Msg$reflection_1()]]]);
}

