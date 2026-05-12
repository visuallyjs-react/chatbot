import {
    uuid
} from "@visuallyjs/browser-ui"

export default function TestComponent({ctx}) {

    const { obj, model } = ctx

    function addChoice(){
        const p = model.addPort(obj, {
            id:uuid(),
            label:"Result"
        })
        setTimeout(() => model.setSelection(p))
    }

    function removeChoice(id) {
        model.removePort(obj, id)
    }

    function inspectChoice(id) {
        model.setSelection(obj.getPort(id))
    }

    return <div className="vjs-chatbot-test" data-vjs-target="true">
        <div className="vjs-delete" onClick={() => model.removeNode(obj)}></div>
        <span style={{padding:"0.5rem"}}>{obj.data.message}</span>
<div className="vjs-choice-add" onClick={() => addChoice()}></div>
    {obj.data.choices.map(c =>
    <div key={c.id}  className="vjs-chatbot-choice-option" data-vjs-source="true" data-vjs-port-type="choice" data-vjs-port={c.id} onClick={() => inspectChoice(c.id)}>
        {c.label}
    <div className="vjs-choice-delete" onClick={() => removeChoice(c.id)}></div>
        </div>

    )}
</div>

}
