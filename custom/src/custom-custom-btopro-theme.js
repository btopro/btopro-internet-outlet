/**
 * Copyright 2025 btopro
 * @license Apache-2.0, see License.md for full text.
 */
import { HAXCMSLitElementTheme, css, unsafeCSS, html, store, autorun, toJS } from "@haxtheweb/haxcms-elements/lib/core/HAXCMSLitElementTheme.js";
import "@haxtheweb/haxcms-elements/lib/ui-components/navigation/site-menu-button.js";
import "@haxtheweb/haxcms-elements/lib/ui-components/site/site-title.js";
import "@haxtheweb/haxcms-elements/lib/ui-components/active-item/site-active-title.js";
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

        ul li {
          display: inline-block;
          margin: 0;
          padding: 0;
          list-style-type: none;
          vertical-align: top;
        }
        ul li a {
          display: block;
        }
        button {
          height: 32px;
          width: 32px;
          margin: 0;
          padding: 0;
          font-size: var(--ddd-font-size-sm);
          cursor: pointer;
        }

        site-menu-button {
          display: inline-block;
          vertical-align: top;
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
      <site-title></site-title>
      <p>
        This is a custom theme with some simple examples of how you can build whatever you want
      </p>
      <site-active-title></site-active-title>
      <ul>
        <li>
          <site-menu-button
            type="prev"
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
          ></site-menu-button>
        </li>
      </ul>
      <!-- this block and names are required for HAX to edit the content of the page. contentcontainer, slot, and wrapping the slot. -->
      <div id="contentcontainer"><div id="slot"><slot></slot></div></div>
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
