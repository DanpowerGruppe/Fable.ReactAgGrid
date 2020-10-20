import { Record as Types_Record, Union as Types_Union } from "./.fable/fable-library.3.0.0-nagareyama-alpha-015/Types.js";
import { record_type as Reflection_record_type, union_type as Reflection_union_type } from "./.fable/fable-library.3.0.0-nagareyama-alpha-015/Reflection.js";
import { Msg$reflection as Types_Msg$reflection, State$reflection as Types_State$reflection } from "./AgGrid/Types.fs.js";

export class Page extends Types_Union {
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
    return Reflection_union_type("App.Types.Page", [], Page, () => [[], []]);
}

export class State extends Types_Record {
    constructor(CurrentPage, AgGrid) {
        super();
        this.CurrentPage = CurrentPage;
        this.AgGrid = AgGrid;
    }
}

export function State$reflection() {
    return Reflection_record_type("App.Types.State", [], State, () => [["CurrentPage", Page$reflection()], ["AgGrid", Types_State$reflection()]]);
}

export class Msg extends Types_Union {
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
    return Reflection_union_type("App.Types.Msg", [], Msg, () => [[["Item", Page$reflection()]], [["Item", Types_Msg$reflection()]]]);
}

