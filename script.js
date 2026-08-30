const IMG = {
  classic:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=82',
  cheese:'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1000&q=82',
  bbq:'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=1000&q=82',
  chicken:'https://images.unsplash.com/photo-1615297928064-24977384d0da?auto=format&fit=crop&w=1000&q=82',
  veggie:'https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=1000&q=82',
  fries:'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1000&q=82',
  snack:'https://images.unsplash.com/photo-1625938145744-e380515399bf?auto=format&fit=crop&w=1000&q=82',
  salad:'https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=1000&q=82',
  sauce:'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=1000&q=82',
  drink:'https://images.unsplash.com/photo-1543253687-c931c8e01820?auto=format&fit=crop&w=1000&q=82'
};

const extras = [
  {name:'Glasierte Zwiebeln',price:1.00},
  {name:'Röstzwiebeln',price:1.00},
  {name:'Jalapeños',price:1.00},
  {name:'Cheddar Cheese',price:1.50},
  {name:'Geschmolzener Cheddar',price:1.50},
  {name:'Spiegelei',price:1.50},
  {name:'Bacon (Rind, halal)',price:1.80},
  {name:'Extra Beef',price:3.00}
];

const products = [
  {id:1,name:'Classic Burger',cat:'Beef Burger',type:'burger',price:9.40,img:IMG.classic,desc:'Frischer Salat, Tomaten, Gewürzgurken, rote Zwiebeln und Haussauce.',remove:['Salat','Tomaten','Gewürzgurken','rote Zwiebeln']},
  {id:2,name:'Cheese Burger',cat:'Beef Burger',type:'burger',price:10.40,img:IMG.cheese,desc:'Cheddar Cheese, geschmolzener Cheddar, frischer Salat, Tomaten, Gewürzgurken, rote Zwiebeln und Haussauce.',remove:['Cheddar Cheese','geschmolzener Cheddar','Salat','Tomaten','Gewürzgurken','rote Zwiebeln']},
  {id:3,name:'Chili Burger',cat:'Beef Burger',type:'burger',price:10.40,img:IMG.classic,desc:'Jalapeños, frischer Salat, Tomaten, Gewürzgurken, rote Zwiebeln und Samurai Sauce.',remove:['Jalapeños','Salat','Tomaten','Gewürzgurken','rote Zwiebeln']},
  {id:4,name:'Chili Cheese Burger',cat:'Beef Burger',type:'burger',price:11.40,img:IMG.cheese,tag:'FAVORIT',desc:'Jalapeños, Cheddar Cheese, geschmolzener Cheddar, frischer Salat, Tomaten, Gewürzgurken, rote Zwiebeln und Samurai Sauce.',remove:['Jalapeños','Cheddar Cheese','geschmolzener Cheddar','Salat','Tomaten','Gewürzgurken','rote Zwiebeln']},
  {id:5,name:'BBQ Burger',cat:'Beef Burger',type:'burger',price:12.40,img:IMG.bbq,tag:'FAVORIT',desc:'BBQ Sauce, Rinderbacon, Cheddar Cheese, geschmolzener Cheddar, Röstzwiebeln, frischer Salat, Tomaten und Gewürzgurken.',remove:['Rinderbacon','Cheddar Cheese','geschmolzener Cheddar','Röstzwiebeln','Salat','Tomaten','Gewürzgurken']},
  {id:6,name:'Bacon Cheese Burger',cat:'Beef Burger',type:'burger',price:11.40,img:IMG.bbq,desc:'Rinderbacon, Cheddar Cheese, frischer Salat, Tomaten, Gewürzgurken, rote Zwiebeln und Haussauce.',remove:['Rinderbacon','Cheddar Cheese','Salat','Tomaten','Gewürzgurken','rote Zwiebeln']},
  {id:7,name:'Bacon Chili X-tra Cheese Burger',cat:'Beef Burger',type:'burger',price:13.40,img:IMG.bbq,desc:'Rinderbacon, Jalapeños, Cheddar Cheese, extra Portion geschmolzener Cheddar, frischer Salat, Tomaten, Gewürzgurken, rote Zwiebeln und Samurai Sauce.',remove:['Rinderbacon','Jalapeños','Cheddar Cheese','geschmolzener Cheddar','Salat','Tomaten','Gewürzgurken','rote Zwiebeln']},
  {id:8,name:'Hawaii Burger',cat:'Beef Burger',type:'burger',price:11.40,img:IMG.cheese,desc:'Cheddar Cheese, Ananas, frischer Salat, Tomaten, Gewürzgurken, rote Zwiebeln und Haussauce.',remove:['Cheddar Cheese','Ananas','Salat','Tomaten','Gewürzgurken','rote Zwiebeln']},
  {id:9,name:'Hollandaise Burger',cat:'Beef Burger',type:'burger',price:11.40,img:IMG.cheese,desc:'Warme Hollandaise Sauce, Cheddar Cheese, glasierte Zwiebeln, frischer Salat, Tomaten und Gewürzgurken.',remove:['Hollandaise Sauce','Cheddar Cheese','glasierte Zwiebeln','Salat','Tomaten','Gewürzgurken']},
  {id:10,name:'Italian Burger',cat:'Beef Burger',type:'burger',price:11.40,img:IMG.classic,desc:'Cheddar Cheese, Rucola, Tomaten, rote Zwiebeln, Parmesan und feines Pesto.',remove:['Cheddar Cheese','Rucola','Tomaten','rote Zwiebeln','Parmesan','Pesto']},
  {id:11,name:'Schafskäse Burger',cat:'Beef Burger',type:'burger',price:11.40,img:IMG.cheese,desc:'Schafskäse, Cheddar Cheese, Röstzwiebeln, frischer Salat, Tomaten und Haussauce.',remove:['Schafskäse','Cheddar Cheese','Röstzwiebeln','Salat','Tomaten']},
  {id:12,name:'Guacamole Burger',cat:'Beef Burger',type:'burger',price:10.40,img:IMG.classic,desc:'Cheddar Cheese, frischer Salat, Tomaten, Gewürzgurken, rote Zwiebeln und Guacamole.',remove:['Cheddar Cheese','Salat','Tomaten','Gewürzgurken','rote Zwiebeln','Guacamole']},
  {id:13,name:'Low Carb Burger',cat:'Beef Burger',type:'burger',price:9.40,img:IMG.classic,desc:'Beef Patty ohne Brot, frischer Salat, Tomaten, Gewürzgurken, rote Zwiebeln und Haussauce.',remove:['Salat','Tomaten','Gewürzgurken','rote Zwiebeln']},
  {id:14,name:'Little Ari Burger',cat:'Beef Burger',type:'burger',price:12.40,img:IMG.bbq,desc:'BBQ Sauce, Rinderbacon, Spiegelei, Röstzwiebeln, frischer Salat, Tomaten und Gewürzgurken.',remove:['Rinderbacon','Spiegelei','Röstzwiebeln','Salat','Tomaten','Gewürzgurken']},
  {id:15,name:"Big Bat's Burger",cat:'Beef Burger',type:'burger',price:18.40,img:IMG.bbq,tag:'XXL',desc:'XXL Burger – wahlweise mit 450 g oder 600 g Beef. Rinderbacon, Cheddar Cheese, geschmolzener Cheddar, Röstzwiebeln, frischer Salat, Tomaten, Gewürzgurken und Haussauce.',remove:['Rinderbacon','Cheddar Cheese','geschmolzener Cheddar','Röstzwiebeln','Salat','Tomaten','Gewürzgurken'],portions:[{name:'450 g Beef',price:0},{name:'600 g Beef',price:0}],portionNote:'Die gespeicherte Karte nennt 450 g oder 600 g, weist dort aber keinen getrennten Preis aus. In der Demo bleibt der Preis deshalb gleich.'},

  {id:16,name:'Crispy Chicken Burger',cat:'Chicken Burger',type:'burger',price:9.40,img:IMG.chicken,tag:'FAVORIT',desc:'Crispy Chicken und Haussauce – mit frischem Salat, Tomaten, Gewürzgurken und roten Zwiebeln.',remove:['Salat','Tomaten','Gewürzgurken','rote Zwiebeln']},
  {id:17,name:'Chili Chicken Burger',cat:'Chicken Burger',type:'burger',price:10.40,img:IMG.chicken,desc:'Crispy Chicken, Jalapeños und Samurai Sauce – mit frischem Salat, Tomaten, Gewürzgurken und roten Zwiebeln.',remove:['Jalapeños','Salat','Tomaten','Gewürzgurken','rote Zwiebeln']},
  {id:18,name:'Joppie Chicken Burger',cat:'Chicken Burger',type:'burger',price:10.40,img:IMG.chicken,desc:'Crispy Chicken und Joppie Sauce – mit frischem Salat, Tomaten, Gewürzgurken und roten Zwiebeln.',remove:['Salat','Tomaten','Gewürzgurken','rote Zwiebeln']},
  {id:19,name:'Veggie Burger',cat:'Veggie Burger',type:'burger',price:9.40,img:IMG.veggie,desc:'Veganer Patty, frischer Salat, Tomaten, Gewürzgurken und Haussauce.',remove:['Salat','Tomaten','Gewürzgurken']},

  {id:20,name:'Hausfritten',cat:'Fritten',type:'side',price:4.40,img:IMG.fries,desc:''},
  {id:21,name:'SÜHE FRITTEN',cat:'Fritten',type:'side',price:4.90,img:IMG.fries,desc:'Bezeichnung wie in der gespeicherten Speisekarte.'},
  {id:22,name:'Curly Fries',cat:'Fritten',type:'side',price:4.90,img:IMG.fries,desc:''},
  {id:23,name:'Country Potatoes',cat:'Fritten',type:'side',price:4.90,img:IMG.fries,desc:''},
  {id:24,name:'Cheddar Cheese Fritten',cat:'Fritten Combos',type:'side',price:6.90,img:IMG.fries,desc:'Hausfritten mit warmer Cheddarsauce.'},
  {id:25,name:'Chili Cheese Fritten',cat:'Fritten Combos',type:'side',price:7.40,img:IMG.fries,tag:'FAVORIT',desc:'Hausfritten mit warmer Cheddarsauce und Jalapeños.'},
  {id:26,name:'Joppie Fritten',cat:'Fritten Combos',type:'side',price:6.90,img:IMG.fries,desc:'Hausfritten mit Joppie Sauce und Röstzwiebeln.'},
  {id:27,name:'Knoblauch Fritten',cat:'Fritten Combos',type:'side',price:6.90,img:IMG.fries,desc:'Hausfritten mit Knoblauchsauce.'},
  {id:28,name:'Guacamole Fritten',cat:'Fritten Combos',type:'side',price:6.90,img:IMG.fries,desc:'Hausfritten mit Guacamole.'},
  {id:29,name:'Curry Mango Fritten',cat:'Fritten Combos',type:'side',price:6.90,img:IMG.fries,desc:'Hausfritten mit Curry Mango Sauce.'},

  {id:30,name:'Chicken Nuggets',cat:'Snacks',type:'snack',price:6.40,img:IMG.snack,desc:''},
  {id:31,name:'Chili Cheese Nuggets',cat:'Snacks',type:'snack',price:6.40,img:IMG.snack,desc:''},
  {id:32,name:'Mozzarella Sticks',cat:'Snacks',type:'snack',price:6.30,img:IMG.snack,desc:''},
  {id:33,name:'Zwiebelringe',cat:'Snacks',type:'snack',price:4.30,img:IMG.snack,desc:''},

  {id:34,name:"Bat's Salat",cat:'Salate',type:'salad',price:9.40,img:IMG.salad,desc:'Frischer grüner Salat, Tomaten, knackige Gurken, Mais, Crispy Chicken Streifen und Croûtons.'},
  {id:35,name:'Chef Salat',cat:'Salate',type:'salad',price:9.40,img:IMG.salad,desc:'Frischer grüner Salat, Tomaten, knackige Gurken, Mais und Thunfisch.'},
  {id:36,name:'Salat Caprese',cat:'Salate',type:'salad',price:9.40,img:IMG.salad,desc:'Frische Tomaten, Mozzarella und Rucola.'},

  {id:37,name:'Ketchup',cat:'Saucen',type:'sauce',price:0.80,img:IMG.sauce,desc:'Kalte Sauce'},
  {id:38,name:'Mayonnaise',cat:'Saucen',type:'sauce',price:0.80,img:IMG.sauce,desc:'Kalte Sauce'},
  {id:39,name:'Joppie',cat:'Saucen',type:'sauce',price:1.40,img:IMG.sauce,desc:'Kalte Sauce'},
  {id:40,name:'Aioli',cat:'Saucen',type:'sauce',price:1.40,img:IMG.sauce,desc:'Kalte Sauce'},
  {id:41,name:'BBQ',cat:'Saucen',type:'sauce',price:1.40,img:IMG.sauce,desc:'Kalte Sauce'},
  {id:42,name:'Haussauce',cat:'Saucen',type:'sauce',price:1.40,img:IMG.sauce,desc:'Kalte Sauce'},
  {id:43,name:'Samurai',cat:'Saucen',type:'sauce',price:1.40,img:IMG.sauce,desc:'Kalte Sauce'},
  {id:44,name:'Sour Cream',cat:'Saucen',type:'sauce',price:1.40,img:IMG.sauce,desc:'Kalte Sauce'},
  {id:45,name:'Süß Sauer',cat:'Saucen',type:'sauce',price:1.40,img:IMG.sauce,desc:'Kalte Sauce'},
  {id:46,name:'Curry Mango',cat:'Saucen',type:'sauce',price:1.40,img:IMG.sauce,desc:'Kalte Sauce'},
  {id:47,name:'Guacamole',cat:'Saucen',type:'sauce',price:1.40,img:IMG.sauce,desc:'Kalte Sauce'},
  {id:48,name:'Cheddar Cheese Sauce',cat:'Saucen',type:'sauce',price:1.50,img:IMG.sauce,desc:'Warme Sauce'},
  {id:49,name:'Chili Cheese Sauce',cat:'Saucen',type:'sauce',price:1.80,img:IMG.sauce,desc:'Warme Sauce'},
  {id:50,name:'Hollandaise Sauce',cat:'Saucen',type:'sauce',price:1.80,img:IMG.sauce,desc:'Warme Sauce'},

  {id:51,name:'Coca-Cola 0,33 l',cat:'Getränke',type:'drink',price:3.55,img:IMG.drink,desc:'inkl. 0,15 € Pfand'},
  {id:52,name:'Coca-Cola Zero 0,33 l',cat:'Getränke',type:'drink',price:3.55,img:IMG.drink,desc:'inkl. 0,15 € Pfand'},
  {id:53,name:'Mezzo Mix 0,33 l',cat:'Getränke',type:'drink',price:3.55,img:IMG.drink,desc:'inkl. 0,15 € Pfand'},
  {id:54,name:'Fanta 0,33 l',cat:'Getränke',type:'drink',price:3.55,img:IMG.drink,desc:'inkl. 0,15 € Pfand'},
  {id:55,name:'Sprite 0,33 l',cat:'Getränke',type:'drink',price:3.55,img:IMG.drink,desc:'inkl. 0,15 € Pfand'},
  {id:56,name:'Elephant Bay 0,33 l',cat:'Getränke',type:'drink',price:3.55,img:IMG.drink,desc:'Verschiedene Sorten · inkl. 0,15 € Pfand'},
  {id:57,name:'ViO Schorle Johannisbeere 0,3 l',cat:'Getränke',type:'drink',price:3.55,img:IMG.drink,desc:'inkl. 0,15 € Pfand'},
  {id:58,name:'Apollinaris ViO still 0,25 l',cat:'Getränke',type:'drink',price:2.85,img:IMG.drink,desc:'inkl. 0,15 € Pfand'},
  {id:59,name:'Apollinaris ViO spritzig 0,25 l',cat:'Getränke',type:'drink',price:2.85,img:IMG.drink,desc:'inkl. 0,15 € Pfand'},
  {id:60,name:'Red Bull',cat:'Getränke',type:'drink',price:3.25,img:IMG.drink,desc:'Energy Drink 250 ml'},
  {id:61,name:'Red Bull Sugarfree',cat:'Getränke',type:'drink',price:3.25,img:IMG.drink,desc:'Energy Sugarfree 250 ml'}
];

