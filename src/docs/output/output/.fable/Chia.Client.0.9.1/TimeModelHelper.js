import { ofArray as List_ofArray } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/List.js";
import { addDays as Date_addDays, day as Date_day, month as Date_month, year as Date_year, now as Date_now, create as Date_create } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Date.js";
import { printf as String_printf, toConsole as String_toConsole } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/String.js";
import { fromDate as DateOffset_fromDate } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/DateOffset.js";

export const initTimeSpanSelection = List_ofArray([(() => {
    throw 1;
})(), (() => {
    throw 1;
})()]);

const patternInput$004013 = (() => {
    let copyOfStruct, copyOfStruct_1, copyOfStruct_2;
    let today;
    let copyOfStruct_3 = Date_create((copyOfStruct = Date_now(), Date_year(copyOfStruct)), (copyOfStruct_1 = Date_now(), Date_month(copyOfStruct_1)), (copyOfStruct_2 = Date_now(), Date_day(copyOfStruct_2)));
    today = Date_addDays(copyOfStruct_3, 1);
    const arg10 = today;
    const clo1 = String_toConsole(String_printf("today %A"));
    clo1(arg10);
    return [today, Date_addDays(today, -1)];
})();

export const initDateTo = patternInput$004013[0];

export const initDateFrom = patternInput$004013[1];

export const initTimeModel = ((() => {
    let arg10;
    const arg00 = initDateFrom;
    arg10 = DateOffset_fromDate(arg00);
    const clo1 = String_toConsole(String_printf("DateTimeOffset %A"));
    clo1(arg10);
})(), (() => {
    throw 1;
})());

export function queryTimeModel(timeModel) {
    throw 1;
}

