import "./slider";
import modals from './modules/modals';
import tabs from "./modules/tabs";
import forms from "./modules/forms";

window.addEventListener('DOMContentLoaded', () => {
    "use strict";
    modals();
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    forms();
});