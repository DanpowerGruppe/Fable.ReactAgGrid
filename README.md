# Fable Binding for ReactAgGrid


[![Fable.ReactAgGrid on Nuget](https://buildstats.info/nuget/Fable.ReactAgGrid)](https://www.nuget.org/packages/Fable.ReactAgGrid/)

## Example TableInput
![AgGridTableImput](https://github.com/DanpowerGruppe/Fable.ReactAgGrid/blob/master/images/agGridExample.PNG "aggrid image")

## Start test app
- Start your test app by cloning this repository and the execute:
```
build.cmd run
```

## Example agGrid
Here is an exmaple how to use agGrid
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
    }    

type Model =
    {
        TableRep : TableRep option
    }
type State = {
    TableRep : TableRep 

}

type Msg = 
| SetGridInput of GridInput

open Fable.ReactAgGrid

let agGrid (tableRep :TableRep) dispatch =
    div [ Class "ag-theme-balham"; Style [ Height "400px"; Width "800px"  ] ] [
        grid [
            ColumnDefs [|
                yield {ColumnDef.Create ("Datum") ("date") with editable = false; pinned = "left"}
                for i,header in tableRep.HeadCol |> Array.indexed ->
                    {ColumnDef.Create (header) (string i)
                        with onCellValueChanged = (fun ev -> dispatch (SetGridInput ({Row = int ev.node.id; Col = int ev.colDef.field; Value = string ev.newValue})))}
            |]
            RowData (tableRep.Grid |> Array.map box)
            RowHeight 36.
            RowStyle (createObj [ "font-size" ==> "16px" ])
            StopEditingWhenGridLosesFocus true
        ] [ ]
    ]
```