(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{151:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(154),c=a(161),i=a(156),o=a(4),s=a.n(o),m=function(e){e.siteTitle;return r.a.createElement("div",{className:"cm-content-tile"},r.a.createElement("div",{className:"tile-wrapper sponsor-1"},r.a.createElement("img",{src:"static/media/images/sponsor-placeholder.png",alt:"sponsor-1"})))};m.propTypes={tileImage:s.a.string},m.defaultProps={tileImage:""};var u=m,p=function(e){e.siteTitle;return r.a.createElement("div",{className:"cm-content-tiles"},r.a.createElement(u,null),r.a.createElement(u,null),r.a.createElement(u,null),r.a.createElement(u,null),r.a.createElement(u,null),r.a.createElement(u,null))};p.propTypes={tileCount:s.a.string},p.defaultProps={tileCount:"4"};var d=p,E=a(158),h=a(160),f=a(164);a(165),a(159),t.default=function(){return r.a.createElement("div",{className:"page-wrapper"},r.a.createElement(l.a,{title:"Home"}),r.a.createElement(c.a,null),r.a.createElement(i.a,{bannerType:"home-page-banner",bannerTitle:"Jolong Park Fun Run",bannerText:"Insert text here",bannerLinkURL:"/registration",bannerLinkText:"Register",bannerHasCarousel:!0}),r.a.createElement(d,null),r.a.createElement("main",{className:"page-content home-page"},r.a.createElement("div",{className:"cm-content-wrapper",id:"main-content"},r.a.createElement(h.a,null,r.a.createElement(f.a,null,r.a.createElement("h1",null,"Jolong Park Fun Run"),r.a.createElement("p",{className:"vsa-center-text"},"Come join  in a fun run with a difference.",r.a.createElement("br",null),"Run on a 2.2km turf horse racing track in rural Bangholme in Southside Melbourne.",r.a.createElement("br",null),"Choose from two distances; one lap for a distance of 2.2 km or three laps for a distance of 6.6 km.")),r.a.createElement(f.a,null,r.a.createElement("h3",null,"Race Distances"),r.a.createElement("p",null,"Short Distaince: 2.2km (One Lap)",r.a.createElement("br",null),"Long Distaince: 6.6km (Three Laps)")),r.a.createElement(f.a,null,r.a.createElement("h3",null,"Location"),r.a.createElement("h4",{style:{color:"#555"}},"Address: Jolong Park, 88-128 Riverend Road, Bangholme, Victoria"),r.a.createElement("p",null,"(it is just 2km from Chelsea train station, Just off the Peninsula link freeway)")),r.a.createElement(f.a,null,r.a.createElement("h3",null,"Key Dates"),r.a.createElement("p",null,"Registration Opens: 01/01/1901",r.a.createElement("br",null),"Registration Closes: 02/02/1902",r.a.createElement("br",null),"Race Days: 03/03/1903",r.a.createElement("br",null),"Results published: 04/04/1904"))))),r.a.createElement(E.a,null))}},152:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(4),c=a.n(l),i=a(33),o=a.n(i);a.d(t,"a",function(){return o.a});a(153),r.a.createContext({});c.a.object,c.a.string.isRequired,c.a.func,c.a.func},153:function(e,t,a){var n;e.exports=(n=a(157))&&n.default||n},154:function(e,t,a){"use strict";var n=a(155),r=a(0),l=a.n(r),c=a(4),i=a.n(c),o=a(163),s=a.n(o);function m(e){var t=e.description,a=e.lang,r=e.meta,c=e.title,i=n.data.site,o=t||i.siteMetadata.description;return l.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:c},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:o}].concat(r)})}m.defaultProps={lang:"en",meta:[],description:""},m.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.arrayOf(i.a.object),title:i.a.string.isRequired},t.a=m},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Jolong Fun Run",description:"Come join  in a fun run with a difference. Run on a 2.2km turf horse racing track in rural Bangholme in Southside Melbourne.",author:"Nik Malyaris - nikmaly@gmail.com"}}}}},156:function(e,t,a){"use strict";var n=a(7),r=a.n(n),l=a(0),c=a.n(l),i=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={backgroundNumber:0},a}r()(t,e);var a=t.prototype;return a.handleClick=function(e){var t=5,a=this.state.backgroundNumber;function n(e){return e=(e=e<0?e=t:e)>t?e=0:e}"right"===e?(a=n(++a),this.setState({backgroundNumber:a})):"left"===e&&(a=n(--a),this.setState({backgroundNumber:a}))},a.render=function(){var e=this;return c.a.createElement("header",{className:"cm-hero-banner "+this.props.bannerType+" background-"+this.state.backgroundNumber,id:"page-banner"},c.a.createElement("div",{className:"hero-banner-content"},c.a.createElement("h1",null,this.props.bannerTitle),this.props.bannerText?c.a.createElement("p",null,this.props.bannerText):"","home-page-banner"===this.props.bannerType&&this.props.bannerLinkText&&this.props.bannerLinkURL?c.a.createElement("a",{href:this.props.bannerLinkURL,className:"cta cta-primary"},this.props.bannerLinkText):""),this.props.bannerHasCarousel?c.a.createElement("div",{className:"hero-banner-carousel-controls"},c.a.createElement("div",{className:"carousel-control scroll-left",onClick:function(){return e.handleClick("left")}}),c.a.createElement("div",{className:"carousel-control scroll-right",onClick:function(){return e.handleClick("right")}})):"","home-page-banner"===this.props.bannerType?c.a.createElement("div",{className:"hero-banner-next"},c.a.createElement("a",{href:"#main-content",className:"vsa-block-link"},"Link to Content")):"")},t}(c.a.Component);t.a=i},157:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),c=a.n(l),i=a(55),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},158:function(e,t,a){"use strict";var n=a(152),r=a(4),l=a.n(r),c=a(0),i=a.n(c),o=function(e){e.footerText;return i.a.createElement("footer",{className:"cm-footer"},i.a.createElement("div",{className:"footer-content"},i.a.createElement("h2",null,"Jolong Park Fun Run"),i.a.createElement("div",{className:"footer-column footer-col-1"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(n.a,{to:"/"},"Home")),i.a.createElement("li",null,i.a.createElement(n.a,{to:"/registration"},"Registration")),i.a.createElement("li",null,i.a.createElement(n.a,{to:"/event-details"},"Event Details")),i.a.createElement("li",null,i.a.createElement(n.a,{to:"/course-details"},"Course")))),i.a.createElement("div",{className:"footer-column footer-col-2"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(n.a,{to:"/training"},"Training")),i.a.createElement("li",null,i.a.createElement(n.a,{to:"/results"},"Results")),i.a.createElement("li",null,i.a.createElement(n.a,{to:"/faqs"},"FAQs")),i.a.createElement("li",null,i.a.createElement(n.a,{to:"/contacts"},"Contacts"))))))};o.propTypes={footerText:l.a.string},o.defaultProps={footerText:""},t.a=o},159:function(e,t){},160:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children;return r.a.createElement("div",{className:"cm-rich-text"},t)}},161:function(e,t,a){"use strict";var n=a(7),r=a.n(n),l=a(152),c=a(4),i=a.n(c),o=a(0),s=a.n(o),m=a(35),u=a.n(m),p=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={menuDisplayed:!1},a.handleClick=a.handleClick.bind(u()(a)),a}r()(t,e);var a=t.prototype;return a.handleClick=function(){this.setState({menuDisplayed:!this.state.menuDisplayed})},a.render=function(){return s.a.createElement("div",{className:"cm-nav-links"},s.a.createElement("div",{className:"mobile-menu-icon",onClick:this.handleClick}),s.a.createElement("div",{className:"nav-wrapper visible-"+this.state.menuDisplayed},s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement(l.a,{to:"/registration"},"Registration")),s.a.createElement("li",null,s.a.createElement(l.a,{to:"/event-details"},"Event Details")),s.a.createElement("li",null,s.a.createElement(l.a,{to:"/course-details"},"Course")),s.a.createElement("li",null,s.a.createElement(l.a,{to:"/training"},"Training")),s.a.createElement("li",null,s.a.createElement(l.a,{to:"/results"},"Results")),s.a.createElement("li",null,s.a.createElement(l.a,{to:"/faqs"},"FAQs")),s.a.createElement("li",null,s.a.createElement(l.a,{to:"/contacts"},"Contacts")))))},t}(s.a.Component),d=function(e){e.siteTitle;return s.a.createElement("div",{className:"cm-social-links"},s.a.createElement("div",{className:"link-wrapper"},s.a.createElement("div",{className:"social-link facebook"},s.a.createElement("a",{className:"vsa-block-link",href:"https://facebook.com"},"Facebook")),s.a.createElement("div",{className:"social-link instagram"},s.a.createElement("a",{className:"vsa-block-link",href:"https://instagram.com"},"Instagram"))))};d.propTypes={socialLinks:i.a.array},d.defaultProps={linkData:["facebook","instagram"]};var E=d,h=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.handleScroll=function(){var e;e=document.getElementById("menu-bar"),window.scrollY>10?e.classList.add("scrolled"):e.classList.remove("scrolled")},a.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},a.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},a.render=function(){return s.a.createElement("nav",{className:"cm-menu-bar",id:"menu-bar"},s.a.createElement("div",{className:"logo"},s.a.createElement(l.a,{to:"/",className:"vsa-block-link"},"Home")),s.a.createElement(p,null),s.a.createElement(E,null))},t}(s.a.Component);h.propTypes={navLinkData:i.a.object,socialLinkData:i.a.object},h.defaultProps={navLinkData:{},socialLinkData:{}};t.a=h},164:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children,a=e.classes;return r.a.createElement("div",{className:"text-group "+a},t)}}}]);
//# sourceMappingURL=component---src-pages-index-js-d731f2e7209eb4aa346f.js.map