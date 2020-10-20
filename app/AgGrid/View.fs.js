import { compare as String_compare } from "../.fable/fable-library.3.0.0-nagareyama-alpha-015/String.js";
import { HTMLAttr as Fable$002EReact$002EProps_HTMLAttr } from "../.fable/Fable.React.7.0.1/Fable.React.Props.fs.js";
import { ColumnDefOptions as Fable$002EReactAgGrid_ColumnDefOptions, ColumnDef as Fable$002EReactAgGrid_ColumnDef, GridOptions as Fable$002EReactAgGrid_GridOptions } from "../../src/Fable.ReactAgGrid.fs.js";
import { append as Seq_append, singleton as Seq_singleton, collect as Seq_collect, delay as Seq_delay } from "../.fable/fable-library.3.0.0-nagareyama-alpha-015/Seq.js";
import { createObj as Util_createObj, equals as Util_equals, int32ToString as Util_int32ToString } from "../.fable/fable-library.3.0.0-nagareyama-alpha-015/Util.js";
import { List as Types_List, toString as Types_toString } from "../.fable/fable-library.3.0.0-nagareyama-alpha-015/Types.js";
import { GridInput as Types_GridInput, Msg as Types_Msg } from "./Types.fs.js";
import { parse as Int32_parse } from "../.fable/fable-library.3.0.0-nagareyama-alpha-015/Int32.js";
import { map as Array_map, indexed as Array_indexed } from "../.fable/fable-library.3.0.0-nagareyama-alpha-015/Array.js";
import { ofArray as List_ofArray, ofSeq as List_ofSeq } from "../.fable/fable-library.3.0.0-nagareyama-alpha-015/List.js";
import { keyValueList as MapUtil_keyValueList } from "../.fable/fable-library.3.0.0-nagareyama-alpha-015/MapUtil.js";
import * as react from "react";
import { AgGridReact as ag$002Dgrid$002Dreact_AgGridReact } from "ag-grid-react";

export function invStringCmp(str1, str2) {
    return String_compare(str1, str2, 2) === 0;
}

export function agGrid(tableRep, dispatch) {
    let props, props_1;
    const props_2 = [new Fable$002EReact$002EProps_HTMLAttr(65, "ag-theme-balham"), ["style", {
        height: "400px",
        width: "800px",
    }]];
    const children_1 = [(props = List_ofArray([new Fable$002EReactAgGrid_GridOptions(0, [Fable$002EReactAgGrid_ColumnDef([new Fable$002EReactAgGrid_ColumnDefOptions(0, "Datum"), new Fable$002EReactAgGrid_ColumnDefOptions(7, "date"), new Fable$002EReactAgGrid_ColumnDefOptions(24, true)]), Fable$002EReactAgGrid_ColumnDef([new Fable$002EReactAgGrid_ColumnDefOptions(0, "Gruppe"), new Fable$002EReactAgGrid_ColumnDefOptions(1, Array.from(Seq_delay(() => Seq_collect((matchValue) => {
        const i = matchValue[0] | 0;
        const header = matchValue[1];
        return Seq_singleton(Fable$002EReactAgGrid_ColumnDef([new Fable$002EReactAgGrid_ColumnDefOptions(0, header), new Fable$002EReactAgGrid_ColumnDefOptions(7, Util_int32ToString(i)), new Fable$002EReactAgGrid_ColumnDefOptions(10, 100), new Fable$002EReactAgGrid_ColumnDefOptions(34, true), new Fable$002EReactAgGrid_ColumnDefOptions(24, true), new Fable$002EReactAgGrid_ColumnDefOptions(40, (parameter) => {
            let copyOfStruct;
            return invStringCmp((copyOfStruct = parameter.data["0"], Types_toString(copyOfStruct)), "2") ? 2 : 1;
        }), new Fable$002EReactAgGrid_ColumnDefOptions(35, (parameter_1) => (Util_equals(parameter_1.value, 3) ? Util_createObj(new Types_List(["backgroundColor", "red"], new Types_List())) : Util_createObj(new Types_List()))), new Fable$002EReactAgGrid_ColumnDefOptions(39, (ev) => {
            dispatch(new Types_Msg(0, new Types_GridInput(Int32_parse(ev.node.id, 511, false, 32), Int32_parse(ev.colDef.field, 511, false, 32), Types_toString(ev.newValue))));
        })]));
    }, (Array_indexed(tableRep.HeadCol))))))])]), new Fable$002EReactAgGrid_GridOptions(2, (Array_map((value) => value, tableRep.Grid))), new Fable$002EReactAgGrid_GridOptions(4, [Util_createObj(List_ofSeq(Seq_delay(() => Seq_append(Seq_singleton(["date", ""]), Seq_delay(() => Seq_collect((matchValue_1) => {
        const i_1 = matchValue_1[0] | 0;
        const header_1 = matchValue_1[1];
        return Seq_singleton([Util_int32ToString(i_1), header_1]);
    }, (Array_indexed(tableRep.HeadCol))))))))]), new Fable$002EReactAgGrid_GridOptions(5, 36), new Fable$002EReactAgGrid_GridOptions(7, Util_createObj(new Types_List(["font-size", "16px"], new Types_List()))), new Fable$002EReactAgGrid_GridOptions(9, true), new Fable$002EReactAgGrid_GridOptions(8, true)]), (props_1 = MapUtil_keyValueList(props, 1), react.createElement(ag$002Dgrid$002Dreact_AgGridReact, props_1)))];
    return react.createElement("div", MapUtil_keyValueList(props_2, 1), ...children_1);
}

export function render(state, dispatch) {
    const children_2 = [react.createElement("p", {}, "Basic AgGrid "), agGrid(state.TableRep, dispatch), react.createElement("br", {})];
    return react.createElement("div", {}, ...children_2);
}

