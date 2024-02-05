// vite-env.d.ts
// / /<reference types="vite-plugin-svgr/client" />
// / <reference types="react-scripts" />

declare module '*.png' { 
    const value: any; 
    export = value; 
}
declare module '*.svg' { 
    import * as React from 'react'

    export const ReactComponent: React.FunctionComponent<
      React.ComponentProps<'svg'> & { title?: string }
    >
    export default ReactComponent
}

interface Children {
  children: React.ReactNode
}
