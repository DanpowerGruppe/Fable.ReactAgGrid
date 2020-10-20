import { toUniversalTime as DateOffset_toUniversalTime, hour as DateOffset_hour, fromDate as DateOffset_fromDate, addDays as DateOffset_addDays, now as DateOffset_now } from "../.fable/fable-library.3.0.0-nagareyama-alpha-015/DateOffset.js";
import { compare as Date_compare, day as Date_day, month as Date_month, year as Date_year, create as Date_create, addDays as Date_addDays, now as Date_now } from "../.fable/fable-library.3.0.0-nagareyama-alpha-015/Date.js";
import { map as Seq_map, append as Seq_append, singleton as Seq_singleton, collect as Seq_collect, delay as Seq_delay, rangeNumber as Seq_rangeNumber, unfold as Seq_unfold } from "../.fable/fable-library.3.0.0-nagareyama-alpha-015/Seq.js";
import { indexed as Array_indexed, map as Array_map } from "../.fable/fable-library.3.0.0-nagareyama-alpha-015/Array.js";
import { replace as String_replace, printf as String_printf, toConsole as String_toConsole } from "../.fable/fable-library.3.0.0-nagareyama-alpha-015/String.js";
import { int32ToString as Util_int32ToString, createObj as Util_createObj } from "../.fable/fable-library.3.0.0-nagareyama-alpha-015/Util.js";
import { ofSeq as List_ofSeq } from "../.fable/fable-library.3.0.0-nagareyama-alpha-015/List.js";
import { State as Types_State, TableRep as Types_TableRep } from "./Types.fs.js";
import { Cmd_none as cmd_Cmd_none } from "../.fable/Fable.Elmish.3.1.0/cmd.fs.js";
import { parse as Double_parse } from "../.fable/fable-library.3.0.0-nagareyama-alpha-015/Double.js";
import { List as Types_List } from "../.fable/fable-library.3.0.0-nagareyama-alpha-015/Types.js";

export const headers = ["a", "b"];

export const rows = (() => {
    let toDate;
    let copyOfStruct = DateOffset_now();
    toDate = DateOffset_addDays(copyOfStruct, 1);
    let fromDate;
    let date;
    let copyOfStruct_1 = Date_now();
    date = Date_addDays(copyOfStruct_1, -7);
    const arg00 = Date_create(Date_year(date), Date_month(date), Date_day(date));
    fromDate = DateOffset_fromDate(arg00);
    const source = Seq_unfold((d) => ((Date_compare(d, toDate) < 0) ? [d, DateOffset_addDays(d, 1)] : (void 0)), fromDate);
    return Array.from(source);
})();

export const values = (() => Array_map((x) => {
    const array = Int32Array.from(Seq_rangeNumber(2, 1, 3));
    return Array_map((y) => {
        const value = (DateOffset_hour(x) + y) | 0;
        return value;
    }, array, Float64Array);
}, rows))();

export function grid(values_1) {
    String_toConsole(String_printf("grid"));
    return Array.from(Seq_delay(() => Seq_collect((matchValue) => {
        const j = matchValue[0] | 0;
        const date = matchValue[1];
        return Seq_singleton(Util_createObj(List_ofSeq(Seq_delay(() => Seq_append(Seq_singleton(["date", DateOffset_toUniversalTime(date)]), Seq_delay(() => Seq_map((i) => [Util_int32ToString(i), values_1[j][i]], Seq_rangeNumber(0, 1, headers.length - 1))))))));
    }, (Array_indexed(rows)))));
}

export const initTableRep = new Types_TableRep(headers, rows, values, grid(values));

(function () {
    const clo1 = String_toConsole(String_printf("initTable %A"));
    clo1(initTableRep);
})();

export function init() {
    return [new Types_State(initTableRep), cmd_Cmd_none()];
}

export function update(msg, state) {
    const input = msg.fields[0];
    let newValues = state.TableRep.Values;
    const value = String_replace(input.Value, ",", ".");
    newValues[input.Row][input.Col] = Double_parse(value);
    const newGrid = grid(newValues);
    const newRep = new Types_TableRep(state.TableRep.HeadCol, state.TableRep.HeadRow, state.TableRep.Values, newGrid);
    return [new Types_State(newRep), new Types_List()];
}

