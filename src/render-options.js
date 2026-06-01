import {BackgroundPlugin, GeneratedGridBackground, LassoPlugin} from "@visuallyjs/browser-ui";

/**
 * Render options control the basic behaviour and appearance of the UI. There are a lot of render options available,
 * and we'd encourage you to read the docs for a full overview, but we've included a few here to give you some
 * food for thought.
 */
const renderOptions = {

    // Plugins to use in the canvas.
    plugins:[
        // For plugins that do not need any config, you can just supply their type id.
        LassoPlugin.type,
        {
            // for plugins that require some config, provide type+options.
            // Here we're adding a grid background, using its default setup.
            type:BackgroundPlugin.type,
            options:{
                type:GeneratedGridBackground.type
            }
        }
    ],
    activeFiltering:true,
    zoomToFit:true,
    consumeRightClick:false,
    edges:{
        paintOutline: true
    },
    dragOptions:{
        cssFilter:".vjs-choice-add, .vjs-delete"
    }
}

export default renderOptions
