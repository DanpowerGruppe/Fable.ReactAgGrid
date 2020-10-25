import { trimEnd as String_trimEnd, isNullOrWhiteSpace as String_isNullOrWhiteSpace, substring as String_substring, join as String_join, endsWith as String_endsWith } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/String.js";
import { ofSeq as List_ofSeq, singleton as List_singleton, empty as List_empty, collect as List_collect, ofArray as List_ofArray, map as List_map } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/List.js";
import { equalsWith as Array_equalsWith } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Array.js";
import { comparePrimitives as Util_comparePrimitives } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Util.js";
import { React_useEffect_Z4935BE6B as React_React_useEffect_Z4935BE6B, React_createDisposable_3A5B6456 as React_React_createDisposable_3A5B6456, React_useCallbackRef_7C4B0DD6 as React_React_useCallbackRef_7C4B0DD6, React_memo_62A0F746 as React_React_memo_62A0F746 } from "../Feliz.1.10.1/React.js";
import { defaultArg as Option_defaultArg } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Option.js";
import { Impl_allowsPassiveEvents as Listener_Impl_allowsPassiveEvents } from "../Feliz.UseListener.0.5.0/Listener.js";
import { tryParse as Int32_tryParse } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Int32.js";
import { FSharpRef as Types_FSharpRef } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { tryParse as Long_tryParse, fromInt as Long_fromInt } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Long.js";
import { tryParse as Guid_tryParse } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Guid.js";
import { tryParse as Double_tryParse } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Double.js";
import { tryParse as Decimal_tryParse } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Decimal.js";
import Decimal from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Decimal.js";
import { map as Seq_map, delay as Seq_delay } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Seq.js";

export function RouterModule_String_$007CPrefix$007C(prefix, str) {
    if (str.indexOf(prefix) === 0) {
        return str;
    }
    else {
        return void 0;
    }
}

export function RouterModule_String_$007CSuffix$007C(suffix, str) {
    if (String_endsWith(str, suffix)) {
        return str;
    }
    else {
        return void 0;
    }
}

export function RouterModule_encodeQueryString(queryStringPairs) {
    let _arg1;
    let strings;
    const list = queryStringPairs;
    strings = List_map((tupledArg) => {
        const key = tupledArg[0];
        const value = tupledArg[1];
        return String_join("=", [encodeURIComponent(key), encodeURIComponent(value)]);
    }, list);
    _arg1 = String_join("\u0026", strings);
    if (_arg1 === "") {
        return "";
    }
    else {
        const pairs = _arg1;
        return "?" + pairs;
    }
}

export function RouterModule_encodeQueryStringInts(queryStringIntPairs) {
    let _arg1;
    let strings;
    const list = queryStringIntPairs;
    strings = List_map((tupledArg) => {
        const key = tupledArg[0];
        const value = tupledArg[1] | 0;
        return String_join("=", [encodeURIComponent(key), value]);
    }, list);
    _arg1 = String_join("\u0026", strings);
    if (_arg1 === "") {
        return "";
    }
    else {
        const pairs = _arg1;
        return "?" + pairs;
    }
}

function RouterModule_normalizeRoute(routeMode) {
    if (routeMode === 1) {
        return (_arg1) => {
            let activePatternResult12461, path, activePatternResult12462, path_1, activePatternResult12463, path_2, path_3;
            return activePatternResult12461 = RouterModule_String_$007CPrefix$007C("/", _arg1), (activePatternResult12461 != null) ? (path = activePatternResult12461, "#" + path) : (activePatternResult12462 = RouterModule_String_$007CPrefix$007C("#/", _arg1), (activePatternResult12462 != null) ? (path_1 = activePatternResult12462, path_1) : (activePatternResult12463 = RouterModule_String_$007CPrefix$007C("#", _arg1), (activePatternResult12463 != null) ? (path_2 = activePatternResult12463, "#/" + String_substring(path_2, 1, path_2.length - 1)) : (path_3 = _arg1, "#/" + path_3)));
        };
    }
    else {
        return (_arg2) => {
            let activePatternResult12466, path_4, path_5;
            return activePatternResult12466 = RouterModule_String_$007CPrefix$007C("/", _arg2), (activePatternResult12466 != null) ? (path_4 = activePatternResult12466, path_4) : (path_5 = _arg2, "/" + path_5);
        };
    }
}

export function RouterModule_encodeParts(xs, routeMode) {
    let xs_1, list;
    return RouterModule_normalizeRoute(routeMode)((xs_1 = (list = xs, (List_map((part) => {
        if (((part.indexOf("?") >= 0) ? true : (part.indexOf("#") === 0)) ? true : (part.indexOf("/") === 0)) {
            return part;
        }
        else {
            return encodeURIComponent(part);
        }
    }, list))), (String_join("/", xs_1))));
}

