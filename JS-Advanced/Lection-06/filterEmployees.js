function emplyeeFilter(data, criteria) {
    let employees = JSON.parse(data);
    let criteriaArr = criteria.split('-');
    let numeration = 0;
    employees.forEach(element => {
        for (const key in element) {
            if ( key === criteriaArr[0] && element[key] === criteriaArr[1] ) {       
                console.log(`${numeration}. ${element["first_name"]} ${element["last_name"]} - ${element.email}`);
                numeration++;
            }else if (element[key] === 'all') {
                console.log(`${numeration}. ${element["first_name"]} ${element["last_name"]} - ${element.email}`);
                numeration++;
            }
        }
    });
}


emplyeeFilter(`[{

    "id": "1",
    
    "first_name": "Ardine",
    
    "last_name": "Bassam",
    
    "email": "abassam0@cnn.com",
    
    "gender": "Female"
    
    }, {
    
    "id": "2",
    
    "first_name": "Kizzee",
    
    "last_name": "Jost",
    
    "email": "kjost1@forbes.com",
    
    "gender": "Female"
    
    },
    
    {
    
    "id": "3",
    
    "first_name": "Evanne",
    
    "last_name": "Maldin",
    
    "email": "emaldin2@hostgator.com",
    
    "gender": "Male"
    
    }]`,
    
    'gender-Female');
