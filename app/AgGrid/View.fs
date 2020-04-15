module Components.AgGrid.View

open Components.AgGrid.Types
open Fable.React
open Fable.React.Props  
open Fable.ReactAgGrid    
open Fable.Core.JsInterop 
 
let agGrid (tableRep :TableRep) dispatch =
    div [ Class "ag-theme-balham"; Style [ Height "400px"; CSSProp.Width "800px"  ] ] [
        Grid.grid [ 
            Grid.ColumnDefs [|  Grid.ColumnDef [Grid.HeaderName "Datum"; Grid.Field "date"; Grid.Sortable true]
                                for i,header in tableRep.HeadCol |> Array.indexed do
                                    Grid.ColumnDef 
                                              [ Grid.HeaderName header; 
                                                Grid.Field (string i); 
                                                Grid.Width 100
                                                Grid.Editable true
                                                Grid.Sortable true
                                                Grid.CellStyle 
                                                    (fun parameter -> 
                                                        if (parameter.value :?> int) = 3 then    
                                                            (createObj [ "backgroundColor" ==> "red" ])
                                                        else
                                                            (createObj [  ]))
                                                Grid.OnCellValueChanged (fun ev -> dispatch (SetGridInput ({Row = int ev.node.id; Col = int ev.colDef.field; Value = string ev.newValue})))] |]                             
            Grid.RowData (tableRep.Grid |> Array.map box)
            Grid.RowHeight 36.
            Grid.RowStyle (createObj [ "font-size" ==> "16px" ])
            Grid.StopEditingWhenGridLosesFocus true
        ] [ ]
    ]

let render (state: State) dispatch =
    div [ ]
        [ p [ ] [ str "Basic AgGrid " ]
          agGrid state.TableRep dispatch
          br [ ]]

          