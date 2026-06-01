import {PlainArrowOverlay, EVENT_TAP, AnchorLocations} from "@visuallyjs/browser-ui";
import StartComponent from "./components/StartComponent.jsx";
import EndComponent from "./components/EndComponent.jsx";
import MessageComponent from "./components/MessageComponent.jsx";
import InputComponent from "./components/InputComponent.jsx";
import ChoiceComponent from "./components/ChoiceComponent.jsx";
import TestComponent from "./components/TestComponent.jsx";
import {ACTION_CHOICE, ACTION_INPUT, ACTION_MESSAGE, ACTION_TEST, END, SELECTABLE, START} from "./constants.js";

/**
 * View options map node/group types to the JSX used to render them and to various aspects of the given vertex type's
 * behaviour. They also allow you to map edge types to edge appearance and behaviour, although for simple config
 * you can use the `edges` render option in place of an edge mapping a view (see code above).
 */
const viewOptions = {
    nodes:{
        [SELECTABLE]:{
            events:{
                [EVENT_TAP]:(p) => {
                    p.model.setSelection(p.obj)
                }
            }
        },
        [START]:{
            parent:SELECTABLE,
            jsx: (ctx) => <StartComponent ctx={ctx}/>
        },
        [END]:{
            parent:SELECTABLE,
            jsx: (ctx) => <EndComponent ctx={ctx}/>
        },
        [ACTION_MESSAGE]:{
            parent:SELECTABLE,
            jsx: (ctx) => <MessageComponent ctx={ctx}/>
        },
        [ACTION_INPUT]:{
            parent:SELECTABLE,
            jsx: (ctx) => <InputComponent ctx={ctx}/>
        },
        [ACTION_CHOICE]:{
            parent:SELECTABLE,
            jsx: (ctx) => <ChoiceComponent ctx={ctx}/>
        },
        [ACTION_TEST]:{
            parent:SELECTABLE,
            jsx: (ctx) => <TestComponent ctx={ctx}/>
        }
    },
    edges:{
        default:{
            deleteButton:"hover",
            overlays:[
                {
                    type:PlainArrowOverlay.type,
                    options:{
                        location:1,
                        width:10,
                        length:10
                    }
                }
            ],
            label:"{{label}}",
            useHTMLLabel:true,
            events:{
                [EVENT_TAP]:(p) => {
                    p.model.setSelection(p.obj)
                }
            }
        }
    },
    ports:{
        choice:{
            anchor:[AnchorLocations.Left, AnchorLocations.Right ],
            events:{
                [EVENT_TAP]:(p) => {
                    p.model.setSelection(p.obj)
                }
            }
        }
    }
}

export default viewOptions
