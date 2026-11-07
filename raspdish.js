
(function () {
  const CATEGORIES = {
    soup: {
      sectionSelector: '.soups',
      title: 'Супы'
    },
    main: {
      sectionSelector: '.main_dishes',
      title: 'Главные блюда'
    },
    drink: {
      sectionSelector: '.drinks',
      title: 'Напитки'
    },
    salad: {
      sectionSelector: '.salads',
      title: 'Салаты/стартеры'
    },
    desert: {
      sectionSelector: '.deserts',
      title: 'Десерты'
    }
  };

  function sortDishesByCategory(dishes) {
    const grouped = {};
    for (const dish of dishes) {
      if (!grouped[dish.category]) grouped[dish.category] = [];
      grouped[dish.category].push(dish);
    }
    for (const cat in grouped) {
      grouped[cat].sort((a, b) => a.name.localeCompare(b.name, 'ru'));
    }
    return grouped;
  }

  function createDishCard(dish) {
    const card = document.createElement('div');
    card.className = 'dish_card';
    card.setAttribute('data-dish', dish.keyword);
    card.setAttribute('data-kind', dish.kind);

    card.innerHTML = `
      <img src="${dish.image}" alt="${dish.name}">
      <p class="price">${dish.price}</p>
      <p class="name">${dish.name}</p>
      <p class="volume">${dish.volume}</p>
      <button type="button">Добавить</button>
    `;

    const btn = card.querySelector('button');
    btn.addEventListener('click', (e) => {
      e.stopPropagation(); 
      selectDish(dish);
    });

    return card;
  }

  function renderDishes(dishes) {
    const grouped = sortDishesByCategory(dishes);

    for (const [category, config] of Object.entries(CATEGORIES)) {
      const section = document.querySelector(config.sectionSelector);
      if (!section) continue;

      let grid = section.querySelector('.dish_grid');
      if (!grid) {
        grid = document.createElement('div');
        grid.className = 'dish_grid';

        const h2 = section.querySelector('h2');
        if (h2 && h2.nextSibling) {
          section.insertBefore(grid, h2.nextSibling);
        } else {
          section.appendChild(grid);
        }
      }

      grid.innerHTML = ''; 

      const list = grouped[category] || [];
      for (const dish of list) {
        const card = createDishCard(dish);
        grid.appendChild(card);
      }
    }
  }


  function initFilters() {
  const sections = document.querySelectorAll('section');

  sections.forEach((section) => {
    const filterButtons = section.querySelectorAll('.soup_class');
    const dishGrid = section.querySelector('.dish_grid');

    if (!dishGrid || filterButtons.length === 0) return;

    filterButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const selectedKind = button.dataset.kind;
        const isAlreadyActive = button.classList.contains('active');

        filterButtons.forEach((item) => {
          item.classList.remove('active');
        });

        if (isAlreadyActive) {
          showAllDishes(dishGrid);
          return;
        }

        button.classList.add('active');
        filterDishes(dishGrid, selectedKind);
      });
    });
  });
}


function filterDishes(dishGrid, kind) {
  const cards = dishGrid.querySelectorAll('.dish_card');

  cards.forEach((card) => {
    if (card.dataset.kind === kind) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}


function showAllDishes(dishGrid) {
  const cards = dishGrid.querySelectorAll('.dish_card');

  cards.forEach((card) => {
    card.classList.remove('hidden');
  });
}



  let currentOrder = {
    soup: null,
    main: null,
    drink: null,
    salad: null,
    desert: null
  };

  function selectDish(dish) {
    if (!dish || !dish.category) return;
    if (dish.category === 'soup') currentOrder.soup = dish;
    if (dish.category === 'main') currentOrder.main = dish;
    if (dish.category === 'drink') currentOrder.drink = dish;
    if (dish.category === 'salad') currentOrder.salad = dish;
    if (dish.category === 'desert') currentOrder.desert = dish;

    renderOrderForm();
    renderTotalPrice();
  }

  function renderOrderForm() {
    const orderEmpty = document.querySelector('.order_empty');
    const soupInput = document.getElementById('soup');
    const mainInput = document.getElementById('maindish');
    const drinkInput = document.getElementById('drink');
    const saladInput = document.getElementById('salad');
    const desertInput = document.getElementById('desert');

    
    
    if (!orderEmpty || !soupInput || !mainInput || !drinkInput || !saladInput || !desertInput) return;

    const anySelected = Object.values(currentOrder).some(d => !!d);

    if (!anySelected) {
        orderEmpty.classList.remove('hidden');
        orderEmpty.textContent = 'Ничего не выбрано';

        soupInput.value = '';
        mainInput.value = '';
        drinkInput.value = '';
        saladInput.value = '';
        desertInput.value = '';

        return;
    }
    orderEmpty.classList.add('hidden');
    if (currentOrder.soup) {
        soupInput.value = currentOrder.soup.name;
    } 
    else {
        soupInput.value = '';
    }

    if (currentOrder.main) {
        mainInput.value = currentOrder.main.name;
    } 
    else {
        mainInput.value = '';
    }

    if (currentOrder.drink) {
        drinkInput.value = currentOrder.drink.name;
    } 
    else {
        drinkInput.value = '';
    }
    if (currentOrder.salad) {
        saladInput.value = currentOrder.salad.name;
    } 
    else {
        saladInput.value = '';
    }
    if (currentOrder.desert) {
        desertInput.value = currentOrder.desert.name;
    } 
    else {
        desertInput.value = '';
    }
  }


  function renderTotalPrice() {
    const totalBlock = document.getElementById('total');
    if (!totalBlock) return;

    const anySelected = Object.values(currentOrder).some(d => !!d);
    
    if (!anySelected) {
        totalBlock.classList.add('hidden');
        totalBlock.textContent = '0 Р';
        return;
    }

    totalBlock.classList.remove('hidden');

    function parsePrice(priceStr) {
      if (typeof priceStr === 'number') return priceStr;
      if (!priceStr) return 0;
      const num = parseInt(priceStr.replace(/[^\d]/g, ''), 10);
      return isNaN(num) ? 0 : num;
    }

    let total = 0;
    if (currentOrder.soup) total += parsePrice(currentOrder.soup.price);
    if (currentOrder.main) total += parsePrice(currentOrder.main.price);
    if (currentOrder.drink) total += parsePrice(currentOrder.drink.price);
    if (currentOrder.salad) total += parsePrice(currentOrder.salad.price);
    if (currentOrder.desert) total += parsePrice(currentOrder.desert.price);
    
    totalBlock.textContent = `${total} ₽`;
  }

  window.selectDish = selectDish;

function initMenu(){
  renderDishes(dishes);
  initFilters();
}

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMenu);
  } else {
    initMenu();
  }
})();