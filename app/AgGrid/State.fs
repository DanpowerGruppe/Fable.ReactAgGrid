module Components.AgGrid.State

open System
open Elmish
open Components.AgGrid.Types
open Fable.Core.JsInterop

let headers = [|"a";"b"|]

let rows  =
    let toDate = DateTimeOffset.Now.AddDays(1.)

    let fromDate =
        let date = DateTime.Now.AddDays(-7.)
        DateTime(date.Year, date.Month, date.Day) |> DateTimeOffset

    Seq.unfold (fun d ->
        if d < toDate then Some(d, d.AddDays(1.)) else None) fromDate
    |> Seq.toArray

let values = 
    rows
    |> Array.map (fun x ->
        [|2..3|]
        |> Array.map (fun y -> x.Hour + y |> float ))

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
printfn "initTable %A" initTableRep    

let init() = { TableRep = initTableRep }, Cmd.none

let update msg state = 
    match msg with 
    | SetGridInput (input) ->
        let mutable newValues = state.TableRep.Values
        newValues.[input.Row].[input.Col] <- input.Value.Replace(",",".") |> float
        let newGrid = grid newValues
        let newRep = {state.TableRep with Grid = newGrid }        
        {state with TableRep = newRep},[]           