module Components.AgGrid.View

open Components.AgGrid.Types
open Fable.React
open Fable.React.Props
open Fable.ReactAgGrid
open Fable.Core.JsInterop
open System

let invStringCmp str1 str2 = 
        (String.Equals((str1),(str2), StringComparison.InvariantCulture))

let agGrid (tableRep :TableRep) dispatch =
    div [ Class "ag-theme-balham"; Style [ Height "400px"; CSSProp.Width "800px"  ] ] [
        Grid.grid [
            Grid.ColumnDefs [|  Grid.ColumnDef [Grid.HeaderName "Datum"; Grid.Field "date"; Grid.Sortable true]
                                Grid.ColumnDef [Grid.HeaderName "Gruppe"; Grid.Children
                                    [| for i,header in tableRep.HeadCol |> Array.indexed ->
                                        Grid.ColumnDef
                                                  [ Grid.HeaderName header;
                                                    Grid.Field (string i);
                                                    Grid.Width 100
                                                    Grid.Editable true
                                                    Grid.Sortable true
                                                    // Grid.RowSpan (fun parameter ->                                                         
                                                    //     if invStringCmp (parameter.data?("0").ToString()) "2" then
                                                    //         2
                                                    //     else 
                                                    //         1)
                                                    Grid.CellRenderer 
                                                        (fun param -> 
                                                            ReactDomServer.renderToString (a [Href "#"] [unbox param.value])) 
                                                    Grid.CellStyle
                                                        (fun parameter ->
                                                            if (parameter.value :?> int) = 3 then
                                                                (createObj [ "backgroundColor" ==> "red" ])
                                                            else
                                                                (createObj [  ]))
                                                    Grid.OnCellValueChanged (fun ev -> dispatch (SetGridInput ({Row = int ev.node.id; Col = int ev.colDef.field; Value = string ev.newValue})))] |] ] |]
            Grid.RowData (tableRep.Grid |> Array.map box)
            Grid.PinnedBottomRowData 
                ([|createObj [
                    yield "date" ==> ""
                    for i,header in tableRep.HeadCol |> Array.indexed ->
                        string i ==> header]|])
            Grid.RowHeight 36.
            Grid.RowStyle (createObj [ "font-size" ==> "16px" ])
            Grid.SuppressRowTransform true
            Grid.StopEditingWhenGridLosesFocus true
        ] [ ]
    ]

let render (state: State) dispatch =
    div [ ]
        [ p [ ] [ str "Basic AgGrid " ]
          agGrid state.TableRep dispatch
          br [ ]]
