(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{148:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(162),c=a(160),i=a(164);t.default=function(){return r.a.createElement(l.a,{pageTitle:"Results"},r.a.createElement(c.a,null,r.a.createElement(i.a,null,r.a.createElement("p",{className:"vsa-center-text"},"Run Results are not yet available.",r.a.createElement("br",null),"Please check back soon."))))}},152:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(4),c=a.n(l),i=a(33),o=a.n(i);a.d(t,"a",function(){return o.a});a(153),r.a.createContext({});c.a.object,c.a.string.isRequired,c.a.func,c.a.func},153:function(e,t,a){var n;e.exports=(n=a(157))&&n.default||n},154:function(e,t,a){"use strict";var n=a(155),r=a(0),l=a.n(r),c=a(4),i=a.n(c),o=a(163),s=a.n(o);function u(e){var t=e.description,a=e.lang,r=e.meta,c=e.title,i=n.data.site,o=t||i.siteMetadata.description;return l.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:c},{property:"og:description",content:o},{property:"og:type",content:"website"},{property:"og:image",content:"https://jolongparkfunrun.com/static/media/images/og-link-image.png"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:o},{name:"google-site-verification",content:"M1M_xeMHFGVhXf1lc8V4Mcf0n7EZhl43N0sLS5j9d1E"}].concat(r)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.arrayOf(i.a.object),title:i.a.string.isRequired},t.a=u},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Jolong Fun Run",description:"Come join  in a fun run with a difference. Run on a 2.2km turf horse racing track in rural Bangholme in Southside Melbourne.",author:"nik.malyaris@gmail.com"}}}}},156:function(e,t,a){"use strict";var n=a(7),r=a.n(n),l=a(0),c=a.n(l),i=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={backgroundNumber:1},a}r()(t,e);var a=t.prototype;return a.handleClick=function(e){var t=2,a=this.state.backgroundNumber;function n(e){return e=(e=e<1?e=t:e)>t?e=1:e}"right"===e?(a=n(++a),this.setState({backgroundNumber:a})):"left"===e&&(a=n(--a),this.setState({backgroundNumber:a}))},a.render=function(){var e=this;return c.a.createElement("header",{className:"cm-hero-banner "+this.props.bannerType+" background-"+this.state.backgroundNumber,id:"page-banner"},c.a.createElement("div",{className:"hero-banner-content"},c.a.createElement("h1",null,this.props.bannerTitle),c.a.createElement("p",null,"Come join in a 6.6km or 2.2km fun run with a difference.",c.a.createElement("br",null),"Run on a turf horse racing track in rural Bangholme in Southside Melbourne.",c.a.createElement("br",null),"Choose from two races of either one or three laps of the track."),"home-page-banner"===this.props.bannerType&&this.props.bannerLinkText&&this.props.bannerLinkURL?c.a.createElement("a",{href:this.props.bannerLinkURL,className:"cta cta-primary"},this.props.bannerLinkText):""),this.props.bannerHasCarousel?c.a.createElement("div",{className:"hero-banner-carousel-controls"},c.a.createElement("div",{className:"carousel-control scroll-left",onClick:function(){return e.handleClick("left")}}),c.a.createElement("div",{className:"carousel-control scroll-right",onClick:function(){return e.handleClick("right")}})):"","home-page-banner"===this.props.bannerType?c.a.createElement("div",{className:"hero-banner-next"},c.a.createElement("a",{href:"#main-content",className:"vsa-block-link"},"Link to Content")):"")},t}(c.a.Component);t.a=i},157:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),c=a.n(l),i=a(55),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},158:function(e,t,a){"use strict";var n=a(152),r=a(4),l=a.n(r),c=a(0),i=a.n(c),o=function(e){e.footerText;return i.a.createElement("footer",{className:"cm-footer"},i.a.createElement("div",{className:"footer-content"},i.a.createElement("h2",null,"Jolong Park Fun Run"),i.a.createElement("div",{className:"footer-column footer-col-1"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(n.a,{to:"/"},"Home")),i.a.createElement("li",null,i.a.createElement(n.a,{to:"/registration"},"Registration")),i.a.createElement("li",null,i.a.createElement(n.a,{to:"/event-details"},"Event Details")),i.a.createElement("li",null,i.a.createElement(n.a,{to:"/course-details"},"Course")))),i.a.createElement("div",{className:"footer-column footer-col-2"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(n.a,{to:"/training"},"Training")),i.a.createElement("li",null,i.a.createElement(n.a,{to:"/results"},"Results")),i.a.createElement("li",null,i.a.createElement(n.a,{to:"/faqs"},"FAQs")),i.a.createElement("li",null,i.a.createElement(n.a,{to:"/contacts"},"Contacts"))))))};o.propTypes={footerText:l.a.string},o.defaultProps={footerText:""},t.a=o},159:function(e,t){},160:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children;return r.a.createElement("div",{className:"cm-rich-text"},t)}},161:function(e,t,a){"use strict";var n=a(7),r=a.n(n),l=a(4),c=a.n(l),i=a(0),o=a.n(i),s=a(152),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",{className:"cm-logo"},o.a.createElement(s.a,{to:"/",className:"vsa-block-link"}))},t}(o.a.Component),m=a(35),p=a.n(m),d=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={menuDisplayed:!1},a.handleClick=a.handleClick.bind(p()(a)),a}r()(t,e);var a=t.prototype;return a.handleClick=function(){this.setState({menuDisplayed:!this.state.menuDisplayed})},a.render=function(){return o.a.createElement("div",{className:"cm-nav-links"},o.a.createElement("div",{className:"mobile-menu-icon",onClick:this.handleClick}),o.a.createElement("div",{className:"nav-wrapper visible-"+this.state.menuDisplayed},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(s.a,{to:"/registration"},"Registration")),o.a.createElement("li",null,o.a.createElement(s.a,{to:"/event-details"},"Event Details")),o.a.createElement("li",null,o.a.createElement(s.a,{to:"/course-details"},"Course")),o.a.createElement("li",null,o.a.createElement(s.a,{to:"/training"},"Training")),o.a.createElement("li",null,o.a.createElement(s.a,{to:"/results"},"Results")),o.a.createElement("li",null,o.a.createElement(s.a,{to:"/contacts"},"Contacts")))))},t}(o.a.Component),f=function(e){e.siteTitle;return o.a.createElement("div",{className:"cm-social-links"},o.a.createElement("div",{className:"link-wrapper"},o.a.createElement("div",{className:"social-link facebook"},o.a.createElement("a",{className:"vsa-block-link",href:"https://www.facebook.com/melbournepack/"},"Facebook")),o.a.createElement("div",{className:"social-link instagram"},o.a.createElement("a",{className:"vsa-block-link",href:"https://www.instagram.com/melbournepack_run/"},"Instagram"))))};f.propTypes={socialLinks:c.a.array},f.defaultProps={linkData:["facebook","instagram"]};var E=f,h=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.handleScroll=function(){var e;e=document.getElementById("menu-bar"),window.scrollY>10?e.classList.add("scrolled"):e.classList.remove("scrolled")},a.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},a.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},a.render=function(){return o.a.createElement("nav",{className:"cm-menu-bar",id:"menu-bar"},o.a.createElement(u,null),o.a.createElement(d,null),o.a.createElement(E,null))},t}(o.a.Component);h.propTypes={navLinkData:c.a.object,socialLinkData:c.a.object},h.defaultProps={navLinkData:{},socialLinkData:{}};t.a=h},162:function(e,t,a){"use strict";a(36);var n=a(0),r=a.n(n),l=a(4),c=a.n(l),i=a(154),o=a(156),s=a(161),u=a(158),m=(a(165),a(159),function(e){var t=e.pageTitle,a=e.children;return r.a.createElement("div",{className:"page-wrapper"},r.a.createElement(i.a,{title:t}),r.a.createElement(s.a,null),r.a.createElement(o.a,{bannerType:"content-page-banner",bannerTitle:t}),r.a.createElement("main",{className:"page-content"},r.a.createElement("div",{className:"cm-content-wrapper pg-"+t.replace(" ","-").toLowerCase(),id:"main-content"},a)),r.a.createElement(u.a,null))});m.propTypes={pageTitle:c.a.string},m.defaultProps={pageTitle:"Page Title"},t.a=m},164:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children,a=e.classes;return r.a.createElement("div",{className:"text-group "+a},t)}}}]);
//# sourceMappingURL=component---src-pages-results-js-226d42d62e92904af30c.js.map