(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{146:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(162),l=a(160);t.default=function(){return r.a.createElement(i.a,{pageTitle:"FAQs"},r.a.createElement(l.a,null,r.a.createElement("h1",null,"FAQs"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")))}},152:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(33),c=a.n(o);a.d(t,"a",function(){return c.a});a(153),r.a.createContext({});l.a.object,l.a.string.isRequired,l.a.func,l.a.func},153:function(e,t,a){var n;e.exports=(n=a(157))&&n.default||n},154:function(e,t,a){"use strict";var n=a(155),r=a(0),i=a.n(r),l=a(4),o=a.n(l),c=a(163),s=a.n(c);function u(e){var t=e.description,a=e.lang,r=e.meta,l=e.title,o=n.data.site,c=t||o.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:l},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:c}].concat(r)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),title:o.a.string.isRequired},t.a=u},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Jolong Fun Run",description:"Come join  in a fun run with a difference. Run on a 2.2km turf horse racing track in rural Bangholme in Southside Melbourne.",author:"Nik Malyaris - nikmaly@gmail.com"}}}}},156:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),l=a.n(i),o=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={backgroundNumber:0},a}r()(t,e);var a=t.prototype;return a.handleClick=function(e){var t=5,a=this.state.backgroundNumber;function n(e){return e=(e=e<0?e=t:e)>t?e=0:e}"right"===e?(a=n(++a),this.setState({backgroundNumber:a})):"left"===e&&(a=n(--a),this.setState({backgroundNumber:a}))},a.render=function(){var e=this;return l.a.createElement("div",{className:"cm-hero-banner "+this.props.bannerType+" background-"+this.state.backgroundNumber,id:"page-banner"},l.a.createElement("div",{className:"hero-banner-content"},l.a.createElement("h1",null,this.props.bannerTitle),this.props.bannerText?l.a.createElement("p",null,this.props.bannerText):"","home-page-banner"===this.props.bannerType&&this.props.bannerLinkText&&this.props.bannerLinkURL?l.a.createElement("a",{href:this.props.bannerLinkURL,className:"cta cta-primary"},this.props.bannerLinkText):""),this.props.bannerHasCarousel?l.a.createElement("div",{className:"hero-banner-carousel-controls"},l.a.createElement("div",{className:"carousel-control scroll-left",onClick:function(){return e.handleClick("left")}}),l.a.createElement("div",{className:"carousel-control scroll-right",onClick:function(){return e.handleClick("right")}})):"","home-page-banner"===this.props.bannerType?l.a.createElement("div",{className:"hero-banner-next"},l.a.createElement("a",{href:"#main-content",className:"vsa-block-link"},"Link to Content")):"")},t}(l.a.Component);t.a=o},157:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(55),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},158:function(e,t,a){"use strict";var n=a(152),r=a(4),i=a.n(r),l=a(0),o=a.n(l),c=function(e){var t=e.footerText;return o.a.createElement("div",{className:"cm-footer"},o.a.createElement("div",{className:"footer-content"},"Footer ",t,o.a.createElement(n.a,{to:"/"},"Link")))};c.propTypes={footerText:i.a.string},c.defaultProps={footerText:"Footer"},t.a=c},159:function(e,t){},160:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children;return r.a.createElement("div",{className:"cm-rich-text"},t)}},161:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(152),l=a(4),o=a.n(l),c=a(0),s=a.n(c),u=a(35),m=a.n(u),p=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={menuDisplayed:!1},a.handleClick=a.handleClick.bind(m()(a)),a}r()(t,e);var a=t.prototype;return a.handleClick=function(){this.setState({menuDisplayed:!this.state.menuDisplayed})},a.render=function(){return s.a.createElement("div",{className:"cm-nav-links"},s.a.createElement("div",{className:"mobile-menu-icon",onClick:this.handleClick}),s.a.createElement("div",{className:"nav-wrapper visible-"+this.state.menuDisplayed},s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement(i.a,{to:"/registration"},"Registration")),s.a.createElement("li",null,s.a.createElement(i.a,{to:"/event-details"},"Event Details")),s.a.createElement("li",null,s.a.createElement(i.a,{to:"/course-details"},"Course")),s.a.createElement("li",null,s.a.createElement(i.a,{to:"/training"},"Training")),s.a.createElement("li",null,s.a.createElement(i.a,{to:"/results"},"Results")),s.a.createElement("li",null,s.a.createElement(i.a,{to:"/faqs"},"FAQs")),s.a.createElement("li",null,s.a.createElement(i.a,{to:"/contacts"},"Contacts")))))},t}(s.a.Component),d=function(e){e.siteTitle;return s.a.createElement("div",{className:"cm-social-links"},s.a.createElement("div",{className:"link-wrapper"},s.a.createElement("div",{className:"social-link facebook"},s.a.createElement("a",{className:"vsa-block-link",href:"https://facebook.com"},"Facebook")),s.a.createElement("div",{className:"social-link instagram"},s.a.createElement("a",{className:"vsa-block-link",href:"https://instagram.com"},"Instagram"))))};d.propTypes={socialLinks:o.a.array},d.defaultProps={linkData:["facebook","instagram"]};var f=d,h=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.handleScroll=function(){var e;e=document.getElementById("menu-bar"),document.getElementById("page-banner"),window.scrollY>10?e.classList.add("scrolled"):e.classList.remove("scrolled")},a.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},a.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},a.render=function(){return s.a.createElement("nav",{className:"cm-menu-bar",id:"menu-bar"},s.a.createElement("div",{className:"logo"},s.a.createElement(i.a,{to:"/",className:"vsa-block-link"},"Home")),s.a.createElement(p,null),s.a.createElement(f,null))},t}(s.a.Component);h.propTypes={navLinkData:o.a.object,socialLinkData:o.a.object},h.defaultProps={navLinkData:{},socialLinkData:{}};t.a=h},162:function(e,t,a){"use strict";a(36);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(154),c=a(156),s=a(161),u=a(158),m=(a(165),a(159),function(e){var t=e.pageTitle,a=e.children;return r.a.createElement("div",{className:"page-wrapper"},r.a.createElement(o.a,{title:t}),r.a.createElement(s.a,null),r.a.createElement(c.a,{bannerType:"content-page-banner",bannerTitle:t}),r.a.createElement("main",{className:""},r.a.createElement("div",{className:"cm-content-wrapper pg-"+t.replace(" ","-").toLowerCase(),id:"main-content"},a)),r.a.createElement(u.a,null))});m.propTypes={pageTitle:l.a.string},m.defaultProps={pageTitle:"Page Title"},t.a=m}}]);
//# sourceMappingURL=component---src-pages-faqs-js-986196fc3eb335593197.js.map