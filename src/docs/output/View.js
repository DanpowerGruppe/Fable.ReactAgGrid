import { createObjDebug as Util_createObjDebug, equalsSafe as Util_equalsSafe } from "./.fable/fable-library.3.0.0-nagareyama-beta-003/Util.js";
import { reactApi as Interop_reactApi, reactElement as Interop_reactElement, mkAttr as Interop_mkAttr } from "./output/.fable/Feliz.1.16.0/Interop.js";
import { ofArray as List_ofArray, ofSeq as List_ofSeq, empty as List_empty, singleton as List_singleton } from "./.fable/fable-library.3.0.0-nagareyama-beta-003/List.js";
import { singleton as Seq_singleton, append as Seq_append, delay as Seq_delay } from "./.fable/fable-library.3.0.0-nagareyama-beta-003/Seq.js";
import { Msg as Domain_Msg } from "./Domain.js";
import { parseUrl as Router_parseUrl, Page as Router_Page, getHref as Router_getHref } from "./Router.js";
import { Helpers_combineClasses as ElementBuilders_Helpers_combineClasses } from "./output/.fable/Feliz.Bulma.2.3.0/ElementBuilders.js";
import { overview as Fable$002EReactAgGrid_overview, installation as Fable$002EReactAgGrid_installation } from "./views/Fable.ReactAgGrid/Fable.ReactAgGrid.js";
import { overview as Fable$002EReactAgGridExampleGrid_overview } from "./views/Fable.ReactAgGrid/Fable.ReactAgGridExampleGrid.js";
import { join as String_join } from "./.fable/fable-library.3.0.0-nagareyama-beta-003/String.js";
import * as react from "react";
import { RouterModule_router as Router_RouterModule_router } from "./output/.fable/Feliz.Router.3.2.0/Router.js";

export function menuPart(model, dispatch) {
    let xs_2, elms, xs_3, elms_1, xs_4;
    const item = (t, p) => {
        let xs, xs_1;
        const isActive = Util_equalsSafe(model.CurrentPage, p) ? List_singleton(Interop_mkAttr("className", "is-active")) : List_empty();
        const props = List_ofSeq(Seq_delay(() => Seq_append(isActive, Seq_delay(() => Seq_append(Seq_singleton(Interop_mkAttr("onClick", (_arg1) => {
            dispatch(new Domain_Msg(2, t));
        })), Seq_delay(() => Seq_append(Seq_singleton(Interop_mkAttr("children", t)), Seq_delay(() => {
            let value_2;
            return Seq_singleton((value_2 = Router_getHref(p), Interop_mkAttr("href", value_2)));
        }))))))));
        const children = List_singleton((xs = props, (xs_1 = List_ofSeq(Seq_delay(() => Seq_append(xs, Seq_delay(() => Seq_singleton(ElementBuilders_Helpers_combineClasses("", xs)))))), Interop_reactElement("a", Util_createObjDebug(xs_1)))));
        return Interop_reactElement("li", Util_createObjDebug(List_singleton(["children", Interop_reactApi.Children.toArray(Array.from(children))])));
    };
    const elms_2 = List_ofArray([(xs_2 = List_ofArray([Interop_mkAttr("className", "menu-label"), Interop_mkAttr("children", "Fable.AgGrid")]), Interop_reactElement("p", Util_createObjDebug(xs_2))), (elms = List_singleton(item("Overview", new Router_Page(0))), (xs_3 = List_ofArray([Interop_mkAttr("className", "menu-list"), Interop_mkAttr("children", Interop_reactApi.Children.toArray(Array.from(elms)))]), Interop_reactElement("ul", Util_createObjDebug(xs_3)))), (elms_1 = List_ofArray([item("Installation", new Router_Page(1)), item("Example Grid", new Router_Page(2))]), (xs_4 = List_ofArray([Interop_mkAttr("className", "menu-list"), Interop_mkAttr("children", Interop_reactApi.Children.toArray(Array.from(elms_1)))]), Interop_reactElement("ul", Util_createObjDebug(xs_4))))]);
    const xs_5 = List_ofArray([Interop_mkAttr("className", "menu"), Interop_mkAttr("children", Interop_reactApi.Children.toArray(Array.from(elms_2)))]);
    return Interop_reactElement("aside", Util_createObjDebug(xs_5));
}

export function contentPart(model, dispatch) {
    const matchValue = model.CurrentPage;
    switch (matchValue.tag) {
        case 1: {
            return Fable$002EReactAgGrid_installation;
        }
        case 2: {
            return Fable$002EReactAgGridExampleGrid_overview;
        }
        default: {
            return Fable$002EReactAgGrid_overview;
        }
    }
}

export function view(model, dispatch) {
    let elems_3, elms, props_1, elems_1, props, value_2, xs, xs_1, elm, children, value_4, xs_2, xs_3, xs_4, xs_5;
    let render;
    const xs_6 = List_ofArray([Interop_mkAttr("className", String_join(" ", ["container", "md:flex", "justify-center"])), (elems_3 = [(elms = List_singleton((props_1 = List_ofArray([Interop_mkAttr("className", "is-ancestor"), (elems_1 = [(props = List_ofArray([Interop_mkAttr("className", "is-2"), (value_2 = menuPart(model, dispatch), Interop_mkAttr("children", value_2))]), (xs = props, (xs_1 = List_ofSeq(Seq_delay(() => Seq_append(xs, Seq_delay(() => Seq_singleton(ElementBuilders_Helpers_combineClasses("tile", xs)))))), Interop_reactElement("div", Util_createObjDebug(xs_1))))), (elm = contentPart(model, dispatch), (children = (value_4 = elm, (List_singleton(value_4))), (xs_2 = List_ofArray([Interop_mkAttr("className", "tile"), Interop_mkAttr("children", Interop_reactApi.Children.toArray(Array.from(children)))]), Interop_reactElement("div", Util_createObjDebug(xs_2)))))], Interop_mkAttr("children", Interop_reactApi.Children.toArray(Array.from(elems_1))))]), (xs_3 = props_1, (xs_4 = List_ofSeq(Seq_delay(() => Seq_append(xs_3, Seq_delay(() => Seq_singleton(ElementBuilders_Helpers_combineClasses("tile", xs_3)))))), Interop_reactElement("div", Util_createObjDebug(xs_4)))))), (xs_5 = List_ofArray([Interop_mkAttr("className", "section"), Interop_mkAttr("children", Interop_reactApi.Children.toArray(Array.from(elms)))]), Interop_reactElement("section", Util_createObjDebug(xs_5))))], Interop_mkAttr("children", Interop_reactApi.Children.toArray(Array.from(elems_3))))]);
    render = Interop_reactElement("div", Util_createObjDebug(xs_6));
    const props_3 = List_ofArray([["onUrlChanged", (arg_1) => {
        let arg, arg0, _arg1;
        dispatch((arg = arg_1, (arg0 = (_arg1 = arg, (Router_parseUrl(_arg1))), new Domain_Msg(0, arg0))));
    }], ["application", react.createElement(react.Fragment, {}, render)]]);
    return Router_RouterModule_router(Util_createObjDebug(props_3));
}

