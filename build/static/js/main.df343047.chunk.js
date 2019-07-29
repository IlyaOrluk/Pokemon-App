(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(e,t,n){e.exports=n(82)},47:function(e,t,n){},49:function(e,t,n){},51:function(e,t,n){},53:function(e,t,n){},58:function(e,t,n){},60:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(32),i=n.n(o),c=n(7),l=n(85),u=n(87),s=n(86),m=(n(47),n(84)),p=Object(c.b)()(function(){return r.a.createElement("header",{className:"shop-header row"},r.a.createElement(m.a,{className:"logo",to:"/#"},"PokeAPI"),r.a.createElement(m.a,{className:"logo",to:"/pokemons/1/"},"Browse Poke"))}),d=function(){return r.a.createElement(r.a.Fragment,null)},f=n(6),E=n(8),g=n(10),h=n(9),C=n(11),v=n(37),S=r.a.createContext(),b=S.Provider,k=S.Consumer,y=function(){return function(e){return function(t){return r.a.createElement(k,null,function(n){return r.a.createElement(e,Object.assign({},t,{storeService:n}))})}}},T=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}},_=(n(49),function(){return r.a.createElement("div",null,"404 not found!")}),I=(n(51),function(){return r.a.createElement("div",null,"loading...")}),j=(n(53),function(e){var t=e.item,n=e.field,a=e.label,o=e.itemTag;return r.a.createElement(o,null,"".concat(a," ").concat(t[n]))}),O=function(e){var t=e.item,n=(e.itemId,e.onAddedToCart,Object(v.a)(e,["item","itemId","onAddedToCart"])),a=t.name;return console.log(t),r.a.createElement("div",{className:"preview-item"},r.a.createElement("img",{src:t.sprites.front_default,alt:"game",className:"item-details-img"}),r.a.createElement("div",{className:"item-details"},r.a.createElement("h4",null,a),r.a.Children.map(n.children,function(e){return r.a.cloneElement(e,{item:t})})))},w=function(e){function t(){return Object(f.a)(this,t),Object(g.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchItem(this.props.pokemon)}},{key:"render",value:function(){console.log();var e=this.props,t=e.item,n=e.loading,a=e.error;return n?r.a.createElement(I,null):a?r.a.createElement(_,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{item:t},r.a.createElement(j,{itemTag:"span",label:"Weight: ",field:"weight"}),r.a.createElement(j,{itemTag:"span",label:"Height: ",field:"height"})))}}]),t}(r.a.Component),L=T(y(),Object(c.b)(function(e){var t=e.itemDetails;return{item:t.item,loading:t.loading,error:t.error}},function(e,t){var n=t.storeService;return{fetchItem:function(t){return e((a=n,function(e){return function(t){t({type:"FETCH_ITEM_REQUEST"}),a.getPokemon(e).then(function(e){return t({type:"FETCH_ITEM_SUCCESS",payload:e})}).catch(function(e){return t({type:"FETCH_ITEM_FAILURE",payload:e})})}})(t));var a}}}))(w),R=(n(55),n(58),function(e){var t=e.items,n=e.pageRouterSelected,a=e.listCount;return r.a.createElement("div",{className:"item-list"},t.map(function(e,t){var o=t+1+n*a;return r.a.createElement("div",{key:t,className:"show-item"},r.a.createElement("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(o,".png"),alt:"pokemon"}),r.a.createElement(m.a,{to:"/pokemon/".concat(e.name)},e.name))}))}),F=function(e){function t(){var e,n;Object(f.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(g.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).handlePageClick=function(e){var t=n.props,a=(t.pageRouterSelected,t.listCount);n.props.fetchItems(e*a,a)},n}return Object(C.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.pageRouterSelected,n=e.listCount;this.props.fetchItems(t*n,n)}},{key:"render",value:function(){var e=this,t=this.props,n=t.items,a=t.loading,o=t.error,i=(t.pageSelected,t.listCount),c=(t.itemsCount,t.pageRouterSelected);return a?r.a.createElement(I,null):o?r.a.createElement(_,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(R,{listCount:i,pageRouterSelected:c,items:n}),r.a.createElement(m.a,{className:"logo",onClick:function(){return e.handlePageClick(c-1)},to:"/pokemons/".concat(c,"/")},"Prev"),r.a.createElement(m.a,{className:"logo",onClick:function(){return e.handlePageClick(c+1)},to:"/pokemons/".concat(c+2,"/")},"Next"))}}]),t}(a.Component),P=T(y(),Object(c.b)(function(e){var t=e.itemList;return{items:t.items,pageSelected:t.pageSelected,listCount:t.listCount,itemsCount:t.itemsCount,loading:t.loading,error:t.error}},function(e,t){var n=t.storeService;return{fetchItems:function(t,a){return e((r=n,function(e,t){return function(n){n({type:"FETCH_ITEMS_REQUEST"}),r.getPokemonList(e,t).then(function(e){return n({type:"FETCH_ITEMS_SUCCESS",payload:e.results})}).catch(function(e){return n({type:"FETCH_ITEMS_FAILURE",payload:e})})}})(t,a));var r},handlePageNumber:function(t){return e(function(e){return{type:"PAGE_NUMBER",payload:e}}(t))}}}))(F),M=(n(60),function(){return r.a.createElement("main",{role:"main",className:"container"},r.a.createElement(p,null),r.a.createElement(u.a,null,r.a.createElement(s.a,{path:"/",component:d,exact:!0}),r.a.createElement(s.a,{path:"/pokemon/:name",render:function(e){var t=e.match.params.name;return r.a.createElement(L,{pokemon:t})},exact:!0}),r.a.createElement(s.a,{path:"/pokemons/:id",render:function(e){var t=e.match.params.id;return r.a.createElement(P,{pageRouterSelected:Number(t-1)})},exact:!0})))}),N=function(e){function t(){var e,n;Object(f.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(g.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={hasError:!1},n}return Object(C.a)(t,e),Object(E.a)(t,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement(_,null):this.props.children}}]),t}(a.Component),U=n(13),A=n.n(U),H=n(20),x=n(35),B=n.n(x),D=n(12),Q=n(36),G=function(e,t){if(void 0===e)return{items:[],pageSelected:0,listCount:30,itemsCount:964,loading:!0,error:null};switch(t.type){case"FETCH_ITEMS_REQUEST":return{items:[],pageSelected:e.itemList.pageSelected,listCount:e.itemList.listCount,itemsCount:e.itemList.itemsCount,loading:!0,error:null};case"FETCH_ITEMS_SUCCESS":return{items:t.payload,pageSelected:e.itemList.pageSelected,listCount:e.itemList.listCount,itemsCount:e.itemList.itemsCount,loading:!1,error:null};case"FETCH_ITEMS_FAILURE":return{items:[],pageSelected:e.itemList.pageSelected,listCount:e.itemList.listCount,itemsCount:e.itemList.itemsCount,loading:!1,error:t.payload};case"PAGE_NUMBER":return{items:e.itemList.items,pageSelected:t.payload,listCount:e.itemList.listCount,itemsCount:e.itemList.itemsCount,loading:!1,error:null};default:return e.itemList}},J=function(e,t){if(void 0===e)return{item:[],loading:!0,error:null};switch(t.type){case"FETCH_ITEM_REQUEST":return{item:[],loading:!0,error:null};case"FETCH_ITEM_SUCCESS":return{item:t.payload,loading:!1,error:null};case"FETCH_ITEM_FAILURE":return{item:[],loading:!1,error:t.payload};default:return e.itemDetails}},W=function(e,t){return{itemList:G(e,t),itemDetails:J(e,t)}},q=Object(D.c)(W,Object(D.a)(Q.a)),z=new function e(){var t=this;Object(f.a)(this,e),this._apiBase="https://pokeapi.co/api/v2",this.getResource=function(e){return B.a.get("".concat(t._apiBase).concat(e))},this.getPokemonList=function(){var e=Object(H.a)(A.a.mark(function e(n,a){var r;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/pokemon/?offset=".concat(n,"&limit=").concat(a));case 2:return r=e.sent,console.log(r),e.abrupt("return",r.data);case 5:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),this.getPokemon=function(){var e=Object(H.a)(A.a.mark(function e(n){var a;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/pokemon/".concat(n,"/"));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()};i.a.render(r.a.createElement(c.a,{store:q},r.a.createElement(N,null,r.a.createElement(b,{value:z},r.a.createElement(l.a,null,r.a.createElement(M,null))))),document.getElementById("app"))}},[[38,2,1]]]);
//# sourceMappingURL=main.df343047.chunk.js.map