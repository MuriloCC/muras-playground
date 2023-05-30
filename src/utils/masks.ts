export const creditCardNumberMask = (value: string) => {
  let formattedValue = value.replace(/\s/g, '').slice(0, 16);
  if (formattedValue.length > 0) {
    formattedValue = formattedValue.match(new RegExp('.{1,4}', 'g')).join(' ');
  }
  return formattedValue;
};

export const monthYearMask = (value: string) => {
  let inputValue = value;

  // Remove any non-digit characters
  inputValue = inputValue.replace(/\D/g, '');

  // Format the date as per the mask
  if (inputValue.length > 0) {
    inputValue = inputValue.match(/(\d{1,2})(\d{0,2})(\d{0,4})/);

    if (inputValue[2]) {
      inputValue[2] = '/' + inputValue[2];
    }
    if (inputValue[3]) {
      inputValue[3] = '/' + inputValue[3];
    }
    inputValue = inputValue.slice(1).join('');
  }

  return inputValue

};