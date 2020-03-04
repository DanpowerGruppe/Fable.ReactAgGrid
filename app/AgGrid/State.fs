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

let grid (values:float [] []) = 
    printfn "grid"
    [| for j,date in rows |> Array.indexed ->
        createObj [
            yield "date" ==> date.UtcDateTime
            for i in 0..headers.Length-1 ->
                string i ==> values.[j].[i]]|]

let initTableRep = 
    {
        HeadCol = headers
        HeadRow = rows
        Values = values
        Grid = grid values
    }    

let init() = { TableRep = initTableRep }, Cmd.none
printfn "init"

let update msg state = 
    match msg with 
    | SetGridInput (input) ->
        let mutable newValues = state.TableRep.Values
        newValues.[input.Col].[input.Row] <- input.Value.Replace(",",".") |> float
        let newGrid = grid newValues
        let newRep = {state.TableRep with Grid = newGrid }        
        {state with TableRep = newRep},[]        //TODO