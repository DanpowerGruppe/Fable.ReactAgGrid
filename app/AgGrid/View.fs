module Components.AgGrid.View

open Components.AgGrid.Types

open Fable.Core
open Fable.React
open Fable.React.Props  
open Fable.ReactAgGrid    
open Fable.Core.JsInterop 
 
// printfn "%A" (createObj [ "font-size" ==> "16px" ])

let agGrid (tableRep :TableRep) dispatch =
    div [ Class "ag-theme-balham"; Style [ Height "400px"; CSSProp.Width "800px"  ] ] [
        grid [
            // ColumnDefs [|                
            //     yield {ColumnDef.Create ("Datum") ("date") with editable = false; pinned = "left"}
            //     for i,header in tableRep.HeadCol |> Array.indexed ->
            //         {ColumnDef.Create (header) (string i)
            //             with onCellValueChanged = (fun ev -> dispatch (SetGridInput ({Row = int ev.node.id; Col = int ev.colDef.field; Value = string ev.newValue})))}
            // |]
            ColumnDefs [| ColumnDef [HeaderName "Datum"; Field "date"] |]                                
            RowData (tableRep.Grid |> Array.map box)
            RowHeight 36.
            RowStyle (createObj [ "font-size" ==> "16px" ])
            StopEditingWhenGridLosesFocus true
        ] [ ]
    ]

let render (state: State) dispatch =
    div [ ]
        [ p [ ] [ str "Basic AgGrid " ]
          agGrid state.TableRep dispatch
          br [ ]]

          