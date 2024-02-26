import { checkFirstVisit } from "../helpers"

export const RegionPopup = () => {
    const firstVisit = checkFirstVisit();
    if (firstVisit) {
        const regionPopup = document.querySelector('.locale-modal_component');
        const regionPopupInner = document.querySelector('#locale-modal-popup');

        regionPopup.style.display = 'block';
        regionPopupInner.style.display = 'flex';
    }

}