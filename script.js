/* ================= DATA ================= */
const CATEGORIES = [
    { id: 'electronics', name: 'Електроніка', ic: '📱', color: '#DCEDEA' },
    { id: 'appliances', name: 'Побутова техніка', ic: '🧺', color: '#F3E7D6' },
    { id: 'fashion', name: 'Мода', ic: '👕', color: '#F6DED6' },
    { id: 'home', name: 'Дім і сад', ic: '🪴', color: '#E4EFDA' },
    { id: 'kids', name: 'Дитячі товари', ic: '🧸', color: '#F7E4EE' },
    { id: 'sport', name: 'Спорт і відпочинок', ic: '🏋️', color: '#DEE9F5' }
];

const PRODUCTS = [
    { id: 1, cat: 'electronics', ic: '📱', name: 'Смартфон Nova X12 128GB', price: 14999, old: 17999 },
    { id: 2, cat: 'electronics', ic: '🎧', name: 'Бездротові навушники SoundPods Air', price: 1899, old: 2399 },
    { id: 3, cat: 'electronics', ic: '💻', name: 'Ноутбук WorkBook 15 Pro', price: 32999, old: null },
    { id: 4, cat: 'electronics', ic: '⌚', name: 'Розумний годинник PulseFit 3', price: 3499, old: 3999 },
    { id: 5, cat: 'appliances', ic: '🍲', name: 'Мультиварка ChefMate 6L', price: 2799, old: null },
    { id: 6, cat: 'appliances', ic: '🤖', name: 'Робот-пилосос CleanWave', price: 8999, old: 10999 },
    { id: 7, cat: 'appliances', ic: '🧊', name: 'Холодильник FreshBox 300', price: 21999, old: null },
    { id: 8, cat: 'appliances', ic: '👕', name: 'Праска SteamGlide Pro', price: 1299, old: null },
    { id: 9, cat: 'fashion', ic: '🧥', name: 'Куртка-вітровка Urban Line', price: 1599, old: 1999 },
    { id: 10, cat: 'fashion', ic: '👟', name: 'Кросівки StreetRun 2.0', price: 2299, old: null },
    { id: 11, cat: 'fashion', ic: '👗', name: 'Сукня Linen Breeze', price: 1099, old: null },
    { id: 12, cat: 'fashion', ic: '🎒', name: 'Рюкзак CityPack 20L', price: 899, old: null },
    { id: 13, cat: 'home', ic: '🍳', name: 'Набір каструль CookLine (5 пр.)', price: 2499, old: 2999 },
    { id: 14, cat: 'home', ic: '🪑', name: 'Крісло-гойдалка Relax Wood', price: 4499, old: null },
    { id: 15, cat: 'home', ic: '💡', name: 'Настільний світильник LumiDesk', price: 799, old: null },
    { id: 16, cat: 'home', ic: '🌿', name: 'Набір садових інструментів GreenHand', price: 1199, old: null },
    { id: 17, cat: 'kids', ic: '🧱', name: 'Конструктор BrickCity (500 дет.)', price: 999, old: null },
    { id: 18, cat: 'kids', ic: '🚲', name: 'Дитячий велосипед KidRide 16"', price: 3299, old: 3799 },
    { id: 19, cat: 'kids', ic: '🧸', name: 'М\'яка іграшка Ведмедик Тедді', price: 449, old: null },
    { id: 20, cat: 'kids', ic: '🧩', name: 'Пазл «Мандрівка світом» 1000 дет.', price: 349, old: null },
    { id: 21, cat: 'sport', ic: '🏋️', name: 'Гантелі набірні PowerSet 20 кг', price: 1799, old: null },
    { id: 22, cat: 'sport', ic: '🧘', name: 'Килимок для йоги FlexMat', price: 599, old: null },
    { id: 23, cat: 'sport', ic: '⚽', name: 'Футбольний м\'яч ProKick', price: 749, old: 899 },
    { id: 24, cat: 'sport', ic: '🎒', name: 'Спортивний рюкзак TrainBag', price: 899, old: null }
];

const catMap = Object.fromEntries(CATEGORIES.map(c => [c.id, c]));

/* ================= STATE ================= */
let state = {
    activeCat: 'all',
    checkedCats: new Set(),
    search: '',
    priceMax: 35000,
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
                <span class="ic">${d.ic}</span>
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
                ${p.ic}
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
        document.getElementById('cartTotal').textContent = '0 ₴';
        return;
    }

    body.innerHTML = entries.map(([id, qty]) => {
        const p = PRODUCTS.find(p => p.id === Number(id));
        const c = catMap[p.cat];
        return `
        <div class="cart-item">
            <div class="thumb-sm" style="background:${c.color}">${p.ic}</div>
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

    document.getElementById('cartTotal').textContent = fmt(cartTotal()) + ' ₴';

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
    state.priceMax = 35000;
    state.onlySale = false;
    state.sort = 'default';
    document.getElementById('searchInput').value = '';
    document.getElementById('priceMax').value = 35000;
    document.getElementById('priceMaxVal').textContent = '35000';
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

document.getElementById('checkoutBtn').addEventListener('click', () => {
    showToast('Замовлення оформлено! Дякуємо за покупку 🎉');
    state.cart = {};
    renderCartCount();
    renderCartBody();
    renderGrid();
    setTimeout(closeCart, 900);
});

/* ================= INIT ================= */
renderCatTabs();
renderFilterChecks();
renderBoard();
renderCartCount();
renderCartBody();
renderGrid();