export function RouterModule_nav(xs, mode, routeMode) {
    if (mode === 1) {
        history.pushState(void 0, "", RouterModule_encodeParts(xs, routeMode));
    }
    else {
        history.replaceState(void 0, "", RouterModule_encodeParts(xs, routeMode));
    }
    const ev = document.createEvent("CustomEvent");
    ev.initEvent("CUSTOM_NAVIGATION_EVENT", true, true);
    const value = window.dispatchEvent(ev);
    void value;
}

export function RouterModule_urlSegments(path, mode) {
    let activePatternResult12482, activePatternResult12477, activePatternResult12478;
    let list;
    let array;
    const str = (activePatternResult12482 = RouterModule_String_$007CPrefix$007C("#", path), (activePatternResult12482 != null) ? String_substring(path, 1, path.length - 1) : ((mode === 1) ? (activePatternResult12477 = RouterModule_String_$007CSuffix$007C("#", path), (activePatternResult12477 != null) ? "" : (activePatternResult12478 = RouterModule_String_$007CSuffix$007C("#/", path), (activePatternResult12478 != null) ? "" : path)) : path));
    array = str.split("/");
    list = List_ofArray(array);
    return List_collect((segment) => {
        if (String_isNullOrWhiteSpace(segment)) {
            return List_empty();
        }
        else {
            const segment_1 = String_trimEnd(segment, "#");
            if (segment_1 === "?") {
                return List_empty();
            }
            else {
                const activePatternResult12484 = RouterModule_String_$007CPrefix$007C("?", segment_1);
                if (activePatternResult12484 != null) {
                    return List_singleton(segment_1);
                }
                else {
                    const matchValue = segment_1.split("?");
                    if ((!Array_equalsWith(Util_comparePrimitives, matchValue, null)) ? (matchValue.length === 1) : false) {
                        const value = matchValue[0];
                        return List_singleton(decodeURIComponent(value));
                    }
                    else if ((!Array_equalsWith(Util_comparePrimitives, matchValue, null)) ? (matchValue.length === 2) : false) {
                        if (matchValue[1] === "") {
                            const value_1 = matchValue[0];
                            return List_singleton(decodeURIComponent(value_1));
                        }
                        else {
                            const value_2 = matchValue[0];
                            const query = matchValue[1];
                            return List_ofArray([decodeURIComponent(value_2), "?" + query]);
                        }
                    }
                    else {
                        return List_empty();
                    }
                }
            }
        }
    }, list);
}

export function RouterModule_onUrlChange(routeMode, urlChanged, ev) {
    let path;
    return urlChanged((path = ((routeMode === 2) ? (window.location.pathname + window.location.search) : window.location.hash), (RouterModule_urlSegments(path, routeMode))));
}

export const RouterModule_router = React_React_memo_62A0F746((input) => {
    const onChange = React_React_useCallbackRef_7C4B0DD6((ev) => {
        const urlChanged = Option_defaultArg(input.onUrlChanged, (value) => {
            void value;
        });
        const routeMode = Option_defaultArg(input.hashMode, 1) | 0;
        RouterModule_onUrlChange(routeMode, urlChanged, ev);
    });
    if (((window.navigator.userAgent).indexOf("Trident") >= 0) ? true : ((window.navigator.userAgent).indexOf("MSIE") >= 0)) {
        const eventType = "hashchange";
        const listener_2 = React_React_useCallbackRef_7C4B0DD6(() => {
            const passive_2 = Option_defaultArg(void 0, false);
            const fn = (arg) => {
                let arg00;
                const value_1 = arg;
                arg00 = value_1;
                onChange(arg00);
            };
            if (passive_2) {
                const this$ = window;
                const type$0027 = eventType;
                const listener = fn;
                if (Listener_Impl_allowsPassiveEvents) {
                    this$.addEventListener(type$0027, listener, {
                        passive: true,
                    });
                }
                else {
                    this$.addEventListener(type$0027, listener);
                }
            }
            else {
                window.addEventListener(eventType, fn);
            }
            return React_React_createDisposable_3A5B6456(() => {
                if (passive_2) {
                    const this$_1 = window;
                    const type$0027_1 = eventType;
                    const listener_1 = fn;
                    if (Listener_Impl_allowsPassiveEvents) {
                        this$_1.removeEventListener(type$0027_1, listener_1, {
                            passive: true,
                        });
                    }
                    else {
                        this$_1.removeEventListener(type$0027_1, listener_1);
                    }
                }
                else {
                    window.removeEventListener(eventType, fn);
                }
            });
        });
        React_React_useEffect_Z4935BE6B(listener_2);
    }
    else {
        const eventType_1 = "popstate";
        const listener_5 = React_React_useCallbackRef_7C4B0DD6(() => {
            const passive_5 = Option_defaultArg(void 0, false);
            const fn_1 = (arg_1) => {
                let value_2;
                onChange((value_2 = arg_1, (value_2)));
            };
            if (passive_5) {
                const this$_2 = window;
                const type$0027_2 = eventType_1;
                const listener_3 = fn_1;
                if (Listener_Impl_allowsPassiveEvents) {
                    this$_2.addEventListener(type$0027_2, listener_3, {
                        passive: true,
                    });
                }
                else {
                    this$_2.addEventListener(type$0027_2, listener_3);
                }
            }
            else {
                window.addEventListener(eventType_1, fn_1);
            }
            return React_React_createDisposable_3A5B6456(() => {
                if (passive_5) {
                    const this$_3 = window;
                    const type$0027_3 = eventType_1;
                    const listener_4 = fn_1;
                    if (Listener_Impl_allowsPassiveEvents) {
                        this$_3.removeEventListener(type$0027_3, listener_4, {
                            passive: true,
                        });
                    }
                    else {
                        this$_3.removeEventListener(type$0027_3, listener_4);
                    }
                }
                else {
                    window.removeEventListener(eventType_1, fn_1);
                }
            });
        });
        React_React_useEffect_Z4935BE6B(listener_5);
    }
    const eventType_2 = "CUSTOM_NAVIGATION_EVENT";
    const listener_8 = React_React_useCallbackRef_7C4B0DD6(() => {
        const passive_7 = Option_defaultArg(void 0, false);
        const fn_2 = (arg_2) => {
            let value_3;
            onChange((value_3 = arg_2, (value_3)));
        };
        if (passive_7) {
            const this$_4 = window;
            const type$0027_4 = eventType_2;
            const listener_6 = fn_2;
            if (Listener_Impl_allowsPassiveEvents) {
                this$_4.addEventListener(type$0027_4, listener_6, {
                    passive: true,
                });
            }
            else {
                this$_4.addEventListener(type$0027_4, listener_6);
            }
        }
        else {
            window.addEventListener(eventType_2, fn_2);
        }
        return React_React_createDisposable_3A5B6456(() => {
            if (passive_7) {
                const this$_5 = window;
                const type$0027_5 = eventType_2;
                const listener_7 = fn_2;
                if (Listener_Impl_allowsPassiveEvents) {
                    this$_5.removeEventListener(type$0027_5, listener_7, {
                        passive: true,
                    });
                }
                else {
                    this$_5.removeEventListener(type$0027_5, listener_7);
                }
            }
            else {
                window.removeEventListener(eventType_2, fn_2);
            }
        });
    });
    React_React_useEffect_Z4935BE6B(listener_8);
    const matchValue = input.application;
    if (matchValue == null) {
        return null;
    }
    else {
        const elem = matchValue;
        return elem;
    }
});

