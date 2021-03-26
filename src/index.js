import maskPhone from './modules/maskPhone';
import valid from './modules/valid';
import mainSlider from './modules/mainSlider';
import servicesSlider from './modules/servisesSlider';
import gallerySlider from './modules/gallerySlider';
import popup from './modules/popup';
import submitForms from './modules/submitForms';
import calc from './modules/calc';

valid('input[type="text"]');
maskPhone('input[type="tel"]');
mainSlider();
servicesSlider();
gallerySlider();
// sendCallbackForm();
submitForms('footer_form');
submitForms('banner-form');
submitForms('form1');
submitForms('form2');
submitForms('card_order');
// popup(idOpenPopup, selectorWrapBlocks, btnSelector);
popup('free_visit_form', '.free-visit', '.free-visit');
popup('callback_form', '.head-main', '.callback-btn');
popup('thanks');
calc();

