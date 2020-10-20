import * as bulma from "bulma/css/bulma.css";
import { ProgramModule_run as program_ProgramModule_run, ProgramModule_withConsoleTrace as program_ProgramModule_withConsoleTrace, ProgramModule_mkProgram as program_ProgramModule_mkProgram } from "./.fable/Fable.Elmish.3.1.0/program.fs.js";
import { update as State_update, init as State_init } from "./State.fs.js";
import { render as View_render } from "./View.fs.js";
import { Program_withReactSynchronous as react_Program_withReactSynchronous } from "./.fable/Fable.Elmish.React.3.0.1/react.fs.js";

bulma;

(function () {
    let program_2;
    let program_1;
    const program = program_ProgramModule_mkProgram(State_init, State_update, View_render);
    program_1 = program_ProgramModule_withConsoleTrace(program);
    program_2 = react_Program_withReactSynchronous("elmish-app", program_1);
    program_ProgramModule_run(program_2);
})();

