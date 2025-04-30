import BaseEcoleDirecteCardEditor from "./base-editor";

const LitElement = Object.getPrototypeOf(
    customElements.get("ha-panel-lovelace")
);

const html = LitElement.prototype.html;

class EcoleDirecteAbsencesCardEditor extends BaseEcoleDirecteCardEditor {
    render() {
        if (!this.hass || !this._config) {
            return html``;
        }

        return html`
            ${this.buildEntityPickerField('Absences entity', 'entity', this._config.entity, 'absences')}
            ${this.buildSwitchField('Display header', 'display_header', this._config.display_header)}
            ${this.buildNumberField('Max absences', 'max_absences', this._config.max_absences)}
            ${this.buildNumberField('Child name', 'child_name', this._config.child_name)}
        `;
    }
}

customElements.define("ecoledirecte-absences-card-editor", EcoleDirecteAbsencesCardEditor);
