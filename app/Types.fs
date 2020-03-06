module App.Types

type Page =
    | AgGridExample
    | Usage

type State = {
    CurrentPage : Page
    AgGrid : Components.AgGrid.Types.State
}

type Msg =
    | View of Page
    | AgGridMsg of Components.AgGrid.Types.Msg