const categories = [
  {value:'Alle',label:'Alle'},
  {value:'Beef Burger',label:'Beef'},
  {value:'Chicken Burger',label:'Chicken'},
  {value:'Veggie Burger',label:'Veggie'},
  {value:'Fritten',label:'Fritten'},
  {value:'Fritten Combos',label:'Fritten Combos'},
  {value:'Snacks',label:'Snacks'},
  {value:'Salate',label:'Salate'},
  {value:'Saucen',label:'Saucen'},
  {value:'Getränke',label:'Getränke'}
];

const deliveryZones = {
  '70378':{minimum:0,fee:0},
  '70734':{minimum:25,fee:1},
  '70736':{minimum:25,fee:1},
  '71332':{minimum:20,fee:0},
  '71334':{minimum:20,fee:0},
  '71336':{minimum:30,fee:1},
  '71364':{minimum:30,fee:2},
  '71384':{minimum:30,fee:2},
  '71394':{minimum:25,fee:1},
  '71397':{minimum:0,fee:0},
  '71404':{minimum:25,fee:1},
  '71409':{minimum:30,fee:2},
  '71686':{minimum:0,fee:0},
  '73630':{minimum:30,fee:2}
};

let currentProduct=null;
let qty=1;
let cart=[];
let orderMethod='Lieferung';
let paymentMethod='Apple Pay';
let orderStep=1;
let selectedSideId=null;
let selectedDrinkId=null;

