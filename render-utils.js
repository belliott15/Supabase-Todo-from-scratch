
export function renderItems(item){
    // <div>
    //     <p>item #</p>
    //     <p>description</p>
    //     <button>delete</button>
    // </div>
    const itemDiv = document.createElement('div');
    const itemQuantity = document.createElement('p');
    const itemDescription = document.createElement('p');

    itemQuantity.textContent = item.quantity;
    itemDescription.textContent = item.item;

    itemDiv.append(itemQuantity, itemDescription);

    return itemDiv;
}
