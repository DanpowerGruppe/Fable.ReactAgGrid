import { reactElement as Interop_reactElement, reactApi as Interop_reactApi, mkAttr as Interop_mkAttr } from "../../output/.fable/Feliz.1.16.0/Interop.js";
import { singleton as List_singleton, empty as List_empty, ofArray as List_ofArray } from "../../.fable/fable-library.3.0.0-nagareyama-beta-003/List.js";
import { createObjDebug as Util_createObjDebug } from "../../.fable/fable-library.3.0.0-nagareyama-beta-003/Util.js";
import { fixDocsView as Shared_fixDocsView, code as Shared_code } from "../../Shared.js";

export const overview = (() => {
    let xs, elms_1, xs_2;
    const children_2 = List_ofArray([(xs = List_ofArray([Interop_mkAttr("className", "title is-1"), Interop_mkAttr("children", Interop_reactApi.Children.toArray(["Fable.ReactAgGrid.ExampleGrid"]))]), Interop_reactElement("h1", Util_createObjDebug(xs))), Interop_reactElement("hr", Util_createObjDebug(List_empty())), (elms_1 = List_ofArray([Interop_reactElement("p", Util_createObjDebug(List_singleton(["children", ["Here is an example how to use agGrid"]]))), Shared_code("\r\n                type GridInput =\r\n                    {\r\n                        Row : int\r\n                        Col : int\r\n                        Value : string\r\n                    }\r\n\r\n                type TableRep =\r\n                    {\r\n                        HeadCol : string []\r\n                        HeadRow : DateTimeOffset []\r\n                        Values : float [] []\r\n                        Grid : obj []\r\n                    }\r\n\r\n                type Model =\r\n                    {\r\n                        TableRep : TableRep option\r\n                    }\r\n                type State = {\r\n                    TableRep : TableRep\r\n\r\n                }\r\n\r\n                type Msg =\r\n                | SetGridInput of GridInput\r\n\r\n                open Fable.ReactAgGrid\r\n\r\n                let agGrid (tableRep :TableRep) dispatch =\r\n                    div [ Class \"ag-theme-balham\"; Style [ Height \"400px\"; CSSProp.Width \"800px\"  ] ] [\r\n                        Grid.grid [\r\n                            Grid.ColumnDefs [|  Grid.ColumnDef [Grid.HeaderName \"Datum\"; Grid.Field \"date\"; Grid.Sortable true]\r\n                                                for i,header in tableRep.HeadCol |\u003e Array.indexed do\r\n                                                    Grid.ColumnDef\r\n                                                              [ Grid.HeaderName header;\r\n                                                                Grid.Field (string i);\r\n                                                                Grid.Width 100\r\n                                                                Grid.Editable true\r\n                                                                Grid.Sortable true\r\n                                                                Grid.OnCellValueChanged (fun ev -\u003e dispatch (SetGridInput ({Row = int ev.node.id; Col = int ev.colDef.field; Value = string ev.newValue})))] |]\r\n                            Grid.RowData (tableRep.Grid |\u003e Array.map box)\r\n                            Grid.RowHeight 36.\r\n                            Grid.RowStyle (createObj [ \"font-size\" ==\u003e \"16px\" ])\r\n                            Grid.StopEditingWhenGridLosesFocus true\r\n                        ] [ ]\r\n                    ]\r\n                ")]), (xs_2 = List_ofArray([Interop_mkAttr("className", "content"), Interop_mkAttr("children", Interop_reactApi.Children.toArray(Array.from(elms_1)))]), Interop_reactElement("div", Util_createObjDebug(xs_2)))), Shared_fixDocsView("ExampleGrid", false)]);
    return Interop_reactElement("div", Util_createObjDebug(List_singleton(["children", Interop_reactApi.Children.toArray(Array.from(children_2))])));
})();

