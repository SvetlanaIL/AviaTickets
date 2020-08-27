import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

//Инициалиция select
const select = document.querySelectorAll('select');
M.FormSelect.init(select);

export function getSelectInstance(elem) {
  return M.FormSelect.getInstance(elem);
}

//Инициализация autocomplete
const autocomplete = document.querySelectorAll('.autocomplete');
M.Autocomplete.init(autocomplete, {
  data: {
    "Apple": null,
    "Microsoft": null,
    "Google": 'https://placehold.it/250x250'
  },
});

export function getAutocompleteInstance(elem) {
  return M.Autocomplete.getInstance(elem);
}

//Инициализация datePicker
const datePicker = document.querySelectorAll('.datepicker');
M.Datepicker.init(datePicker, {
  showClearBtn: true,
  format: 'yyyy-mm',
});

export function getDatePickerInstance(elem) {
  return M.Datepicker.getInstance(elem);
}