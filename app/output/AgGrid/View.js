import { compare } from "../.fable/fable-library.3.0.0-nagareyama-rc-005/String.js";
import { HTMLAttr } from "../.fable/Fable.React.7.0.1/Fable.React.Props.fs.js";
import { ColumnDefOptions, ColumnDef, GridOptions } from "../src/Fable.ReactAgGrid.js";
import { append, singleton, collect, delay } from "../.fable/fable-library.3.0.0-nagareyama-rc-005/Seq.js";
import { createObj, equals, int32ToString } from "../.fable/fable-library.3.0.0-nagareyama-rc-005/Util.js";
import { toString } from "../.fable/fable-library.3.0.0-nagareyama-rc-005/Types.js";
import { ofArray, ofSeq, empty, singleton as singleton_1 } from "../.fable/fable-library.3.0.0-nagareyama-rc-005/List.js";
import { GridInput, Msg } from "./Types.js";
import { parse } from "../.fable/fable-library.3.0.0-nagareyama-rc-005/Int32.js";
import { map, indexed } from "../.fable/fable-library.3.0.0-nagareyama-rc-005/Array.js";
import { keyValueList } from "../.fable/fable-library.3.0.0-nagareyama-rc-005/MapUtil.js";
import * as react from "react";
import { AgGridReact } from "ag-grid-react";

export function invStringCmp(str1, str2) {
    return compare(str1, str2, 2) === 0;
}

export function agGrid(tableRep, dispatch) {
    let props, props_1;
    const props_2 = [new HTMLAttr(65, "ag-theme-balham"), ["style", {
        height: "400px",
        width: "800px",
    }]];
    const children_1 = [(props = ofArray([new GridOptions(0, [ColumnDef([new ColumnDefOptions(0, "Datum"), new ColumnDefOptions(7, "date"), new ColumnDefOptions(24, true)]), ColumnDef([new ColumnDefOptions(0, "Gruppe"), new ColumnDefOptions(1, Array.from(delay(() => collect((matchValue) => {
        const i = matchValue[0] | 0;
        const header = matchValue[1];
        return singleton(ColumnDef([new ColumnDefOptions(0, header), new ColumnDefOptions(7, int32ToString(i)), new ColumnDefOptions(10, 100), new ColumnDefOptions(34, true), new ColumnDefOptions(24, true), new ColumnDefOptions(40, (parameter) => {
            let copyOfStruct;
            return invStringCmp((copyOfStruct = parameter.data["0"], toString(copyOfStruct)), "2") ? 2 : 1;
        }), new ColumnDefOptions(35, (parameter_1) => (equals(parameter_1.value, 3) ? createObj(singleton_1(["backgroundColor", "red"])) : createObj(empty()))), new ColumnDefOptions(39, (ev) => {
            dispatch(new Msg(0, new GridInput(parse(ev.node.id, 511, false, 32), parse(ev.colDef.field, 511, false, 32), toString(ev.newValue))));
        })]));
    }, (indexed(tableRep.HeadCol))))))])]), new GridOptions(2, (map((value) => value, tableRep.Grid))), new GridOptions(4, [createObj(ofSeq(delay(() => append(singleton(["date", ""]), delay(() => collect((matchValue_1) => {
        const i_1 = matchValue_1[0] | 0;
        const header_1 = matchValue_1[1];
        return singleton([int32ToString(i_1), header_1]);
    }, (indexed(tableRep.HeadCol))))))))]), new GridOptions(5, 36), new GridOptions(7, createObj(singleton_1(["font-size", "16px"]))), new GridOptions(9, true), new GridOptions(8, true)]), (props_1 = keyValueList(props, 1), react.createElement(AgGridReact, props_1)))];
    return react.createElement("div", keyValueList(props_2, 1), ...children_1);
}

export function render(state, dispatch) {
    const children_2 = [react.createElement("p", {}, "Basic AgGrid "), agGrid(state.TableRep, dispatch), react.createElement("br", {})];
    return react.createElement("div", {}, ...children_2);
}

