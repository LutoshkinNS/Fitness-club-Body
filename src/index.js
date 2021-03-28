import maskPhone from './modules/maskPhone';
import valid from './modules/valid';
import dropDownMenu from './modules/dropDownMenu';
import arrowUp from './modules/arrowUp';
import mainSlider from './modules/mainSlider';
import servicesSlider from './modules/servisesSlider';
import gallerySlider from './modules/gallerySlider';
import popup from './modules/popup';
import submitForms from './modules/submitForms';
import calc from './modules/calc';
import burgerMenu from './modules/burgerMenu';

valid('input[type="text"]');
maskPhone('input[type="tel"]');
dropDownMenu();
mainSlider();
arrowUp();
servicesSlider();
gallerySlider();
submitForms('footer_form');
submitForms('banner-form');
submitForms('form1');
submitForms('form2');
submitForms('card_order');
popup();
calc();
burgerMenu();

