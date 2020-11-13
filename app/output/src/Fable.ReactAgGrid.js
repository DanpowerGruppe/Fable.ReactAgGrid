import { Union, Record } from "../.fable/fable-library.3.0.0-nagareyama-rc-005/Types.js";
import { union_type, option_type, array_type, int32_type, lambda_type, unit_type, class_type, bool_type, float64_type, obj_type, record_type, string_type } from "../.fable/fable-library.3.0.0-nagareyama-rc-005/Reflection.js";
import { keyValueList } from "../.fable/fable-library.3.0.0-nagareyama-rc-005/MapUtil.js";

export class ColDef extends Record {
    constructor(headerName, field) {
        super();
        this.headerName = headerName;
        this.field = field;
    }
}

export function ColDef$reflection() {
    return record_type("Fable.ReactAgGrid.Grid.ColDef", [], ColDef, () => [["headerName", string_type], ["field", string_type]]);
}

export class RowNode extends Record {
    constructor(id, data) {
        super();
        this.id = id;
        this.data = data;
    }
}

export function RowNode$reflection() {
    return record_type("Fable.ReactAgGrid.Grid.RowNode", [], RowNode, () => [["id", string_type], ["data", string_type]]);
}

export class Column extends Record {
    constructor(id) {
        super();
        this.id = id;
    }
}

export function Column$reflection() {
    return record_type("Fable.ReactAgGrid.Grid.Column", [], Column, () => [["id", string_type]]);
}

export class Event$ extends Record {
    constructor(data, newValue, oldValue, colDef, column, node) {
        super();
        this.data = data;
        this.newValue = newValue;
        this.oldValue = oldValue;
        this.colDef = colDef;
        this.column = column;
        this.node = node;
    }
}

export function Event$$reflection() {
    return record_type("Fable.ReactAgGrid.Grid.Event", [], Event$, () => [["data", obj_type], ["newValue", obj_type], ["oldValue", obj_type], ["colDef", ColDef$reflection()], ["column", Column$reflection()], ["node", RowNode$reflection()]]);
}

export class CellEditorParams extends Record {
    constructor(value, keyPress, charPress, column, node, rowIndex, cellStartedEdit, context, onKeyDown, stopEditing, eGridCell, parseValue, formatValue) {
        super();
        this.value = value;
        this.keyPress = keyPress;
        this.charPress = charPress;
        this.column = column;
        this.node = node;
        this.rowIndex = rowIndex;
        this.cellStartedEdit = cellStartedEdit;
        this.context = context;
        this.onKeyDown = onKeyDown;
        this.stopEditing = stopEditing;
        this.eGridCell = eGridCell;
        this.parseValue = parseValue;
        this.formatValue = formatValue;
    }
}

export function CellEditorParams$reflection() {
    return record_type("Fable.ReactAgGrid.Grid.CellEditorParams", [], CellEditorParams, () => [["value", obj_type], ["keyPress", float64_type], ["charPress", string_type], ["column", Column$reflection()], ["node", RowNode$reflection()], ["rowIndex", float64_type], ["cellStartedEdit", bool_type], ["context", obj_type], ["onKeyDown", lambda_type(class_type("Browser.Types.KeyboardEvent"), unit_type)], ["stopEditing", lambda_type(bool_type, unit_type)], ["eGridCell", class_type("Browser.Types.HTMLElement")], ["parseValue", lambda_type(obj_type, obj_type)], ["formatValue", lambda_type(obj_type, obj_type)]]);
}

export class CellClassParams extends Record {
    constructor(value, data, node, colDef, rowIndex, context) {
        super();
        this.value = value;
        this.data = data;
        this.node = node;
        this.colDef = colDef;
        this.rowIndex = (rowIndex | 0);
        this.context = context;
    }
}

export function CellClassParams$reflection() {
    return record_type("Fable.ReactAgGrid.Grid.CellClassParams", [], CellClassParams, () => [["value", obj_type], ["data", obj_type], ["node", RowNode$reflection()], ["colDef", ColDef$reflection()], ["rowIndex", int32_type], ["context", obj_type]]);
}

export class RowSpanParams extends Record {
    constructor(node, data, colDef, column, context) {
        super();
        this.node = node;
        this.data = data;
        this.colDef = colDef;
        this.column = column;
        this.context = context;
    }
}

export function RowSpanParams$reflection() {
    return record_type("Fable.ReactAgGrid.Grid.RowSpanParams", [], RowSpanParams, () => [["node", obj_type], ["data", RowNode$reflection()], ["colDef", ColDef$reflection()], ["column", Column$reflection()], ["context", obj_type]]);
}

export class ColumnDefOptions extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["HeaderName", "Children", "ColumnGroupShow", "HeaderClass", "ToolPanelClass", "SuppressColumnsToolPanel", "SuppressFiltersToolPanel", "Field", "ColId", "Type", "Width", "Height", "MinWidth", "MaxWidth", "Flex", "Filter", "FilterParams", "FloatingFilterComponent", "FloatingFilterComponentParams", "Hide", "Pinned", "LockPosition", "LockVisible", "LockPinned", "Sortable", "Sort", "SortedAt", "SortingOrder", "Resizable", "HeaderTooltip", "TooltipField", "CheckboxSelection", "RowDrag", "DndSource", "Editable", "CellStyle", "CellClass", "AutoHeight", "SingleClickEdit", "OnCellValueChanged", "RowSpan"];
    }
}

export function ColumnDefOptions$reflection() {
    return union_type("Fable.ReactAgGrid.Grid.ColumnDefOptions", [], ColumnDefOptions, () => [[["Item", string_type]], [["Item", array_type(obj_type)]], [["Item", bool_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", bool_type]], [["Item", bool_type]], [["Item", string_type]], [["Item", string_type]], [["Item", array_type(string_type)]], [["Item", int32_type]], [["Item", int32_type]], [["Item", int32_type]], [["Item", int32_type]], [["Item", int32_type]], [["Item", bool_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", bool_type]], [["Item", string_type]], [["Item", bool_type]], [["Item", bool_type]], [["Item", bool_type]], [["Item", bool_type]], [["Item", option_type(string_type)]], [["Item", int32_type]], [["Item", option_type(string_type)]], [["Item", bool_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", bool_type]], [["Item", bool_type]], [["Item", bool_type]], [["Item", bool_type]], [["Item", lambda_type(CellClassParams$reflection(), obj_type)]], [["Item", lambda_type(CellClassParams$reflection(), obj_type)]], [["Item", bool_type]], [["Item", bool_type]], [["Item", lambda_type(Event$$reflection(), unit_type)]], [["Item", lambda_type(RowSpanParams$reflection(), int32_type)]]]);
}

export function ColumnDef(options) {
    return keyValueList(options, 1);
}

export class GridOptions extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["ColumnDefs", "DefaultColDef", "RowData", "PinnedTopRowData", "PinnedBottomRowData", "RowHeight", "HeaderHeight", "RowStyle", "StopEditingWhenGridLosesFocus", "SuppressRowTransform"];
    }
}

export function GridOptions$reflection() {
    return union_type("Fable.ReactAgGrid.Grid.GridOptions", [], GridOptions, () => [[["Item", array_type(obj_type)]], [["Item", obj_type]], [["Item", array_type(obj_type)]], [["Item", array_type(obj_type)]], [["Item", array_type(obj_type)]], [["Item", float64_type]], [["Item", float64_type]], [["Item", obj_type]], [["Item", bool_type]], [["Item", bool_type]]]);
}

