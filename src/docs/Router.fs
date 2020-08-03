module Router

open Feliz.Router

type Page =
    | FableAgGrid
    | FableAgGridInstallation
    | FableAgGridExampleGrid

let defaultPage = FableAgGrid

let parseUrl = function
    | [ "" ] -> FableAgGrid
    | [ "installation" ] -> FableAgGridInstallation
    | [ "examplegrid" ] -> FableAgGridExampleGrid
    | _ -> defaultPage

let getHref = function
    | FableAgGrid -> Router.format("")
    | FableAgGridInstallation -> Router.format("installation")
    | FableAgGridExampleGrid -> Router.format("examplegrid")
