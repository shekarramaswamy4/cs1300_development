(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{129:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(12),i=n.n(o),l=(n(77),n(14)),c=n(15),s=n(18),m=n(16),d=n(19),u=(n(38),[{name:"Adidas NMD",brand:"Adidas",color:"White",price:130,img:"https://images-na.ssl-images-amazon.com/images/I/51dO1bf1YNL._UY500_.jpg"},{name:"Nike Kyrie 1",brand:"Nike",color:"Black",price:110,img:"https://media.kohlsimg.com/is/image/kohls/2794522_Black_White?wid=500&hei=500&op_sharpen=1"},{name:"Nike Air Force 1",brand:"Nike",color:"White",price:85,img:"https://images.footlocker.com/pi/O1070101/zoom/O1070101.jpeg"},{name:"Nike Free Trainer",brand:"Nike",color:"Red",price:70,img:"https://images.footlocker.com/pi/98053601/zoom/98053601.jpeg"},{name:"Nike Air Hurache",brand:"Nike",color:"White",price:100,img:"https://images-na.ssl-images-amazon.com/images/I/71gghRw0iRL._UY500_.jpg"},{name:"Nike Kobe AD",brand:"Nike",color:"White",price:248,img:"https://images.footlocker.com/pi/52425110/zoom/nike-kobe-ad-mens"},{name:"Adidas Shadow Knit",brand:"Adidas",color:"Black",price:115,img:"https://s-media-cache-ak0.pinimg.com/originals/e7/4b/40/e74b40fb20af8a5809e93121bf2dd8d2.png"},{name:"Adidas Swift Run",brand:"Adidas",color:"Red",price:84,img:"https://images.eastbay.com/pi/CG4117/zoom/adidas-originals-swift-run-mens"},{name:"Adidas Adizero Varner",brand:"Adidas",color:"Red",price:150,img:"https://images.eastbay.com/pi/BA8023/zoom/adidas-adizero-varner-2-mens"},{name:"Nike x Supreme X NBA",brand:"Nike",color:"Black",price:1111,img:"https://cdn.lookastic.com/black-print-leather-high-top-sneakers/air-force-1-mid-07-nike-x-sneakers-original-7849867.jpg"},{name:"Puma Tsugi Shinsei",brand:"Puma",color:"Green",price:100,img:"https://images.footlocker.com/pi/36375904/zoom/36375904.jpeg"},{name:"Puma Smash v2",brand:"Puma",color:"Red",price:849,img:"https://www.side-step.co.za/wp-content/uploads/2018/03/Puma-Indigo-Smash-V2-Red-PMA1199R-v2.jpg"},{name:"Puma Muse Maia",brand:"Puma",color:"Black",price:90,img:"https://images.footlocker.com/is/image/EBFL2/36735501_a1?hei=500&wid=500"}]),h=(n(80),n(130)),p=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.data;return r.a.createElement("div",{className:"card-wrapper"},r.a.createElement(h.a,{src:e.img,className:"image",style:"hidden"===e.name?{visibility:"hidden"}:{}},r.a.createElement("a",{href:"https://www.google.com"},r.a.createElement("h3",null,e.name)),r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement("h5",null,e.color," \u2022 $",e.price),r.a.createElement("p",null),r.a.createElement("p",null)))}}]),t}(a.Component),g=n(131),f=n(136),b=n(132),k=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"renderList",value:function(){var e={name:"hidden",brand:"X",color:"X",price:0,img:"https://images.six02.com/is/image//EBFL2/G27933_a1?hei=500&wid=500"},t=this.props.items,n=[];return t.forEach(function(e){n.length&&3!==n[n.length-1].length||n.push([]),n[n.length-1].push(e)}),1===n[n.length-1].length&&n[n.length-1].push(e),2===n[n.length-1].length&&n[n.length-1].push(e),n.map(function(e){return r.a.createElement(g.a,{key:Math.random()},e.map(function(e){return r.a.createElement(p,{key:e.name,data:e})}))})}},{key:"render",value:function(){return 0===this.props.items.length?r.a.createElement(f.a,{bsStyle:"danger"},r.a.createElement("strong",null,"Sorry!")," We don't have any shoes that fit your search."):r.a.createElement("div",null,r.a.createElement(b.a,null,this.renderList()))}}]),t}(a.Component),E=n(135),w=n(133),v=n(62),S=(n(107),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).dropDownSelect=function(e,t){"brand"===t?n.setState({brand:e}):"color"===t?n.setState({color:e}):"sorted"===t&&n.setState({sorted:e})},n.handleBrandFilter=function(e){return"All Brands"===n.state.brand||n.state.brand===e.brand},n.handleColorFilter=function(e){return"All Colors"===n.state.color||n.state.color===e.color},n.filterItem=function(e){return n.handleBrandFilter(e)&&n.handleColorFilter(e)},n.sortItems=function(e){return"No sort"===n.state.sorted?e:(e.sort(function(e,t){return e.price-t.price}),"Price: $$-$"===n.state.sorted&&e.reverse(),e)},n.reset=function(){n.setState({brand:"All Brands",color:"All Colors",sorted:"No sort"})},n.shuffle=function(e){var t,n,a;for(a=e.length-1;a>0;a--)t=Math.floor(Math.random()*(a+1)),n=e[a],e[a]=e[t],e[t]=n;return e},n.state={brand:"All Brands",color:"All Colors",sorted:"No sort"},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t="All Brands"===this.state.brand&&"All Colors"===this.state.color&&"No sort"===this.state.sorted;return r.a.createElement("div",{className:"filter-list"},r.a.createElement("div",{className:"filters"},r.a.createElement("div",null,r.a.createElement("h3",null,"Filters:"),r.a.createElement(E.a,{id:"brandDropdown",title:this.state.brand,noCaret:!0},r.a.createElement(w.a,{eventKey:"All Brands",onSelect:function(){return e.dropDownSelect("All Brands","brand")}},"All"),r.a.createElement(w.a,{eventKey:"Nike",onSelect:function(){return e.dropDownSelect("Nike","brand")}},"Nike"),r.a.createElement(w.a,{eventKey:"Adidas",onSelect:function(){return e.dropDownSelect("Adidas","brand")}},"Adidas"),r.a.createElement(w.a,{eventKey:"Puma",onSelect:function(){return e.dropDownSelect("Puma","brand")}},"Puma")),r.a.createElement(E.a,{id:"colorDropdown",title:this.state.color,noCaret:!0},r.a.createElement(w.a,{eventKey:"All Colors",onSelect:function(){return e.dropDownSelect("All Colors","color")}},"All"),r.a.createElement(w.a,{eventKey:"White",onSelect:function(){return e.dropDownSelect("White","color")}},"White"),r.a.createElement(w.a,{eventKey:"Black",onSelect:function(){return e.dropDownSelect("Black","color")}},"Black"),r.a.createElement(w.a,{eventKey:"Red",onSelect:function(){return e.dropDownSelect("Red","color")}},"Red"),r.a.createElement(w.a,{eventKey:"Green",onSelect:function(){return e.dropDownSelect("Green","color")}},"Green")),r.a.createElement(E.a,{id:"sortBy",title:this.state.sorted,noCaret:!0},r.a.createElement(w.a,{eventKey:"No sort",onSelect:function(){return e.dropDownSelect("No sort","sorted")}},"No sort"),r.a.createElement(w.a,{eventKey:"Price: $-$$",onSelect:function(){return e.dropDownSelect("Price: $-$$","sorted")}},"Price: $-$$"),r.a.createElement(w.a,{eventKey:"Price: $$-$",onSelect:function(){return e.dropDownSelect("Price: $$-$","sorted")}},"Price: $$-$"))),r.a.createElement("div",null,t?r.a.createElement(v.a,{bsStyle:"primary",disabled:!0},"Reset"):r.a.createElement(v.a,{bsStyle:"primary",onClick:function(){return e.reset()}},"Reset"))),t?r.a.createElement(k,{items:this.shuffle(this.props.items)}):r.a.createElement(k,{items:this.sortItems(this.props.items.filter(this.filterItem))}))}}]),t}(a.Component)),y=n(134),A=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(y.a,null,"SneakerCon",r.a.createElement("p",null),r.a.createElement("small",null,"the world's coolest new shoes!")),r.a.createElement(S,{items:u}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},38:function(e,t,n){},72:function(e,t,n){e.exports=n(129)},77:function(e,t,n){},80:function(e,t,n){}},[[72,2,1]]]);
//# sourceMappingURL=main.eced8608.chunk.js.map