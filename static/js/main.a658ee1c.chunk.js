(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,n){e.exports=n.p+"static/media/logo.023d617a.png"},39:function(e,t,n){e.exports=n(87)},48:function(e,t,n){},50:function(e,t,n){},52:function(e,t,n){},54:function(e,t,n){},56:function(e,t,n){},58:function(e,t,n){},60:function(e,t,n){},62:function(e,t,n){},64:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(33),i=n.n(o),c=n(11),s=n(90),l=n(92),u=n(91),m=(n(48),n(89)),p=n(35),E=n.n(p),h=function(){return r.a.createElement("header",{className:"header row"},r.a.createElement(m.a,{to:"/#"},r.a.createElement("img",{className:"header-logo",src:E.a,alt:"logo"})))},f=(n(50),function(){return r.a.createElement("div",{className:"home-page"},r.a.createElement(m.a,{to:"/pokemons/1/"},r.a.createElement("div",{className:"browse-btn"},r.a.createElement("span",null,"Browse\xae"))))}),g=r.a.createContext(),d=g.Provider,v=g.Consumer,k=function(){return function(e){return function(t){return r.a.createElement(v,null,function(n){return r.a.createElement(e,Object.assign({},t,{storeService:n}))})}}},b=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}},C=n(3),S=n(6),y=n(8),_=n(7),I=n(9),O=n(38),T=(n(52),function(e){var t=e.item,n=Object(O.a)(e,["item"]),a=t.name,o=t.img,i=t.base_exp,c=o.front?r.a.createElement("img",{src:o.front,alt:a}):r.a.createElement("img",{src:"https://pokemon-visualguide.com/assets/img/pokeball.png",alt:a}),s=o.back?r.a.createElement("img",{src:o.back,alt:a}):null;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,a),r.a.createElement("div",{className:"preview-item"},r.a.createElement("div",{className:"item-details-images"},c,s,r.a.createElement("span",{className:"base-exp"},i,"xp")),r.a.createElement("div",{className:"item-details"},r.a.Children.map(n.children,function(e){return r.a.cloneElement(e,{item:t})}))),r.a.createElement("div",{className:"item-details-stats"},r.a.createElement("h5",null,"Base stats:"),t.stats.map(function(e,t){var n={width:"".concat(e.stat/10,"vh"),background:"rgba(".concat(e.stat,", 150, 50, 1)")};return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement("span",null,e.name,": ",e.stat),r.a.createElement("div",{className:"stats-bar"},r.a.createElement("div",{className:"stats-bar-progress",style:n})))})))}),P=(n(54),function(){return r.a.createElement("div",null,"404 not found!")}),N=(n(56),function(){return r.a.createElement("div",null,"loading...")}),j=function(e){var t=e.item,n=e.field,a=e.label,o=e.itemTag;return r.a.createElement(o,null,"".concat(a," ").concat(t[n]))},R=function(e){function t(){return Object(C.a)(this,t),Object(y.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(S.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchItem(this.props.fetchItemValue)}},{key:"componentDidUpdate",value:function(e){this.props.fetchItemValue!==e.fetchItemValue&&this.props.fetchItem(this.props.fetchItemValue)}},{key:"render",value:function(){var e=this.props,t=e.item,n=e.loading,a=e.error;return n?r.a.createElement(N,null):a?r.a.createElement(P,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(T,{item:t},r.a.createElement(j,{itemTag:"span",label:"Weight: ",field:"weight"}),r.a.createElement(j,{itemTag:"span",label:"Height: ",field:"height"}),r.a.createElement(j,{itemTag:"span",label:"Abilities: ",field:"abilities"}),r.a.createElement(j,{itemTag:"span",label:"Type(s): ",field:"types"})))}}]),t}(r.a.Component),F=(n(58),function(e){function t(){return Object(C.a)(this,t),Object(y.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(S.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchPokemonSpecies(this.props.speciesUrl)}},{key:"componentDidUpdate",value:function(e){this.props.speciesUrl!==e.speciesUrl&&this.props.fetchPokemonSpecies(this.props.speciesUrl)}},{key:"render",value:function(){var e=this.props.species,t=e.name,n=e.genus,a=e.color,o=e.growh_rate,i=e.habitat,c=e.shape,s=e.varieties;return this.props.loading?r.a.createElement(N,null):this.props.error?r.a.createElement("h1",null,"No information..."):r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Pokemon Species"),r.a.createElement("div",{className:"pokemon-species"},r.a.createElement("div",{className:"species-category"},r.a.createElement("h3",null,"Name:"),r.a.createElement("span",null,t)),r.a.createElement("div",{className:"species-category"},r.a.createElement("h3",null,"Genus:"),r.a.createElement("span",null,n)),r.a.createElement("div",{className:"species-category"},r.a.createElement("h3",null,"Color:"),r.a.createElement("span",null,a)),r.a.createElement("div",{className:"species-category"},r.a.createElement("h3",null,"Growh Rate:"),r.a.createElement("span",null,o)),r.a.createElement("div",{className:"species-category"},r.a.createElement("h3",null,"Habitat:"),r.a.createElement("span",null,i)),r.a.createElement("div",{className:"species-category"},r.a.createElement("h3",null,"Shape:"),r.a.createElement("span",null,c)),r.a.createElement("div",{className:"species-category"},r.a.createElement("h3",null,"Varieties:"),s.map(function(e,t){return r.a.createElement(m.a,{key:t,to:"/pokemon/".concat(e)},e)}))))}}]),t}(r.a.Component)),w=b(k(),Object(c.b)(function(e){var t=e.pokemonSpecies;return{species:t.species,loading:t.loading,error:t.error}},function(e,t){var n=t.storeService;return{fetchPokemonSpecies:function(t){return e((a=n,function(e){return function(t){t({type:"FETCH_SPECIES_REQUEST"}),a.getPokemonSpecies(e).then(function(e){return t({type:"FETCH_SPECIES_SUCCESS",payload:e})}).catch(function(e){return t({type:"FETCH_SPECIES_FAILURE",payload:e})})}})(t));var a}}}))(F),U=(n(60),function(e){function t(){return Object(C.a)(this,t),Object(y.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(S.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.url!==e.url&&this.props.fetchPokemonEvolutions(this.props.url)}},{key:"render",value:function(){if(this.props.loading)return r.a.createElement(N,null);if(this.props.error)return r.a.createElement("h1",null,"No information...");var e=this.props.evolutions.chain,t=e.levelOne,n=e.levelTwo;return console.log(this.props.evolutions.chain),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Pokemon Evolutions"),r.a.createElement("div",{className:"pokemon-evolutions"},r.a.createElement("div",{className:"pokemon-evo"},r.a.createElement("img",{src:t.img,alt:"firs-evo"}),r.a.createElement("span",null,t.name)),n.map(function(e){var t=e.levelTrhee?r.a.createElement("div",{className:"pokemon-evo"},r.a.createElement("i",{className:"fas fa-level-down-alt"}),r.a.createElement("img",{src:e.levelTrhee.img,alt:"firs-evo"}),r.a.createElement("span",null,e.levelTrhee.name)):null;return r.a.createElement("div",{className:"pokemon-evo"},r.a.createElement("i",{className:"fas fa-level-down-alt"}),r.a.createElement("img",{src:e.img,alt:"second-evo"}),r.a.createElement("span",null,e.name),t)})))}}]),t}(r.a.Component)),L=b(k(),Object(c.b)(function(e){var t=e.pokemonEvolutions;return{evolutions:t.evolutions,loading:t.loading,error:t.error}},function(e,t){var n=t.storeService;return{fetchPokemonEvolutions:function(t){return e((a=n,function(e){return function(t){t({type:"FETCH_EVOLUTIONS_REQUEST"}),a.getPokemonEvolutionChain(e).then(function(e){return t({type:"FETCH_EVOLUTIONS_SUCCESS",payload:e})}).catch(function(e){return t({type:"FETCH_EVOLUTIONS_FAILURE",payload:e})})}})(t));var a}}}))(U),x=b(k(),Object(c.b)(function(e){var t=e.pokemonDetails;return{item:t.item,loading:t.loading,error:t.error,species:e.pokemonSpecies.species}},function(e,t){var n=t.storeService;return{fetchItem:function(t){return e((a=n,function(e){return function(t){t({type:"FETCH_ITEM_REQUEST"}),a.getPokemon(e).then(function(e){return t({type:"FETCH_ITEM_SUCCESS",payload:e})}).catch(function(e){return t({type:"FETCH_ITEM_FAILURE",payload:e})})}})(t));var a}}}))(function(e){var t=e.item,n=e.loading,a=e.error,o=e.fetchItem,i=e.pokemon,c=e.species;return r.a.createElement("div",{className:"preview-item-box"},r.a.createElement(R,{fetchItemValue:i,fetchItem:o,error:a,loading:n,item:t}),r.a.createElement(w,{speciesUrl:t.species}),r.a.createElement(L,{url:c.evolution_chain}))}),H=(n(62),function(e){var t=e.items,n=e.pageRouterSelected,a=e.listCount,o=e.onError;return r.a.createElement("div",{className:"item-list"},t.map(function(e,t){var i=t+1+n*a;return r.a.createElement(m.a,{key:t,className:"show-item",to:"/pokemon/".concat(e.name)},r.a.createElement("img",{src:e.img,onError:function(){return o(t)},alt:i}),r.a.createElement("span",null,e.name))}))}),M=n(12),A="LEFT",D="RIGHT",V=function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=e,r=[];a<=t;)r.push(a),a+=n;return r},Q=function(e){function t(e){var n;Object(C.a)(this,t),(n=Object(y.a)(this,Object(_.a)(t).call(this,e))).gotoPage=function(e){var t=n.props.onPageChanged,a=void 0===t?function(e){return e}:t,r=Math.max(0,Math.min(e,n.totalPages)),o={currentPage:r,totalPages:n.totalPages,pageLimit:n.pageLimit,totalRecords:n.totalRecords};n.setState({currentPage:r},function(){return a(o)})},n.handleClick=function(e){n.gotoPage(e)},n.handleMoveLeft=function(){n.gotoPage(n.props.currentPage-2*n.pageNeighbours-1)},n.handleMoveRight=function(){n.gotoPage(n.props.currentPage+2*n.pageNeighbours+1)},n.fetchPageNumbers=function(){var e=n.totalPages,t=n.props.currentPage,a=n.pageNeighbours,r=2*n.pageNeighbours+3;if(e>r+2){var o=[],i=t-a,c=t+a,s=e-1,l=i>2?i:2,u=c<s?c:s,m=r-(o=V(l,u)).length-1,p=l>2,E=u<s,h=A,f=D;if(p&&!E){var g=V(l-m,l-1);o=[h].concat(Object(M.a)(g),Object(M.a)(o))}else if(!p&&E){var d=V(u+1,u+m);o=[].concat(Object(M.a)(o),Object(M.a)(d),[f])}else p&&E&&(o=[h].concat(Object(M.a)(o),[f]));return[1].concat(Object(M.a)(o),[e])}return V(1,e)};var a=e.totalRecords,r=void 0===a?null:a,o=e.pageLimit,i=void 0===o?30:o,c=e.pageNeighbours,s=void 0===c?0:c;return n.pageLimit="number"===typeof i?i:30,n.totalRecords="number"===typeof r?r:0,n.pageNeighbours="number"===typeof s?Math.max(0,Math.min(s,2)):0,n.totalPages=Math.ceil(n.totalRecords/n.pageLimit),n}return Object(I.a)(t,e),Object(S.a)(t,[{key:"componentDidMount",value:function(){this.gotoPage(1)}},{key:"render",value:function(){var e=this;if(!this.totalRecords)return null;if(1===this.totalPages)return null;var t=this.props.currentPage,n=this.fetchPageNumbers();return r.a.createElement(a.Fragment,null,r.a.createElement("nav",{"aria-label":"Countries Pagination"},r.a.createElement("ul",{className:"pagination"},n.map(function(n,a){return n===A?r.a.createElement("li",{key:a,className:"page-item"},r.a.createElement(m.a,{className:"page-link",to:"/pokemons/".concat(e.props.currentPage-1,"/"),"aria-label":"Previous"},r.a.createElement("i",{className:"fas fa-caret-left"}))):n===D?r.a.createElement("li",{key:a,className:"page-item"},r.a.createElement(m.a,{className:"page-link",to:"/pokemons/".concat(e.props.currentPage+1,"/"),"aria-label":"Next"},r.a.createElement("i",{className:"fas fa-caret-right"}))):r.a.createElement("li",{key:a,className:"page-item".concat(t===n?" active":"")},r.a.createElement(m.a,{className:"page-link",to:"/pokemons/".concat(n,"/"),onClick:function(){return e.handleClick(n)}},n))}))))}}]),t}(a.Component),B=function(e){function t(){return Object(C.a)(this,t),Object(y.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(S.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.pageRouterSelected,n=e.listCount;this.props.fetchItems(t*n,n)}},{key:"componentDidUpdate",value:function(e){if(this.props.pageRouterSelected!==e.pageRouterSelected){var t=this.props,n=t.pageRouterSelected,a=t.listCount;this.props.fetchItems(n*a,a)}}},{key:"render",value:function(){var e=this.props,t=e.items,n=e.loading,a=e.error,o=e.listCount,i=e.itemsCount,c=e.pageRouterSelected,s=e.onError;return n?r.a.createElement(N,null):a?r.a.createElement(P,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(H,{onError:s,listCount:o,pageRouterSelected:c,items:t}),r.a.createElement(Q,{totalRecords:i,pageLimit:o,pageNeighbours:1,onPageChanged:function(){},currentPage:c+1}))}}]),t}(r.a.Component),G=b(k(),Object(c.b)(function(e){var t=e.pokemonsList;return{items:t.items,pageSelected:t.pageSelected,listCount:t.listCount,itemsCount:t.itemsCount,loading:t.loading,error:t.error}},function(e,t){var n=t.storeService;return{fetchItems:function(t,a){return e((r=n,function(e,t){return function(n){n({type:"FETCH_ITEMS_REQUEST"}),r.getPokemonList(e,t).then(function(e){return n({type:"FETCH_ITEMS_SUCCESS",payload:e})}).catch(function(e){return n({type:"FETCH_ITEMS_FAILURE",payload:e})})}})(t,a));var r},onImageError:function(t){return e(function(e){return{type:"ITEM_IMAGE_ERROR",payload:e}}(t))}}}))(function(e){var t=e.items,n=e.pageRouterSelected,a=e.fetchItems,o=e.listCount,i=e.itemsCount,c=e.loading,s=e.error,l=e.onImageError;return r.a.createElement(r.a.Fragment,null,r.a.createElement(B,{onError:function(e){l(e),console.clear()},fetchItems:a,pageRouterSelected:n,error:s,loading:c,itemsCount:i,listCount:o,items:t}))}),J=(n(64),function(){return r.a.createElement("main",{role:"main",className:"container"},r.a.createElement(h,null),r.a.createElement(l.a,null,r.a.createElement(u.a,{path:"/",component:f,exact:!0}),r.a.createElement(u.a,{path:"/pokemon/:name",render:function(e){var t=e.match.params.name;return r.a.createElement(x,{pokemon:t})},exact:!0}),r.a.createElement(u.a,{path:"/pokemons/:id",render:function(e){var t=e.match.params.id;return r.a.createElement(G,{pageRouterSelected:Number(t-1)})},exact:!0})))}),W=function(e){function t(){var e,n;Object(C.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(y.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(r)))).state={hasError:!1},n}return Object(I.a)(t,e),Object(S.a)(t,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement(P,null):this.props.children}}]),t}(a.Component),$=n(13),q=n.n($),z=n(16),K=n(19),X=n.n(K),Y=n(15),Z=n(37),ee=function(e,t){if(void 0===e)return{items:[],listCount:30,itemsCount:964,loading:!0,error:null};switch(t.type){case"FETCH_ITEMS_REQUEST":return{items:[],listCount:e.pokemonsList.listCount,itemsCount:e.pokemonsList.itemsCount,loading:!0,error:null};case"FETCH_ITEMS_SUCCESS":return{items:t.payload,listCount:e.pokemonsList.listCount,itemsCount:e.pokemonsList.itemsCount,loading:!1,error:null};case"FETCH_ITEMS_FAILURE":return{items:[],listCount:e.pokemonsList.listCount,itemsCount:e.pokemonsList.itemsCount,loading:!1,error:t.payload};case"ITEM_IMAGE_ERROR":return{items:[].concat(Object(M.a)(e.pokemonsList.items.slice(0,t.payload)),[{name:e.pokemonsList.items[t.payload].name,img:"https://pokemon-visualguide.com/assets/img/pokeball.png"}],Object(M.a)(e.pokemonsList.items.slice(t.payload+1))),listCount:e.pokemonsList.listCount,itemsCount:e.pokemonsList.itemsCount,loading:!1,error:null};default:return e.pokemonsList}},te=function(e,t){if(void 0===e)return{item:[],loading:!0,error:null};switch(t.type){case"FETCH_ITEM_REQUEST":return{item:[],loading:!0,error:null};case"FETCH_ITEM_SUCCESS":return{item:t.payload,loading:!1,error:null};case"FETCH_ITEM_FAILURE":return{item:[],loading:!1,error:t.payload};default:return e.pokemonDetails}},ne=function(e,t){if(void 0===e)return{species:[],loading:!0,error:null};switch(t.type){case"FETCH_SPECIES_REQUEST":return{species:[],loading:!0,error:null};case"FETCH_SPECIES_SUCCESS":return{species:t.payload,loading:!1,error:null};case"FETCH_SPECIES_FAILURE":return{species:[],loading:!1,error:t.payload};default:return e.pokemonSpecies}},ae=function(e,t){if(void 0===e)return{evolutions:[],loading:!0,error:null};switch(t.type){case"FETCH_EVOLUTIONS_REQUEST":return{evolutions:[],loading:!0,error:null};case"FETCH_EVOLUTIONS_SUCCESS":return{evolutions:t.payload,loading:!1,error:null};case"FETCH_EVOLUTIONS_FAILURE":return{evolutions:[],loading:!1,error:t.payload};default:return e.pokemonEvolutions}},re=function(e,t){return{pokemonsList:ee(e,t),pokemonDetails:te(e,t),pokemonSpecies:ne(e,t),pokemonEvolutions:ae(e,t)}},oe=Object(Y.c)(re,Object(Y.a)(Z.a)),ie=new function e(){var t=this;Object(C.a)(this,e),this._apiBase="https://pokeapi.co/api/v2",this.getResource=function(e){return X.a.get("".concat(t._apiBase).concat(e))},this.getPokemonList=function(){var e=Object(z.a)(q.a.mark(function e(n,a){var r;return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/pokemon/?offset=".concat(n,"&limit=").concat(a));case 2:return r=e.sent,e.abrupt("return",r.data.results.map(t.parcePokemons));case 4:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),this.getPokemon=function(){var e=Object(z.a)(q.a.mark(function e(n){var a;return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/pokemon/".concat(n,"/"));case 2:return a=e.sent,console.log(t.parcePokemon(a.data)),e.abrupt("return",t.parcePokemon(a.data));case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),this.getPokemonSpecies=function(){var e=Object(z.a)(q.a.mark(function e(n){var a;return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.a.get(n);case 2:return a=e.sent,e.abrupt("return",t.parcePokemonSpecies(a.data));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),this.getPokemonEvolutionChain=function(){var e=Object(z.a)(q.a.mark(function e(n){var a;return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.a.get(n);case 2:return a=e.sent,console.log(a.data.chain.species.url),e.abrupt("return",t.parcePokemonEvolutions(a.data));case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),this.getPokemonImage=function(e){return"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(e,".png")},this._extractId=function(e){return e.url.match(/\/([0-9]*)\/$/)[1]},this.parcePokemons=function(e){var n=t._extractId(e);return{name:e.name,img:t.getPokemonImage(n)}},this.parcePokemon=function(e){var t=[],n=[],a=[];return e.abilities.forEach(function(e){t.push(e.ability.name)}),e.types.forEach(function(e){n.push(e.type.name)}),e.stats.forEach(function(e){a.push({name:e.stat.name,stat:e.base_stat})}),{name:e.name,img:{front:e.sprites.front_default,back:e.sprites.back_default},weight:e.weight/10+"kg",height:e.height/10+"m",base_exp:e.base_experience,abilities:t,types:n,stats:a,species:e.species.url}},this.parcePokemonSpecies=function(e){var t=[];return e.varieties.forEach(function(e){t.push(e.pokemon.name)}),{name:e.name,color:e.color.name,habitat:e.habitat.name,shape:e.shape.name,growh_rate:e.growth_rate.name,varieties:t,genus:e.genera[2].genus,evolution_chain:e.evolution_chain.url}},this.parcePokemonEvolutions=function(e){var n=[];return e.chain.evolves_to.forEach(function(e){void 0===e.evolves_to[0]?n.push({name:e.species.name,img:t.getPokemonImage(t._extractId(e.species)),levelTrhee:null}):n.push({name:e.species.name,img:t.getPokemonImage(t._extractId(e.species)),levelTrhee:{name:e.evolves_to[0].species.name,img:t.getPokemonImage(t._extractId(e.evolves_to[0].species))}})}),{chain:{levelOne:{name:e.chain.species.name,img:t.getPokemonImage(t._extractId(e.chain.species))},levelTwo:n}}}};i.a.render(r.a.createElement(c.a,{store:oe},r.a.createElement(W,null,r.a.createElement(d,{value:ie},r.a.createElement(s.a,null,r.a.createElement(J,null))))),document.getElementById("app"))}},[[39,2,1]]]);
//# sourceMappingURL=main.a658ee1c.chunk.js.map