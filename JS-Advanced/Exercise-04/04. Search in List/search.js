function search() {
   let searchText = document.getElementById('searchText').value;

   // In Judge we cannot iterate over the collection from querySelector so we need to use Array.from() method.
   let items = Array.from(document.querySelectorAll('#towns li'));
   let counter = 0;

   items.forEach(item => {
      let text = item.textContent;
      if (text.includes(searchText)) {
         item.style.fontWeight = 'bold';
         item.style.textDecoration= 'underline';
         counter++;
         return;
      }
      item.style.fontWeight = '';
      item.style.textDecoration= 'none';
   });

   document.getElementById('result').textContent = `${counter} matches found`;
   
}
