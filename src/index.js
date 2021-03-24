import mainSlider from './modules/mainSlider';
import servicesSlider from './modules/servisesSlider';
import gallerySlider from './modules/gallerySlider';
import popup from './modules/popup';
import sendCallbackForm from './modules/sendCallbackForm';

// popup(idOpenPopup, selectorWrapBlocks, btnSelector);
popup('free_visit_form', '.free-visit', '.free-visit');
popup('callback_form', '.head-main', '.callback-btn');
mainSlider();
servicesSlider();
gallerySlider();
sendCallbackForm();
