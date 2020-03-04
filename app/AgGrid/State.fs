module Components.AgGrid.State

open System
open Elmish
open Components.AgGrid.Types
open Fable.Core.JsInterop

let headers = [|"a";"b"|]
let rows = [|DateTimeOffset.Now.AddDays(-1.);DateTimeOffset.Now|]
let values = 
    [|0..1|]
    |> Array.map (fun x ->
        [|0..1|]
        |> Array.map (fun y -> x *y |> float ))

let grid = 
    printfn "grid"
    [| for j,date in rows |> Array.indexed ->
        createObj [
            yield "date" ==> date.UtcDateTime
            for i in 0..headers.Length-1 ->
                string i ==> values.[j]]|]

let initTableRep = 
    {
        HeadCol = headers
        HeadRow = rows
        Values = values
        Grid = grid
        ActiveCell = None
    }    

let init() = { TableRep = initTableRep }, Cmd.none
printfn "init"

let update msg state = 
    match msg with 
    | SetActive (attr,date) ->
        let tableRep =
            { state.TableRep with ActiveCell = Some(date,attr)}
        {state with TableRep = tableRep}, []
    | SetGridInput (input) ->
            state,[]        //TODO