const euro=n=>Number(n).toLocaleString('de-DE',{style:'currency',currency:'EUR'});
const subtotal=()=>cart.reduce((sum,item)=>sum+item.qty*item.unit,0);
const currentPostal=()=>((document.querySelector('#postalInput')?.value||'71332').replace(/\D/g,'').slice(0,5));
const currentZone=()=>deliveryZones[currentPostal()]||null;
const deliveryFee=()=>orderMethod==='Lieferung' && currentZone()?currentZone().fee:0;
const minimumForOrder=()=>orderMethod==='Lieferung' && currentZone()?currentZone().minimum:0;
const orderTotal=()=>subtotal()+deliveryFee();

function renderBestsellers(){
  const ids=[4,5,15,16,25];
  document.querySelector('#bestsellerGrid').innerHTML=ids.map(id=>card(products.find(p=>p.id===id))).join('');
  observeReveals();
}
function card(p){
  return `<article class="product-card reveal"><div class="product-photo" style="background-image:url('${p.img}')">${p.tag?`<span class="product-tag">${p.tag}</span>`:''}</div><div class="product-body"><h3>${p.name}</h3><p>${p.desc||p.cat}</p><div class="product-bottom"><span class="product-price">${euro(p.price)}</span><button class="add-btn" data-product="${p.id}" aria-label="${p.name} öffnen">+</button></div></div></article>`;
}
function renderTabs(){
  document.querySelector('#categoryTabs').innerHTML=categories.map((c,i)=>`<button class="category-tab ${i===0?'active':''}" data-category="${c.value}">${c.label}</button>`).join('');
}
function renderMenu(category='Alle'){
  const list=category==='Alle'?products:products.filter(p=>p.cat===category);
  document.querySelector('#menuGrid').innerHTML=list.map(p=>`<article class="menu-item"><div class="menu-thumb" style="background-image:url('${p.img}')"></div><div class="menu-info"><h3>${p.name}</h3><p>${p.desc||p.cat}</p></div><div class="menu-right"><span class="menu-price">${euro(p.price)}</span><button class="menu-add" data-product="${p.id}" aria-label="${p.name} öffnen">+</button></div></article>`).join('');
}

