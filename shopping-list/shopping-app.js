import { checkAuth,
    getItems, 
    createItems,
    logout } from '../fetch-utils.js';
import { renderItems } from '../render-utils.js';

//set the dom
const formEl = document.querySelector('form');
const displayListEl = document.querySelector('#item-list-display');

const logoutButton = document.getElementById('logout');

checkAuth();

formEl.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(formEl);
    await createItems({
        item: data.get('item-name'),
        quantity: data.get('item-quantity'),
        bought: false 
    });

    fetchAndDisplayItems();
    
    formEl.reset();
});

async function fetchAndDisplayItems(){
    displayListEl.textContent = '';
    const itemList = await getItems();

    for (let items of itemList){
        const listItems = renderItems(items);
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('deleteButton');
        displayListEl.append(listItems, deleteButton);
    }
}

logoutButton.addEventListener('click', () => {
    logout();
});
