(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),c=n.n(r),o=n(7),s=n.n(o),u=(n(14),n(2)),i=n(3),h=n(5),b=n(4),l=n(8),m=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={searchInput:""},e.onChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(l.a)({},a,r))},e.formReset=function(){e.setState({searchInput:""})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.props.onSubmit,n=this.state.searchInput;return Object(a.jsx)("header",{className:"Searchbar",children:Object(a.jsxs)("form",{className:"SearchForm",onSubmit:function(a){return t(a,n,e.formReset)},children:[Object(a.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(a.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(a.jsx)("input",{name:"searchInput",value:n,onChange:this.onChange,className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),n}(r.Component),p=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={userQuery:""},e.onSubmit=function(t,n,a){t.preventDefault(),e.setState({userQuery:n}),a()},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(a.jsx)(m,{onSubmit:this.onSubmit})}}]),n}(r.Component);s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(p,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.35dcf9b6.chunk.js.map