function renderProductOptions(){
  const isBurger=currentProduct?.type==='burger';
  const portionGroup=document.querySelector('#portionGroup');
  const extrasGroup=document.querySelector('#extrasGroup');
  const removeGroup=document.querySelector('#removeGroup');

  portionGroup.hidden=!(isBurger && currentProduct.portions?.length);
  document.querySelector('#portionOptions').innerHTML=currentProduct?.portions?.map((o,i)=>`<label class="radio-option"><input type="radio" name="burgerPortion" value="${o.price}" data-portion="${o.name}" ${i===0?'checked':''}> <span>${o.name}</span><b>${o.price?`+${euro(o.price)}`:'inklusive'}</b></label>`).join('')||'';
  document.querySelector('#portionNote').textContent=currentProduct?.portionNote||'';

  extrasGroup.style.display=isBurger?'block':'none';
  document.querySelector('#extrasOptions').innerHTML=isBurger?extras.map(o=>`<label><input type="checkbox" value="${o.price}" data-extra="${o.name}"> <span>${o.name}</span><b>+${euro(o.price)}</b></label>`).join(''):'';

  const removable=isBurger?(currentProduct.remove||[]):[];
  removeGroup.style.display=removable.length?'block':'none';
  document.querySelector('#removeOptions').innerHTML=removable.map(name=>`<label><input type="checkbox" data-remove="${name}"> <span>${name}</span></label>`).join('');
}

