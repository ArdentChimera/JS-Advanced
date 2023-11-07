function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   const texArea = document.querySelector('#inputs textarea');
   const resturanNameRef = document.querySelector('#bestRestaurant p');
   const workerListRef = document.querySelector('#workers p');


   function onClick () {
      let info = JSON.parse(texArea.value);
      let res = {};
      for (let resturantInfo of info) {
         let [resturantName, workersString] = resturantInfo.split(' - ');
         let workers = workersString.split(', ');
         if (!res.hasOwnProperty(resturantName)) {
            res[resturantName] = {
               avgSalary: calcAverageSalary(workers),
               bestSalary: calcBestSalary(workers),
               workers: workers
            };
         }else {
            res[resturantName].workers = concatworkers(res[resturantName].workers, workers);
            res[resturantName].avgSalary = calcAverageSalary(res[resturantName].workers);
            res[resturantName].bestSalary = calcBestSalary(res[resturantName].workers);
         }
      }

      let sortResturants = Object.entries(res).sort((a, b) => b[1].avgSalary - a[1].avgSalary);
      bestRest = sortResturants[0];
      let workerAsText = "";
      bestRest[1].workers.sort(sortWorkers).forEach(e => {
         let[name, salary] = e.split(" ");
         workerAsText += `Name: ${name} With Salary: ${salary} `
      });

      resturanNameRef.textContent = `Name: ${bestRest[0]} Average Salary: ${bestRest[1].avgSalary.toFixed(2)} Best Salary: ${bestRest[1].bestSalary.toFixed(2)}`;
      workerListRef.textContent = workerAsText;
   }

   function sortWorkers(workerA, workerB) {
      let[nameA, salaryA] = workerA.split(" ");
      let[nameB, salaryB] = workerB.split(" ");
      salaryA = Number(salaryA);
      salaryB = Number(salaryB);
      return salaryB - salaryA;
   }

   function concatworkers(oldWorkers, newWorkers) {
      return oldWorkers.concat(newWorkers);
   }

   function calcBestSalary(workers) {
      let bestSalary = 0;
      workers.forEach(worker => {
         let[name, salary] = worker.split(' ');
         salary = Number(salary);
         if (salary > bestSalary) {
            bestSalary = salary;
            return;
         }
      });
      return bestSalary;
   }


   function calcAverageSalary(workers) {
      let sum = 0;
      workers.forEach(worker => {
         let [name, salary] = worker.split(' ');
         return sum += Number(salary);
      });
      return sum / workers.length;
   }
}










// let textField = JSON.parse(document.querySelector('#inputs textarea').value);

// textField.forEach(element => {
//    let currentResurant = element.split(' - ');
//    let workers = currentResurant[1].split(', ');
//    let sumSalary = 0;
//    let resturantName = currentResurant.shift();
//    let salaryArray = [];
//    let workersArray = [];
//    workers.forEach(worker => {
//       let[name, salary] = worker.split(' ');
//       sumSalary += Number(salary);
      
//       salaryArray.push(Number(salary));
//       salaryArray.sort((a, b) => a - b);

//       workersArray.push({ name: name, salary: Number(salary)});
//       workersArray.sort((a, b) => b.salary - a.salary);

//    });
//    let averageSalary = sumSalary / workers.length;
//    let bestSalary = salaryArray.pop();
//    document.querySelector('#outputs #bestRestaurant p').textContent = `
//    Name: ${resturantName} Average Salary: ${averageSalary.toFixed(2)} Best Salary: ${bestSalary}`

//    workersArray.map(worker => {
//       let data = `Name: ${worker.name} With Salary: ${worker.salary}`;
//       document.querySelector('#outputs #workers p').textContent += data;
//    })
   
// });
// console.log(resurants);  
