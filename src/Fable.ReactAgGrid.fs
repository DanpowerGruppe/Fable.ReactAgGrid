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

// type ColumnDef =
//     { headerName : string
//       columnGroupShow : bool
//       headerClass : obj
//       suppressColumnsToolPanel: bool
//       field : string
//       sortable : bool
//       filter : bool;
//       checkboxSelection : bool
//       editable : bool
//       resizable : bool
//       pinned : string
//       cellStyle : obj
//       width : string option
//       onCellValueChanged : Event -> unit }
//     static member Create headerName field =
//         {   headerName = headerName;
//             columnGroupShow = false
//             headerClass = createObj[] 
//             suppressColumnsToolPanel = false
//             field = field;
//             sortable = false;
//             filter = false;
//             checkboxSelection = false;
//             editable = true;
//             pinned = ""
//             resizable = true;
//             cellStyle = createObj[] 
//             width = None
//             onCellValueChanged =
//                 (fun x -> printfn "Column %s Row %s Value %A" x.colDef.field x.node.id x.newValue ) }



type ColumnDefOptions = 
    | HeaderName of string
    | ColumnGroupShow of bool
    | HeaderClass of obj
    | SuppressColumnsToolPanel of bool
    | Field of string
    | Sortable of bool
    | Filter of bool
    | CheckboxSelection of bool
    | Editable of bool
    | Resizable of bool
    | Pinned of string
    | CellStyle of obj
    | Width of string
    | OnCellValueChanged of (Event -> unit)
    // member this.LowerFirstString = 
    //     match this with
    //     | HeaderName _ -> "headerName"
    //     | ColumnGroupShow _ -> "columnGroupShow"
    //     | HeaderClass _ -> "headerClass"
    //     | SuppressColumnsToolPanel _ -> "suppressColumnsToolPanel"
    //     | Field _ -> "field"
    //     | Sortable _ -> "sortable"
    //     | Filter _ -> "filter"
    //     | CheckboxSelection _ -> "checkboxSelection"
    //     | Editable _ -> "editable"
    //     | Resizable _ -> "pinned"
    //     | Pinned _ -> "resizable"
    //     | CellStyle _ -> "cellStyle"
    //     | Width _ -> "width"
    //     | OnCellValueChanged _ -> "onCellValueChanged"

let ColumnDef options = 
    keyValueList CaseRules.LowerFirst options

type GridOptions =
    | ColumnDefs of obj array 
    | RowData of obj array
    | RowHeight of float
    | HeaderHeight of float
    | RowStyle of obj
    | StopEditingWhenGridLosesFocus of bool

  

let inline grid (props : GridOptions list) (elems : ReactElement list) : ReactElement =
    let test = keyValueList CaseRules.LowerFirst props  
    printfn "%A" test
    ofImport "AgGridReact" "ag-grid-react" (keyValueList CaseRules.LowerFirst props) elems