function openProduct(id){
  currentProduct=products.find(p=>p.id===id);
  if(!currentProduct)return;
  qty=1;
  const m=document.querySelector('#productModal');
  document.querySelector('#modalProductImage').style.backgroundImage=`url('${currentProduct.img}')`;
  document.querySelector('#modalProductCategory').textContent=currentProduct.cat;
  document.querySelector('#modalProductName').textContent=currentProduct.name;
  document.querySelector('#modalProductDescription').textContent=currentProduct.desc||'Aus der aktuellen BAT\'S-BURGER-Speisekarte.';
  document.querySelector('#modalProductPrice').textContent=euro(currentProduct.price);
  renderProductOptions();
  updateModalPrice();
  m.classList.add('open');m.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';
}
function closeProduct(){const m=document.querySelector('#productModal');m.classList.remove('open');m.setAttribute('aria-hidden','true');restoreScroll();}
function currentPortion(){
  const selected=document.querySelector('input[name="burgerPortion"]:checked');
  return selected?{name:selected.dataset.portion,price:Number(selected.value)}:{name:'',price:0};
}
function updateModalPrice(){
  if(!currentProduct)return;
  let extra=0;
  document.querySelectorAll('#productModal input[data-extra]:checked').forEach(i=>extra+=Number(i.value));
  const portion=currentPortion();
  document.querySelector('#qtyValue').textContent=qty;
  document.querySelector('#addToCartBtn span').textContent=euro((currentProduct.price+extra+portion.price)*qty);
}
function addCartItem(product,{qty=1,extras=[],removed=[],portion='',unit=product.price,context=''}={}){
  cart.push({key:Date.now()+Math.random(),product,qty,extras,removed,portion,unit,context});
}
function addCurrent(){
  const chosenExtras=[];let extraPrice=0;
  document.querySelectorAll('#productModal input[data-extra]:checked').forEach(i=>{chosenExtras.push(i.dataset.extra);extraPrice+=Number(i.value);});
  const removed=[];document.querySelectorAll('#productModal input[data-remove]:checked').forEach(i=>removed.push(i.dataset.remove));
  const portion=currentPortion();
  addCartItem(currentProduct,{qty,extras:chosenExtras,removed,portion:portion.name,unit:currentProduct.price+extraPrice+portion.price});
  const shouldUpsell=currentProduct.type==='burger';
  closeProduct();updateCart();
  if(shouldUpsell)openUpsell(currentProduct); else showToast('Zum Warenkorb hinzugefügt');
}

function renderUpsellChoice(p,type){
  return `<button class="upsell-choice" data-upsell-type="${type}" data-upsell-id="${p.id}"><span class="upsell-thumb" style="background-image:url('${p.img}')"></span><span class="upsell-choice-copy"><strong>${p.name}</strong><small>${p.desc||p.cat}</small><b>${euro(p.price)}</b></span><i>✓</i></button>`;
}
function openUpsell(burger){
  selectedSideId=null;selectedDrinkId=null;
  document.querySelector('#upsellTitle').textContent=`${burger.name.toUpperCase()} + ?`;
  const sides=products.filter(p=>p.type==='side');
  const drinks=products.filter(p=>p.type==='drink');
  document.querySelector('#upsellSides').innerHTML=`<button class="upsell-choice none selected" data-upsell-type="side" data-upsell-id=""><span class="upsell-none">—</span><span class="upsell-choice-copy"><strong>Keine Beilage</strong><small>Nur den Burger</small><b>0,00 €</b></span><i>✓</i></button>`+sides.map(p=>renderUpsellChoice(p,'side')).join('');
  document.querySelector('#upsellDrinks').innerHTML=`<button class="upsell-choice none selected" data-upsell-type="drink" data-upsell-id=""><span class="upsell-none">—</span><span class="upsell-choice-copy"><strong>Kein Getränk</strong><small>Ohne Getränk weiter</small><b>0,00 €</b></span><i>✓</i></button>`+drinks.map(p=>renderUpsellChoice(p,'drink')).join('');
  updateUpsellTotal();
  const m=document.querySelector('#upsellModal');m.classList.add('open');m.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';
}
function closeUpsell(){const m=document.querySelector('#upsellModal');m.classList.remove('open');m.setAttribute('aria-hidden','true');restoreScroll();}
function selectUpsell(type,id,button){
  const val=id?Number(id):null;
  if(type==='side')selectedSideId=val; else selectedDrinkId=val;
  document.querySelectorAll(`[data-upsell-type="${type}"]`).forEach(b=>b.classList.remove('selected'));
  button.classList.add('selected');
  updateUpsellTotal();
}
function updateUpsellTotal(){
  const side=products.find(p=>p.id===selectedSideId);const drink=products.find(p=>p.id===selectedDrinkId);
  const sum=(side?.price||0)+(drink?.price||0);
  document.querySelector('#upsellSidePrice').textContent=side?`${side.name} · ${euro(side.price)}`:'Keine gewählt';
  document.querySelector('#upsellDrinkPrice').textContent=drink?`${drink.name} · ${euro(drink.price)}`:'Keines gewählt';
  document.querySelector('#upsellTotal').textContent=euro(sum);
}
function addUpsellSelection(){
  const side=products.find(p=>p.id===selectedSideId);const drink=products.find(p=>p.id===selectedDrinkId);
  if(side)addCartItem(side,{context:'Als Beilage'});
  if(drink)addCartItem(drink,{context:'Als Getränk'});
  closeUpsell();updateCart();openCart();
}
function skipUpsell(){closeUpsell();openCart();}

