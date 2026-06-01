# Chatbot Flow Editor Implementation

This document describes how the Chatbot Flow Editor is implemented using `@visuallyjs/browser-ui-react` and `@visuallyjs/browser-ui`.

## Components

The application uses the following core components from `@visuallyjs/browser-ui-react`:

- **`SurfaceProvider`**: Provides the context for the VisuallyJS surface.
- **`SurfaceComponent`**: The main canvas area where the chatbot flow is rendered.
- **`ControlsComponent`**: Provides standard zoom and pan controls.
- **`MiniviewComponent`**: Provides a navigation map of the chatbot flow.

### Custom Components
- **`Palette`**: A custom implementation of a palette for chatbot elements (Questions, Answers, Actions, etc.).
- **`Inspector`**: A custom inspector for editing properties of chatbot nodes and edges.

## Configuration Options

The `SurfaceComponent` is configured using several options objects:

- **`renderOptions`**: Defines how elements are rendered on the surface, including node and edge styles specific to chat flows.
- **`viewOptions`**: Configures the view behavior, such as zoom levels and interaction settings.
- **`modelOptions`**: Defines data model constraints and behaviors for the conversation flow.

The editor uses specific node types defined in `constants.js` to represent various parts of a chat conversation.

## CSS Integration
- **VisuallyJS Core**: The core styles are included in `src/index.css` via `@import "@visuallyjs/browser-ui/css/visuallyjs.css";`.
- **App Styles**: Custom styles for the chatbot editor layout and theme are imported from `chatbot.css`.
