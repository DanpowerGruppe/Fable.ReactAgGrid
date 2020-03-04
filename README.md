# Fable Binding for ReactAgGrid

## Example agGrid
```fs

type GridInput =
    {
        Row : int
        Col : int
        Value : string
    }

type TableRep =
    {
        HeadCol : string []
        HeadRow : DateTimeOffset []
        Values : float [] []
        Grid : obj []
        ActiveCell : (DateTimeOffset * string) option
    }    

type Model =
    {
        TableRep : TableRep option
    }
type State = {
    TableRep : TableRep 

}

open Fable.ReactAgGrid
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