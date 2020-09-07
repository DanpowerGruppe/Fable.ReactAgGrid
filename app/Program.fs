module Program

open Elmish
open Elmish.React
open Fable.Core.JsInterop

open App.State
open App.View

importAll "bulma/css/bulma.css"

Program.mkProgram init update render
|> Program.withConsoleTrace
|> Program.withReactSynchronous "elmish-app"
|> Program.run
