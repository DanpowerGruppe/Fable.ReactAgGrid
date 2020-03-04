module Components.AgGrid.Types

open System 
open Fable.React
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