function cartDetailText(item){
  const parts=[];
  if(item.context)parts.push(item.context);
  if(item.portion)parts.push(item.portion);
  if(item.extras?.length)parts.push(`Extras: ${item.extras.join(', ')}`);
  if(item.removed?.length)parts.push(`Ohne: ${item.removed.join(', ')}`);
  return parts.length?parts.join(' · '):item.product.cat;
}
function updateCart(){
  const count=cart.reduce((a,x)=>a+x.qty,0);const sub=subtotal();const fee=deliveryFee();
  document.querySelector('#cartCount').textContent=count;
  document.querySelector('#floatingCartText').textContent=count?`${euro(orderTotal())} · Warenkorb`:'Warenkorb';
  const items=document.querySelector('#cartItems');
  items.innerHTML=cart.map(x=>`<div class="cart-item" data-cart-key="${x.key}"><div class="cart-item-photo" style="background-image:url('${x.product.img}')"></div><div class="cart-item-copy"><h4>${x.product.name}</h4><small>${cartDetailText(x)}</small><div class="cart-qty"><button data-cart-action="minus" aria-label="Menge verringern">−</button><strong>${x.qty}</strong><button data-cart-action="plus" aria-label="Menge erhöhen">+</button><button class="cart-remove" data-cart-action="remove">Entfernen</button></div></div><strong>${euro(x.qty*x.unit)}</strong></div>`).join('');
  document.querySelector('#cartEmpty').style.display=cart.length?'none':'block';
  document.querySelector('#cartSummary').style.display=cart.length?'block':'none';
  document.querySelector('#cartSubtotal').textContent=euro(sub);
  document.querySelector('#cartDeliveryFee').textContent=euro(fee);
  document.querySelector('#cartTotal').textContent=euro(sub+fee);
  const zone=currentZone();const min=minimumForOrder();const rem=Math.max(0,min-sub);
  let msg='Für Abholung gibt es in der Demo keinen Mindestbestellwert.';
  if(orderMethod==='Lieferung' && !zone)msg='PLZ im Bestellschritt prüfen – sie ist nicht im aktuellen Demo-Liefergebiet hinterlegt.';
  else if(orderMethod==='Lieferung')msg=rem?`Noch ${euro(rem)} bis zum Mindestbestellwert (${euro(min)}).`:`Mindestbestellwert ${euro(min)} erreicht ✓`;
  document.querySelector('#minimumMessage').textContent=msg;
  updateCheckoutSummary();
}
function changeCartItem(key,action){
  const item=cart.find(x=>String(x.key)===String(key));if(!item)return;
  if(action==='plus')item.qty+=1;
  if(action==='minus')item.qty=Math.max(1,item.qty-1);
  if(action==='remove')cart=cart.filter(x=>String(x.key)!==String(key));
  updateCart();
}
function openCart(){document.querySelector('#cartDrawer').classList.add('open');document.querySelector('#cartBackdrop').classList.add('open');document.querySelector('#cartDrawer').setAttribute('aria-hidden','false');document.body.style.overflow='hidden';}
function closeCart(){document.querySelector('#cartDrawer').classList.remove('open');document.querySelector('#cartBackdrop').classList.remove('open');document.querySelector('#cartDrawer').setAttribute('aria-hidden','true');restoreScroll();}

