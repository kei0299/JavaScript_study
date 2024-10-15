const colorCode = document.querySelector('#colorPicker');
const colorText = document.querySelector('#colorText');

const colorBg = () => {
  colorText.textContent = `カラーコード：${colorCode.value}`;
};

colorCode.addEventListener('input', colorBg);