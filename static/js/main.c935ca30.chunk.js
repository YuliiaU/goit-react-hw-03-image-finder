(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2YZBw",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__1bQAo"}},12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__1FAim",Modal:"Modal_Modal__3RvHO"}},23:function(e,t,a){e.exports={Container:"Container_Container__OlDek"}},24:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2YeDP"}},25:function(e,t,a){e.exports={Button:"Button_Button__2lXoy"}},71:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(9),c=a.n(o),i=(a(31),a(14)),l=a(4),s=a(5),u=a(7),h=a(6),m=a(23),d=a.n(m),g=a(0),b=function(e){var t=e.children;return Object(g.jsx)("div",{className:d.a.Container,children:t})},f=a(8),j=a.n(f),p=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleSearchChange=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(g.jsx)("header",{className:j.a.Searchbar,children:Object(g.jsxs)("form",{className:j.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(g.jsx)("button",{type:"submit",className:j.a.SearchFormButton,children:Object(g.jsx)("span",{className:j.a.SearchFormButtonLabel,children:"Search"})}),Object(g.jsx)("input",{value:this.state.query,onChange:this.handleSearchChange,className:j.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(n.Component),y=a(11),O=a.n(y),v=function(e){var t=e.id,a=e.webformatURL,n=e.tags,r=e.largeImageURL;return Object(g.jsx)("li",{className:O.a.ImageGalleryItem,children:Object(g.jsx)("img",{src:a,alt:n,"data-url":r,className:O.a.ImageGalleryItemImage})},t)},S=a(24),_=a.n(S),I=function(e){var t=e.hits,a=e.onClick;return Object(g.jsx)("div",{children:Object(g.jsx)("ul",{className:_.a.ImageGallery,onClick:a,children:t.map((function(e){var t=e.id,a=e.webformatURL,n=e.tags,r=e.largeImageURL;return Object(g.jsx)(v,{webformatURL:a,tags:n,largeImageURL:r},t)}))})})},x=a(12),C=a.n(x),k=document.querySelector("#modal-root"),w=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackDropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(g.jsx)("div",{className:C.a.Overlay,onClick:this.handleBackDropClick,children:Object(g.jsx)("div",{className:C.a.Modal,children:this.props.children})}),k)}}]),a}(n.Component),L=a(25),F=a.n(L),B=function(e){var t=e.onClick;return Object(g.jsx)("button",{type:"button",onClick:t,className:F.a.Button,children:"Load more"})},M=a(26),G=a.n(M),N=function(){return Object(g.jsx)(G.a,{type:"Puff",color:"#00BFFF",height:100,width:100})},D=a(13),Q=a.n(D);Q.a.defaults.baseURL="https://pixabay.com/api/";var P={findImage:function(e,t){return Q.a.get("?q=".concat(t,"&key=").concat("21941214-a78e4db07bb432cdcb3475a2b","&image_type=photo&orientation=horizontal&page=").concat(e,"&per_page=12")).then((function(e){return e.data.hits}))}},R=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={hits:[],currentPage:1,searchQuery:"",isLoading:!1,showModal:!1,error:null,url:"",tag:""},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.onChangeQuery=function(t){e.setState({searchQuery:t,currentPage:1,hits:[],error:null})},e.fetchhits=function(){var t=e.state,a=t.currentPage,n=t.searchQuery;return e.setState({isLoading:!0}),P.findImage(a,n).then((function(t){e.setState((function(e){return{hits:[].concat(Object(i.a)(e.hits),Object(i.a)(t)),currentPage:e.currentPage+1}}))})).then((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))},e.handleImageClick=function(t){var a=t.target;if("IMG"===a.nodeName){var n=a.dataset.url,r=a.alt;e.setState({url:n,tag:r,isLoading:!1}),e.toggleModal()}},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchhits()}},{key:"render",value:function(){var e=this.state,t=e.hits,a=e.showModal,n=e.isLoading,r=e.url,o=e.tag;return Object(g.jsxs)(b,{children:[Object(g.jsx)(p,{onSubmit:this.onChangeQuery}),Object(g.jsx)(I,{hits:t,onClick:this.handleImageClick}),n&&Object(g.jsx)(N,{}),t.length>0&&!n&&Object(g.jsx)(B,{onClick:this.fetchhits}),a&&Object(g.jsx)(w,{onClose:this.toggleModal,onClick:this.handleImageClick,children:Object(g.jsx)("img",{src:r,alt:o})})]})}}]),a}(n.Component);a(71),a(72);c.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(R,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2ZOPQ",SearchForm:"Searchbar_SearchForm__1Q6rR",SearchFormButton:"Searchbar_SearchFormButton__tsds3",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__6yCES",SearchFormInput:"Searchbar_SearchFormInput__1raqo"}}},[[73,1,2]]]);
//# sourceMappingURL=main.c935ca30.chunk.js.map