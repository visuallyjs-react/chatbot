
export default function EndComponent({ctx}) {

    const { obj, model } = ctx

    return <div className="vjs-chatbot-end" data-vjs-target="true">
        <div className="vjs-delete" onClick={() => model.removeNode(obj)}></div>
        </div>
}
