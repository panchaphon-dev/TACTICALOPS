/* --- TACTICAL OPS : CLIENT SIDE SYSTEM --- */

// --- 1. ข้อมูลสินค้าเริ่มต้น (15 ชิ้น) ---
const DEFAULT_PRODUCTS = [
    // --- RIFLES (WEAPONS) ---
    {
        id: 'W-001',
        name: 'M4A1 SOPMOD Block II',
        category: 'weapon',
        price: 45000,
        stock: 10,
        img: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&q=80&w=600',
        desc: 'ไรเฟิลจู่โจมมาตรฐานกองทัพสหรัฐฯ พร้อมราง SOPMOD สำหรับติดตั้งอุปกรณ์เสริม ความแม่นยำสูง เหมาะสำหรับระยะกลาง'
    },
    {
        id: 'W-002',
        name: 'HK416 Delta Custom',
        category: 'weapon',
        price: 68000,
        stock: 5,
        img: 'https://images.unsplash.com/photo-1585589266882-2cb13717a0f1?auto=format&fit=crop&q=80&w=600',
        desc: 'สุดยอดไรเฟิลระบบ Gas Piston ทนทานต่อทุกสภาพอากาศ ใช้โดยหน่วยปฏิบัติการพิเศษทั่วโลก'
    },
    {
        id: 'W-003',
        name: 'MK18 Mod 1',
        category: 'weapon',
        price: 52000,
        stock: 8,
        img: 'https://images.unsplash.com/photo-1599313797669-e3321520630e?auto=format&fit=crop&q=80&w=600',
        desc: 'ไรเฟิลลำกล้องสั้น (CQBR) คล่องตัวสูง เหมาะสำหรับการรบในที่แคบ (CQB) และในอาคาร'
    },
    {
        id: 'W-004',
        name: 'SR-25 DMR Precision',
        category: 'weapon',
        price: 85000,
        stock: 3,
        img: 'https://images.unsplash.com/photo-1550953259-7128f731c360?auto=format&fit=crop&q=80&w=600',
        desc: 'ปืนซุ่มยิงกึ่งอัตโนมัติ (Designated Marksman Rifle) สำหรับการยิงสนับสนุนระยะไกล ใช้กระสุน 7.62mm'
    },
    {
        id: 'W-005',
        name: 'AK-105 Modernized',
        category: 'weapon',
        price: 39000,
        stock: 12,
        img: 'https://images.unsplash.com/photo-1582255798939-52e6d97c6d66?auto=format&fit=crop&q=80&w=600',
        desc: 'AK รุ่นปรับปรุงใหม่ ติดตั้งพานท้ายยืดหดและราง Picatinny ทนทาน เชื่อถือได้ทุกสถานการณ์'
    },

    // --- HANDGUNS (WEAPONS) ---
    {
        id: 'W-006',
        name: 'Glock 19 Gen 5',
        category: 'weapon',
        price: 28000,
        stock: 20,
        img: 'https://images.unsplash.com/photo-1616423662269-806950275817?auto=format&fit=crop&q=80&w=600',
        desc: 'ปืนพกยอดนิยมตลอดกาล ขนาดกะทัดรัด น้ำหนักเบา ระบบความปลอดภัย Safe Action'
    },
    {
        id: 'W-007',
        name: 'Sig Sauer P320 M17',
        category: 'weapon',
        price: 32000,
        stock: 15,
        img: 'https://images.unsplash.com/photo-1596728020582-7360218b0821?auto=format&fit=crop&q=80&w=600',
        desc: 'ปืนพกประจำกายกองทัพสหรัฐฯ รุ่นใหม่ ระบบ Modular เปลี่ยน Grip ได้ รองรับการติดตั้งดอท'
    },
    {
        id: 'W-008',
        name: 'Colt 1911 Rail Gun',
        category: 'weapon',
        price: 45000,
        stock: 6,
        img: 'https://images.unsplash.com/photo-1591873998932-d021f4503930?auto=format&fit=crop&q=80&w=600',
        desc: 'ตำนาน .45 ACP ที่ถูกอัปเกรดด้วยรางไฟฉาย ไกแต่ง และศูนย์เรืองแสง ทรงพลังและคลาสสิก'
    },
    {
        id: 'W-009',
        name: 'CZ Shadow 2 Urban Grey',
        category: 'weapon',
        price: 48000,
        stock: 4,
        img: 'https://images.unsplash.com/photo-1563613626294-b295988e401e?auto=format&fit=crop&q=80&w=600',
        desc: 'ราชาแห่งปืนสั้น IPSC แม่นยำสูง รีคอยล์ต่ำ ด้ามจับกระชับมือ พร้อมลงสนามแข่ง'
    },
    {
        id: 'W-010',
        name: 'FN 509 Tactical',
        category: 'weapon',
        price: 34000,
        stock: 10,
        img: 'https://images.unsplash.com/photo-1623588960682-1e967a5b3a37?auto=format&fit=crop&q=80&w=600',
        desc: 'ปืนสาย Tactical แท้ๆ ลำกล้องเกลียวสำหรับเก็บเสียง ศูนย์สูง และรองรับ Red Dot'
    },

    // --- GEAR & ACCESSORIES ---
    {
        id: 'G-001',
        name: 'JPC 2.0 Plate Carrier',
        category: 'gear',
        price: 8500,
        stock: 20,
        img: 'https://plus.unsplash.com/premium_photo-1661331665406-880099450372?auto=format&fit=crop&q=80&w=600',
        desc: 'เสื้อเกราะน้ำหนักเบา คล่องตัวสูง ระบายอากาศได้ดี เหมาะสำหรับภารกิจ Fast Action'
    },
    {
        id: 'G-002',
        name: 'Ops-Core FAST Helmet',
        category: 'gear',
        price: 12000,
        stock: 8,
        img: 'https://images.unsplash.com/photo-1596484552993-8472535091a9?auto=format&fit=crop&q=80&w=600',
        desc: 'หมวกกันกระสุนทรง High Cut พร้อมรางติดตั้งหูฟังและกล้อง Night Vision'
    },
    {
        id: 'A-001',
        name: 'EOTECH EXPS3-0',
        category: 'accessory',
        price: 15000,
        stock: 15,
        img: 'https://images.unsplash.com/photo-1591552528188-466d3a950820?auto=format&fit=crop&q=80&w=600',
        desc: 'กล้องเล็ง Holographic ระดับท็อป มองเห็นชัดเจน เล็งเป้าได้รวดเร็วด้วยสองตา'
    },
    {
        id: 'A-002',
        name: 'SureFire M600 Scout',
        category: 'accessory',
        price: 7500,
        stock: 25,
        img: 'https://images.unsplash.com/photo-1517427677506-ade074eb1432?auto=format&fit=crop&q=80&w=600',
        desc: 'ไฟฉายติดปืนความสว่างสูง 1000 Lumens ทนแรงรีคอยล์ พร้อมสวิตช์หางหนู'
    },
    {
        id: 'A-003',
        name: 'PEQ-15 Laser Box',
        category: 'accessory',
        price: 4500,
        stock: 10,
        img: 'https://images.unsplash.com/photo-1606708914652-32b04f145450?auto=format&fit=crop&q=80&w=600',
        desc: 'กล่องเลเซอร์ชี้เป้า (Laser/IR) สำหรับใช้งานร่วมกับกล้องมองกลางคืน'
    }
];

