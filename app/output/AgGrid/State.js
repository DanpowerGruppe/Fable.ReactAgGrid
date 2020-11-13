import { toUniversalTime, hour, fromDate as fromDate_1, addDays, now } from "../.fable/fable-library.3.0.0-nagareyama-rc-005/DateOffset.js";
import { compare, day, month, year, create, addDays as addDays_1, now as now_1 } from "../.fable/fable-library.3.0.0-nagareyama-rc-005/Date.js";
import { map as map_1, append, singleton, collect, delay, rangeNumber, unfold } from "../.fable/fable-library.3.0.0-nagareyama-rc-005/Seq.js";
import { indexed, map } from "../.fable/fable-library.3.0.0-nagareyama-rc-005/Array.js";
import { replace, printf, toConsole } from "../.fable/fable-library.3.0.0-nagareyama-rc-005/String.js";
import { int32ToString, createObj } from "../.fable/fable-library.3.0.0-nagareyama-rc-005/Util.js";
import { empty, ofSeq } from "../.fable/fable-library.3.0.0-nagareyama-rc-005/List.js";
import { State, TableRep } from "./Types.js";
import { Cmd_none } from "../.fable/Fable.Elmish.3.1.0/cmd.fs.js";
import { parse } from "../.fable/fable-library.3.0.0-nagareyama-rc-005/Double.js";

export const headers = ["a", "b"];

export const rows = (() => {
    let toDate;
    let copyOfStruct = now();
    toDate = addDays(copyOfStruct, 1);
    let fromDate;
    let date;
    let copyOfStruct_1 = now_1();
    date = addDays_1(copyOfStruct_1, -7);
    const arg00 = create(year(date), month(date), day(date));
    fromDate = fromDate_1(arg00);
    const source = unfold((d) => ((compare(d, toDate) < 0) ? [d, addDays(d, 1)] : (void 0)), fromDate);
    return Array.from(source);
})();

export const values = (() => map((x) => {
    const array = Int32Array.from(rangeNumber(2, 1, 3));
    return map((y) => {
        const value = (hour(x) + y) | 0;
        return value;
    }, array, Float64Array);
}, rows))();

export function grid(values_1) {
    toConsole(printf("grid"));
    return Array.from(delay(() => collect((matchValue) => {
        const j = matchValue[0] | 0;
        const date = matchValue[1];
        return singleton(createObj(ofSeq(delay(() => append(singleton(["date", toUniversalTime(date)]), delay(() => map_1((i) => [int32ToString(i), values_1[j][i]], rangeNumber(0, 1, headers.length - 1))))))));
    }, (indexed(rows)))));
}

export const initTableRep = new TableRep(headers, rows, values, grid(values));

(function () {
    const clo1 = toConsole(printf("initTable %A"));
    clo1(initTableRep);
})();

export function init() {
    return [new State(initTableRep), Cmd_none()];
}

export function update(msg, state) {
    const input = msg.fields[0];
    let newValues = state.TableRep.Values;
    const value = replace(input.Value, ",", ".");
    newValues[input.Row][input.Col] = parse(value);
    const newGrid = grid(newValues);
    let newRep;
    const inputRecord = state.TableRep;
    newRep = (new TableRep(inputRecord.HeadCol, inputRecord.HeadRow, inputRecord.Values, newGrid));
    return [new State(newRep), empty()];
}

