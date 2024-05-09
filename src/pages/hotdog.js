export const toppings = [
    { name: 'Fine mustard', price: 5, selected: false },
    { name: 'Hot mustard', price: 5, selected: false },
    { name: 'Mild ketchup', price: 5, selected: false },
    { name: 'Hot ketchup', price: 5, selected: false },
    { name: 'Fried onions', price: 5, selected: false },
    { name: 'McCucumber', price: 5, selected: false },
    { name: 'Juicy tomato', price: 5, selected: false },
    { name: 'Deadly chilli', price: 5, selected: false },
    { name: 'Tasty cheese', price: 10, selected: false },
    { name: 'Fatty bacon', price: 10, selected: false },
  ];


  export function renderToppings() {
    const toppingsContainer = document.getElementById('toppings-container');
    toppingsContainer.innerHTML = '';

    toppings.forEach((topping) => {
        const toppingElement = document.createElement('div');
        toppingElement.classList.add('topping');
        toppingElement.innerHTML = `
            <h3>${topping.name}</h3>
            <p>${topping.price} Kč</p>
        `;
        toppingsContainer.appendChild(toppingElement);

        if (topping.selected) {
            toppingElement.classList.add('topping--selected');
        }
    });

    // handle click events
    document.querySelectorAll('.topping').forEach((topping, index) => {
        topping.addEventListener('click', () => {
            toggleTopping(index);
            renderToppings();
        });
    });
}

export function toggleTopping(index) {
    toppings[index].selected = !toppings[index].selected;
}



