const CATEGORIES = [
    { id: 'electronics', name: 'Електроніка', color: '#DCEDEA' },
    { id: 'appliances', name: 'Побутова техніка', color: '#F3E7D6' },
    { id: 'fashion', name: 'Мода', color: '#F6DED6' },
    { id: 'home', name: 'Дім і сад', color: '#E4EFDA' },
    { id: 'kids', name: 'Дитячі товари', color: '#F7E4EE' },
    { id: 'sport', name: 'Спорт і відпочинок', color: '#DEE9F5' }
];

// ===== РЕАЛЬНІ ФОТО ТОВАРІВ (з безкоштовних джерел) =====
const PRODUCTS = [
    // ЕЛЕКТРОНІКА - реальні фото смартфонів, ноутбуків
    { id: 1, cat: 'electronics', name: 'Samsung Galaxy S24 Ultra 512GB', price: 52999, old: 56999, img: 'https://images.pexels.com/photos/4041243/pexels-photo-4041243.jpeg?w=400&h=400&fit=crop&crop=center' },
    { id: 2, cat: 'electronics', name: 'iPhone 15 Pro Max 256GB', price: 49999, old: 52999, img: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?w=400&h=400&fit=crop&crop=center' },
    { id: 3, cat: 'electronics', name: 'MacBook Air 15" M3', price: 45999, old: null, img: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?w=400&h=400&fit=crop&crop=center' },
    { id: 4, cat: 'electronics', name: 'Samsung Galaxy Buds 3 Pro', price: 7999, old: 9999, img: 'https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?w=400&h=400&fit=crop&crop=center' },
    
    // ПОБУТОВА ТЕХНІКА
    { id: 5, cat: 'appliances', name: 'Робот-пилосос Xiaomi S10', price: 12999, old: 15999, img: 'https://images.pexels.com/photos/3735695/pexels-photo-3735695.jpeg?w=400&h=400&fit=crop&crop=center' },
    { id: 6, cat: 'appliances', name: 'Холодильник LG InstaView', price: 32999, old: null, img: 'https://images.pexels.com/photos/2766514/pexels-photo-2766514.jpeg?w=400&h=400&fit=crop&crop=center' },
    { id: 7, cat: 'appliances', name: 'Мультиварка Philips HD', price: 4999, old: null, img: 'https://images.pexels.com/photos/4066429/pexels-photo-4066429.jpeg?w=400&h=400&fit=crop&crop=center' },
    { id: 8, cat: 'appliances', name: 'Праска Tefal Ultimate', price: 2999, old: 3999, img: 'https://images.pexels.com/photos/1309890/pexels-photo-1309890.jpeg?w=400&h=400&fit=crop&crop=center' },
    
    // МОДА
    { id: 9, cat: 'fashion', name: 'Куртка North Face Nuptse', price: 12999, old: 15999, img: 'https://images.pexels.com/photos/2260742/pexels-photo-2260742.jpeg?w=400&h=400&fit=crop&crop=center' },
    { id: 10, cat: 'fashion', name: 'Кросівки Nike Air Max 90', price: 5999, old: null, img: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?w=400&h=400&fit=crop&crop=center' },
    { id: 11, cat: 'fashion', name: 'Сумка Michael Kors', price: 8999, old: 11999, img: 'https://images.pexels.com/photos/2289253/pexels-photo-2289253.jpeg?w=400&h=400&fit=crop&crop=center' },
    { id: 12, cat: 'fashion', name: 'Пальто Zara Premium', price: 4999, old: null, img: 'https://images.pexels.com/photos/2539419/pexels-photo-2539419.jpeg?w=400&h=400&fit=crop&crop=center' },
    
    // ДІМ ТА САД
    { id: 13, cat: 'home', name: 'Диван IKEA Vimle 3-місний', price: 15999, old: 18999, img: 'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?w=400&h=400&fit=crop&crop=center' },
    { id: 14, cat: 'home', name: 'Набір посуду Tefal 12 пр.', price: 3499, old: null, img: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?w=400&h=400&fit=crop&crop=center' },
    { id: 15, cat: 'home', name: 'Світильник IKEA FADO', price: 799, old: null, img: 'https://images.pexels.com/photos/1035000/pexels-photo-1035000.jpeg?w=400&h=400&fit=crop&crop=center' },
    { id: 16, cat: 'home', name: 'Штучна ялина Balsam Hill', price: 2499, old: 3499, img: 'https://images.pexels.com/photos/3029561/pexels-photo-3029561.jpeg?w=400&h=400&fit=crop&crop=center' },
    
    // ДИТЯЧІ ТОВАРИ
    { id: 17, cat: 'kids', name: 'Конструктор BrickCity (500 дет.)', price: 999, old: null, img: 'https://images.pexels.com/photos/163064/play-lego-constructor-build-163064.jpeg?w=400&h=400&fit=crop&crop=center' },
    { id: 18, cat: 'kids', name: 'Дитячий велосипед KidRide 16"', price: 3299, old: 3799, img: 'https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?w=400&h=400&fit=crop&crop=center' },
    { id: 19, cat: 'kids', name: 'М\'яка іграшка Ведмедик Тедді', price: 449, old: null, img: 'https://images.pexels.com/photos/33587/teddy-bear-bear-teddy-teddy-bear-toy.jpg?w=400&h=400&fit=crop&crop=center' },
    { id: 20, cat: 'kids', name: 'Пазл «Мандрівка світом» 1000 дет.', price: 349, old: null, img: 'https://images.pexels.com/photos/1739665/pexels-photo-1739665.jpeg?w=400&h=400&fit=crop&crop=center' },
    
    // СПОРТ
    { id: 21, cat: 'sport', name: 'Гантелі набірні PowerSet 20 кг', price: 1799, old: null, img: 'https://images.pexels.com/photos/260447/pexels-photo-260447.jpeg?w=400&h=400&fit=crop&crop=center' },
    { id: 22, cat: 'sport', name: 'Килимок для йоги FlexMat', price: 599, old: null, img: 'https://images.pexels.com/photos/4722451/pexels-photo-4722451.jpeg?w=400&h=400&fit=crop&crop=center' },
    { id: 23, cat: 'sport', name: 'Футбольний м\'яч ProKick', price: 749, old: 899, img: 'https://images.pexels.com/photos/47730/football-ball-soccer- sports-47730.jpeg?w=400&h=400&fit=crop&crop=center' },
    { id: 24, cat: 'sport', name: 'Спортивний рюкзак TrainBag', price: 899, old: null, img: 'https://images.pexels.com/photos/373561/pexels-photo-373561.jpeg?w=400&h=400&fit=crop&crop=center' }
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

function renderCatTabs() {
    const wrap = document.getElementById('catTabs');
    if (!wrap) return;
    const all = [{ id: 'all', name: 'Усі товари' }, ...CATEGORIES];
    wrap.innerHTML = all.map(c => `
        <button class="cat-tab ${state.activeCat === c.id ? 'active' : ''}" data-cat="${c.id}">
            ${c.name}
        </button>
    `).join('');
    wrap.querySelectorAll('.cat-tab').forEach(btn => {
        btn.addEventListener('click', function() {
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
        inp.addEventListener('change', function() {
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
                <img src="${d.img}" alt="${d.name}" style="width:60px;height:60px;border-radius:10px;object-fit:cover;">
                <span class="name">${d.name}</span>
                <div class="prices">
                    <span class="now">${fmt(d.price)} ₴</span>
                    <span class="old">${fmt(d.old)} ₴</span>
                </div>
            </div>`;
        }).join('')}
    `;
}

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
        case 'price-asc': list.sort((a, b) => a.price - b.price); break;
        case 'price-desc': list.sort((a, b) => b.price - a.price); break;
        case 'name': list.sort((a, b) => a.name.localeCompare(b.name, 'uk')); break;
        default: break;
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
                <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.style.display='none';this.parentElement.innerHTML='<span style=\\'font-size:30px;color:#999;\\'>Фото немає</span>'">
            </div>
            <div class="cat-label">${c ? c.name : ''}</div>
            <div class="name">${p.name}</div>
            <div class="tag-row">
                <div class="price-tag">
                    <span class="now">${fmt(p.price)} ₴</span>
                    ${p.old !== null ? `<span class="old">${fmt(p.old)} ₴</span>` : ''}
                </div>
            </div>
            <button class="add-btn ${inCart > 0 ? 'added' : ''}" data-id="${p.id}">
                ${inCart > 0 ? `У кошику (${inCart})` : 'Додати в кошик'}
            </button>
        </div>`;
    }).join('');
    grid.querySelectorAll('.add-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = Number(this.dataset.id);
            addToCart(id);
            renderGrid();
        });
    });
}

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
    if (state.cart[id] <= 0) {
        delete state.cart[id];
    }
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
        const p = PRODUCTS.find(item => item.id === Number(id));
        return sum + (p ? p.price * qty : 0);
    }, 0);
}

function renderCartCount() {
    const countEl = document.getElementById('cartCount');
    if (!countEl) return;
    const count = Object.values(state.cart).reduce((a, b) => a + b, 0);
    countEl.textContent = count;
}

function renderCartBody() {
    const body = document.getElementById('cartBody');
    if (!body) return;
    const entries = Object.entries(state.cart);
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) checkoutBtn.disabled = entries.length === 0;
    if (entries.length === 0) {
        body.innerHTML = `<div class="cart-empty">Кошик поки порожній</div>`;
        const subtotal = document.getElementById('cartSubtotal');
        if (subtotal) subtotal.textContent = '0 ₴';
        return;
    }
    body.innerHTML = entries.map(([id, qty]) => {
        const p = PRODUCTS.find(item => item.id === Number(id));
        if (!p) return '';
        const c = catMap[p.cat] || { color: '#eee' };
        return `
        <div class="cart-item">
            <div class="thumb-sm" style="background:${c.color}">
                <img src="${p.img}" alt="${p.name}" onerror="this.style.display='none'">
            </div>
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
    const subtotal = document.getElementById('cartSubtotal');
    if (subtotal) subtotal.textContent = fmt(cartTotal()) + ' ₴';
    body.querySelectorAll('[data-d]').forEach(btn => {
        btn.addEventListener('click', function() {
            changeQty(Number(this.dataset.id), Number(this.dataset.d));
        });
    });
    body.querySelectorAll('[data-remove]').forEach(btn => {
        btn.addEventListener('click', function() {
            removeFromCart(Number(this.dataset.remove));
        });
    });
}

function openDeliveryModal() {
    const overlay = document.getElementById('deliveryOverlay');
    if (!overlay) return;
    const itemsContainer = document.getElementById('deliveryItems');
    const entries = Object.entries(state.cart);
    if (itemsContainer) {
        itemsContainer.innerHTML = entries.map(([id, qty]) => {
            const p = PRODUCTS.find(item => item.id === Number(id));
            if (!p) return '';
            return `<div class="item-row">
                <span>${p.name} × ${qty}</span>
                <span>${fmt(p.price * qty)} ₴</span>
            </div>`;
        }).join('');
    }
    const totalEl = document.getElementById('deliveryTotalPrice');
    if (totalEl) {
        totalEl.textContent = fmt(cartTotal()) + ' ₴';
    }
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeDeliveryModal() {
    const overlay = document.getElementById('deliveryOverlay');
    if (overlay) {
        overlay.classList.remove('open');
    }
    document.body.style.overflow = '';
}

function initDeliveryModal() {
    const overlay = document.getElementById('deliveryOverlay');
    const closeBtn = document.getElementById('deliveryClose');
    const form = document.getElementById('deliveryForm');
    if (closeBtn && overlay) {
        closeBtn.addEventListener('click', closeDeliveryModal);
    }
    if (overlay) {
        overlay.addEventListener('click', function(e) {
            if (e.target === this) closeDeliveryModal();
        });
    }
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const city = document.getElementById('citySelect');
            const address = document.getElementById('streetAddress');
            const postalCode = document.getElementById('postalCode');
            const deliveryType = document.querySelector('input[name="deliveryType"]:checked');
            const comment = document.getElementById('orderComment');
            if (!city || !address || !postalCode) {
                showToast('Будь ласка, заповніть всі поля!');
                return;
            }
            const cityValue = city.value;
            const addressValue = address.value;
            const postalCodeValue = postalCode.value;
            if (!cityValue || !addressValue || !postalCodeValue) {
                showToast('Будь ласка, заповніть всі поля!');
                return;
            }
            const cityNames = { kyiv: 'Київ', lviv: 'Львів', odesa: 'Одеса', dnipro: 'Дніпро', kharkiv: 'Харків', zaporizhzhia: 'Запоріжжя', khmelnytskyi: 'Хмельницький', vinnytsia: 'Вінниця', cherkasy: 'Черкаси', zhytomyr: 'Житомир' };
            const deliveryNames = { courier: 'Кур\'єр', 'nova-poshta': 'Нова Пошта', 'self-pickup': 'Самовивіз' };
            const deliveryTypeValue = deliveryType ? deliveryType.value : 'courier';
            const orderMessage = `✅ ЗАМОВЛЕННЯ ПІДТВЕРДЖЕНО!\n\n📦 Товари:\n${Object.entries(state.cart).map(([id, qty]) => {
                const p = PRODUCTS.find(item => item.id === Number(id));
                return p ? `  • ${p.name} × ${qty} = ${fmt(p.price * qty)} ₴` : '';
            }).filter(line => line).join('\n')}\n\n💰 Сума: ${fmt(cartTotal())} ₴\n\n🚚 Доставка:\n  • Місто: ${cityNames[cityValue] || cityValue}\n  • Адреса: ${addressValue}\n  • Індекс: ${postalCodeValue}\n  • Спосіб: ${deliveryNames[deliveryTypeValue] || deliveryTypeValue}\n${comment && comment.value ? `\n📝 Коментар: ${comment.value}` : ''}\n\nДякуємо за покупку! 🎉`;
            showToast('✅ Замовлення оформлено!');
            console.log(orderMessage);
            alert(orderMessage);
            state.cart = {};
            renderCartCount();
            renderCartBody();
            renderGrid();
            closeDeliveryModal();
            this.reset();
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const input = document.getElementById('searchInput');
            if (input) state.search = input.value;
            renderGrid();
        });
    }
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            state.search = this.value;
            renderGrid();
        });
    }
    const sortSelect = document.getElementById('sort');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            state.sort = this.value;
            renderGrid();
        });
    }
    const priceMax = document.getElementById('priceMax');
    if (priceMax) {
        priceMax.addEventListener('input', function() {
            state.priceMax = Number(this.value);
            const valEl = document.getElementById('priceMaxVal');
            if (valEl) valEl.textContent = fmt(state.priceMax);
            renderGrid();
        });
    }
    const onlySale = document.getElementById('onlySale');
    if (onlySale) {
        onlySale.addEventListener('change', function() {
            state.onlySale = this.checked;
            renderGrid();
        });
    }
    const resetBtn = document.getElementById('resetFilters');
    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            state.activeCat = 'all';
            state.checkedCats.clear();
            state.search = '';
            state.priceMax = 60000;
            state.onlySale = false;
            state.sort = 'default';
            const searchInputEl = document.getElementById('searchInput');
            if (searchInputEl) searchInputEl.value = '';
            const priceMaxEl = document.getElementById('priceMax');
            if (priceMaxEl) priceMaxEl.value = 60000;
            const priceMaxValEl = document.getElementById('priceMaxVal');
            if (priceMaxValEl) priceMaxValEl.textContent = '60000';
            const onlySaleEl = document.getElementById('onlySale');
            if (onlySaleEl) onlySaleEl.checked = false;
            const sortEl = document.getElementById('sort');
            if (sortEl) sortEl.value = 'default';
            renderCatTabs();
            renderFilterChecks();
            renderGrid();
        });
    }
    const filtersToggle = document.getElementById('filtersToggle');
    const filtersPanel = document.getElementById('filtersPanel');
    if (filtersToggle && filtersPanel) {
        filtersToggle.addEventListener('click', function() {
            const isOpen = filtersPanel.classList.toggle('open');
            this.classList.toggle('open', isOpen);
            this.setAttribute('aria-expanded', isOpen);
        });
    }
    const drawer = document.getElementById('drawer');
    const overlay = document.getElementById('overlay');
    const openCartBtn = document.getElementById('openCart');
    const closeCartBtn = document.getElementById('closeCart');
    if (openCartBtn && drawer && overlay) {
        openCartBtn.addEventListener('click', function() {
            drawer.classList.add('open');
            overlay.classList.add('open');
        });
    }
    if (closeCartBtn && drawer && overlay) {
        closeCartBtn.addEventListener('click', function() {
            drawer.classList.remove('open');
            overlay.classList.remove('open');
        });
    }
    if (overlay) {
        overlay.addEventListener('click', function() {
            if (drawer) drawer.classList.remove('open');
            this.classList.remove('open');
        });
    }
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            if (Object.keys(state.cart).length === 0) {
                showToast('Кошик порожній!');
                return;
            }
            openDeliveryModal();
        });
    }
    initDeliveryModal();
    renderCatTabs();
    renderFilterChecks();
    renderBoard();
    renderCartCount();
    renderCartBody();
    renderGrid();
});

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        renderCatTabs();
        renderFilterChecks();
        renderBoard();
        renderCartCount();
        renderCartBody();
        renderGrid();
    });
} else {
    renderCatTabs();
    renderFilterChecks();
    renderBoard();
    renderCartCount();
    renderCartBody();
    renderGrid();
}