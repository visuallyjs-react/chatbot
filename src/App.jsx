import {
    SurfaceProvider,
    SurfaceComponent,
    ControlsComponent,
    MiniviewComponent
} from "@visuallyjs/browser-ui-react"

import renderOptions from './render-options'
import viewOptions from './view-options'
import modelOptions from './model-options'
import Palette from "./Palette.jsx";
import Inspector from './Inspector.jsx'
import {useEffect, useRef} from "react";


function App({url, hidePaletteAndInspector}) {

    const r = useRef(null)
    useEffect(() => {
        window.r = r.current
    })

  return <div className="vjs-chatbot">
      <SurfaceProvider>

          <SurfaceComponent className="vjs-chatbot-canvas" renderOptions={renderOptions} modelOptions={modelOptions} url={url}
                            viewOptions={viewOptions} ref={r}/>
          <ControlsComponent/>
          <MiniviewComponent typeFunction={(v) => v.type}/>
          {hidePaletteAndInspector !== true && <div className="vjs-chatbot-rhs">
              <Palette/>
              <Inspector/>
          </div>}
      </SurfaceProvider>
  </div>
}

export default App
