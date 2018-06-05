import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@nylon/aqa-font/aqa-mitr-font.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
class AqaTitle extends PolymerElement {
  static get template() {
    return html`
        <style>
            .page-title{
                color:#37474F;
                font-family: MitrLight;
                font-size: var(--aqa-title-font-size,1.2rem);
                margin-top: 0;
                margin-bottom: 0;
            }
        </style>
        <div class="page-title"><slot></slot></div>
`;
  }

  static get is() { return 'aqa-title'; }
}
window.customElements.define(AqaTitle.is, AqaTitle);
