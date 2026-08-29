/* ================= DATA ================= */
const CATEGORIES = [
    { id: 'electronics', name: 'Електроніка', ic: '💻', color: '#DCEDEA' },
    { id: 'appliances', name: 'Побутова техніка', ic: '🧺', color: '#F3E7D6' },
    { id: 'fashion', name: 'Мода', ic: '👕', color: '#F6DED6' },
    { id: 'home', name: 'Дім і сад', ic: '🪴', color: '#E4EFDA' },
    { id: 'kids', name: 'Дитячі товари', ic: '🧸', color: '#F7E4EE' },
    { id: 'sport', name: 'Спорт і відпочинок', ic: '🏋️', color: '#DEE9F5' }
];

const PRODUCTS = [
    // ===== ЕЛЕКТРОНІКА =====
    { 
        id: 1, cat: 'electronics', 
        name: 'Samsung Galaxy S24 Ultra 512GB', 
        price: 52999, old: 56999,
        img: 'https://images.samsung.com/s24ultra.jpg'
    },
    { 
        id: 2, cat: 'electronics', 
        name: 'iPhone 15 Pro Max 256GB', 
        price: 49999, old: 52999,
        img: 'https://store.apple.com/iphone15.jpg'
    },
    { 
        id: 3, cat: 'electronics', 
        name: 'MacBook Air 15" M3', 
        price: 45999, old: null,
        img: 'https://store.apple.com/macbookair.jpg'
    },
    { 
        id: 4, cat: 'electronics', 
        name: 'Samsung Galaxy Buds 3 Pro', 
        price: 7999, old: 9999,
        img: 'https://images.samsung.com/buds3.jpg'
    },
    
    // ===== ПОБУТОВА ТЕХНІКА =====
    { 
        id: 5, cat: 'appliances', 
        name: 'Робот-пилосос Xiaomi S10', 
        price: 12999, old: 15999,
        img: 'https://xiaomi.com/s10.jpg'
    },
    { 
        id: 6, cat: 'appliances', 
        name: 'Холодильник LG InstaView', 
        price: 32999, old: null,
        img: 'https://lg.com/instaview.jpg'
    },
    { 
        id: 7, cat: 'appliances', 
        name: 'Мультиварка Philips HD', 
        price: 4999, old: null,
        img: 'https://philips.com/multicooker.jpg'
    },
    { 
        id: 8, cat: 'appliances', 
        name: 'Праска Tefal Ultimate', 
        price: 2999, old: 3999,
        img: 'https://tefal.com/ultimate.jpg'
    },
    
    // ===== МОДА =====
    { 
        id: 9, cat: 'fashion', 
        name: 'Куртка North Face Nuptse', 
        price: 12999, old: 15999,
        img: 'https://thenorthface.com/nuptse.jpg'
    },
    { 
        id: 10, cat: 'fashion', 
        name: 'Кросівки Nike Air Max 90', 
        price: 5999, old: null,
        img: 'https://nike.com/airmax90.jpg'
    },
    { 
        id: 11, cat: 'fashion', 
        name: 'Сумка Michael Kors', 
        price: 8999, old: 11999,
        img: 'https://michaelkors.com/bag.jpg'
    },
    { 
        id: 12, cat: 'fashion', 
        name: 'Пальто Zara Premium', 
        price: 4999, old: null,
        img: 'https://zara.com/coat.jpg'
    },
    
    // ===== ДІМ ТА САД =====
    { 
        id: 13, cat: 'home', 
        name: 'Диван IKEA Vimle 3-місний', 
        price: 15999, old: 18999,
        img: 'https://ikea.com/vimle.jpg'
    },
    { 
        id: 14, cat: 'home', 
        name: 'Набір посуду Tefal 12 пр.', 
        price: 3499, old: null,
        img: 'https://tefal.com/cookware.jpg'
    },
    { 
        id: 15, cat: 'home', 
        name: 'Світильник IKEA FADO', 
        price: 799, old: null,
        img: 'https://ikea.com/fado.jpg'
    },
    { 
        id: 16, cat: 'home', 
        name: 'Штучна ялина Balsam Hill', 
        price: 2499, old: 3499,
        img: 'https://balsamhill.com/tree.jpg'
    },
    
    // ===== ДИТЯЧІ ТОВАРИ =====
    { 
        id: 17, cat: 'kids', 
        name: 'LEGO City Fire Station', 
        price: 1499, old: 1999,
        img: 'https://lego.com/city.jpg'
    },
    { 
        id: 18, cat: 'kids', 
        name: 'Велосипед Trek Precaliber 20"', 
        price: 8999, old: null,
        img: 'https://trekbikes.com/precaliber.jpg'
    },
    { 
        id: 19, cat: 'kids', 
        name: 'Лялька Barbie Dreamhouse', 
        price: 3999, old: 4999,
        img: 'https://barbie.com/dreamhouse.jpg'
    },
    { 
        id: 20, cat: 'kids', 
        name: 'Розвиваючий килимок Tiny Love', 
        price: 1899, old: null,
        img: 'https://tinylove.com/mat.jpg'
    },
    
    // ===== СПОРТ =====
    { 
        id: 21, cat: 'sport', 
        name: 'Гантелі 20кг Ativafit', 
        price: 2999, old: null,
        img: 'https://ativafit.com/dumbbells.jpg'
    },
    { 
        id: 22, cat: 'sport', 
        name: 'Бігова доріжка Sportplus', 
        price: 15999, old: 19999,
        img: 'https://sportplus.com/treadmill.jpg'
    },
    { 
        id: 23, cat: 'sport', 
        name: 'М\'яч Adidas UCL 2026', 
        price: 1599, old: 1999,
        img: 'https://adidas.com/ucl.jpg'
    },
    { 
        id: 24, cat: 'sport', 
        name: 'Рюкзак Oakley Kitchen', 
        price: 2499, old: null,
        img: 'https://oakley.com/backpack.jpg'
    }
];

