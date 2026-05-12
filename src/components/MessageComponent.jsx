export default function MessageComponent({ctx}) {

    const { obj, model } = ctx

    return <div className="vjs-chatbot-message" data-vjs-target="true">
        <div className="vjs-delete" onClick={() => model.removeNode(obj)}></div>
    {obj.data.message}
        <div className="vjs-chatbot-connect" data-vjs-source="true"></div>
        </div>

}
