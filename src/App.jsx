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


function App({url, hidePaletteAndInspector}) {

  return <div className="vjs-chatbot">
      <SurfaceProvider>
          <div className="vjs-chatbot-canvas">
              <SurfaceComponent renderOptions={renderOptions} modelOptions={modelOptions} url={url}
                                viewOptions={viewOptions}/>
              <ControlsComponent/>
              <MiniviewComponent typeFunction={(v) => v.type}/>
          </div>
          {hidePaletteAndInspector !== true && <div className="vjs-chatbot-rhs">
              <Palette/>
              <Inspector/>
          </div>}
      </SurfaceProvider>
  </div>
}

export default App
