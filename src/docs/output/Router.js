import { Union as Types_Union } from "./.fable/fable-library.3.0.0-nagareyama-beta-003/Types.js";
import { union_type as Reflection_union_type } from "./.fable/fable-library.3.0.0-nagareyama-beta-003/Reflection.js";
import { RouterModule_encodeParts as Router_RouterModule_encodeParts } from "./output/.fable/Feliz.Router.3.2.0/Router.js";
import { singleton as List_singleton } from "./.fable/fable-library.3.0.0-nagareyama-beta-003/List.js";

export class Page extends Types_Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["FableAgGrid", "FableAgGridInstallation", "FableAgGridExampleGrid"];
    }
}

export function Page$reflection() {
    return Reflection_union_type("Router.Page", [], Page, () => [[], [], []]);
}

export const defaultPage = new Page(0);

export function parseUrl(_arg1) {
    let pattern_matching_result;
    if (_arg1.tail != null) {
        if (_arg1.head === "") {
            if (_arg1.tail.tail == null) {
                pattern_matching_result = 0;
            }
            else {
                pattern_matching_result = 3;
            }
        }
        else if (_arg1.head === "installation") {
            if (_arg1.tail.tail == null) {
                pattern_matching_result = 1;
            }
            else {
                pattern_matching_result = 3;
            }
        }
        else if (_arg1.head === "examplegrid") {
            if (_arg1.tail.tail == null) {
                pattern_matching_result = 2;
            }
            else {
                pattern_matching_result = 3;
            }
        }
        else {
            pattern_matching_result = 3;
        }
    }
    else {
        pattern_matching_result = 3;
    }
    switch (pattern_matching_result) {
        case 0: {
            return new Page(0);
        }
        case 1: {
            return new Page(1);
        }
        case 2: {
            return new Page(2);
        }
        case 3: {
            return defaultPage;
        }
    }
}

export function getHref(_arg1) {
    switch (_arg1.tag) {
        case 1: {
            return Router_RouterModule_encodeParts(List_singleton("installation"), 1);
        }
        case 2: {
            return Router_RouterModule_encodeParts(List_singleton("examplegrid"), 1);
        }
        default: {
            return Router_RouterModule_encodeParts(List_singleton(""), 1);
        }
    }
}

