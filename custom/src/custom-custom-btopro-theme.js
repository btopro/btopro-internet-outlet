/**
 * Copyright 2025 btopro
 * @license Apache-2.0, see License.md for full text.
 */
import { html, css, HAXCMSLitElementTheme } from "@haxtheweb/haxcms-elements/lib/core/HAXCMSLitElementTheme.js";
import { store } from "@haxtheweb/haxcms-elements/lib/core/haxcms-site-store.js";
import { autorun, toJS } from "mobx";
import "@haxtheweb/haxcms-elements/lib/ui-components/navigation/site-menu-button.js";
/**
 * `CustomCustomBtoproTheme`
 * `CustomCustomBtoproTheme based on modern flex design system`
 * `This theme is an example of extending an existing theme component`
 *
 * @microcopy - language worth noting:
 *  - HAXcms - A headless content management system
 *  - HAXCMSTheme - A super class that provides correct baseline wiring to build a new theme
 *
 * @demo demo/index.html
 * @element custom-custom-btopro-theme
 */
class CustomCustomBtoproTheme extends HAXCMSLitElementTheme {
  //styles function
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
        }
      `,
    ];
  }

  static get properties() {
    return {
      ...super.properties,
      _items: { type: Array },
    };
  }

  render() {
    return html`
      <h1>CustomCustomBtoproTheme</h1>
      <p>
        This is a custom theme that extends the HAXCMSTheme base class. It
        provides a starting point for building a custom theme for HAXcms.
      </p>
      <ul>
        <li>
          <site-menu-button
            type="previous"
            position="left"
          ></site-menu-button>
        </li>
    ${this._items.map((item, index) => {
      return html`
        <li>
          <a href="${item.slug}"><button title="${item.title}">${(index+1)}</button></a>
        </li>
      `;
    }
    )}
        <li>
          <site-menu-button
            type="next"
            position="left"
          ></site-menu-button>
        </li>
      </ul>
      <div id="contentcontainer">
        <div id="slot"><slot></slot></div>
      </div>
      </div>
      <p>
        The activeId is currently set to: ${this.activeId}
      </p>
    `;
  }

  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  static get tag() {
    return "custom-custom-btopro-theme";
  }
 
  constructor() {
    super();
    this._items = [];
    autorun(() => {
      this._items = toJS(store.manifest.items);
    });
  }
}
customElements.define(CustomCustomBtoproTheme.tag, CustomCustomBtoproTheme);
export { CustomCustomBtoproTheme };
