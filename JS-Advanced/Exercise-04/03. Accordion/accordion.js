function toggle() {
   let button = document.getElementsByClassName('button')[0];
   let extraContent = document.getElementById('extra');

   console.log(button.textContent);

   if (button.textContent === 'More') {
    button.textContent = 'Less';
    extraContent.style.display = 'block';
   }else if (button.textContent === 'Less') {
    button.textContent = 'More';
    extraContent.style.display = 'none';
   }
}