function setOrderStep(step){
  orderStep=step;
  document.querySelectorAll('.checkout-step').forEach((el,i)=>el.classList.toggle('active',i===step-1));
  [1,2,3].forEach(n=>document.querySelector(`#progress${n}`).classList.toggle('active',n<=step));
  if(step===2)updateCheckoutSummary();
}
function openOrder(){
  closeMobileNav();setOrderStep(1);
  document.querySelector('#orderModal').classList.add('open');document.querySelector('#orderModal').setAttribute('aria-hidden','false');document.body.style.overflow='hidden';
  updateOrderMethodUI();updateStep1Basket();
}
function closeOrder(){document.querySelector('#orderModal').classList.remove('open');document.querySelector('#orderModal').setAttribute('aria-hidden','true');restoreScroll();}
function restoreScroll(){if(!document.querySelector('.modal-backdrop.open')&&!document.querySelector('.cart-drawer.open'))document.body.style.overflow='';}
function updateStep1Basket(){
  const el=document.querySelector('#step1Basket');
  if(!cart.length){el.innerHTML='<span>🛒</span><div><strong>Dein Warenkorb ist noch leer.</strong><small>Nach der Auswahl geht es direkt zur Speisekarte.</small></div>';return;}
  el.innerHTML=`<span>🛒</span><div><strong>${cart.reduce((a,x)=>a+x.qty,0)} Artikel · ${euro(orderTotal())}</strong><small>Warenkorb ist bereit für den Checkout.</small></div>`;
}
function updateDeliveryResult(){
  const postal=currentPostal();const zone=currentZone();const box=document.querySelector('#deliveryResult');
  if(orderMethod!=='Lieferung'){box.style.display='none';return;}
  box.style.display='flex';
  if(postal.length<5){box.classList.remove('delivery-error');box.querySelector('span').textContent='…';box.querySelector('strong').textContent='PLZ eingeben';box.querySelector('small').textContent='Dann erscheinen Mindestbestellwert und Liefergebühr.';return;}
  if(!zone){box.classList.add('delivery-error');box.querySelector('span').textContent='!';box.querySelector('strong').textContent=`${postal} ist in der Demo nicht hinterlegt`;box.querySelector('small').textContent='In einer echten Version könnte Abholung angeboten oder das Liefergebiet erweitert werden.';return;}
  box.classList.remove('delivery-error');box.querySelector('span').textContent='✓';box.querySelector('strong').textContent=`Lieferung nach ${postal} möglich`;box.querySelector('small').textContent=`Mindestbestellwert ${euro(zone.minimum)} · Liefergebühr ${euro(zone.fee)}`;
}
function updateOrderMethodUI(){
  document.querySelectorAll('.order-option').forEach(b=>b.classList.toggle('selected',b.dataset.method===orderMethod));
  const delivery=orderMethod==='Lieferung';
  document.querySelector('#postalLabel').style.display=delivery?'block':'none';
  document.querySelector('#deliveryAddressFields').style.display=delivery?'block':'none';
  document.querySelector('#checkoutMethodText').textContent=`${orderMethod} · Gastbestellung`;
  document.querySelector('#checkoutPostal').value=currentPostal()||'71332';
  updateDeliveryResult();updateCart();updateCheckoutSummary();
}
function updateCheckoutSummary(){
  const list=document.querySelector('#checkoutItems');if(!list)return;
  list.innerHTML=cart.length?cart.map(item=>`<div class="checkout-summary-item"><div><strong>${item.qty}× ${item.product.name}</strong><small>${cartDetailText(item)}</small></div><b>${euro(item.qty*item.unit)}</b></div>`).join(''):'<div class="checkout-empty-mini">Noch keine Produkte ausgewählt.</div>';
  document.querySelector('#checkoutSubtotal').textContent=euro(subtotal());
  document.querySelector('#checkoutDelivery').textContent=euro(deliveryFee());
  document.querySelector('#checkoutTotal').textContent=euro(orderTotal());
  document.querySelector('#placeOrderTotal').textContent=euro(orderTotal());
  const warning=document.querySelector('#checkoutWarning');
  const zone=currentZone();const min=minimumForOrder();
  if(!cart.length){warning.textContent='Lege zuerst mindestens ein Produkt in den Warenkorb.';warning.classList.add('show');}
  else if(orderMethod==='Lieferung' && !zone){warning.textContent='Die eingegebene PLZ liegt nicht im aktuellen Demo-Liefergebiet.';warning.classList.add('show');}
  else if(orderMethod==='Lieferung' && subtotal()<min){warning.textContent=`Für diese PLZ fehlen noch ${euro(min-subtotal())} bis zum Mindestbestellwert von ${euro(min)}.`;warning.classList.add('show');}
  else{warning.textContent='';warning.classList.remove('show');}
}
function continueOrder(){
  if(!cart.length){closeOrder();document.querySelector('#menu').scrollIntoView({behavior:'smooth'});showToast('Wähle jetzt deinen Burger');return;}
  if(orderMethod==='Lieferung' && !currentZone()){updateDeliveryResult();showToast('Bitte gültige Liefer-PLZ wählen');return;}
  setOrderStep(2);
}
function selectPayment(method){paymentMethod=method;document.querySelectorAll('.payment-option').forEach(b=>b.classList.toggle('selected',b.dataset.payment===method));}
function validateCheckout(){
  if(!cart.length)return 'Dein Warenkorb ist leer.';
  if(orderMethod==='Lieferung' && !currentZone())return 'Die Liefer-PLZ ist in der Demo nicht freigeschaltet.';
  if(orderMethod==='Lieferung' && subtotal()<minimumForOrder())return `Für Lieferung fehlen noch ${euro(minimumForOrder()-subtotal())} bis zum Mindestbestellwert.`;
  if(!document.querySelector('#customerName').value.trim())return 'Bitte gib für die Demo einen Namen ein.';
  if(!document.querySelector('#customerPhone').value.trim())return 'Bitte gib für die Demo eine Telefonnummer ein.';
  if(orderMethod==='Lieferung' && (!document.querySelector('#streetInput').value.trim()||!document.querySelector('#houseInput').value.trim()))return 'Bitte ergänze Straße und Hausnummer.';
  return '';
}
function placeDemoOrder(){
  const error=validateCheckout();
  if(error){const warning=document.querySelector('#checkoutWarning');warning.textContent=error;warning.classList.add('show');warning.scrollIntoView({behavior:'smooth',block:'center'});return;}
  const number=`#BATS-${Math.floor(1000+Math.random()*9000)}`;
  document.querySelector('#orderNumber').textContent=number;
  document.querySelector('#confirmMethod').textContent=orderMethod;
  document.querySelector('#confirmTime').textContent=orderMethod==='Lieferung'?'35–50 Min.':'15–25 Min.';
  document.querySelector('#confirmTotal').textContent=euro(orderTotal());
  setOrderStep(3);
}
function finishDemoOrder(){
  cart=[];updateCart();closeOrder();showToast('Demo-Bestellung abgeschlossen ✓');
  document.querySelectorAll('#orderStep2 input, #orderStep2 textarea').forEach(el=>{if(el.id==='checkoutPostal')el.value='71332';else if(el.id==='cityInput')el.value='Waiblingen';else el.value='';});
  document.querySelector('#postalInput').value='71332';orderMethod='Lieferung';updateOrderMethodUI();
}
function showToast(text='Zum Warenkorb hinzugefügt'){const t=document.querySelector('#toast');t.textContent=text;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1900);}

