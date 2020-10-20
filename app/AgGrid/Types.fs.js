import { Union as Types_Union, Record as Types_Record } from "../.fable/fable-library.3.0.0-nagareyama-alpha-015/Types.js";
import { union_type as Reflection_union_type, option_type as Reflection_option_type, obj_type as Reflection_obj_type, float64_type as Reflection_float64_type, class_type as Reflection_class_type, array_type as Reflection_array_type, record_type as Reflection_record_type, string_type as Reflection_string_type, int32_type as Reflection_int32_type } from "../.fable/fable-library.3.0.0-nagareyama-alpha-015/Reflection.js";

export class GridInput extends Types_Record {
    constructor(Row, Col, Value) {
        super();
        this.Row = (Row | 0);
        this.Col = (Col | 0);
        this.Value = Value;
    }
}

export function GridInput$reflection() {
    return Reflection_record_type("Components.AgGrid.Types.GridInput", [], GridInput, () => [["Row", Reflection_int32_type], ["Col", Reflection_int32_type], ["Value", Reflection_string_type]]);
}

export class TableRep extends Types_Record {
    constructor(HeadCol, HeadRow, Values, Grid) {
        super();
        this.HeadCol = HeadCol;
        this.HeadRow = HeadRow;
        this.Values = Values;
        this.Grid = Grid;
    }
}

export function TableRep$reflection() {
    return Reflection_record_type("Components.AgGrid.Types.TableRep", [], TableRep, () => [["HeadCol", Reflection_array_type(Reflection_string_type)], ["HeadRow", Reflection_array_type(Reflection_class_type("System.DateTimeOffset"))], ["Values", Reflection_array_type(Reflection_array_type(Reflection_float64_type))], ["Grid", Reflection_array_type(Reflection_obj_type)]]);
}

export class Model extends Types_Record {
    constructor(TableRep) {
        super();
        this.TableRep = TableRep;
    }
}

export function Model$reflection() {
    return Reflection_record_type("Components.AgGrid.Types.Model", [], Model, () => [["TableRep", Reflection_option_type(TableRep$reflection())]]);
}

export class State extends Types_Record {
    constructor(TableRep) {
        super();
        this.TableRep = TableRep;
    }
}

export function State$reflection() {
    return Reflection_record_type("Components.AgGrid.Types.State", [], State, () => [["TableRep", TableRep$reflection()]]);
}

export class Msg extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["SetGridInput"];
    }
}

export function Msg$reflection() {
    return Reflection_union_type("Components.AgGrid.Types.Msg", [], Msg, () => [[["Item", GridInput$reflection()]]]);
}

