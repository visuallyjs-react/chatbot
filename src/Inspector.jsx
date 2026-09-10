import { isNode, isPort} from "@visuallyjs/browser-ui"

import { InspectorComponent } from "@visuallyjs/browser-ui-react"

import {
ACTION_TEST, ACTION_MESSAGE, ACTION_CHOICE, ACTION_INPUT, ACTION_AI, START, END
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

            { getType(current) === ACTION_AI &&
                <div className="vjs-chatbot-inspector">
                    <span>Node Label:</span>
                    <input type="text" vjs-att="label" placeholder="Analyze & Respond"/>
                    <span>Model Selection:</span>
                    <select vjs-att="model">
                        <option value="gpt-4o">gpt-4o</option>
                        <option value="gpt-4o-mini">gpt-4o-mini</option>
                        <option value="claude-3-5-sonnet">claude-3-5-sonnet</option>
                        <option value="custom-llm-api">custom-llm-api</option>
                    </select>
                    <span>System Prompt:</span>
                    <textarea vjs-att="systemPrompt" rows="3"></textarea>
                    <span>User Prompt / Input Binding:</span>
                    <textarea vjs-att="userPrompt" rows="3"></textarea>
                    <span>Temperature:</span>
                    <input type="range" vjs-att="temperature" min="0" max="1" step="0.1"/>
                    <span>Max Tokens:</span>
                    <input type="number" vjs-att="maxTokens"/>
                    <span>Output Variable:</span>
                    <input type="text" vjs-att="outputVariable"/>
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
