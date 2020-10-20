import { Union as Types_Union, Record as Types_Record } from "../app/.fable/fable-library.3.0.0-nagareyama-alpha-015/Types.js";
import { union_type as Reflection_union_type, option_type as Reflection_option_type, array_type as Reflection_array_type, int32_type as Reflection_int32_type, lambda_type as Reflection_lambda_type, unit_type as Reflection_unit_type, class_type as Reflection_class_type, bool_type as Reflection_bool_type, float64_type as Reflection_float64_type, obj_type as Reflection_obj_type, record_type as Reflection_record_type, string_type as Reflection_string_type } from "../app/.fable/fable-library.3.0.0-nagareyama-alpha-015/Reflection.js";
import { keyValueList as MapUtil_keyValueList } from "../app/.fable/fable-library.3.0.0-nagareyama-alpha-015/MapUtil.js";

export class ColDef extends Types_Record {
    constructor(headerName, field) {
        super();
        this.headerName = headerName;
        this.field = field;
    }
}

export function ColDef$reflection() {
    return Reflection_record_type("Fable.ReactAgGrid.Grid.ColDef", [], ColDef, () => [["headerName", Reflection_string_type], ["field", Reflection_string_type]]);
}

export class RowNode extends Types_Record {
    constructor(id, data) {
        super();
        this.id = id;
        this.data = data;
    }
}

export function RowNode$reflection() {
    return Reflection_record_type("Fable.ReactAgGrid.Grid.RowNode", [], RowNode, () => [["id", Reflection_string_type], ["data", Reflection_string_type]]);
}

export class Column extends Types_Record {
    constructor(id) {
        super();
        this.id = id;
    }
}

export function Column$reflection() {
    return Reflection_record_type("Fable.ReactAgGrid.Grid.Column", [], Column, () => [["id", Reflection_string_type]]);
}

export class Event$ extends Types_Record {
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
    return Reflection_record_type("Fable.ReactAgGrid.Grid.Event", [], Event$, () => [["data", Reflection_obj_type], ["newValue", Reflection_obj_type], ["oldValue", Reflection_obj_type], ["colDef", ColDef$reflection()], ["column", Column$reflection()], ["node", RowNode$reflection()]]);
}

export class CellEditorParams extends Types_Record {
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
    return Reflection_record_type("Fable.ReactAgGrid.Grid.CellEditorParams", [], CellEditorParams, () => [["value", Reflection_obj_type], ["keyPress", Reflection_float64_type], ["charPress", Reflection_string_type], ["column", Column$reflection()], ["node", RowNode$reflection()], ["rowIndex", Reflection_float64_type], ["cellStartedEdit", Reflection_bool_type], ["context", Reflection_obj_type], ["onKeyDown", Reflection_lambda_type(Reflection_class_type("Browser.Types.KeyboardEvent"), Reflection_unit_type)], ["stopEditing", Reflection_lambda_type(Reflection_bool_type, Reflection_unit_type)], ["eGridCell", Reflection_class_type("Browser.Types.HTMLElement")], ["parseValue", Reflection_lambda_type(Reflection_obj_type, Reflection_obj_type)], ["formatValue", Reflection_lambda_type(Reflection_obj_type, Reflection_obj_type)]]);
}

export class CellClassParams extends Types_Record {
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
    return Reflection_record_type("Fable.ReactAgGrid.Grid.CellClassParams", [], CellClassParams, () => [["value", Reflection_obj_type], ["data", Reflection_obj_type], ["node", RowNode$reflection()], ["colDef", ColDef$reflection()], ["rowIndex", Reflection_int32_type], ["context", Reflection_obj_type]]);
}

export class RowSpanParams extends Types_Record {
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
    return Reflection_record_type("Fable.ReactAgGrid.Grid.RowSpanParams", [], RowSpanParams, () => [["node", Reflection_obj_type], ["data", RowNode$reflection()], ["colDef", ColDef$reflection()], ["column", Column$reflection()], ["context", Reflection_obj_type]]);
}

export class ColumnDefOptions extends Types_Union {
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
    return Reflection_union_type("Fable.ReactAgGrid.Grid.ColumnDefOptions", [], ColumnDefOptions, () => [[["Item", Reflection_string_type]], [["Item", Reflection_array_type(Reflection_obj_type)]], [["Item", Reflection_bool_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_bool_type]], [["Item", Reflection_bool_type]], [["Item", Reflection_string_type]], [["Item", Reflection_string_type]], [["Item", Reflection_array_type(Reflection_string_type)]], [["Item", Reflection_int32_type]], [["Item", Reflection_int32_type]], [["Item", Reflection_int32_type]], [["Item", Reflection_int32_type]], [["Item", Reflection_int32_type]], [["Item", Reflection_bool_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_bool_type]], [["Item", Reflection_string_type]], [["Item", Reflection_bool_type]], [["Item", Reflection_bool_type]], [["Item", Reflection_bool_type]], [["Item", Reflection_bool_type]], [["Item", Reflection_option_type(Reflection_string_type)]], [["Item", Reflection_int32_type]], [["Item", Reflection_option_type(Reflection_string_type)]], [["Item", Reflection_bool_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_bool_type]], [["Item", Reflection_bool_type]], [["Item", Reflection_bool_type]], [["Item", Reflection_bool_type]], [["Item", Reflection_lambda_type(CellClassParams$reflection(), Reflection_obj_type)]], [["Item", Reflection_lambda_type(CellClassParams$reflection(), Reflection_obj_type)]], [["Item", Reflection_bool_type]], [["Item", Reflection_bool_type]], [["Item", Reflection_lambda_type(Event$$reflection(), Reflection_unit_type)]], [["Item", Reflection_lambda_type(RowSpanParams$reflection(), Reflection_int32_type)]]]);
}

export function ColumnDef(options) {
    return MapUtil_keyValueList(options, 1);
}

export class GridOptions extends Types_Union {
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
    return Reflection_union_type("Fable.ReactAgGrid.Grid.GridOptions", [], GridOptions, () => [[["Item", Reflection_array_type(Reflection_obj_type)]], [["Item", Reflection_obj_type]], [["Item", Reflection_array_type(Reflection_obj_type)]], [["Item", Reflection_array_type(Reflection_obj_type)]], [["Item", Reflection_array_type(Reflection_obj_type)]], [["Item", Reflection_float64_type]], [["Item", Reflection_float64_type]], [["Item", Reflection_obj_type]], [["Item", Reflection_bool_type]], [["Item", Reflection_bool_type]]]);
}

