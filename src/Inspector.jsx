import { isNode, isPort} from "@visuallyjs/browser-ui"

import { InspectorComponent } from "@visuallyjs/browser-ui-react"

import {
ACTION_TEST, ACTION_MESSAGE, ACTION_CHOICE, ACTION_INPUT, START, END
} from "./constants";

const CHOICE_PORT="choicePort"
const EDGE = "edge"

export default function ChatbotInspector() {

    function getType(obj) {
        return obj == null ? '' : isNode(obj) ? obj.data.type : isPort(obj) ? CHOICE_PORT : EDGE
    }

    function isBaseAction(obj) {
        const t = getType(obj)
        return t === ACTION_MESSAGE || t === ACTION_CHOICE || t === ACTION_TEST
    }

    function baseActionTemplate() {
        return <div className="vjs-chatbot-inspector">
            <span>Message:</span>
        <input type="text" vjs-att="message" placeholder="message" vjs-focus="true"/>
            </div>
    }

    return <InspectorComponent>

        {(current) => <>


            {isBaseAction(current) && baseActionTemplate()}

            { getType(current) === ACTION_INPUT &&
                <div className="vjs-chatbot-inspector">
                    <span>Message:</span>
                    <input type="text" vjs-att="message" placeholder="message"/>
                    <span>Prompt:</span>
                    <input type="text" vjs-att="prompt" placeholder="prompt"/>
                </div>
            }

            { getType(current) === CHOICE_PORT &&
                <div className="vjs-chatbot-inspector">
                    <span>Label:</span>
                    <input type="text" vjs-att="label" vjs-focus="true" placeholder="enter label..."/>
                </div>

            }

            { getType(current) === EDGE &&
                <div className="vjs-chatbot-inspector">
                    <div>Label</div>
                    <input type="text" vjs-att="label" vjs-focus="true"/>
                </div>
            }

        </>}


        </InspectorComponent>

}
