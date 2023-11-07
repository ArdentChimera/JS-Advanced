function solution(list) {

    let outputArray = [];

    const add = (el) => {
        outputArray.push(el);
    }

    const remove = (el) => {
        if (outputArray.includes(el)) {
            outputArray.splice(outputArray.indexOf(el), 1);
        }
    };

    const print = () => {
        console.log(outputArray.join(','));
    };

    for (const item of list) {
        let[command, string] = item.split(' ');

        switch(command) {
            case 'add':
                add(string);
            break;
            case 'remove':
                remove(string);
            break;
            case 'print':
                print();
            break;
        };
    }
}

solution(['add hello', 'add again', 'remove hello', 'add again', 'print']);