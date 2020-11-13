import { Union, Record } from "../.fable/fable-library.3.0.0-nagareyama-rc-005/Types.js";
import { union_type, option_type, obj_type, float64_type, class_type, array_type, record_type, string_type, int32_type } from "../.fable/fable-library.3.0.0-nagareyama-rc-005/Reflection.js";

export class GridInput extends Record {
    constructor(Row, Col, Value) {
        super();
        this.Row = (Row | 0);
        this.Col = (Col | 0);
        this.Value = Value;
    }
}

export function GridInput$reflection() {
    return record_type("Components.AgGrid.Types.GridInput", [], GridInput, () => [["Row", int32_type], ["Col", int32_type], ["Value", string_type]]);
}

export class TableRep extends Record {
    constructor(HeadCol, HeadRow, Values, Grid) {
        super();
        this.HeadCol = HeadCol;
        this.HeadRow = HeadRow;
        this.Values = Values;
        this.Grid = Grid;
    }
}

export function TableRep$reflection() {
    return record_type("Components.AgGrid.Types.TableRep", [], TableRep, () => [["HeadCol", array_type(string_type)], ["HeadRow", array_type(class_type("System.DateTimeOffset"))], ["Values", array_type(array_type(float64_type))], ["Grid", array_type(obj_type)]]);
}

export class Model extends Record {
    constructor(TableRep) {
        super();
        this.TableRep = TableRep;
    }
}

export function Model$reflection() {
    return record_type("Components.AgGrid.Types.Model", [], Model, () => [["TableRep", option_type(TableRep$reflection())]]);
}

export class State extends Record {
    constructor(TableRep) {
        super();
        this.TableRep = TableRep;
    }
}

export function State$reflection() {
    return record_type("Components.AgGrid.Types.State", [], State, () => [["TableRep", TableRep$reflection()]]);
}

export class Msg extends Union {
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
    return union_type("Components.AgGrid.Types.Msg", [], Msg, () => [[["Item", GridInput$reflection()]]]);
}

