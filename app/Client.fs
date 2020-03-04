module Client

open Elmish
open Elmish.React
open Fable.React
open Fable.React.Props
open Fetch.Types
open Thoth.Fetch
open Fulma
open Thoth.Json

open Shared

// The model holds data that you want to keep track of while the application is running
// in this case, we are keeping track of a counter
// we mark it as optional, because initially it will not be available from the client
// the initial value will be requested from server
type Model = { Changes : int }

// The Msg type defines what events/actions can occur while the application is running
// the state of the application changes *only* in reaction to these events
type Msg =
    | Change
type Data = { name: string; uv: int; pv: int; amt: int }
open Fable.AgGrid

// defines the initial state and initial command (= side-effect) of the application
let init () : Model * Cmd<Msg> =
    { Changes = 0 }, Cmd.none

// The update function computes the next state of the application based on the current state and the incoming events/messages
// It can also run side-effects (encoded as commands) like calling the server via Http.
// these commands in turn, can dispatch messages to which the update function will react.
let update (msg : Msg) (currentModel : Model) : Model * Cmd<Msg> =
    match msg with
    | Change -> { Changes = currentModel.Changes + 1 }, Cmd.none
open Fable.Core.JsInterop

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

let rowData (event:obj):unit = importMember "./js/rowData.js"
    

let view (model : _) (dispatch : _ -> unit) =
    div [] [
        Navbar.navbar [
            Navbar.Color IsPrimary
        ] [
            Navbar.Item.div [ ] [
                Heading.h2 [ ] [
                    str "SAFE Template"
                ]
            ]
        ]

        Container.container [] [
            Columns.columns [ ] [                
                Column.column [] [
                    div [ Id "myGrid"; Class "ag-theme-balham"; Style [ Height "200px"; Width "500px"  ] ] [
                        grid [
                            Props.ColumnDefs [|
                                { ColumnDef.Create "Name" "name" with filter = true; checkboxSelection = true }                                
                                { ColumnDef.Create "UV" "uv" with sortable = true; }
                            |]                            
                            Props.RowData (data |> Array.map box)
                        ] [

                        ]
                    ]
                ]
            ]
        ]

        Footer.footer [ ] [
            Content.content [
                Content.Modifiers [ Modifier.TextAlignment (Screen.All, TextAlignment.Centered) ]
            ] [

            ]
        ]
    ]


Program.mkProgram init update view
|> Program.withReactSynchronous "elmish-app"
|> Program.run
