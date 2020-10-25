import { ProgramModule_run as program_ProgramModule_run, ProgramModule_withConsoleTrace as program_ProgramModule_withConsoleTrace, ProgramModule_mkProgram as program_ProgramModule_mkProgram } from "./output/.fable/Fable.Elmish.3.1.0/program.js";
import { update as State_update, init as State_init } from "./State.js";
import { view as View_view } from "./View.js";

(function () {
    const program_1 = (() => {
        throw 1;
    })()((() => {
        throw 1;
    })()((() => {
        const program = program_ProgramModule_mkProgram(State_init, State_update, View_view);
        return program_ProgramModule_withConsoleTrace(program);
    })()));
    program_ProgramModule_run(program_1);
})();

