(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{151:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(152),o=a(154),c=a(161),i=a(156),s=function(e){var t=e.children,a=e.linkURL;return r.a.createElement("div",{className:"cm-content-tile"},r.a.createElement("div",{className:"tile-wrapper sponsor-1"},r.a.createElement("a",{href:a},t)))},m=function(e){e.siteTitle;return r.a.createElement("div",{className:"cm-content-tiles"},r.a.createElement(s,{linkURL:"https://www.melbournepack.com.au/"},r.a.createElement("img",{src:"static/media/images/sponsor-logo-melbourne-pack.png",alt:"Melbourne Pack Logo"})),r.a.createElement(s,{linkURL:"http://www.32gi.com.au/"},r.a.createElement("img",{src:"static/media/images/sponsor-logo-32gi.png",alt:"32GI Logo"})),r.a.createElement(s,{linkURL:"http://runfuntravel.com/"},r.a.createElement("img",{src:"static/media/images/sponsor-logo-run-fun-travel.png",alt:"Run Fun Travel Logo"})),r.a.createElement(s,{linkURL:"https://www.newbalance.com.au/"},r.a.createElement("img",{src:"static/media/images/sponsor-logo-new-balance.svg",alt:"New Balance Logo"})),r.a.createElement(s,{linkURL:"https://eatandrun.com.au/"},r.a.createElement("img",{src:"static/media/images/sponsor-logo-eat-and-run.png",alt:"Eat and Run Logo"})))},u=a(158),p=a(160),d=a(164);a(165),a(159),t.default=function(){return r.a.createElement("div",{className:"page-wrapper"},r.a.createElement(o.a,{title:"Home"}),r.a.createElement(c.a,null),r.a.createElement(i.a,{bannerType:"home-page-banner",bannerTitle:"Jolong Park Fun Run",bannerText:"Come join in a 6.6km or 2.2km fun run with a difference.<br/>Run on a turf horse racing track in rural Bangholme in Southside Melbourne.<br/>Choose from two races; one lap for a distance of 2.2 km or three laps for a distance of 6.6 km.",bannerLinkURL:"/registration",bannerLinkText:"Register",bannerHasCarousel:!0}),r.a.createElement(m,null),r.a.createElement("main",{className:"page-content home-page"},r.a.createElement("div",{className:"cm-content-wrapper",id:"main-content"},r.a.createElement(p.a,null,r.a.createElement(d.a,null,r.a.createElement("h1",null,"Jolong Park Fun Run"),r.a.createElement("p",null,"Come join in a 6.6km or 2.2km fun run with a difference.",r.a.createElement("br",null),"Run on a turf horse racing track in rural Bangholme in Southside Melbourne.",r.a.createElement("br",null),"Choose from two races; one lap for a distance of 2.2 km or three laps for a distance of 6.6 km.")),r.a.createElement(d.a,null,r.a.createElement("h3",null,"Race Distances"),r.a.createElement("p",null,"Short Distance: 2.2km (One Lap)",r.a.createElement("br",null),"Long Distance: 6.6km (Three Laps)")),r.a.createElement(d.a,null,r.a.createElement("h3",null,"Location"),r.a.createElement("h4",{style:{color:"#555"}},"Address: Jolong Park, 88-128 Riverend Road, Bangholme, Victoria"),r.a.createElement("p",null,"(Just 2km from Chelsea train station, Just off the Peninsula link freeway)")),r.a.createElement(d.a,null,r.a.createElement("h3",null,"Key Dates"),r.a.createElement("p",null,"Registration Opens: ",r.a.createElement(l.a,{to:"/registration"},"Currently open!"),r.a.createElement("br",null),r.a.createElement("br",null),"Late Entry Cutoff: Saturday, November 9th 2019",r.a.createElement("br",null),"(Entries after this point will incur an additional late fee)",r.a.createElement("br",null),r.a.createElement("br",null),"Event Day: Sunday, November 10th 2019",r.a.createElement("br",null),r.a.createElement("br",null),"Results published: November 20th 2019"))))),r.a.createElement(u.a,null))}},152:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(4),o=a.n(l),c=a(33),i=a.n(c);a.d(t,"a",function(){return i.a});a(153),r.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},153:function(e,t,a){var n;e.exports=(n=a(157))&&n.default||n},154:function(e,t,a){"use strict";var n=a(155),r=a(0),l=a.n(r),o=a(4),c=a.n(o),i=a(163),s=a.n(i);function m(e){var t=e.description,a=e.lang,r=e.meta,o=e.title,c=n.data.site,i=t||c.siteMetadata.description;return l.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:i},{property:"og:title",content:o},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:i}].concat(r)})}m.defaultProps={lang:"en",meta:[],description:""},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),title:c.a.string.isRequired},t.a=m},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Jolong Fun Run",description:"Come join  in a fun run with a difference. Run on a 2.2km turf horse racing track in rural Bangholme in Southside Melbourne.",author:""}}}}},156:function(e,t,a){"use strict";var n=a(7),r=a.n(n),l=a(0),o=a.n(l),c=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={backgroundNumber:1},a}r()(t,e);var a=t.prototype;return a.handleClick=function(e){var t=2,a=this.state.backgroundNumber;function n(e){return e=(e=e<1?e=t:e)>t?e=1:e}"right"===e?(a=n(++a),this.setState({backgroundNumber:a})):"left"===e&&(a=n(--a),this.setState({backgroundNumber:a}))},a.render=function(){var e=this;return o.a.createElement("header",{className:"cm-hero-banner "+this.props.bannerType+" background-"+this.state.backgroundNumber,id:"page-banner"},o.a.createElement("div",{className:"hero-banner-content"},o.a.createElement("h1",null,this.props.bannerTitle),o.a.createElement("p",null,"Come join in a 6.6km or 2.2km fun run with a difference.",o.a.createElement("br",null),"Run on a turf horse racing track in rural Bangholme in Southside Melbourne.",o.a.createElement("br",null),"Choose from two races of either one or three laps of the track."),"home-page-banner"===this.props.bannerType&&this.props.bannerLinkText&&this.props.bannerLinkURL?o.a.createElement("a",{href:this.props.bannerLinkURL,className:"cta cta-primary"},this.props.bannerLinkText):""),this.props.bannerHasCarousel?o.a.createElement("div",{className:"hero-banner-carousel-controls"},o.a.createElement("div",{className:"carousel-control scroll-left",onClick:function(){return e.handleClick("left")}}),o.a.createElement("div",{className:"carousel-control scroll-right",onClick:function(){return e.handleClick("right")}})):"","home-page-banner"===this.props.bannerType?o.a.createElement("div",{className:"hero-banner-next"},o.a.createElement("a",{href:"#main-content",className:"vsa-block-link"},"Link to Content")):"")},t}(o.a.Component);t.a=c},157:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),o=a.n(l),c=a(55),i=a(2),s=function(e){var t=e.location,a=i.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},158:function(e,t,a){"use strict";var n=a(152),r=a(4),l=a.n(r),o=a(0),c=a.n(o),i=function(e){e.footerText;return c.a.createElement("footer",{className:"cm-footer"},c.a.createElement("div",{className:"footer-content"},c.a.createElement("h2",null,"Jolong Park Fun Run"),c.a.createElement("div",{className:"footer-column footer-col-1"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(n.a,{to:"/"},"Home")),c.a.createElement("li",null,c.a.createElement(n.a,{to:"/registration"},"Registration")),c.a.createElement("li",null,c.a.createElement(n.a,{to:"/event-details"},"Event Details")),c.a.createElement("li",null,c.a.createElement(n.a,{to:"/course-details"},"Course")))),c.a.createElement("div",{className:"footer-column footer-col-2"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(n.a,{to:"/training"},"Training")),c.a.createElement("li",null,c.a.createElement(n.a,{to:"/results"},"Results")),c.a.createElement("li",null,c.a.createElement(n.a,{to:"/faqs"},"FAQs")),c.a.createElement("li",null,c.a.createElement(n.a,{to:"/contacts"},"Contacts"))))))};i.propTypes={footerText:l.a.string},i.defaultProps={footerText:""},t.a=i},159:function(e,t){},160:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children;return r.a.createElement("div",{className:"cm-rich-text"},t)}},161:function(e,t,a){"use strict";var n=a(7),r=a.n(n),l=a(4),o=a.n(l),c=a(0),i=a.n(c),s=a(152),m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("div",{className:"cm-logo"},i.a.createElement(s.a,{to:"/",className:"vsa-block-link"}))},t}(i.a.Component),u=a(35),p=a.n(u),d=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={menuDisplayed:!1},a.handleClick=a.handleClick.bind(p()(a)),a}r()(t,e);var a=t.prototype;return a.handleClick=function(){this.setState({menuDisplayed:!this.state.menuDisplayed})},a.render=function(){return i.a.createElement("div",{className:"cm-nav-links"},i.a.createElement("div",{className:"mobile-menu-icon",onClick:this.handleClick}),i.a.createElement("div",{className:"nav-wrapper visible-"+this.state.menuDisplayed},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(s.a,{to:"/registration"},"Registration")),i.a.createElement("li",null,i.a.createElement(s.a,{to:"/event-details"},"Event Details")),i.a.createElement("li",null,i.a.createElement(s.a,{to:"/course-details"},"Course")),i.a.createElement("li",null,i.a.createElement(s.a,{to:"/training"},"Training")),i.a.createElement("li",null,i.a.createElement(s.a,{to:"/results"},"Results")),i.a.createElement("li",null,i.a.createElement(s.a,{to:"/contacts"},"Contacts")))))},t}(i.a.Component),E=function(e){e.siteTitle;return i.a.createElement("div",{className:"cm-social-links"},i.a.createElement("div",{className:"link-wrapper"},i.a.createElement("div",{className:"social-link facebook"},i.a.createElement("a",{className:"vsa-block-link",href:"https://www.facebook.com/melbournepack/"},"Facebook")),i.a.createElement("div",{className:"social-link instagram"},i.a.createElement("a",{className:"vsa-block-link",href:"https://www.instagram.com/melbournepack_run/"},"Instagram"))))};E.propTypes={socialLinks:o.a.array},E.defaultProps={linkData:["facebook","instagram"]};var h=E,f=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.handleScroll=function(){var e;e=document.getElementById("menu-bar"),window.scrollY>10?e.classList.add("scrolled"):e.classList.remove("scrolled")},a.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},a.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},a.render=function(){return i.a.createElement("nav",{className:"cm-menu-bar",id:"menu-bar"},i.a.createElement(m,null),i.a.createElement(d,null),i.a.createElement(h,null))},t}(i.a.Component);f.propTypes={navLinkData:o.a.object,socialLinkData:o.a.object},f.defaultProps={navLinkData:{},socialLinkData:{}};t.a=f},164:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children,a=e.classes;return r.a.createElement("div",{className:"text-group "+a},t)}}}]);
//# sourceMappingURL=component---src-pages-index-js-7f6c2b43552242698215.js.map