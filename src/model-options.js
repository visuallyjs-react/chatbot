import {CHOICES} from "./constants.js";
import {isPort} from "@visuallyjs/browser-ui";

function ensureNotEdgeFromPortToParent(src, target) {
    const sourceIsPort = isPort(src), targetIsPort = isPort(target)
    return (!sourceIsPort && !targetIsPort) ||
        (sourceIsPort && src.getParent() !== target) ||
        (targetIsPort && target.getParent() !== src)
}

/**
 * Model options allow you to control VisuallyJs at the model level
 */
const modelOptions = {
    // the name of the property in each node's data that is the key for the data for the ports for that node.
    portDataProperty:CHOICES,
    beforeConnect:ensureNotEdgeFromPortToParent

}

export default modelOptions
