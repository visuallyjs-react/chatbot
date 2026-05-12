
export default function InputComponent({ctx}) {

    const { obj, model } = ctx

    return <div className="vjs-chatbot-input" data-vjs-target="true">
        <div className="vjs-delete" onClick={() => model.removeNode(obj)}></div>
    {obj.data.message}
    <textarea rows="5" cols="10" placeholder={obj.data.prompt}></textarea>
        <div className="vjs-chatbot-connect" data-vjs-source="true"></div>
        </div>
}
