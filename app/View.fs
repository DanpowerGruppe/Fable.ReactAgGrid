module App.View

open App.Types

open Fable.React
open Fable.React.Props

let spacing = Style [ Padding 20 ]

let render (state: State) dispatch =
  div [ spacing ] [
    Components.AgGrid.View.render state.AgGrid (AgGridMsg >> dispatch)
  ]