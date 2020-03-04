module Fable.ReactAgGrid

open Fable.Core
open Fable.Core.JsInterop 
open Fable.React

type ColDef =
    { headerName : string
      field : string }
 
type RowNode = 
    { id : string }

type Column =
    { id : string }
 
type Event =
    { data : obj
      newValue : obj
      oldValue : obj
      colDef: ColDef
      column: Column
      node : RowNode }

type ColumnDef =
    { headerName : string
      field : string
      sortable : bool
      filter : bool;
      checkboxSelection : bool
      editable : bool
      pinned : string
      cellStyle : obj
      onCellValueChanged : Event -> unit }
    static member Create headerName field =
        {   headerName = headerName;
            field = field;
            sortable = false;
            filter = false;
            checkboxSelection = false;
            editable = true;
            pinned = ""
            cellStyle = createObj["height" ==> "36px"]
            onCellValueChanged =
                (fun x -> printfn "Column %s Row %s Value %A" x.colDef.field x.node.id x.newValue ) }


type Props =
    | ColumnDefs of ColumnDef array
    | RowData of obj array
    | RowHeight of float
    | RowStyle of obj
    | StopEditingWhenGridLosesFocus of bool

let inline grid (props : Props list) (elems : ReactElement list) : ReactElement =
    ofImport "AgGridReact" "ag-grid-react" (keyValueList CaseRules.LowerFirst props) elems