export function Route_$007CInt$007C_$007C(input) {
    let matchValue;
    let outArg = 0;
    matchValue = [Int32_tryParse(input, 511, false, 32, new Types_FSharpRef(() => outArg, (v) => {
        outArg = v;
    })), outArg];
    if (matchValue[0]) {
        const value = matchValue[1] | 0;
        return value;
    }
    else {
        return void 0;
    }
}

export function Route_$007CInt64$007C_$007C(input) {
    let matchValue;
    let outArg = Long_fromInt(0);
    matchValue = [Long_tryParse(input, 511, false, 64, new Types_FSharpRef(() => outArg, (v) => {
        outArg = v;
    })), outArg];
    if (matchValue[0]) {
        const value = matchValue[1];
        return value;
    }
    else {
        return void 0;
    }
}

export function Route_$007CGuid$007C_$007C(input) {
    let matchValue;
    let outArg = "00000000-0000-0000-0000-000000000000";
    matchValue = [Guid_tryParse(input, new Types_FSharpRef(() => outArg, (v) => {
        outArg = v;
    })), outArg];
    if (matchValue[0]) {
        const value = matchValue[1];
        return value;
    }
    else {
        return void 0;
    }
}

export function Route_$007CNumber$007C_$007C(input) {
    let matchValue;
    let outArg = 0;
    matchValue = [Double_tryParse(input, new Types_FSharpRef(() => outArg, (v) => {
        outArg = v;
    })), outArg];
    if (matchValue[0]) {
        const value = matchValue[1];
        return value;
    }
    else {
        return void 0;
    }
}

export function Route_$007CDecimal$007C_$007C(input) {
    let matchValue;
    let outArg = new Decimal(0);
    matchValue = [Decimal_tryParse(input, new Types_FSharpRef(() => outArg, (v) => {
        outArg = v;
    })), outArg];
    if (matchValue[0]) {
        const value = matchValue[1];
        return value;
    }
    else {
        return void 0;
    }
}

export function Route_$007CBool$007C_$007C(input) {
    const matchValue = input.toLocaleLowerCase();
    switch (matchValue) {
        case "1":
        case "true": {
            return true;
        }
        case "0":
        case "false": {
            return false;
        }
        case "": {
            return true;
        }
        default: {
            return void 0;
        }
    }
}

export function Route_$007CQuery$007C_$007C(input) {
    try {
        const urlParams = new URLSearchParams(input);
        return List_ofSeq(Seq_delay(() => Seq_map((entry) => [entry[0], entry[1]], urlParams.entries())));
    }
    catch (matchValue) {
        return void 0;
    }
}

