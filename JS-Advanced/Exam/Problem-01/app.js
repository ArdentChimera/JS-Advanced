window.addEventListener('load', solution);

function solution() {
   let previewList = document.querySelector('.preview-list'); 

   let employee = document.getElementById('employee');
   let category = document.getElementById('category');
   let urgency = document.getElementById('urgency');
   let assignedTeam = document.getElementById('team');
   let description = document.getElementById('description');

   const addBtn = document.getElementById('add-btn');
   addBtn.addEventListener('click', (e) => {
      e.preventDefault();

      let li = document.createElement('li');
      let article = document.createElement('article');
      
      let button = document.createElement('button');

      let editButton = button.textContent = 'Edit';
      let continueButton = button.textContent = 'Continue';

      let p1 = document.createElement('p');
      p1.innerHTML = `From: ${employee.value}`;
      article.appendChild(p1);

      let p2 = document.createElement('p');
      p2.innerHTML = `Category: ${category.value}`
      article.appendChild(p2);

      let p3 = document.createElement('p');
      p3.innerHTML = `Urgency: ${urgency.value}`
      article.appendChild(p3);

      let p4 = document.createElement('p');
      p4.innerHTML = `Assigned to: ${assignedTeam.value}`
      article.appendChild(p4);

      let p5 = document.createElement('p');
      p5.innerHTML = description.value;
      article.appendChild(p5);
   
      li.appendChild(article);
      previewList.appendChild(li);
      console.log(li);
      console.log(previewList);
   });


   

   console.log(previewList);
}



    
