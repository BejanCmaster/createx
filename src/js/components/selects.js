const selects = document.querySelectorAll('.form-field__select');
selects.forEach(el => {
  new Choices(el, {
    shoudSort: false,
    position: 'bottom',
    searchEnable: false,
  });
});
