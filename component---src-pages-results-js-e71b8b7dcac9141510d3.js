(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{148:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(162),i=a(160),c=a(164);t.default=function(){return r.a.createElement(l.a,{pageTitle:"Results"},r.a.createElement(i.a,null,r.a.createElement(c.a,null,r.a.createElement("p",{className:"vsa-center-text"},"Run Results are not yet available.",r.a.createElement("br",null),"Please check back soon."))))}},152:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=a(33),s=a.n(c);a.d(t,"a",function(){return s.a});a(153),r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},153:function(e,t,a){var n;e.exports=(n=a(157))&&n.default||n},154:function(e,t,a){"use strict";var n=a(155),r=a(0),l=a.n(r),i=a(4),c=a.n(i),s=a(163),o=a.n(s);function u(e){var t=e.description,a=e.lang,r=e.meta,i=e.title,c=n.data.site,s=t||c.siteMetadata.description;return l.a.createElement(o.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:i},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:s}].concat(r)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),title:c.a.string.isRequired},t.a=u},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Jolong Fun Run",description:"Come join  in a fun run with a difference. Run on a 2.2km turf horse racing track in rural Bangholme in Southside Melbourne.",author:"Nik Malyaris - nikmaly@gmail.com"}}}}},156:function(e,t,a){"use strict";var n=a(7),r=a.n(n),l=a(0),i=a.n(l),c=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={backgroundNumber:0},a}r()(t,e);var a=t.prototype;return a.handleClick=function(e){var t=5,a=this.state.backgroundNumber;function n(e){return e=(e=e<0?e=t:e)>t?e=0:e}"right"===e?(a=n(++a),this.setState({backgroundNumber:a})):"left"===e&&(a=n(--a),this.setState({backgroundNumber:a}))},a.render=function(){var e=this;return i.a.createElement("div",{className:"cm-hero-banner "+this.props.bannerType+" background-"+this.state.backgroundNumber,id:"page-banner"},i.a.createElement("div",{className:"hero-banner-content"},i.a.createElement("h1",null,this.props.bannerTitle),this.props.bannerText?i.a.createElement("p",null,this.props.bannerText):"","home-page-banner"===this.props.bannerType&&this.props.bannerLinkText&&this.props.bannerLinkURL?i.a.createElement("a",{href:this.props.bannerLinkURL,className:"cta cta-primary"},this.props.bannerLinkText):""),this.props.bannerHasCarousel?i.a.createElement("div",{className:"hero-banner-carousel-controls"},i.a.createElement("div",{className:"carousel-control scroll-left",onClick:function(){return e.handleClick("left")}}),i.a.createElement("div",{className:"carousel-control scroll-right",onClick:function(){return e.handleClick("right")}})):"","home-page-banner"===this.props.bannerType?i.a.createElement("div",{className:"hero-banner-next"},i.a.createElement("a",{href:"#main-content",className:"vsa-block-link"},"Link to Content")):"")},t}(i.a.Component);t.a=c},157:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=a(55),s=a(2),o=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=o},158:function(e,t,a){"use strict";var n=a(152),r=a(4),l=a.n(r),i=a(0),c=a.n(i),s=function(e){var t=e.footerText;return c.a.createElement("div",{className:"cm-footer"},c.a.createElement("div",{className:"footer-content"},"Footer ",t,c.a.createElement(n.a,{to:"/"},"Link")))};s.propTypes={footerText:l.a.string},s.defaultProps={footerText:"Footer"},t.a=s},159:function(e,t){},160:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children;return r.a.createElement("div",{className:"cm-rich-text"},t)}},161:function(e,t,a){"use strict";var n=a(7),r=a.n(n),l=a(152),i=a(4),c=a.n(i),s=a(0),o=a.n(s),u=a(35),m=a.n(u),p=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={menuDisplayed:!1},a.handleClick=a.handleClick.bind(m()(a)),a}r()(t,e);var a=t.prototype;return a.handleClick=function(){this.setState({menuDisplayed:!this.state.menuDisplayed})},a.render=function(){return o.a.createElement("div",{className:"cm-nav-links"},o.a.createElement("div",{className:"mobile-menu-icon",onClick:this.handleClick}),o.a.createElement("div",{className:"nav-wrapper visible-"+this.state.menuDisplayed},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(l.a,{to:"/registration"},"Registration")),o.a.createElement("li",null,o.a.createElement(l.a,{to:"/event-details"},"Event Details")),o.a.createElement("li",null,o.a.createElement(l.a,{to:"/course-details"},"Course")),o.a.createElement("li",null,o.a.createElement(l.a,{to:"/training"},"Training")),o.a.createElement("li",null,o.a.createElement(l.a,{to:"/results"},"Results")),o.a.createElement("li",null,o.a.createElement(l.a,{to:"/faqs"},"FAQs")),o.a.createElement("li",null,o.a.createElement(l.a,{to:"/contacts"},"Contacts")))))},t}(o.a.Component),d=function(e){e.siteTitle;return o.a.createElement("div",{className:"cm-social-links"},o.a.createElement("div",{className:"link-wrapper"},o.a.createElement("div",{className:"social-link facebook"},o.a.createElement("a",{className:"vsa-block-link",href:"https://facebook.com"},"Facebook")),o.a.createElement("div",{className:"social-link instagram"},o.a.createElement("a",{className:"vsa-block-link",href:"https://instagram.com"},"Instagram"))))};d.propTypes={socialLinks:c.a.array},d.defaultProps={linkData:["facebook","instagram"]};var f=d,h=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.handleScroll=function(){var e;e=document.getElementById("menu-bar"),document.getElementById("page-banner"),window.scrollY>10?e.classList.add("scrolled"):e.classList.remove("scrolled")},a.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},a.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},a.render=function(){return o.a.createElement("nav",{className:"cm-menu-bar",id:"menu-bar"},o.a.createElement("div",{className:"logo"},o.a.createElement(l.a,{to:"/",className:"vsa-block-link"},"Home")),o.a.createElement(p,null),o.a.createElement(f,null))},t}(o.a.Component);h.propTypes={navLinkData:c.a.object,socialLinkData:c.a.object},h.defaultProps={navLinkData:{},socialLinkData:{}};t.a=h},162:function(e,t,a){"use strict";a(36);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=a(154),s=a(156),o=a(161),u=a(158),m=(a(165),a(159),function(e){var t=e.pageTitle,a=e.children;return r.a.createElement("div",{className:"page-wrapper"},r.a.createElement(c.a,{title:t}),r.a.createElement(o.a,null),r.a.createElement(s.a,{bannerType:"content-page-banner",bannerTitle:t}),r.a.createElement("main",{className:""},r.a.createElement("div",{className:"cm-content-wrapper pg-"+t.replace(" ","-").toLowerCase(),id:"main-content"},a)),r.a.createElement(u.a,null))});m.propTypes={pageTitle:i.a.string},m.defaultProps={pageTitle:"Page Title"},t.a=m},164:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children;return r.a.createElement("div",{className:"text-group"},t)}}}]);
//# sourceMappingURL=component---src-pages-results-js-e71b8b7dcac9141510d3.js.map