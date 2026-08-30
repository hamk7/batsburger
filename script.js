const IMG = {
  classic:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=82',
  cheese:'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=82',
  bbq:'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=900&q=82',
  fries:'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=82',
  chicken:'https://images.unsplash.com/photo-1615297928064-24977384d0da?auto=format&fit=crop&w=900&q=82',
  veggie:'https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=900&q=82',
  salad:'https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=900&q=82',
  wings:'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=900&q=82'
};

const products = [
  {id:1,name:'Chili Cheese Beef Burger',cat:'Beef',price:11.90,img:IMG.cheese,tag:'BELIEBT',desc:'Jalapeños, Cheddar Cheese, geschmolzener Cheddar, Salat, Tomaten, Gewürzgurken, rote Zwiebeln & Samurai Sauce.'},
  {id:2,name:'BBQ Beef Burger',cat:'Beef',price:12.90,img:IMG.bbq,tag:'BESTSELLER',desc:'BBQ Sauce, Rinderbacon, Cheddar, Röstzwiebeln, Salat, Tomaten & Gewürzgurken.'},
  {id:3,name:"Big Bat's Beef Burger",cat:'Beef',price:18.90,img:IMG.classic,tag:'XXL',desc:'Unser XXL Burger mit Rinderbacon, Cheddar, Röstzwiebeln, Salat, Tomaten, Gewürzgurken & Haussauce.'},
  {id:4,name:'Chili Chicken Crispy Burger',cat:'Chicken',price:10.90,img:IMG.chicken,tag:'CRISPY',desc:'Crispy Chicken, Jalapeños, frischer Salat, Tomaten, Gewürzgurken, rote Zwiebeln & Samurai Sauce.'},
  {id:5,name:'Classic Beef Burger',cat:'Beef',price:9.90,img:IMG.classic,desc:'Frischer Salat, Tomaten, Gewürzgurken, rote Zwiebeln & Haussauce.'},
  {id:6,name:'Cheese Beef Burger',cat:'Beef',price:10.90,img:IMG.cheese,desc:'Cheddar Cheese, geschmolzener Cheddar, Salat, Tomaten, Gewürzgurken, rote Zwiebeln & Haussauce.'},
  {id:7,name:'Bacon Cheese Beef Burger',cat:'Beef',price:11.90,img:IMG.bbq,desc:'Rinderbacon, Cheddar Cheese, Salat, Tomaten, Gewürzgurken, rote Zwiebeln & Haussauce.'},
  {id:8,name:'Chicken Crispy Burger',cat:'Chicken',price:9.90,img:IMG.chicken,desc:'Crispy Chicken, frischer Salat, Tomaten, Gewürzgurken, rote Zwiebeln & Haussauce.'},
  {id:9,name:'Veggie Burger',cat:'Veggie',price:9.90,img:IMG.veggie,desc:'Veganes Patty, frischer Salat, Tomaten, Gewürzgurken & Haussauce.'},
  {id:10,name:'Hausfritten',cat:'Fritten',price:4.90,img:IMG.fries,desc:'Knusprig frittierte Hausfritten.'},
  {id:11,name:'Chili Cheddar Cheese Fritten',cat:'Fritten',price:7.90,img:IMG.fries,tag:'SCHARF',desc:'Hausfritten mit warmer Cheddarsauce und Jalapeños.'},
  {id:12,name:'Chicken Wings',cat:'Snacks',price:7.90,img:IMG.wings,desc:'Knusprig marinierte Hähnchenflügel.'},
  {id:13,name:"Bat's Salat",cat:'Salate',price:9.90,img:IMG.salad,desc:'Grüner Salat, Tomaten, Gurken, Mais, Crispy Chicken Streifen & Croutons.'}
];

const categories=['Alle','Beef','Chicken','Veggie','Fritten','Snacks','Salate'];
let currentProduct=null, qty=1, cart=[];
const euro=n=>n.toLocaleString('de-DE',{style:'currency',currency:'EUR'});

function renderBestsellers(){
  const ids=[1,2,3,4];
  document.querySelector('#bestsellerGrid').innerHTML=ids.map(id=>card(products.find(p=>p.id===id))).join('');
}
function card(p){return `<article class="product-card reveal"><div class="product-photo" style="background-image:url('${p.img}')">${p.tag?`<span class="product-tag">${p.tag}</span>`:''}</div><div class="product-body"><h3>${p.name}</h3><p>${p.desc}</p><div class="product-bottom"><span class="product-price">${euro(p.price)}</span><button class="add-btn" data-product="${p.id}" aria-label="${p.name} öffnen">+</button></div></div></article>`}
function renderTabs(){document.querySelector('#categoryTabs').innerHTML=categories.map((c,i)=>`<button class="category-tab ${i===0?'active':''}" data-category="${c}">${c}</button>`).join('')}
function renderMenu(category='Alle'){
  const list=category==='Alle'?products:products.filter(p=>p.cat===category);
  document.querySelector('#menuGrid').innerHTML=list.map(p=>`<article class="menu-item"><div class="menu-thumb" style="background-image:url('${p.img}')"></div><div class="menu-info"><h3>${p.name}</h3><p>${p.desc}</p></div><div class="menu-right"><span class="menu-price">${euro(p.price)}</span><button class="menu-add" data-product="${p.id}" aria-label="${p.name} öffnen">+</button></div></article>`).join('');
}