const catMap = Object.fromEntries(CATEGORIES.map(c => [c.id, c]));

/* ================= STATE ================= */
let state = {
    activeCat: 'all',
    checkedCats: new Set(),
    search: '',
    priceMax: 60000,
    onlySale: false,
    sort: 'default',
    cart: {} // id -> qty
};

/* ================= RENDER: HEADER NAV ================= */
function renderCatTabs() {
    const wrap = document.getElementById('catTabs');
    const all = [{ id: 'all', name: 'Усі товари', ic: '🗂️' }, ...CATEGORIES];
    wrap.innerHTML = all.map(c => `
        <button class="cat-tab ${state.activeCat === c.id ? 'active' : ''}" data-cat="${c.id}">
            <span class="ic">${c.ic}</span>${c.name}
        </button>
    `).join('');
    wrap.querySelectorAll('.cat-tab').forEach(btn => {
        btn.addEventListener('click', () => {
            state.activeCat = btn.dataset.cat;
            state.checkedCats.clear();
            syncFilterChecks();
            renderCatTabs();
            renderGrid();
        });
    });
}

function renderFilterChecks() {
    const wrap = document.getElementById('catChecks');
    wrap.innerHTML = CATEGORIES.map(c => `
        <label class="check-row">
            <input type="checkbox" value="${c.id}" ${state.checkedCats.has(c.id) ? 'checked' : ''}>
            ${c.ic} ${c.name}
        </label>
    `).join('');
    wrap.querySelectorAll('input').forEach(inp => {
        inp.addEventListener('change', () => {
            if (inp.checked) { state.checkedCats.add(inp.value);
                state.activeCat = 'all'; } else state.checkedCats.delete(inp.value);
            renderCatTabs();
            renderGrid();
        });
    });
}

function syncFilterChecks() { renderFilterChecks(); }