// --- 2. CORE SYSTEM ---
let cart = [];

function initSystem() {
    // 2.1 FORCE UPDATE DATA
    // เช็คว่ามีข้อมูลเดิมไหม และข้อมูลเดิมเป็นชุดเก่าหรือไม่ (เช็คจำนวน หรือ ID)
    const storedData = localStorage.getItem('tactical_products');
    let shouldUpdate = false;

    if (!storedData) {
        shouldUpdate = true;
    } else {
        const products = JSON.parse(storedData);
        // ถ้ามีสินค้าน้อยกว่า 15 ชิ้น หรือ ID ตัวแรกไม่ใช่ W-001 (แสดงว่าเป็นข้อมูลเก่า) ให้บังคับอัปเดต
        if (products.length < 15 || products[0].id !== 'W-001') {
            shouldUpdate = true;
        }
    }

    if (shouldUpdate) {
        console.log("Detecting old/missing data. Forcing update to new 15 items...");
        localStorage.setItem('tactical_products', JSON.stringify(DEFAULT_PRODUCTS));
    }

    // 2.2 Render Products
    renderShop('all');

    // 2.3 Check Auth for Navbar
    checkAuth();

    // 2.4 Load Cart from Session
    const savedCart = sessionStorage.getItem('tactical_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
}

function checkAuth() {
    const session = sessionStorage.getItem('tactical_session');
    const navAuth = document.getElementById('navAuth');
    
    if(navAuth) { // Check if element exists (some pages might not have it)
        if(session) {
            const user = JSON.parse(session);
            navAuth.innerHTML = `
                <div class="dropdown">
                    <a class="nav-link dropdown-toggle text-gold fw-bold" href="#" role="button" data-bs-toggle="dropdown">
                        <i class="fas fa-user-circle me-1"></i> ${user.name}
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark border-secondary">
                        <li><a class="dropdown-item" href="profile.html">Profile</a></li>
                        <li><hr class="dropdown-divider border-secondary"></li>
                        <li><a class="dropdown-item text-danger" href="#" onclick="logout()">Logout</a></li>
                    </ul>
                </div>
            `;
        } else {
            navAuth.innerHTML = `
                <a href="login.html" class="btn btn-sm btn-outline-gold font-tech me-2">LOGIN</a>
                <a href="register.html" class="btn btn-sm btn-gold font-tech">REGISTER</a>
            `;
        }
    }
}

function logout() {
    sessionStorage.removeItem('tactical_session');
    window.location.reload();
}

// --- 3. SHOP & FILTER ---
function renderShop(filter = 'all') {
    const grid = document.getElementById('productGrid');
    if (!grid) return; // Exit if not on shop page

    const products = JSON.parse(localStorage.getItem('tactical_products')) || [];
    grid.innerHTML = '';

    const filtered = products.filter(p => {
        if(filter === 'all') return true;
        if(filter === 'weapon') return p.category === 'weapon';
        // Map 'armor' button to 'gear' category data
        if(filter === 'armor') return p.category === 'gear'; 
        // Map 'acc' button to 'accessory' category data
        if(filter === 'acc') return p.category === 'accessory';
        return p.category === filter;
    });

    if(filtered.length === 0) {
        grid.innerHTML = '<div class="col-12 text-center text-muted py-5">NO INTEL FOUND (OUT OF STOCK)</div>';
        return;
    }

    filtered.forEach(p => {
        const isOOS = p.stock <= 0;
        grid.innerHTML += `
            <div class="col-sm-6 col-md-4 col-lg-3">
                <div class="card h-100 tactical-card bg-dark text-white">
                    <div class="position-relative">
                        <img src="${p.img}" class="card-img-top" alt="${p.name}">
                        ${isOOS ? '<div class="position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-75 d-flex align-items-center justify-content-center text-danger fw-bold font-military fs-4" style="letter-spacing:2px;">OUT OF STOCK</div>' : ''}
                        <span class="position-absolute top-0 end-0 m-2 badge bg-gold text-black font-tech fw-bold">${p.category.toUpperCase()}</span>
                    </div>
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title font-tech fw-bold text-truncate">${p.name}</h5>
                        <p class="card-text text-gold font-monospace">฿${p.price.toLocaleString()}</p>
                        <div class="mt-auto">
                            <button class="btn btn-outline-light w-100 btn-sm mb-2" onclick="viewProduct('${p.id}')">
                                <i class="fas fa-search me-1"></i> INSPECT
                            </button>
                            <button class="btn btn-gold w-100 fw-bold ${isOOS ? 'disabled' : ''}" onclick="addToCart('${p.id}')">
                                <i class="fas fa-cart-plus me-1"></i> ADD TO LOADOUT
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
}

function filterProducts(category, btn) {
    // Update Active Button
    const buttons = document.querySelectorAll('.container .btn-outline-warning, .container .btn-outline-light');
    buttons.forEach(b => {
        b.classList.remove('active', 'btn-outline-light');
        b.classList.add('btn-outline-warning');
    });
    
    btn.classList.remove('btn-outline-warning');
    btn.classList.add('btn-outline-light', 'active');

    renderShop(category);
}

// --- 4. MODAL & CART ---
let currentModalId = null;

function viewProduct(id) {
    const products = JSON.parse(localStorage.getItem('tactical_products'));
    const p = products.find(x => x.id === id);
    if(!p) return;

    currentModalId = id;
    document.getElementById('modalTitle').innerText = p.name;
    document.getElementById('modalImg').src = p.img;
    document.getElementById('modalPrice').innerText = '฿' + p.price.toLocaleString();
    document.getElementById('modalModel').innerText = p.id;
    document.getElementById('modalDesc').innerText = p.desc || 'No description available.';
    
    new bootstrap.Modal(document.getElementById('productModal')).show();
}

function addToCartFromModal() {
    if(currentModalId) {
        addToCart(currentModalId);
        bootstrap.Modal.getInstance(document.getElementById('productModal')).hide();
    }
}

function addToCart(id) {
    const products = JSON.parse(localStorage.getItem('tactical_products'));
    const product = products.find(p => p.id === id);
    
    // Check Stock
    if(product.stock <= 0) {
        Swal.fire({icon: 'error', title: 'OUT OF STOCK', background:'#000', color:'#fff'});
        return;
    }

    // Check existing in cart
    const existing = cart.find(item => item.id === id);
    if(existing) {
        if(existing.qty < product.stock) {
            existing.qty++;
        } else {
            Swal.fire({icon: 'warning', title: 'MAX STOCK REACHED', background:'#000', color:'#fff'});
            return;
        }
    } else {
        cart.push({ ...product, qty: 1 });
    }

    updateCartUI();
    
    // Feedback
    const toast = Swal.mixin({
        toast: true, position: 'top-end', showConfirmButton: false, 
        timer: 1500, background: '#fbbf24', color: '#000', iconColor: '#000'
    });
    toast.fire({ icon: 'success', title: 'ADDED TO LOADOUT' });
}

function updateCartUI() {
    sessionStorage.setItem('tactical_cart', JSON.stringify(cart));
    
    // Update Badges
    const badgeNav = document.getElementById('cartBadgeNav');
    const badgeFloat = document.getElementById('cartBadgeFloat');
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    
    if(badgeNav) badgeNav.innerText = totalQty;
    if(badgeFloat) badgeFloat.innerText = totalQty;

    // Update List
    const list = document.getElementById('cartItems');
    if(!list) return;

    let total = 0;
    
    if(cart.length === 0) {
        list.innerHTML = '<div class="text-center text-muted mt-5">EMPTY LOADOUT</div>';
    } else {
        list.innerHTML = cart.map(item => {
            total += item.price * item.qty;
            return `
                <div class="d-flex justify-content-between align-items-center mb-3 border-bottom border-secondary pb-2">
                    <div class="d-flex align-items-center">
                        <img src="${item.img}" width="50" height="50" class="rounded object-fit-cover me-3">
                        <div>
                            <div class="fw-bold font-tech text-white" style="font-size:0.9rem;">${item.name}</div>
                            <div class="small text-muted">฿${item.price.toLocaleString()} x ${item.qty}</div>
                        </div>
                    </div>
                    <div class="d-flex align-items-center gap-2">
                        <button class="btn btn-sm btn-outline-secondary" onclick="updateQty('${item.id}', -1)">-</button>
                        <span class="text-white fw-bold" style="width:20px; text-align:center;">${item.qty}</span>
                        <button class="btn btn-sm btn-outline-warning" onclick="updateQty('${item.id}', 1)">+</button>
                        <button class="btn btn-sm btn-danger ms-2" onclick="removeFromCart('${item.id}')"><i class="fas fa-trash"></i></button>
                    </div>
                </div>
            `;
        }).join('');
    }

    const totalEl = document.getElementById('cartTotal');
    if(totalEl) totalEl.innerText = '฿' + total.toLocaleString();
}

function updateQty(id, change) {
    const item = cart.find(x => x.id === id);
    const products = JSON.parse(localStorage.getItem('tactical_products'));
    const stock = products.find(p => p.id === id).stock;

    if(item) {
        if(change === 1 && item.qty < stock) item.qty++;
        if(change === -1 && item.qty > 1) item.qty--;
        updateCartUI();
    }
}

function removeFromCart(id) {
    cart = cart.filter(x => x.id !== id);
    updateCartUI();
}

// --- 5. CHECKOUT ---
function checkCheckoutAccess() {
    const session = sessionStorage.getItem('tactical_session');
    if(!session) {
        Swal.fire({
            icon: 'warning', title: 'ACCESS DENIED', 
            text: 'Please LOGIN to verify your identity before requisition.',
            background: '#000', color: '#fff',
            showCancelButton: true, confirmButtonText: 'LOGIN NOW', confirmButtonColor: '#fbbf24'
        }).then((res) => {
            if(res.isConfirmed) window.location.href = 'login.html';
        });
        
        // Collapse the form back
        new bootstrap.Collapse(document.getElementById('checkoutFormCollapse'), { toggle: false }).hide();
        return false;
    }
    
    if(cart.length === 0) {
        Swal.fire({icon: 'warning', title: 'EMPTY LOADOUT', text:'Add gear first.', background:'#000', color:'#fff'});
        return false;
    }
    
    // Auto-fill user info if available
    const user = JSON.parse(session);
    document.getElementById('cName').value = user.name || '';
    document.getElementById('cPhone').value = user.phone || '';
    document.getElementById('cAddr').value = user.address || '';
    
    return true;
}

function toggleQR() {
    const method = document.getElementById('paymentMethod').value;
    document.getElementById('qrSection').style.display = method === 'QR' ? 'block' : 'none';
}

function processCheckout() {
    Swal.fire({
        title: 'CONFIRM REQUISITION?',
        text: "Orders cannot be cancelled once processed.",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#fbbf24',
        cancelButtonColor: '#d33',
        confirmButtonText: 'CONFIRM',
        background: '#000', color: '#fff'
    }).then((result) => {
        if (result.isConfirmed) {
            // 1. Create Order
            const orders = JSON.parse(localStorage.getItem('tactical_orders')) || [];
            const newOrder = {
                id: 'ORD-' + Date.now(),
                customer: {
                    name: document.getElementById('cName').value,
                    phone: document.getElementById('cPhone').value,
                    address: document.getElementById('cAddr').value
                },
                items: cart,
                total: cart.reduce((sum, i) => sum + (i.price * i.qty), 0),
                payment: document.getElementById('paymentMethod').value,
                date: new Date().toLocaleString('th-TH'),
                status: 'PENDING'
            };
            
            orders.push(newOrder);
            localStorage.setItem('tactical_orders', JSON.stringify(orders));

            // 2. Cut Stock
            const products = JSON.parse(localStorage.getItem('tactical_products'));
            cart.forEach(cItem => {
                const pIndex = products.findIndex(p => p.id === cItem.id);
                if(pIndex !== -1) {
                    products[pIndex].stock -= cItem.qty;
                }
            });
            localStorage.setItem('tactical_products', JSON.stringify(products));

            // 3. Clear Cart & Reset
            cart = [];
            sessionStorage.removeItem('tactical_cart');
            updateCartUI();
            
            // 4. Close Canvas & Show Success
            const offcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('cartOffcanvas'));
            offcanvas.hide();

            Swal.fire({
                icon: 'success', 
                title: 'ORDER SECURED', 
                text: `Order ID: ${newOrder.id} has been dispatched to HQ.`,
                background: '#000', color: '#fbbf24', iconColor: '#fbbf24'
            }).then(() => {
                window.location.reload(); // Refresh to update stock display
            });
        }
    });
}