import { reactApi as Interop_reactApi, reactElement as Interop_reactElement, mkAttr as Interop_mkAttr } from "../../output/.fable/Feliz.1.16.0/Interop.js";
import { empty as List_empty, ofArray as List_ofArray, singleton as List_singleton } from "../../.fable/fable-library.3.0.0-nagareyama-beta-003/List.js";
import { createObjDebug as Util_createObjDebug } from "../../.fable/fable-library.3.0.0-nagareyama-beta-003/Util.js";
import { installationView as Shared_installationView, fixDocsView as Shared_fixDocsView } from "../../Shared.js";

export const overview = (() => {
    let elms, xs_1, elems, xs, xs_2, xs_3, elms_2, xs_5, elms_3, xs_6, children_3, xs_7;
    const children_6 = List_ofArray([(elms = List_ofArray(["Fable.ReactAgGrid - Documentation", (xs_1 = List_ofArray([Interop_mkAttr("href", "https://www.nuget.org/packages/Fable.ReactAgGrid/"), (elems = [(xs = List_singleton(Interop_mkAttr("src", "https://img.shields.io/nuget/v/Fable.ReactAgGrid.svg?style=flat")), Interop_reactElement("img", Util_createObjDebug(xs)))], Interop_mkAttr("children", Interop_reactApi.Children.toArray(Array.from(elems))))]), Interop_reactElement("a", Util_createObjDebug(xs_1)))]), (xs_2 = List_ofArray([Interop_mkAttr("className", "title is-1"), Interop_mkAttr("children", Interop_reactApi.Children.toArray(Array.from(elms)))]), Interop_reactElement("h1", Util_createObjDebug(xs_2)))), (xs_3 = List_ofArray([Interop_mkAttr("className", "subtitle is-2"), Interop_mkAttr("children", Interop_reactApi.Children.toArray(["Fable bindings for AgGrid."]))]), Interop_reactElement("h2", Util_createObjDebug(xs_3))), Interop_reactElement("hr", Util_createObjDebug(List_empty())), (elms_2 = List_ofArray([Interop_reactElement("p", Util_createObjDebug(List_singleton(["children", ["ag-Grid is a powerfulll data grid."]]))), Interop_reactElement("p", Util_createObjDebug(List_singleton(["children", ["ag-Grid contains multiple filters and grouping features"]])))]), (xs_5 = List_ofArray([Interop_mkAttr("className", "content"), Interop_mkAttr("children", Interop_reactApi.Children.toArray(Array.from(elms_2)))]), Interop_reactElement("div", Util_createObjDebug(xs_5)))), (elms_3 = List_ofArray([(xs_6 = List_ofArray([Interop_mkAttr("className", "title is-4"), Interop_mkAttr("children", "Features")]), Interop_reactElement("h4", Util_createObjDebug(xs_6))), (children_3 = List_ofArray([Interop_reactElement("li", Util_createObjDebug(List_singleton(["children", ["column interactions (resize, reorder and pin columns="]]))), Interop_reactElement("li", Util_createObjDebug(List_singleton(["children", ["Pagination"]]))), Interop_reactElement("li", Util_createObjDebug(List_singleton(["children", ["Sorting"]]))), Interop_reactElement("li", Util_createObjDebug(List_singleton(["children", ["Row selection"]]))), Interop_reactElement("li", Util_createObjDebug(List_singleton(["children", ["Data export"]])))]), Interop_reactElement("ul", Util_createObjDebug(List_singleton(["children", Interop_reactApi.Children.toArray(Array.from(children_3))]))))]), (xs_7 = List_ofArray([Interop_mkAttr("className", "content"), Interop_mkAttr("children", Interop_reactApi.Children.toArray(Array.from(elms_3)))]), Interop_reactElement("div", Util_createObjDebug(xs_7)))), Shared_fixDocsView("Fable.AgGrid", false)]);
    return Interop_reactElement("div", Util_createObjDebug(List_singleton(["children", Interop_reactApi.Children.toArray(Array.from(children_6))])));
})();

export const installation = Shared_installationView("Fable.ReactAgGrid");