/* ================= RENDER: HERO BOARD ================= */
function renderBoard() {
    const deals = PRODUCTS.filter(p => p.old).slice(0, 3);
    const board = document.getElementById('board');
    board.innerHTML = `
        <div class="board-head">
            <div class="eyebrow">// сьогоднішні знижки</div>
            <h1>Торгуємось<br>чесно</h1>
            <p>Три позиції з найбільшою вигодою на сьогодні — розбирають швидко.</p>
        </div>
        ${deals.map(d => {
            const off = Math.round(100 - (d.price / d.old * 100));
            return `
            <div class="deal-card">
                <span class="badge">-${off}%</span>
                <span class="ic">${d.ic || '📦'}</span>
                <span class="name">${d.name}</span>
                <div class="prices">
                    <span class="now">${fmt(d.price)} ₴</span>
                    <span class="old">${fmt(d.old)} ₴</span>
                </div>
            </div>`;
        }).join('')}
    `;
}

/* ================= RENDER: GRID ================= */
function fmt(n) { return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' '); }

function getFiltered() {
    let list = PRODUCTS.slice();

    if (state.checkedCats.size > 0) {
        list = list.filter(p => state.checkedCats.has(p.cat));
    } else if (state.activeCat !== 'all') {
        list = list.filter(p => p.cat === state.activeCat);
    }

    if (state.search.trim()) {
        const q = state.search.trim().toLowerCase();
        list = list.filter(p => p.name.toLowerCase().includes(q));
    }

    list = list.filter(p => p.price <= state.priceMax);

    if (state.onlySale) list = list.filter(p => p.old);

    switch (state.sort) {
        case 'price-asc':
            list.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            list.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            list.sort((a, b) => a.name.localeCompare(b.name, 'uk'));
            break;
    }
    return list;
}

function renderGrid() {
    const list = getFiltered();
    const grid = document.getElementById('grid');
    document.getElementById('resultCount').textContent = `(${list.length})`;

    if (list.length === 0) {
        grid.innerHTML = `<div class="empty-state"><span class="ic">🕳️</span>Нічого не знайдено.<br>Спробуйте змінити фільтри або пошуковий запит.</div>`;
        return;
    }

    grid.innerHTML = list.map(p => {
        const c = catMap[p.cat];
        const inCart = state.cart[p.id];
        return `
        <div class="card">
            <div class="thumb" style="background:${c.color}">
                ${p.old ? `<span class="sale-flag">Знижка</span>` : ''}
                ${p.img ? `<img src="${p.img}" alt="${p.name}" onerror="this.style.display='none';this.parentElement.innerHTML+='<span style=\\'font-size:40px;\\'>📦</span>'">` : '📦'}
            </div>
            <div class="cat-label">${c.name}</div>
            <div class="name">${p.name}</div>
            <div class="tag-row">
                <div class="price-tag">
                    <span class="now">${fmt(p.price)} ₴</span>
                    ${p.old ? `<span class="old">${fmt(p.old)} ₴</span>` : ''}
                </div>
            </div>
            <button class="add-btn ${inCart ? 'added' : ''}" data-id="${p.id}">
                ${inCart ? `✓ У кошику (${inCart})` : 'Додати в кошик'}
            </button>
        </div>`;
    }).join('');

    grid.querySelectorAll('.add-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = Number(btn.dataset.id);
            addToCart(id);
            renderGrid();
        });
    });
}

/* ================= CART ================= */
function addToCart(id) {
    state.cart[id] = (state.cart[id] || 0) + 1;
    const p = PRODUCTS.find(p => p.id === id);
    showToast(`Додано: ${p.name}`);
    renderCartCount();
    renderCartBody();
}

function changeQty(id, delta) {
    if (!state.cart[id]) return;
    state.cart[id] += delta;
    if (state.cart[id] <= 0) delete state.cart[id];
    renderCartCount();
    renderCartBody();
    renderGrid();
}

function removeFromCart(id) {
    delete state.cart[id];
    renderCartCount();
    renderCartBody();
    renderGrid();
}

function cartTotal() {
    return Object.entries(state.cart).reduce((sum, [id, qty]) => {
        const p = PRODUCTS.find(p => p.id === Number(id));
        return sum + p.price * qty;
    }, 0);
}

