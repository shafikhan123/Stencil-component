/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface CountryFlag {
    /**
    * Store background color
    */
    'backgroundcolor': any;
    /**
    * Set column layout
    */
    'column': any;
    /**
    * Store country value
    */
    'country': string;
    /**
    * Fetch data API
    */
    'getAPI': any;
    /**
    * Set list lable color
    */
    'listlablecolor': any;
    /**
    * API fetch mode
    */
    'mode': any;
  }
  interface SidebarMenu {
    'headertitle': string;
    'open': () => Promise<void>;
    'opened': boolean;
  }
}

declare global {


  interface HTMLCountryFlagElement extends Components.CountryFlag, HTMLStencilElement {}
  var HTMLCountryFlagElement: {
    prototype: HTMLCountryFlagElement;
    new (): HTMLCountryFlagElement;
  };

  interface HTMLSidebarMenuElement extends Components.SidebarMenu, HTMLStencilElement {}
  var HTMLSidebarMenuElement: {
    prototype: HTMLSidebarMenuElement;
    new (): HTMLSidebarMenuElement;
  };
  interface HTMLElementTagNameMap {
    'country-flag': HTMLCountryFlagElement;
    'sidebar-menu': HTMLSidebarMenuElement;
  }
}

declare namespace LocalJSX {
  interface CountryFlag extends JSXBase.HTMLAttributes<HTMLCountryFlagElement> {
    /**
    * Store background color
    */
    'backgroundcolor'?: any;
    /**
    * Set column layout
    */
    'column'?: any;
    /**
    * Store country value
    */
    'country'?: string;
    /**
    * Fetch data API
    */
    'getAPI'?: any;
    /**
    * Set list lable color
    */
    'listlablecolor'?: any;
    /**
    * API fetch mode
    */
    'mode'?: any;
  }
  interface SidebarMenu extends JSXBase.HTMLAttributes<HTMLSidebarMenuElement> {
    'headertitle'?: string;
    'opened'?: boolean;
  }

  interface IntrinsicElements {
    'country-flag': CountryFlag;
    'sidebar-menu': SidebarMenu;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


