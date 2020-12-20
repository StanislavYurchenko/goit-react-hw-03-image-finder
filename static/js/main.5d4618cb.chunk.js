(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__fUvlJ",image:"ImageGalleryItem_image__bjLu9"}},12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__1HcUi",Modal:"Modal_Modal__3P8ld"}},23:function(e,t,a){e.exports={App:"App_App__2Hx3V"}},25:function(e,t,a){e.exports={Loader:"CustomLoader_Loader__3YbnC"}},27:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__20j56"}},28:function(e,t,a){e.exports={Button:"Button_Button__2n9LJ"}},34:function(e,t,a){},57:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2IS8I",SearchForm:"Searchbar_SearchForm__2qdyB","SearchForm-button":"Searchbar_SearchForm-button__2hDVG","SearchForm-button-label":"Searchbar_SearchForm-button-label__1H_Bo","SearchForm-input":"Searchbar_SearchForm-input__1dRN0"}},75:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),o=a.n(r),c=a(4),s=a.n(c),i=(a(34),a(14)),l=a(6),u=a(7),m=a(9),h=a(8),d=a(5),g=a(23),b=a.n(g),p=a(24),j=a.n(p),f=a(25),v=a.n(f);var S=function(){return Object(n.jsx)(j.a,{type:"ThreeDots",color:"#00BFFF",height:100,width:100,className:v.a.Loader})},_=a(26),y=(a(56),a(57),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchInput:""},e.onChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(_.a)({},n,r))},e.formReset=function(){e.setState({searchInput:""})},e.onSubmit=function(t){t.preventDefault();var a=e.props.searchFormSubmit,n=e.state.searchInput.trim();""!==n?(a(n),e.formReset()):d.b.error("Enter query")},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state.searchInput;return Object(n.jsx)("header",{className:"Searchbar",children:Object(n.jsxs)("form",{className:"SearchForm",onSubmit:this.onSubmit,children:[Object(n.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(n.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(n.jsx)("input",{name:"searchInput",value:e,onChange:this.onChange,className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(r.Component)),O=a(11),x=a.n(O);function I(e){var t=e.id,a=e.src,r=e.alt,o=e.onClick;return Object(n.jsx)("li",{className:x.a.ImageGalleryItem,children:Object(n.jsx)("img",{src:a,alt:r,onClick:o,className:x.a.image,"data-id":t,"data-name":"image"})})}I.defaultProps={alt:"photo"};var k=I,F=a(27),C=a.n(F);var L=function(e){var t=e.images,a=e.toggleModal;return Object(n.jsx)("ul",{className:C.a.ImageGallery,children:t.map((function(e){var t=e.id,r=e.webformatURL,o=e.tags;return Object(n.jsx)(k,{id:t,src:r,alt:o,onClick:a},t)}))})},M=a(28),w=a.n(M);var N=function(e){var t=e.onClick;return Object(n.jsx)("button",{className:w.a.Button,type:"button",onClick:t,children:"Load more"})},B=a(12),G=a.n(B);function q(e){var t=e.image,a=e.onClick;return Object(n.jsx)("div",{className:G.a.Overlay,onClick:a,"data-name":"overlay",children:Object(n.jsx)("div",{className:G.a.Modal,children:Object(n.jsx)("img",{src:t.largeImageURL,alt:t.tags})})})}q.defaultProps={image:{alt:"photo"}};var A=q,E=a(13),Q=a.n(E),R="18376090-d7378f6abd5315284a04e80ad";Q.a.defaults.baseURL="https://pixabay.com/api";var U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:12,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"photo",r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"horizontal",o="/?key=".concat(R,"&q=").concat(e,"&page=").concat(t,"&per_page=").concat(a,"&image_type=").concat(n,"&orientation=").concat(r);return Q()(o).then((function(e){return e.data.hits})).catch((function(e){return Object(d.b)(e.massage)}))},D=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={userQuery:"",images:[],page:1,isLoading:!1,isModalShow:!1,image:null},e.searchFormSubmit=function(t){e.setState({userQuery:t,page:1,images:[]})},e.scrollToButton=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.request=function(){var t=e.state,a=t.userQuery,n=t.page;e.setState({isLoading:!0}),U(a,n).then((function(t){return e.setState((function(e){var a=e.images;return{images:[].concat(Object(i.a)(a),Object(i.a)(t))}}))})).finally(e.setState({isLoading:!1}))},e.onLoadMore=function(){e.setState((function(e){return{page:e.page+1}}))},e.toggleModal=function(t){var a=t.target.dataset,n=a.name,r=a.id,o=e.state.images.find((function(e){return Number.parseInt(r)===e.id}));"image"===n&&e.setState({image:o}),"overlay"===n&&e.setState({image:null})},e.closeModal=function(t){"Escape"===t.code&&e.setState({image:null})},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this.state.userQuery;this.request(e)}},{key:"componentDidUpdate",value:function(e,t){var a=this.state,n=a.userQuery,r=a.page,o=a.images,c=a.image;t.userQuery===n&&r===t.page||this.request(),o.length!==t.images.length&&this.scrollToButton(),c&&window.addEventListener("keydown",this.closeModal),t.image&&window.removeEventListener("keydown",this.closeModal)}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.isLoading,r=e.image;return Object(n.jsxs)("div",{className:b.a.App,children:[Object(n.jsx)(y,{searchFormSubmit:this.searchFormSubmit}),t.length>0&&Object(n.jsx)(L,{images:t,toggleModal:this.toggleModal}),a&&Object(n.jsx)(S,{}),t.length>0&&!a&&Object(n.jsx)(N,{onClick:this.onLoadMore}),0===t.length&&!a&&Object(n.jsx)("div",{children:"Nothing found"}),r&&Object(n.jsx)(A,{image:r,onClick:this.toggleModal}),Object(n.jsx)(d.a,{autoClose:3e3})]})}}]),a}(r.Component);s.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(D,{})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.5d4618cb.chunk.js.map