function renderCartCount() {
    const count = Object.values(state.cart).reduce((a, b) => a + b, 0);
    document.getElementById('cartCount').textContent = count;
}

function renderCartBody() {
    const body = document.getElementById('cartBody');
    const entries = Object.entries(state.cart);
    document.getElementById('checkoutBtn').disabled = entries.length === 0;

    if (entries.length === 0) {
        body.innerHTML = `<div class="cart-empty"><span class="ic">🧺</span>Кошик поки порожній.<br>Додайте щось із ярмарку!</div>`;
        document.getElementById('cartSubtotal').textContent = '0 ₴';
        return;
    }

    body.innerHTML = entries.map(([id, qty]) => {
        const p = PRODUCTS.find(p => p.id === Number(id));
        const c = catMap[p.cat];
        return `
        <div class="cart-item">
            <div class="thumb-sm" style="background:${c.color}">${p.ic || '📦'}</div>
            <div class="info">
                <div class="name">${p.name}</div>
                <div class="qty-row">
                    <button data-id="${id}" data-d="-1">−</button>
                    <span class="qty">${qty}</span>
                    <button data-id="${id}" data-d="1">+</button>
                    <button class="remove-btn" data-remove="${id}">Прибрати</button>
                </div>
            </div>
            <div class="line-price">${fmt(p.price * qty)} ₴</div>
        </div>`;
    }).join('');

    document.getElementById('cartSubtotal').textContent = fmt(cartTotal()) + ' ₴';

    body.querySelectorAll('[data-d]').forEach(btn => {
        btn.addEventListener('click', () => changeQty(Number(btn.dataset.id), Number(btn.dataset.d)));
    });
    body.querySelectorAll('[data-remove]').forEach(btn => {
        btn.addEventListener('click', () => removeFromCart(Number(btn.dataset.remove)));
    });
}

/* ================= TOAST ================= */
let toastTimer;

function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
}

/* ================= EVENTS ================= */
document.getElementById('searchForm').addEventListener('submit', e => {
    e.preventDefault();
    state.search = document.getElementById('searchInput').value;
    renderGrid();
});

document.getElementById('searchInput').addEventListener('input', e => {
    state.search = e.target.value;
    renderGrid();
});

document.getElementById('sort').addEventListener('change', e => {
    state.sort = e.target.value;
    renderGrid();
});

document.getElementById('priceMax').addEventListener('input', e => {
    state.priceMax = Number(e.target.value);
    document.getElementById('priceMaxVal').textContent = fmt(state.priceMax);
    renderGrid();
});

document.getElementById('onlySale').addEventListener('change', e => {
    state.onlySale = e.target.checked;
    renderGrid();
});

document.getElementById('resetFilters').addEventListener('click', () => {
    state.activeCat = 'all';
    state.checkedCats.clear();
    state.search = '';
    state.priceMax = 60000;
    state.onlySale = false;
    state.sort = 'default';
    document.getElementById('searchInput').value = '';
    document.getElementById('priceMax').value = 60000;
    document.getElementById('priceMaxVal').textContent = '60000';
    document.getElementById('onlySale').checked = false;
    document.getElementById('sort').value = 'default';
    renderCatTabs();
    renderFilterChecks();
    renderGrid();
});

const filtersToggle = document.getElementById('filtersToggle');
const filtersPanel = document.getElementById('filtersPanel');
filtersToggle.addEventListener('click', () => {
    const isOpen = filtersPanel.classList.toggle('open');
    filtersToggle.classList.toggle('open', isOpen);
    filtersToggle.setAttribute('aria-expanded', isOpen);
});

const drawer = document.getElementById('drawer');
const overlay = document.getElementById('overlay');

function openCart() { drawer.classList.add('open');
    overlay.classList.add('open'); }

function closeCart() { drawer.classList.remove('open');
    overlay.classList.remove('open'); }
