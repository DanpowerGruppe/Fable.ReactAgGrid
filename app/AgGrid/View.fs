module Components.AgGrid.View

open Components.AgGrid.Types

open Fable.React
open Fable.React.Props  
open Fable.ReactAgGrid    
open Fable.Core.JsInterop 

type Data = { name: string; uv: int; pv: int; amt: int }

let data =
    [| { name = "Page A"; uv = 4000; pv = 2400; amt = 2400 }
       { name = "Page B"; uv = 3000; pv = 1398; amt = 2210 }
       { name = "Page C"; uv = 2000; pv = 9800; amt = 2290 }
       { name = "Page D"; uv = 2780; pv = 3908; amt = 2000 }
       { name = "Page E"; uv = 1890; pv = 4800; amt = 2181 }
       { name = "Page E"; uv = 1890; pv = 4800; amt = 2181 }
       { name = "Page E"; uv = 1890; pv = 4800; amt = 2181 }
       { name = "Page E"; uv = 1890; pv = 4800; amt = 2181 }
       { name = "Page E"; uv = 1890; pv = 4800; amt = 2181 }
       { name = "Page E"; uv = 1890; pv = 4800; amt = 2181 }
       { name = "Page E"; uv = 1890; pv = 4800; amt = 2181 }
       { name = "Page E"; uv = 1890; pv = 4800; amt = 2181 }
       { name = "Page E"; uv = 1890; pv = 4800; amt = 2181 }
       { name = "Page E"; uv = 1890; pv = 4800; amt = 2181 }
       { name = "Page E"; uv = 1890; pv = 4800; amt = 2181 }
       { name = "Page E"; uv = 1890; pv = 4800; amt = 2181 }
       { name = "Page E"; uv = 1890; pv = 4800; amt = 2181 }
       { name = "Page E"; uv = 1890; pv = 4800; amt = 2181 }
       { name = "Page E"; uv = 1890; pv = 4800; amt = 2181 }
       { name = "Page E"; uv = 1890; pv = 4800; amt = 2181 }
       { name = "Page E"; uv = 1890; pv = 4800; amt = 2181 }
       { name = "Page E"; uv = 1890; pv = 4800; amt = 2181 }
       { name = "Page E"; uv = 1890; pv = 4800; amt = 2181 }
       { name = "Page E"; uv = 1890; pv = 4800; amt = 2181 }
       { name = "Page E"; uv = 1890; pv = 4800; amt = 2181 }
       { name = "Page E"; uv = 1890; pv = 4800; amt = 2181 }
       { name = "Page E"; uv = 1890; pv = 4800; amt = 2181 }
       { name = "Page E"; uv = 1890; pv = 4800; amt = 2181 }
       { name = "Page E"; uv = 1890; pv = 4800; amt = 2181 }
       { name = "Page E"; uv = 1890; pv = 4800; amt = 2181 }
       { name = "Page E"; uv = 1890; pv = 4800; amt = 2181 }
       { name = "Page E"; uv = 1890; pv = 4800; amt = 2181 }
       { name = "Page E"; uv = 1890; pv = 4800; amt = 2181 }
       { name = "Page E"; uv = 1890; pv = 4800; amt = 2181 }
       { name = "Page E"; uv = 1890; pv = 4800; amt = 2181 }
       { name = "Page E"; uv = 1890; pv = 4800; amt = 2181 }
       { name = "Page E"; uv = 1890; pv = 4800; amt = 2181 }
       { name = "Page E"; uv = 1890; pv = 4800; amt = 2181 }
       { name = "Page E"; uv = 1890; pv = 4800; amt = 2181 }
       { name = "Page E"; uv = 1890; pv = 4800; amt = 2181 }
       { name = "Page E"; uv = 1890; pv = 4800; amt = 2181 }
       { name = "Page E"; uv = 1890; pv = 4800; amt = 2181 }
       { name = "Page E"; uv = 1890; pv = 4800; amt = 2181 }
       { name = "Page E"; uv = 1890; pv = 4800; amt = 2181 }
       { name = "Page E"; uv = 1890; pv = 4800; amt = 2181 }
       { name = "Page E"; uv = 1890; pv = 4800; amt = 2181 }
       { name = "Page E"; uv = 1890; pv = 4800; amt = 2181 }
       { name = "Page E"; uv = 1890; pv = 4800; amt = 2181 }
       { name = "Page E"; uv = 1890; pv = 4800; amt = 2181 }
       { name = "Page E"; uv = 1890; pv = 4800; amt = 2181 }
       { name = "Page E"; uv = 1890; pv = 4800; amt = 2181 }
       { name = "Page E"; uv = 1890; pv = 4800; amt = 2181 }
       { name = "Page E"; uv = 1890; pv = 4800; amt = 2181 }
       { name = "Page E"; uv = 1890; pv = 4800; amt = 2181 }
       { name = "Page F"; uv = 2390; pv = 3800; amt = 2500 }
       { name = "Page G"; uv = 3490; pv = 4300; amt = 2100 } |]

 
let agGrid (tableRep :TableRep) dispatch =
    div [ Id "myGrid"; Class "ag-theme-balham" ; Style [ Height "100%"; Width "100%"  ] ] [
        grid [
            ColumnDefs [|
                { ColumnDef.Create "Name" "name" with filter = true; checkboxSelection = true }                                
                { ColumnDef.Create "UV" "uv" with sortable = true; }
                // yield {ColumnDef.Create ("Datum") ("date") with editable = false; pinned = "left"}
                // for i,header in tableRep.HeadCol |> Array.indexed ->
                //     {ColumnDef.Create (header) (string i)
                //         with onCellValueChanged = (fun ev -> dispatch (SetGridInput ({Row = int ev.node.id; Col = int ev.colDef.field; Value = string ev.newValue})))}
            |]
            RowData (data |> Array.map box)
            // RowHeight 150.
            // RowStyle (createObj [ "font-size" ==> "16px" ])
            //             height = "20px" |}
            // StopEditingWhenGridLosesFocus true
        ] [ ]
    ]

let render (state: State) dispatch =
    div [ ]
        [ p [ ] [ str "Basic AgGrid " ]
          agGrid state.TableRep dispatch
          br [ ]]