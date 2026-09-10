import React from 'react'

export default function AiAgentComponent({ctx}) {
    const { obj, model } = ctx

    function inspectChoice(id) {
        model.setSelection(obj.getPort(id))
    }

    return (
        <div className="vjs-chatbot-ai" data-vjs-target="true">
            <div className="vjs-delete" onClick={() => model.removeNode(obj)}></div>
            <div className="vjs-chatbot-ai-header">
                <span className="vjs-chatbot-ai-icon">✨</span>
                <span className="vjs-chatbot-ai-title">{obj.data.label || 'AI Prompt / Agent'}</span>
            </div>
            <div className="vjs-chatbot-ai-body">
                {obj.data.choices.map(c =>
                    <div key={c.id} className="vjs-chatbot-choice-option" data-vjs-source="true" data-vjs-port-type="choice" data-vjs-port={c.id} onClick={() => inspectChoice(c.id)}>
                        {c.label}
                    </div>
                )}
            </div>
        </div>
    )
}