document.getElementById('openCart').addEventListener('click', openCart);
document.getElementById('closeCart').addEventListener('click', closeCart);
overlay.addEventListener('click', closeCart);

/* ================= DELIVERY MODAL ================= */
const deliveryOverlay = document.getElementById('deliveryOverlay');
const deliveryClose = document.getElementById('deliveryClose');
const deliveryForm = document.getElementById('deliveryForm');

// Відкрити доставку після оформлення замовлення
document.getElementById('checkoutBtn').addEventListener('click', () => {
    if (Object.keys(state.cart).length === 0) {
        showToast('Кошик порожній!');
        return;
    }
    // Заповнити список товарів у модалці
    const itemsContainer = document.getElementById('deliveryItems');
    const entries = Object.entries(state.cart);
    itemsContainer.innerHTML = entries.map(([id, qty]) => {
        const p = PRODUCTS.find(p => p.id === Number(id));
        return `<div class="item-row">
            <span>${p.name} × ${qty}</span>
            <span>${fmt(p.price * qty)} ₴</span>
        </div>`;
    }).join('');
    document.getElementById('deliveryTotalPrice').textContent = fmt(cartTotal()) + ' ₴';
    
    deliveryOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
});

// Закрити доставку
function closeDelivery() {
    deliveryOverlay.classList.remove('open');
    document.body.style.overflow = '';
}

deliveryClose.addEventListener('click', closeDelivery);
deliveryOverlay.addEventListener('click', (e) => {
    if (e.target === deliveryOverlay) closeDelivery();
});

// Відправка форми доставки
deliveryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const city = document.getElementById('citySelect').value;
    const address = document.getElementById('streetAddress').value;
    const postalCode = document.getElementById('postalCode').value;
    const deliveryType = document.querySelector('input[name="deliveryType"]:checked').value;
    const comment = document.getElementById('orderComment').value;

    // Перевірка
    if (!city || !address || !postalCode) {
        showToast('Будь ласка, заповніть всі поля!');
        return;
    }

    const cityNames = {
        kyiv: 'Київ',
        lviv: 'Львів',
        odesa: 'Одеса',
        dnipro: 'Дніпро',
        kharkiv: 'Харків',
        zaporizhzhia: 'Запоріжжя',
        khmelnytskyi: 'Хмельницький',
        vinnytsia: 'Вінниця',
        cherkasy: 'Черкаси',
        zhytomyr: 'Житомир'
    };

    const deliveryNames = {
        courier: 'Кур\'єр',
        'nova-poshta': 'Нова Пошта',
        'self-pickup': 'Самовивіз'
    };

    // Формуємо повідомлення для користувача
    const orderMessage = `✅ **ЗАМОВЛЕННЯ ПІДТВЕРДЖЕНО!**

📦 Товари:
${Object.entries(state.cart).map(([id, qty]) => {
    const p = PRODUCTS.find(p => p.id === Number(id));
    return `  • ${p.name} × ${qty} = ${fmt(p.price * qty)} ₴`;
}).join('\n')}

💰 Сума: ${fmt(cartTotal())} ₴

🚚 Доставка:
  • Місто: ${cityNames[city] || city}
  • Адреса: ${address}
  • Індекс: ${postalCode}
  • Спосіб: ${deliveryNames[deliveryType] || deliveryType}
${comment ? `📝 Коментар: ${comment}` : ''}

Дякуємо за покупку! 🎉`;

    // Показуємо повідомлення
    showToast('✅ Замовлення оформлено! Перевірте деталі нижче.');
    
    // Можна вивести в консоль або в alert
    console.log(orderMessage);
    alert(orderMessage);

    // Очищуємо кошик
    state.cart = {};
    renderCartCount();
    renderCartBody();
    renderGrid();
    
    // Закриваємо модалку
    closeDelivery();
    
    // Очищуємо форму
    deliveryForm.reset();
});

/* ================= INIT ================= */
renderCatTabs();
renderFilterChecks();
renderBoard();
renderCartCount();
renderCartBody();
renderGrid();