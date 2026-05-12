export default function StartComponent({ctx}) {

    const { obj, model } = ctx

    return <div className="vjs-chatbot-start">
        <div className="vjs-delete" onClick={() => model.removeNode(obj)}></div>
        <div className="vjs-chatbot-connect" data-vjs-source="true"></div>
        </div>
}
