module Components.AgGrid.View

open Components.AgGrid.Types

open Fable.React
open Fable.React.Props  
open Fable.ReactAgGrid    
open Fable.Core.JsInterop
let agGrid (tableRep :TableRep) dispatch =
    div [ Id "myGrid"; Class "ag-theme-balham" ;Style [ Height "100%"; Width "100%"  ] ] [
        p[] [unbox "blubb"]
        grid [
            ColumnDefs [|
                yield {ColumnDef.Create ("Datum") ("date") with editable = false; pinned = "left"}
                for i,header in tableRep.HeadCol |> Array.indexed ->
                    printfn "header %A" header
                    {ColumnDef.Create (header) (string i)
                        with onCellValueChanged = (fun ev -> dispatch (SetGridInput ({Row = int ev.node.id; Col = int ev.colDef.field; Value = string ev.newValue})))}
            |]
            RowData (tableRep.Grid |> Array.map box)
            RowHeight 36.
            RowStyle (createObj [ "font-size" ==> "16px" ])
            //             height = "20px" |}
            StopEditingWhenGridLosesFocus true
        ] [ ]
    ]

let render (state: State) dispatch =
    div [ ]
        [ p [ ] [ str "Basic AgGrid " ]
          agGrid state.TableRep dispatch
          br [ ]]