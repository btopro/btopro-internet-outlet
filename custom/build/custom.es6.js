import{HAXCMSLitElementTheme as m,css as r,html as i,autorun as v,toJS as a,store as o}from"@haxtheweb/haxcms-elements/lib/core/HAXCMSLitElementTheme.js";import"@haxtheweb/haxcms-elements/lib/ui-components/navigation/site-menu-button.js";import"@haxtheweb/haxcms-elements/lib/ui-components/site/site-title.js";import"@haxtheweb/haxcms-elements/lib/ui-components/active-item/site-active-title.js";var d=Object.freeze,h=Object.defineProperty,e=(t,n)=>d(h(t,"raw",{value:d(n||t.slice())}));/**
* Copyright 2025 btopro
* @license Apache-2.0, see License.md for full text.
*/var l,s,p,u;class c extends m{static get styles(){return[super.styles,r(l||(l=e(["\n        :host {\n          display: block;\n          padding: var(--ddd-spacing-10) var(--ddd-spacing-20);\n          max-width: 960px;\n          margin: 0 auto;\n          border: var(--ddd-border-lg);\n          border-width: var(--ddd-spacing-10);\n          border-color: light-dark(var(--joker-purple), var(--joker-green));\n          background-color: light-dark(var(--ddd-theme-default-slateMaxLight\n          ), var(--ddd-theme-default-coalyGray));\n          color: light-dark(var(--ddd-theme-default-coalyGray), var(--ddd-theme-default-slateMaxLight));\n        }\n\n        site-title {\n          font-size: var(--ddd-font-size-l);\n        }\n\n        header {\n          display: flex;\n        }\n        ul {\n          margin: 0;\n          padding: 0;\n        }\n        ul li {\n          display: inline-block;\n          margin: 0;\n          padding: 0;\n          list-style-type: none;\n          vertical-align: top;\n        }\n        ul li a {\n          display: block;\n        }\n        button {\n          height: 32px;\n          width: 32px;\n          margin: 0;\n          padding: 0;\n          font-size: var(--ddd-font-size-sm);\n          cursor: pointer;\n        }\n\n        .active button {\n          background-color: light-dark(var(--joker-purple), var(--joker-green));\n          color: light-dark(var(--joker-green), var(--joker-purple));\n          font-weight: bold;\n        }\n\n        site-menu-button {\n          display: inline-block;\n          vertical-align: top;\n        }\n      "])))]}HAXCMSGlobalStyleSheetContent(){return[...super.HAXCMSGlobalStyleSheetContent(),r(s||(s=e(["\n      :root {\n        --joker-purple: var(--ddd-theme-default-wonderPurple);\n        --joker-green: var(--ddd-theme-default-opportunityGreen);\n      }\n      body {\n        margin: 0;\n        padding: 0;\n        background-color: var(--joker-green);\n      }\n      body.dark-mode {\n        background-color: var(--joker-purple);\n      }\n      "])))]}static get properties(){return{...super.properties,activeId:{type:String},_items:{type:Array}}}render(){return i(u||(u=e(['\n  <header>\n    <site-title></site-title>\n    <ul>\n      <li>\n        <site-menu-button\n          type="prev"\n          position="top"\n        ></site-menu-button>\n      </li>\n  ','\n      <li>\n        <site-menu-button\n          type="next"\n          position="top"\n        ></site-menu-button>\n      </li>\n    </ul>\n  </header>\n  <main>\n    <site-active-title></site-active-title>\n    <article>\n      <!-- this block and names are required for HAX to edit the content of the page. contentcontainer, slot, and wrapping the slot. -->\n      <div id="contentcontainer"><div id="slot"><slot></slot></div></div>\n    </article>\n  </main>\n    '])),this._items.map((n,g)=>i(p||(p=e(['\n      <li class="','">\n        <a href="','"><button title="','">',"</button></a>\n      </li>\n    "])),n.id===this.activeId?"active":"",n.slug,n.title,g+1)))}static get tag(){return"custom-custom-btopro-theme"}constructor(){super(),this._items=[],this.activeId=null,v(()=>{this.activeId=a(o.activeId),this._items=a(o.manifest.items)})}}customElements.define(c.tag,c);
