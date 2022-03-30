import { checkAuth,
    getItems, 
    createItems,
    logout, 
    deleteItem,
    itemBought,
    itemUnbought, 
    deleteList } from '../fetch-utils.js';
import { renderItems } from '../render-utils.js';

//set the dom
const formEl = document.querySelector('form');
const displayListEl = document.querySelector('#item-list-display');

const logoutButton = document.getElementById('logout');
const deleteListButton = document.getElementById('delete-list');

checkAuth();

formEl.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(formEl);
    await createItems({
        item: data.get('item-name'),
        quantity: data.get('item-quantity'),
        is_bought: false 
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
        deleteButton.textContent = 'X';
        deleteButton.addEventListener('click', async () => {
            await deleteItem(items.id);
            fetchAndDisplayItems();
        });
        if (items.is_bought){
            listItems.classList.add('bought');
        } else {
            listItems.addEventListener('click', async () => {
                await itemBought(items.id);
                await fetchAndDisplayItems();
            });
        }
        if (items.is_bought){
            listItems.addEventListener('click', async () => {
                await itemUnbought(items.id);
                listItems.classList.remove('bought');
                await fetchAndDisplayItems();
            }); 
        }

        displayListEl.append(listItems, deleteButton);
    }
}

deleteListButton.addEventListener('click', async () => {
    await deleteList();
    fetchAndDisplayItems();
});

logoutButton.addEventListener('click', () => {
    logout();
});

window.addEventListener('load', async () =>{
    await fetchAndDisplayItems();
});