function bindDynamic(){document.body.addEventListener('click',e=>{const b=e.target.closest('[data-product]');if(b)openProduct(Number(b.dataset.product))})}
function openProduct(id){
  currentProduct=products.find(p=>p.id===id);qty=1;
  const m=document.querySelector('#productModal');
  document.querySelector('#modalProductImage').style.backgroundImage=`url('${currentProduct.img}')`;
  document.querySelector('#modalProductCategory').textContent=currentProduct.cat;
  document.querySelector('#modalProductName').textContent=currentProduct.name;
  document.querySelector('#modalProductDescription').textContent=currentProduct.desc;
  document.querySelector('#modalProductPrice').textContent=euro(currentProduct.price);
  document.querySelectorAll('#productModal input[type=checkbox]').forEach(i=>i.checked=false);
  updateModalPrice(); m.classList.add('open');m.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';
}
function closeProduct(){const m=document.querySelector('#productModal');m.classList.remove('open');m.setAttribute('aria-hidden','true');document.body.style.overflow=''}
function updateModalPrice(){if(!currentProduct)return;let extra=0;document.querySelectorAll('#productModal input[data-extra]:checked').forEach(i=>extra+=Number(i.value));document.querySelector('#qtyValue').textContent=qty;document.querySelector('#addToCartBtn span').textContent=euro((currentProduct.price+extra)*qty)}
function addCurrent(){
  let extras=[];let extraPrice=0;document.querySelectorAll('#productModal input[data-extra]:checked').forEach(i=>{extras.push(i.dataset.extra);extraPrice+=Number(i.value)});
  cart.push({key:Date.now(),product:currentProduct,qty,extras,unit:currentProduct.price+extraPrice});closeProduct();updateCart();showToast();
}
function updateCart(){
  const count=cart.reduce((a,x)=>a+x.qty,0);const subtotal=cart.reduce((a,x)=>a+x.qty*x.unit,0);
  document.querySelector('#cartCount').textContent=count;document.querySelector('#floatingCartText').textContent=count?`${euro(subtotal)} · Warenkorb`:'Warenkorb';
  const items=document.querySelector('#cartItems');items.innerHTML=cart.map(x=>`<div class="cart-item"><div class="cart-item-photo" style="background-image:url('${x.product.img}')"></div><div><h4>${x.qty}× ${x.product.name}</h4><small>${x.extras.length?x.extras.join(', '):'Standard'}</small></div><strong>${euro(x.qty*x.unit)}</strong></div>`).join('');
  document.querySelector('#cartEmpty').style.display=cart.length?'none':'block';document.querySelector('#cartSummary').style.display=cart.length?'block':'none';document.querySelector('#cartSubtotal').textContent=euro(subtotal);document.querySelector('#cartTotal').textContent=euro(subtotal);
  const rem=Math.max(0,20-subtotal);document.querySelector('#minimumMessage').textContent=rem?`Noch ${euro(rem)} bis zum Mindestbestellwert.`:'Mindestbestellwert erreicht ✓';
}
function openCart(){document.querySelector('#cartDrawer').classList.add('open');document.querySelector('#cartBackdrop').classList.add('open');document.querySelector('#cartDrawer').setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
function closeCart(){document.querySelector('#cartDrawer').classList.remove('open');document.querySelector('#cartBackdrop').classList.remove('open');document.querySelector('#cartDrawer').setAttribute('aria-hidden','true');document.body.style.overflow=''}
function openOrder(){document.querySelector('#orderModal').classList.add('open');document.querySelector('#orderModal').setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
function closeOrder(){document.querySelector('#orderModal').classList.remove('open');document.querySelector('#orderModal').setAttribute('aria-hidden','true');document.body.style.overflow=''}
function showToast(){const t=document.querySelector('#toast');t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1800)}

renderBestsellers();renderTabs();renderMenu();bindDynamic();updateCart();
document.querySelector('#categoryTabs').addEventListener('click',e=>{const b=e.target.closest('[data-category]');if(!b)return;document.querySelectorAll('.category-tab').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderMenu(b.dataset.category)});
document.querySelector('[data-close-product]').onclick=closeProduct;document.querySelector('#productModal').addEventListener('click',e=>{if(e.target.id==='productModal')closeProduct()});
document.querySelector('#qtyMinus').onclick=()=>{qty=Math.max(1,qty-1);updateModalPrice()};document.querySelector('#qtyPlus').onclick=()=>{qty++;updateModalPrice()};document.querySelector('#productModal').addEventListener('change',updateModalPrice);document.querySelector('#addToCartBtn').onclick=addCurrent;
document.querySelector('#floatingCart').onclick=openCart;document.querySelector('#closeCart').onclick=closeCart;document.querySelector('#cartBackdrop').onclick=closeCart;
document.querySelectorAll('[data-open-order]').forEach(b=>b.onclick=openOrder);document.querySelector('[data-close-order]').onclick=closeOrder;document.querySelector('#orderModal').addEventListener('click',e=>{if(e.target.id==='orderModal')closeOrder()});
document.querySelectorAll('.order-option').forEach(b=>b.onclick=()=>{document.querySelectorAll('.order-option').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');const isDelivery=b.dataset.method==='Lieferung';document.querySelector('#postalInput').closest('label').style.display=isDelivery?'block':'none';document.querySelector('#deliveryResult').style.display=isDelivery?'flex':'none'});
document.querySelector('#postalInput').addEventListener('input',e=>{const v=e.target.value.replace(/\D/g,'').slice(0,5);e.target.value=v;document.querySelector('#deliveryResult strong').textContent=v.length===5?`Lieferung nach ${v} möglich`:'PLZ eingeben'});
document.querySelector('#continueOrder').onclick=()=>{closeOrder();document.querySelector('#menu').scrollIntoView({behavior:'smooth'})};
document.querySelector('#cartCheckout').onclick=()=>{closeCart();openOrder()};
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeProduct();closeCart();closeOrder()}});

const io=new IntersectionObserver(entries=>entries.forEach(x=>{if(x.isIntersecting){x.target.classList.add('visible');io.unobserve(x.target)}}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(x=>io.observe(x));
