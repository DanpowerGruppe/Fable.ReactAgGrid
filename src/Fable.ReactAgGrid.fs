module Fable.ReactAgGrid

open Browser.Types
open Fable.Core
open Fable.Core.JsInterop 
open Fable.React
open Fable.React.Helpers

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

type CellEditorParams = 
    { value : obj 
      keyPress : float 
      charPress : string
      column: Column;
      node: RowNode;
      rowIndex: float  
  
    //   api: GridApi; TODO
  
    //   columnApi: ColumnApi; TODO
      cellStartedEdit: bool;
      // the grid's context object
      context: obj;
  
      // callback to tell grid a key was pressed - useful to pass control key events (tab, arrows etc)
      // back to grid - however you do
      onKeyDown: (KeyboardEvent) -> unit;

      // Callback to tell grid to stop editing the current cell. pass 'false' to prevent navigation moving
      // to the next cell if grid property enterMovesDownAfterEdit=true
      stopEditing: (bool) -> unit;
  
      // A reference to the DOM element representing the grid cell that your component will live inside. Useful if you
      // want to add event listeners or classes at this level. This is the DOM element that gets browser focus when selecting cells.
      eGridCell: HTMLElement;
  
      // Utility function to parse a value using the column's colDef.valueParser
      parseValue: (obj) -> obj;
  
      // Utility function to format a value using the column's colDef.valueFormatter
      formatValue: (obj) -> obj;}      

type ColumnDefOptions = 
    | HeaderName of string
    | ColumnGroupShow of bool
    | HeaderClass of obj
    | ToolPanelClass of obj    
    | SuppressColumnsToolPanel of bool
    | SuppressFiltersToolPanel of bool
    | Field of string
    | ColId of string
    | Type of string array
    | Width of int
    | MinWidth of int
    | MaxWidth of int
    | Flex of int
    | Filter of bool
    | FilterParams of obj // TODO
    | FloatingFilterComponent of obj // TODO
    | FloatingFilterComponentParams of obj // TODO
    | Hide of bool
    | Pinned of string
    | LockPosition of bool
    | LockVisible of bool
    | LockPinned of bool
    | Sortable of bool
    | Sort of string option
    | SortedAt of int // TODO
    | SortingOrder of string option
    | Resizable of bool
    | HeaderTooltip of obj //TODO
    | TooltipField of obj //TODO
    | CheckboxSelection of bool
    | RowDrag of bool //TODO enable functions to be added
    | DndSource of bool //TODO enable functions to be added
    | Editable of bool
    | CellStyle of obj
    | CellClass of obj
    | AutoHeight of bool
    | SingleClickEdit of bool
    | OnCellValueChanged of (Event -> unit)
    // TODO add remaining options

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
    ofImport "AgGridReact" "ag-grid-react" (keyValueList CaseRules.LowerFirst props) elems
