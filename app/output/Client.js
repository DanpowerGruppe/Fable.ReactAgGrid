import * as bulma from "bulma/css/bulma.css";
import { ProgramModule_run, ProgramModule_withConsoleTrace, ProgramModule_mkProgram } from "./.fable/Fable.Elmish.3.1.0/program.fs.js";
import { update, init } from "./State.js";
import { render } from "./View.js";
import { Program_withReactSynchronous } from "./.fable/Fable.Elmish.React.3.0.1/react.fs.js";


(function () {
    let program_2;
    let program_1;
    const program = ProgramModule_mkProgram(init, update, render);
    program_1 = ProgramModule_withConsoleTrace(program);
    program_2 = Program_withReactSynchronous("elmish-app", program_1);
    ProgramModule_run(program_2);
})();

