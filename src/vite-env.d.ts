/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.json' {
  const value: any
  export default value
}

// SoundCloud Widget API
declare const SC: {
  Widget: {
    (iframe: HTMLIFrameElement): any;
    Events: {
      PLAY: string;
      PAUSE: string;
      FINISH: string;
      [key: string]: string;
    };
  };
}
