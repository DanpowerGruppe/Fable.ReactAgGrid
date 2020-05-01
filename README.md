# Fable Binding for ReactAgGrid

[![Fable.ReactAgGrid on Nuget](https://buildstats.info/nuget/Fable.ReactAgGrid)](https://www.nuget.org/packages/Fable.ReactAgGrid/)
[![Build Status](https://dev.azure.com/DanpowerEnergyData/Fable.ReactAgGrid/_apis/build/status/DanpowerGruppe.Fable.ReactAgGrid?branchName=master)](https://dev.azure.com/DanpowerEnergyData/Fable.ReactAgGrid/_build/latest?definitionId=11&branchName=master)

## Example TableInput
![AgGridTableImput](https://github.com/DanpowerGruppe/Fable.ReactAgGrid/blob/master/images/agGridExample.PNG "aggrid image")

## Start test app
- Start your test app by cloning this repository and then execute:
```
build.cmd run
```

## Example agGrid
Here is an example how to use agGrid
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
                                                Grid.OnCellValueChanged (fun ev -> dispatch (SetGridInput ({Row = int ev.node.id; Col = int ev.colDef.field; Value = string ev.newValue})))] |]
            Grid.RowData (tableRep.Grid |> Array.map box)
            Grid.RowHeight 36.
            Grid.RowStyle (createObj [ "font-size" ==> "16px" ])
            Grid.StopEditingWhenGridLosesFocus true
        ] [ ]
    ]
```