function syncPostal(value,source){
  const v=value.replace(/\D/g,'').slice(0,5);
  if(source!=='step1')document.querySelector('#postalInput').value=v;
  if(source!=='checkout')document.querySelector('#checkoutPostal').value=v;
  updateDeliveryResult();updateCart();updateCheckoutSummary();
  return v;
}
function toggleMobileNav(){const nav=document.querySelector('#mobileNav');const open=nav.classList.toggle('open');document.querySelector('#menuToggle').setAttribute('aria-expanded',String(open));document.querySelector('#menuToggle').textContent=open?'×':'☰';}
function closeMobileNav(){const nav=document.querySelector('#mobileNav');nav.classList.remove('open');document.querySelector('#menuToggle').setAttribute('aria-expanded','false');document.querySelector('#menuToggle').textContent='☰';}

renderBestsellers();renderTabs();renderMenu();updateCart();

document.body.addEventListener('click',e=>{
  const productButton=e.target.closest('[data-product]');if(productButton){openProduct(Number(productButton.dataset.product));return;}
  const cartAction=e.target.closest('[data-cart-action]');if(cartAction){const row=cartAction.closest('[data-cart-key]');changeCartItem(row.dataset.cartKey,cartAction.dataset.cartAction);return;}
  const upsell=e.target.closest('[data-upsell-type]');if(upsell){selectUpsell(upsell.dataset.upsellType,upsell.dataset.upsellId,upsell);return;}
  if(e.target.closest('[data-open-order]'))openOrder();
});

document.querySelector('#categoryTabs').addEventListener('click',e=>{const b=e.target.closest('[data-category]');if(!b)return;document.querySelectorAll('.category-tab').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderMenu(b.dataset.category);});
document.querySelector('[data-close-product]').onclick=closeProduct;
document.querySelector('#productModal').addEventListener('click',e=>{if(e.target.id==='productModal')closeProduct();});
document.querySelector('#qtyMinus').onclick=()=>{qty=Math.max(1,qty-1);updateModalPrice();};
document.querySelector('#qtyPlus').onclick=()=>{qty++;updateModalPrice();};
document.querySelector('#productModal').addEventListener('change',updateModalPrice);
document.querySelector('#addToCartBtn').onclick=addCurrent;

document.querySelector('[data-close-upsell]').onclick=skipUpsell;
document.querySelector('#upsellModal').addEventListener('click',e=>{if(e.target.id==='upsellModal')skipUpsell();});
document.querySelector('#skipUpsell').onclick=skipUpsell;
document.querySelector('#addUpsell').onclick=addUpsellSelection;

document.querySelector('#floatingCart').onclick=openCart;
document.querySelector('#closeCart').onclick=closeCart;
document.querySelector('#cartBackdrop').onclick=closeCart;
document.querySelector('#cartCheckout').onclick=()=>{closeCart();openOrder();};
document.querySelector('[data-close-order]').onclick=closeOrder;
document.querySelector('#orderModal').addEventListener('click',e=>{if(e.target.id==='orderModal')closeOrder();});
document.querySelectorAll('.order-option').forEach(b=>b.onclick=()=>{orderMethod=b.dataset.method;updateOrderMethodUI();});
document.querySelector('#postalInput').addEventListener('input',e=>{e.target.value=syncPostal(e.target.value,'step1');});
document.querySelector('#checkoutPostal').addEventListener('input',e=>{e.target.value=syncPostal(e.target.value,'checkout');});
document.querySelector('#continueOrder').onclick=continueOrder;
document.querySelector('#backToMethod').onclick=()=>setOrderStep(1);
document.querySelector('#paymentOptions').addEventListener('click',e=>{const b=e.target.closest('[data-payment]');if(b)selectPayment(b.dataset.payment);});
document.querySelector('#placeDemoOrder').onclick=placeDemoOrder;
document.querySelector('#finishDemoOrder').onclick=finishDemoOrder;
document.querySelector('#menuToggle').onclick=toggleMobileNav;
document.querySelectorAll('#mobileNav a').forEach(a=>a.addEventListener('click',closeMobileNav));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeProduct();closeUpsell();closeCart();closeOrder();closeMobileNav();}});

const io=new IntersectionObserver(entries=>entries.forEach(x=>{if(x.isIntersecting){x.target.classList.add('visible');io.unobserve(x.target);}}),{threshold:.08});
function observeReveals(){document.querySelectorAll('.reveal:not(.visible)').forEach(x=>io.observe(x));}
observeReveals();
