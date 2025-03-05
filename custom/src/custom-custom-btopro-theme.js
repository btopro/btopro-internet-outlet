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
          padding: var(--ddd-spacing-10) var(--ddd-spacing-20);
          --joker-purple: var(--ddd-theme-default-wonderPurple);
          --joker-green: var(--ddd-theme-default-opportunityGreen);
          max-width: 960px;
          margin: 0 auto;
        }

        site-title {
          font-size: var(--ddd-font-size-l);
        }

        header {
          display: flex;
        }
        ul {
          margin: 0;
          padding: 0;
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

        .active button {
          background-color: var(--joker-purple);
          color: var(--joker-green);
          font-weight: bold;
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
      activeId: { type: String },
      _items: { type: Array },
    };
  }

  render() {
    return html`
  <header>
    <site-title></site-title>
    <ul>
      <li>
        <site-menu-button
          type="prev"
          position="top"
        ></site-menu-button>
      </li>
  ${this._items.map((item, index) => {
    return html`
      <li class="${item.id === this.activeId ? "active" : ""}">
        <a href="${item.slug}"><button title="${item.title}">${(index+1)}</button></a>
      </li>
    `;
  }
  )}
      <li>
        <site-menu-button
          type="next"
          position="top"
        ></site-menu-button>
      </li>
    </ul>
  </header>
  <main>
    <site-active-title></site-active-title>
    <article>
      <!-- this block and names are required for HAX to edit the content of the page. contentcontainer, slot, and wrapping the slot. -->
      <div id="contentcontainer"><div id="slot"><slot></slot></div></div>
    </article>
  </main>
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
    this.activeId = null;
    autorun(() => {
      this.activeId = toJS(store.activeId);
      this._items = toJS(store.manifest.items);
    });
  }
}
customElements.define(CustomCustomBtoproTheme.tag, CustomCustomBtoproTheme);
export { CustomCustomBtoproTheme };
