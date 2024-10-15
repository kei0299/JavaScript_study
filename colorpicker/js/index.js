const colorCode = document.querySelector('#colorPicker');
const colorText = document.querySelector('#colorText');

const colorBg = () => {
  document.body.style.backgroundColor = colorCode.value;
  if (colorCode.value === '#ffffff') {
    colorText.textContent = `カラーコード：${colorCode.value}(white)`;
  }else if (colorCode.value === '#000000'){
    colorText.textContent = `カラーコード：${colorCode.value}(black)`;
  } else {
    colorText.textContent = `カラーコード：${colorCode.value}`;
  }
  
};

colorCode.addEventListener('input', colorBg);