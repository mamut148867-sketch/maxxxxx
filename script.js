const CATEGORIES = [
    { id: 'electronics', name: 'Електроніка', color: '#DCEDEA' },
    { id: 'appliances', name: 'Побутова техніка', color: '#F3E7D6' },
    { id: 'fashion', name: 'Мода', color: '#F6DED6' },
    { id: 'home', name: 'Дім і сад', color: '#E4EFDA' },
    { id: 'kids', name: 'Дитячі товари', color: '#F7E4EE' },
    { id: 'sport', name: 'Спорт і відпочинок', color: '#DEE9F5' }
];

const PRODUCTS = [
    // Електроніка
    { id: 1, cat: 'electronics', name: 'Samsung Galaxy S24 Ultra 512GB', price: 52999, old: 56999, img: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop' },
    { id: 2, cat: 'electronics', name: 'iPhone 15 Pro Max 256GB', price: 49999, old: 52999, img: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop' },
    { id: 3, cat: 'electronics', name: 'MacBook Air 15" M3', price: 45999, old: null, img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop' },
    { id: 4, cat: 'electronics', name: 'Samsung Galaxy Buds 3 Pro', price: 7999, old: 9999, img: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop' },

    // Побутова техніка
    { id: 5, cat: 'appliances', name: 'Робот-пилосос Xiaomi S10', price: 12999, old: 15999, img: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400&h=400&fit=crop' },
    { id: 6, cat: 'appliances', name: 'Холодильник LG InstaView', price: 32999, old: null, img: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&h=400&fit=crop' },
    { id: 7, cat: 'appliances', name: 'Мультиварка Philips HD', price: 4999, old: null, img: 'https://images.unsplash.com/photo-1585515320310-259814148e62?w=400&h=400&fit=crop' },
    { id: 8, cat: 'appliances', name: 'Праска Tefal Ultimate', price: 2999, old: 3999, img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=400&fit=crop' },

    // Мода
    { id: 9, cat: 'fashion', name: 'Куртка North Face Nuptse', price: 12999, old: 15999, img: 'https://images.unsplash.com/photo-1544923246-77307dd654cb?w=400&h=400&fit=crop' },
    { id: 10, cat: 'fashion', name: 'Кросівки Nike Air Max 90', price: 5999, old: null, img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop' },
    { id: 11, cat: 'fashion', name: 'Сумка Michael Kors', price: 8999, old: 11999, img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop' },
    { id: 12, cat: 'fashion', name: 'Пальто Zara Premium', price: 4999, old: null, img: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=400&h=400&fit=crop' },

    // Дім і сад
    { id: 13, cat: 'home', name: 'Диван IKEA Vimle 3-місний', price: 15999, old: 18999, img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop' },
    { id: 14, cat: 'home', name: 'Набір посуду Tefal 12 пр.', price: 3499, old: null, img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop' },
    { id: 15, cat: 'home', name: 'Світильник IKEA FADO', price: 799, old: null, img: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop' },
    { id: 16, cat: 'home', name: 'Штучна ялина Balsam Hill', price: 2499, old: 3499, img: 'https://images.unsplash.com/photo-1543248939-ff40856f65d4?w=400&h=400&fit=crop' },

    // Дитячі товари
    { id: 17, cat: 'kids', name: 'Конструктор BrickCity (500 дет.)', price: 999, old: null, img: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=400&fit=crop' },
    { id: 18, cat: 'kids', name: 'Дитячий велосипед KidRide 16"', price: 3299, old: 3799, img: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=400&h=400&fit=crop' },
    { id: 19, cat: 'kids', name: "М'яка іграшка Ведмедик Тедді", price: 449, old: null, img: 'https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=400&h=400&fit=crop' },
    { id: 20, cat: 'kids', name: 'Пазл «Мандрівка світом» 1000 дет.', price: 349, old: null, img: 'https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9a?w=400&h=400&fit=crop' },

    // Спорт
    { id: 21, cat: 'sport', name: 'Гантелі набірні PowerSet 20 кг', price: 1799, old: null, img: 'https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?w=400&h=400&fit=crop' },
    { id: 22, cat: 'sport', name: 'Килимок для йоги FlexMat', price: 599, old: null, img: 'https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=400&h=400&fit=crop' },
    { id: 23, cat: 'sport', name: "Футбольний м'яч ProKick", price: 749, old: 899, img: 'https://images.unsplash.com/photo-1614632537190-23e4146777db?w=400&h=400&fit=crop' },
    { id: 24, cat: 'sport', name: 'Спортивний рюкзак TrainBag', price: 899, old: null, img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop' }
];

const catMap = Object.fromEntries(CATEGORIES.map(c => [c.id, c]));

let state = {
    activeCat: 'all',
    checkedCats: new Set(),
    search: '',
    priceMax: 60000,
    onlySale: false,
    sort: 'default',
    cart: {}
};

/* ===================== HELPERS ===================== */

function fmt(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

function showToast(msg) {
    const t = document.getElementById('toast');
    if (!t) return;
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(window.toastTimer);
    window.toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
}

function getCartCount() {
    return Object.values(state.cart).reduce((sum, qty) => sum + qty, 0);
}

function getCartItems() {
    return Object.entries(state.cart)
        .map(([id, qty]) => {
            const product = PRODUCTS.find(p => p.id === Number(id));
            return product ? { product, qty } : null;
        })
        .filter(Boolean);
}

function getCartTotal() {
    return getCartItems().reduce((sum, { product, qty }) => sum + product.price * qty, 0);
}

/* ===================== CATEGORY TABS / FILTERS ===================== */

function renderCatTabs() {
    const wrap = document.getElementById('catTabs');
    if (!wrap) return;

    const all = [{ id: 'all', name: 'Усі товари' }, ...CATEGORIES];
    wrap.innerHTML = all.map(c => `
        <button class="cat-tab ${state.activeCat === c.id ? 'active' : ''}" data-cat="${c.id}" type="button">
            ${c.name}
        </button>
    `).join('');

    wrap.querySelectorAll('.cat-tab').forEach(btn => {
        btn.addEventListener('click', function () {
            state.activeCat = this.dataset.cat;
            state.checkedCats.clear();
            renderFilterChecks();
            renderCatTabs();
            renderGrid();
        });
    });
}

function renderFilterChecks() {
    const wrap = document.getElementById('catChecks');
    if (!wrap) return;

    wrap.innerHTML = CATEGORIES.map(c => `
        <label class="check-row">
            <input type="checkbox" value="${c.id}" ${state.checkedCats.has(c.id) ? 'checked' : ''}>
            ${c.name}
        </label>
    `).join('');

    wrap.querySelectorAll('input').forEach(inp => {
        inp.addEventListener('change', function () {
            if (this.checked) {
                state.checkedCats.add(this.value);
                state.activeCat = 'all';
            } else {
                state.checkedCats.delete(this.value);
            }
            renderCatTabs();
            renderGrid();
        });
    });
}

/* ===================== HERO BOARD ===================== */

function renderBoard() {
    const board = document.getElementById('board');
    if (!board) return;

    const deals = PRODUCTS.filter(p => p.old !== null).slice(0, 3);

    if (deals.length === 0) {
        board.innerHTML = `<div class="board-head"><h1>Спеціальні пропозиції</h1></div>`;
        return;
    }

    board.innerHTML = `
        <div class="board-head">
            <div class="eyebrow">// сьогоднішні знижки</div>
            <h1>Торгуємось чесно</h1>
            <p>Три позиції з найбільшою вигодою на сьогодні</p>
        </div>
        ${deals.map(d => {
            const off = Math.round(100 - (d.price / d.old * 100));
            return `
            <div class="deal-card">
                <span class="badge">-${off}%</span>
                <img src="${d.img}" alt="${d.name}" width="60" height="60" style="border-radius:10px;object-fit:cover;" onerror="this.src='https://placehold.co/60x60/e8e8e8/999?text=Фото'">
                <span class="name">${d.name}</span>
                <div class="prices">
                    <span class="now">${fmt(d.price)} ₴</span>
                    <span class="old">${fmt(d.old)} ₴</span>
                </div>
            </div>`;
        }).join('')}
    `;
}

/* ===================== PRODUCT GRID ===================== */

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

    if (state.onlySale) {
        list = list.filter(p => p.old !== null);
    }

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
    const grid = document.getElementById('grid');
    if (!grid) return;

    const list = getFiltered();
    const resultCount = document.getElementById('resultCount');
    if (resultCount) resultCount.textContent = `(${list.length})`;

    if (list.length === 0) {
        grid.innerHTML = `<div class="empty-state">Нічого не знайдено</div>`;
        return;
    }

    grid.innerHTML = list.map(p => {
        const c = catMap[p.cat];
        const inCart = state.cart[p.id] || 0;

        return `
        <div class="card">
            <div class="thumb" style="background:${c ? c.color : '#eee'}">
                ${p.old !== null ? `<span class="sale-flag">Знижка</span>` : ''}
                <img src="${p.img}"
                     alt="${p.name}"
                     loading="lazy"
                     onerror="this.onerror=null; this.src='https://placehold.co/400x400/e8e8e8/999?text=Немає+фото';">
            </div>
            <div class="cat-label">${c ? c.name : ''}</div>
            <div class="name">${p.name}</div>
            <div class="tag-row">
                <div class="price-tag">
                    <span class="now">${fmt(p.price)} ₴</span>
                    ${p.old !== null ? `<span class="old">${fmt(p.old)} ₴</span>` : ''}
                </div>
            </div>
            <button class="add-btn ${inCart > 0 ? 'added' : ''}" data-id="${p.id}" type="button">
                ${inCart > 0 ? `У кошику (${inCart})` : 'Додати в кошик'}
            </button>
        </div>`;
    }).join('');

    grid.querySelectorAll('.add-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const id = Number(this.dataset.id);
            addToCart(id);
            renderGrid();
        });
    });
}

/* ===================== CART LOGIC ===================== */

function addToCart(id) {
    state.cart[id] = (state.cart[id] || 0) + 1;
    const p = PRODUCTS.find(item => item.id === id);
    if (p) showToast(`Додано: ${p.name}`);
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

function renderCartCount() {
    const el = document.getElementById('cartCount');
    if (el) el.textContent = getCartCount();
}

function renderCartBody() {
    const body = document.getElementById('cartBody');
    const subtotalEl = document.getElementById('cartSubtotal');
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (!body) return;

    const items = getCartItems();

    if (items.length === 0) {
        body.innerHTML = `<div class="cart-empty">Кошик порожній</div>`;
        if (subtotalEl) subtotalEl.textContent = '0 ₴';
        if (checkoutBtn) checkoutBtn.disabled = true;
        return;
    }

    body.innerHTML = items.map(({ product, qty }) => `
        <div class="cart-item" data-id="${product.id}">
            <div class="thumb-sm" style="background:${catMap[product.cat] ? catMap[product.cat].color : '#eee'}">
                <img src="${product.img}"
                     alt="${product.name}"
                     onerror="this.onerror=null; this.src='https://placehold.co/60x60/e8e8e8/999?text=Фото';">
            </div>
            <div class="info">
                <div class="name">${product.name}</div>
                <div class="qty-row">
                    <button class="qty-minus" data-id="${product.id}" type="button">−</button>
                    <span class="qty">${qty}</span>
                    <button class="qty-plus" data-id="${product.id}" type="button">+</button>
                    <span class="line-price">${fmt(product.price * qty)} ₴</span>
                    <button class="remove-btn" data-id="${product.id}" type="button">Видалити</button>
                </div>
            </div>
        </div>
    `).join('');

    if (subtotalEl) subtotalEl.textContent = `${fmt(getCartTotal())} ₴`;
    if (checkoutBtn) checkoutBtn.disabled = false;

    body.querySelectorAll('.qty-minus').forEach(btn => {
        btn.addEventListener('click', function () {
            changeQty(Number(this.dataset.id), -1);
        });
    });
    body.querySelectorAll('.qty-plus').forEach(btn => {
        btn.addEventListener('click', function () {
            changeQty(Number(this.dataset.id), 1);
        });
    });
    body.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            removeFromCart(Number(this.dataset.id));
        });
    });
}

function openCartDrawer() {
    document.getElementById('drawer').classList.add('open');
    document.getElementById('overlay').classList.add('open');
}

function closeCartDrawer() {
    document.getElementById('drawer').classList.remove('open');
    document.getElementById('overlay').classList.remove('open');
}

/* ===================== DELIVERY / CHECKOUT MODAL ===================== */

function renderDeliverySummary() {
    const itemsWrap = document.getElementById('deliveryItems');
    const totalEl = document.getElementById('deliveryTotalPrice');
    if (!itemsWrap) return;

    const items = getCartItems();

    itemsWrap.innerHTML = items.map(({ product, qty }) => `
        <div class="item-row">
            <span>${product.name} × ${qty}</span>
            <span>${fmt(product.price * qty)} ₴</span>
        </div>
    `).join('');

    if (totalEl) totalEl.textContent = `${fmt(getCartTotal())} ₴`;
}

function openDeliveryModal() {
    if (getCartCount() === 0) {
        showToast('Кошик порожній');
        return;
    }
    renderDeliverySummary();
    document.getElementById('deliveryOverlay').classList.add('open');
    closeCartDrawer();
}

function closeDeliveryModal() {
    document.getElementById('deliveryOverlay').classList.remove('open');
}

function handleDeliverySubmit(e) {
    e.preventDefault();

    const city = document.getElementById('citySelect').value;
    const street = document.getElementById('streetAddress').value.trim();
    const postal = document.getElementById('postalCode').value.trim();

    if (!city || !street || !/^\d{5}$/.test(postal)) {
        showToast('Перевірте поля доставки');
        return;
    }

    state.cart = {};
    renderCartCount();
    renderCartBody();
    renderGrid();
    closeDeliveryModal();
    document.getElementById('deliveryForm').reset();
    showToast('Замовлення оформлено! Дякуємо 🎉');
}

/* ===================== FILTERS: PRICE / SALE / SORT / RESET ===================== */

function initFilterControls() {
    const priceMax = document.getElementById('priceMax');
    const priceMaxVal = document.getElementById('priceMaxVal');
    if (priceMax) {
        priceMax.addEventListener('input', function () {
            state.priceMax = Number(this.value);
            if (priceMaxVal) priceMaxVal.textContent = fmt(state.priceMax);
            renderGrid();
        });
    }

    const onlySale = document.getElementById('onlySale');
    if (onlySale) {
        onlySale.addEventListener('change', function () {
            state.onlySale = this.checked;
            renderGrid();
        });
    }

    const sort = document.getElementById('sort');
    if (sort) {
        sort.addEventListener('change', function () {
            state.sort = this.value;
            renderGrid();
        });
    }

    const resetBtn = document.getElementById('resetFilters');
    if (resetBtn) {
        resetBtn.addEventListener('click', function () {
            state.activeCat = 'all';
            state.checkedCats.clear();
            state.priceMax = 60000;
            state.onlySale = false;
            state.sort = 'default';
            state.search = '';

            const searchInput = document.getElementById('searchInput');
            if (searchInput) searchInput.value = '';
            if (priceMax) priceMax.value = 60000;
            if (priceMaxVal) priceMaxVal.textContent = '60 000';
            if (onlySale) onlySale.checked = false;
            if (sort) sort.value = 'default';

            renderFilterChecks();
            renderCatTabs();
            renderGrid();
        });
    }

    const filtersToggle = document.getElementById('filtersToggle');
    const filtersPanel = document.getElementById('filtersPanel');
    if (filtersToggle && filtersPanel) {
        filtersToggle.addEventListener('click', function () {
            const isOpen = filtersPanel.classList.toggle('open');
            this.classList.toggle('open', isOpen);
            this.setAttribute('aria-expanded', String(isOpen));
        });
    }
}

/* ===================== SEARCH ===================== */

function initSearch() {
    const form = document.getElementById('searchForm');
    const input = document.getElementById('searchInput');
    if (!form || !input) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        state.search = input.value;
        renderGrid();
    });

    input.addEventListener('input', function () {
        state.search = this.value;
        renderGrid();
    });
}

/* ===================== CART DRAWER / DELIVERY WIRING ===================== */

function initCartAndDelivery() {
    const openCart = document.getElementById('openCart');
    const closeCart = document.getElementById('closeCart');
    const overlay = document.getElementById('overlay');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const deliveryClose = document.getElementById('deliveryClose');
    const deliveryOverlay = document.getElementById('deliveryOverlay');
    const deliveryForm = document.getElementById('deliveryForm');

    if (openCart) openCart.addEventListener('click', openCartDrawer);
    if (closeCart) closeCart.addEventListener('click', closeCartDrawer);
    if (overlay) overlay.addEventListener('click', closeCartDrawer);
    if (checkoutBtn) checkoutBtn.addEventListener('click', openDeliveryModal);
    if (deliveryClose) deliveryClose.addEventListener('click', closeDeliveryModal);
    if (deliveryOverlay) {
        deliveryOverlay.addEventListener('click', function (e) {
            if (e.target === this) closeDeliveryModal();
        });
    }
    if (deliveryForm) deliveryForm.addEventListener('submit', handleDeliverySubmit);
}

/* ===================== INIT ===================== */

function init() {
    renderBoard();
    renderCatTabs();
    renderFilterChecks();
    renderGrid();
    renderCartCount();
    renderCartBody();
    initFilterControls();
    initSearch();
    initCartAndDelivery();
}

document.addEventListener('DOMContentLoaded', init);