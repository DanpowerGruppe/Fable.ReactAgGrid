# Fable Binding for ReactAgGrid

## Example agGrid
```fs
open Fable.ReactAgGrid

type TableRep =
    {
        HeadCol :  []
        HeadRow : DateTimeOffset []
        LocalMeasures : Data option [] []
        Grid : obj []
        ActiveCell : (DateTimeOffset * Id) option
    }

let agGrid (tableRep :TableRep) dispatch =
    div [ Id "myGrid"; Class "ag-theme-balham" ;Style [ Height "100%"; Width "100%"  ] ] [
        grid [
            ColumnDefs [|
                yield {ColumnDef.Create ("Datum") ("date") with editable = false; pinned = "left"}
                for i,attr in tableRep.HeadCol |> Array.indexed ->
                    {ColumnDef.Create (attr.Name + " [" + attr.Unit + "] ") (string i)
                        with onCellValueChanged = (fun ev -> dispatch (SetGridInput ({Row = int ev.node.id; Col = int ev.colDef.field; Value = string ev.newValue})))}
            |]
            RowData (tableRep.Grid |> Array.map box)
            RowHeight 36.
            RowStyle (createObj [ "font-size" ==> "16px" ])
            StopEditingWhenGridLosesFocus true
        ] [ ]
    ]