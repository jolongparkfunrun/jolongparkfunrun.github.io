(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{149:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(162),i=a(160);t.default=function(){return r.a.createElement(l.a,{pageTitle:"Training"},r.a.createElement(i.a,null,r.a.createElement("p",null,"Training for this event is available for runners of all abilities through nearby Edithvale based coach Sean Williams."),r.a.createElement("p",null,"Sean can be contact at the ",r.a.createElement("a",{href:"https://www.melbournepack.com.au"},"Melbourne Pack Website")," for training plans and information on training sessions and runs.")))}},152:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(4),i=a.n(l),o=a(33),c=a.n(o);a.d(t,"a",function(){return c.a});a(153),r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},153:function(e,t,a){var n;e.exports=(n=a(157))&&n.default||n},154:function(e,t,a){"use strict";var n=a(155),r=a(0),l=a.n(r),i=a(4),o=a.n(i),c=a(163),s=a.n(c);function u(e){var t=e.description,a=e.lang,r=e.meta,i=e.title,o=n.data.site,c=t||o.siteMetadata.description;return l.a.createElement(s.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:i},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:c},{name:"google-site-verification",content:"M1M_xeMHFGVhXf1lc8V4Mcf0n7EZhl43N0sLS5j9d1E"}].concat(r)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),title:o.a.string.isRequired},t.a=u},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Jolong Fun Run",description:"Come join  in a fun run with a difference. Run on a 2.2km turf horse racing track in rural Bangholme in Southside Melbourne.",author:"nik.malyaris@gmail.com"}}}}},156:function(e,t,a){"use strict";var n=a(7),r=a.n(n),l=a(0),i=a.n(l),o=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={backgroundNumber:1},a}r()(t,e);var a=t.prototype;return a.handleClick=function(e){var t=2,a=this.state.backgroundNumber;function n(e){return e=(e=e<1?e=t:e)>t?e=1:e}"right"===e?(a=n(++a),this.setState({backgroundNumber:a})):"left"===e&&(a=n(--a),this.setState({backgroundNumber:a}))},a.render=function(){var e=this;return i.a.createElement("header",{className:"cm-hero-banner "+this.props.bannerType+" background-"+this.state.backgroundNumber,id:"page-banner"},i.a.createElement("div",{className:"hero-banner-content"},i.a.createElement("h1",null,this.props.bannerTitle),i.a.createElement("p",null,"Come join in a 6.6km or 2.2km fun run with a difference.",i.a.createElement("br",null),"Run on a turf horse racing track in rural Bangholme in Southside Melbourne.",i.a.createElement("br",null),"Choose from two races of either one or three laps of the track."),"home-page-banner"===this.props.bannerType&&this.props.bannerLinkText&&this.props.bannerLinkURL?i.a.createElement("a",{href:this.props.bannerLinkURL,className:"cta cta-primary"},this.props.bannerLinkText):""),this.props.bannerHasCarousel?i.a.createElement("div",{className:"hero-banner-carousel-controls"},i.a.createElement("div",{className:"carousel-control scroll-left",onClick:function(){return e.handleClick("left")}}),i.a.createElement("div",{className:"carousel-control scroll-right",onClick:function(){return e.handleClick("right")}})):"","home-page-banner"===this.props.bannerType?i.a.createElement("div",{className:"hero-banner-next"},i.a.createElement("a",{href:"#main-content",className:"vsa-block-link"},"Link to Content")):"")},t}(i.a.Component);t.a=o},157:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),o=a(55),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},158:function(e,t,a){"use strict";var n=a(152),r=a(4),l=a.n(r),i=a(0),o=a.n(i),c=function(e){e.footerText;return o.a.createElement("footer",{className:"cm-footer"},o.a.createElement("div",{className:"footer-content"},o.a.createElement("h2",null,"Jolong Park Fun Run"),o.a.createElement("div",{className:"footer-column footer-col-1"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(n.a,{to:"/"},"Home")),o.a.createElement("li",null,o.a.createElement(n.a,{to:"/registration"},"Registration")),o.a.createElement("li",null,o.a.createElement(n.a,{to:"/event-details"},"Event Details")),o.a.createElement("li",null,o.a.createElement(n.a,{to:"/course-details"},"Course")))),o.a.createElement("div",{className:"footer-column footer-col-2"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(n.a,{to:"/training"},"Training")),o.a.createElement("li",null,o.a.createElement(n.a,{to:"/results"},"Results")),o.a.createElement("li",null,o.a.createElement(n.a,{to:"/faqs"},"FAQs")),o.a.createElement("li",null,o.a.createElement(n.a,{to:"/contacts"},"Contacts"))))))};c.propTypes={footerText:l.a.string},c.defaultProps={footerText:""},t.a=c},159:function(e,t){},160:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children;return r.a.createElement("div",{className:"cm-rich-text"},t)}},161:function(e,t,a){"use strict";var n=a(7),r=a.n(n),l=a(4),i=a.n(l),o=a(0),c=a.n(o),s=a(152),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return c.a.createElement("div",{className:"cm-logo"},c.a.createElement(s.a,{to:"/",className:"vsa-block-link"}))},t}(c.a.Component),m=a(35),p=a.n(m),d=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={menuDisplayed:!1},a.handleClick=a.handleClick.bind(p()(a)),a}r()(t,e);var a=t.prototype;return a.handleClick=function(){this.setState({menuDisplayed:!this.state.menuDisplayed})},a.render=function(){return c.a.createElement("div",{className:"cm-nav-links"},c.a.createElement("div",{className:"mobile-menu-icon",onClick:this.handleClick}),c.a.createElement("div",{className:"nav-wrapper visible-"+this.state.menuDisplayed},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(s.a,{to:"/registration"},"Registration")),c.a.createElement("li",null,c.a.createElement(s.a,{to:"/event-details"},"Event Details")),c.a.createElement("li",null,c.a.createElement(s.a,{to:"/course-details"},"Course")),c.a.createElement("li",null,c.a.createElement(s.a,{to:"/training"},"Training")),c.a.createElement("li",null,c.a.createElement(s.a,{to:"/results"},"Results")),c.a.createElement("li",null,c.a.createElement(s.a,{to:"/contacts"},"Contacts")))))},t}(c.a.Component),f=function(e){e.siteTitle;return c.a.createElement("div",{className:"cm-social-links"},c.a.createElement("div",{className:"link-wrapper"},c.a.createElement("div",{className:"social-link facebook"},c.a.createElement("a",{className:"vsa-block-link",href:"https://www.facebook.com/melbournepack/"},"Facebook")),c.a.createElement("div",{className:"social-link instagram"},c.a.createElement("a",{className:"vsa-block-link",href:"https://www.instagram.com/melbournepack_run/"},"Instagram"))))};f.propTypes={socialLinks:i.a.array},f.defaultProps={linkData:["facebook","instagram"]};var h=f,E=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.handleScroll=function(){var e;e=document.getElementById("menu-bar"),window.scrollY>10?e.classList.add("scrolled"):e.classList.remove("scrolled")},a.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},a.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},a.render=function(){return c.a.createElement("nav",{className:"cm-menu-bar",id:"menu-bar"},c.a.createElement(u,null),c.a.createElement(d,null),c.a.createElement(h,null))},t}(c.a.Component);E.propTypes={navLinkData:i.a.object,socialLinkData:i.a.object},E.defaultProps={navLinkData:{},socialLinkData:{}};t.a=E},162:function(e,t,a){"use strict";a(36);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),o=a(154),c=a(156),s=a(161),u=a(158),m=(a(165),a(159),function(e){var t=e.pageTitle,a=e.children;return r.a.createElement("div",{className:"page-wrapper"},r.a.createElement(o.a,{title:t}),r.a.createElement(s.a,null),r.a.createElement(c.a,{bannerType:"content-page-banner",bannerTitle:t}),r.a.createElement("main",{className:"page-content"},r.a.createElement("div",{className:"cm-content-wrapper pg-"+t.replace(" ","-").toLowerCase(),id:"main-content"},a)),r.a.createElement(u.a,null))});m.propTypes={pageTitle:i.a.string},m.defaultProps={pageTitle:"Page Title"},t.a=m}}]);
//# sourceMappingURL=component---src-pages-training-js-4af9e71aff578350f4d8.js.map