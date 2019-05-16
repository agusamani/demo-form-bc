class Client {
    constructor(name, surname, dni, balance) {
        this.name = name;
        this.surname = surname;
        this.dni = dni;
        this.balance = balance;
    }

    addClient(name, surname, dni, balance) {
        const ul = document.querySelector('ul');
        const list = document.createElement('li');
        list.innerHTML = `${name} ${surname} ${dni} ${balance}`;

        ul.appendChild(list);
    }

    clearField() {
        document.querySelector('#name').value = '';
        document.querySelector('#surname').value = '';
        document.querySelector('#dni').value = '';
        document.querySelector('#balance').value = '';
    }
     
}

let itemsArray = [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

document.querySelector('#form').addEventListener('submit', function(e){

    const name = document.querySelector('#name').value;
    const surname = document.querySelector('#surname').value;
    const dni = document.querySelector('#dni').value;
    const balance = document.querySelector('#balance').value;

    const client = new Client(name, surname, dni, balance);

    client.addClient(name, surname, dni, balance)
    
    client.clearField();

    e.preventDefault();

    itemsArray.push(client);
    localStorage.setItem('items', JSON.stringify(itemsArray));
})





