module App.State 

open App.Types
open Elmish

let init() = 
    let initAgGridState, initAgGridCmd = Components.AgGrid.State.init()
    
    { CurrentPage = AgGridExample
      AgGrid = initAgGridState }, Cmd.batch [ initAgGridCmd ]

let update msg state = 
    match msg with 
    | View page -> { state with CurrentPage = page }, Cmd.none
    | AgGridMsg msg -> 
        let nextAgGridState, nextAgGridCmd = 
            Components.AgGrid.State.update msg state.AgGrid 
        let nextState = { state with AgGrid = nextAgGridState }
        nextState, Cmd.map AgGridMsg nextAgGridCmd 