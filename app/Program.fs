module Program

open Elmish
open Elmish.React
open App.State
open App.View

Program.mkProgram init update render
|> Program.withConsoleTrace
|> Program.withReactSynchronous "elmish-app"
|> Program.run
