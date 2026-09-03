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
    { id: 1, cat: 'electronics', name: 'Samsung Galaxy S24 Ultra 512GB', price: 52999, old: 56999, img: 'https://picsum.photos/seed/galaxy/400/400' },
    { id: 2, cat: 'electronics', name: 'iPhone 15 Pro Max 256GB', price: 49999, old: 52999, img: 'https://picsum.photos/seed/iphone/400/400' },
    { id: 3, cat: 'electronics', name: 'MacBook Air 15" M3', price: 45999, old: null, img: 'https://picsum.photos/seed/macbook/400/400' },
    { id: 4, cat: 'electronics', name: 'Samsung Galaxy Buds 3 Pro', price: 7999, old: 9999, img: 'https://picsum.photos/seed/buds/400/400' },

    // Побутова техніка
    { id: 5, cat: 'appliances', name: 'Робот-пилосос Xiaomi S10', price: 12999, old: 15999, img: 'https://picsum.photos/seed/robot/400/400' },
    { id: 6, cat: 'appliances', name: 'Холодильник LG InstaView', price: 32999, old: null, img: 'https://picsum.photos/seed/fridge/400/400' },
    { id: 7, cat: 'appliances', name: 'Мультиварка Philips HD', price: 4999, old: null, img: 'https://picsum.photos/seed/multicooker/400/400' },
    { id: 8, cat: 'appliances', name: 'Праска Tefal Ultimate', price: 2999, old: 3999, img: 'https://picsum.photos/seed/iron/400/400' },

    // Мода
    { id: 9, cat: 'fashion', name: 'Куртка North Face Nuptse', price: 12999, old: 15999, img: 'https://picsum.photos/seed/jacket/400/400' },
    { id: 10, cat: 'fashion', name: 'Кросівки Nike Air Max 90', price: 5999, old: null, img: 'https://picsum.photos/seed/sneakers/400/400' },
    { id: 11, cat: 'fashion', name: 'Сумка Michael Kors', price: 8999, old: 11999, img: 'https://picsum.photos/seed/bag/400/400' },
    { id: 12, cat: 'fashion', name: 'Пальто Zara Premium', price: 4999, old: null, img: 'https://picsum.photos/seed/coat/400/400' },

    // Дім і сад
    { id: 13, cat: 'home', name: 'Диван IKEA Vimle 3-місний', price: 15999, old: 18999, img: 'https://picsum.photos/seed/sofa/400/400' },
    { id: 14, cat: 'home', name: 'Набір посуду Tefal 12 пр.', price: 3499, old: null, img: 'https://picsum.photos/seed/dishes/400/400' },
    { id: 15, cat: 'home', name: 'Світильник IKEA FADO', price: 799, old: null, img: 'https://picsum.photos/seed/lamp/400/400' },
    { id: 16, cat: 'home', name: 'Штучна ялина Balsam Hill', price: 2499, old: 3499, img: 'https://picsum.photos/seed/tree/400/400' },

    // Дитячі товари
    { id: 17, cat: 'kids', name: 'Конструктор BrickCity (500 дет.)', price: 999, old: null, img: 'https://picsum.photos/seed/lego/400/400' },
    { id: 18, cat: 'kids', name: 'Дитячий велосипед KidRide 16"', price: 3299, old: 3799, img: 'https://picsum.photos/seed/bike/400/400' },
    { id: 19, cat: 'kids', name: 'М\'яка іграшка Ведмедик Тедді', price: 449, old: null, img: 'https://picsum.photos/seed/teddy/400/400' },
    { id: 20, cat: 'kids', name: 'Пазл «Мандрівка світом» 1000 дет.', price: 349, old: null, img: 'https://picsum.photos/seed/puzzle/400/400' },

    // Спорт
    { id: 21, cat: 'sport', name: 'Гантелі набірні PowerSet 20 кг', price: 1799, old: null, img: 'https://picsum.photos/seed/dumbbells/400/400' },
    { id: 22, cat: 'sport', name: 'Килимок для йоги FlexMat', price: 599, old: null, img: 'https://picsum.photos/seed/yoga/400/400' },
    { id: 23, cat: 'sport', name: 'Футбольний м\'яч ProKick', price: 749, old: 899, img: 'https://picsum.photos/seed/ball/400/400' },
    { id: 24, cat: 'sport', name: 'Спортивний рюкзак TrainBag', price: 899, old: null, img: 'https://picsum.photos/seed/backpack/400/400' }
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
                <img src="${d.img}" alt="${d.name}" width="60" height="60" style="border-radius:10px;object-fit:cover;">
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
                     onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22%3E%3Crect fill=%22%23e8e8e8%22 width=%22400%22 height=%22400%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%23999%22 font-family=%22sans-serif%22 font-size=%2218%22%3EНемає фото%3C/text%3E%3C/svg%3E';">
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
        btn.addEventListener('click', function () {
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
    if (state.cart[id] <= 0) delete state.cart[id];
    renderCartCount();
    renderCartBody();
    renderGrid();          // ← лучше ещё и сетку обновить
}