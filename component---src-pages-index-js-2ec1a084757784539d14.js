(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{151:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(152),c=a(154),o=a(161),i=a(156),s=function(e){var t=e.children,a=e.linkURL;return r.a.createElement("div",{className:"cm-content-tile"},r.a.createElement("div",{className:"tile-wrapper sponsor-1"},r.a.createElement("a",{href:a},t)))},m=function(e){e.siteTitle;return r.a.createElement("div",{className:"cm-content-tiles"},r.a.createElement(s,{linkURL:"https://www.melbournepack.com.au/"},r.a.createElement("img",{src:"static/media/images/sponsor-logo-melbourne-pack.png",alt:"Melbourne Pack Logo"})),r.a.createElement(s,{linkURL:"http://www.32gi.com.au/"},r.a.createElement("img",{src:"static/media/images/sponsor-logo-32gi.png",alt:"32GI Logo"})),r.a.createElement(s,{linkURL:"http://runfuntravel.com/"},r.a.createElement("img",{src:"static/media/images/sponsor-logo-run-fun-travel.png",alt:"Run Fun Travel Logo"})),r.a.createElement(s,{linkURL:"https://www.newbalance.com.au/"},r.a.createElement("img",{src:"static/media/images/sponsor-logo-new-balance.svg",alt:"New Balance Logo"})),r.a.createElement(s,{linkURL:"https://eatandrun.com.au/"},r.a.createElement("img",{src:"static/media/images/sponsor-logo-eat-and-run.png",alt:"Eat and Run Logo"})))},u=a(158),p=a(160),d=a(164);a(165),a(159),t.default=function(){return r.a.createElement("div",{className:"page-wrapper"},r.a.createElement(c.a,{title:"Home"}),r.a.createElement(o.a,null),r.a.createElement(i.a,{bannerType:"home-page-banner",bannerTitle:"Jolong Park Fun Run",bannerText:"Come join in a 6.6km or 2.2km fun run with a difference.",bannerLinkURL:"/registration",bannerLinkText:"Register",bannerHasCarousel:!0}),r.a.createElement(m,null),r.a.createElement("main",{className:"page-content home-page"},r.a.createElement("div",{className:"cm-content-wrapper",id:"main-content"},r.a.createElement(p.a,null,r.a.createElement(d.a,null,r.a.createElement("h1",null,"Jolong Park Fun Run"),r.a.createElement("p",null,"Come join in a 6.6km or 2.2km fun run with a difference.",r.a.createElement("br",null),"Run on a turf horse racing track in rural Bangholme in Southside Melbourne.",r.a.createElement("br",null),"Choose from two races; one lap for a distance of 2.2 km or three laps for a distance of 6.6 km.")),r.a.createElement(d.a,null,r.a.createElement("h3",null,"Race Distances"),r.a.createElement("p",null,"Short Distaince: 2.2km (One Lap)",r.a.createElement("br",null),"Long Distaince: 6.6km (Three Laps)")),r.a.createElement(d.a,null,r.a.createElement("h3",null,"Location"),r.a.createElement("h4",{style:{color:"#555"}},"Address: Jolong Park, 88-128 Riverend Road, Bangholme, Victoria"),r.a.createElement("p",null,"(Just 2km from Chelsea train station, Just off the Peninsula link freeway)")),r.a.createElement(d.a,null,r.a.createElement("h3",null,"Key Dates"),r.a.createElement("p",null,"Registration Opens: ",r.a.createElement(l.a,{to:"/registration"},"Currently open!"),r.a.createElement("br",null),r.a.createElement("br",null),"Late Entry Cutoff: Saturday, November 9th 2019",r.a.createElement("br",null),"(Entries after this point will incur an additional late fee)",r.a.createElement("br",null),r.a.createElement("br",null),"Event Day: Sunday, November 10th 2019",r.a.createElement("br",null),r.a.createElement("br",null),"Results published: November 20th 2019"))))),r.a.createElement(u.a,null))}},152:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(4),c=a.n(l),o=a(33),i=a.n(o);a.d(t,"a",function(){return i.a});a(153),r.a.createContext({});c.a.object,c.a.string.isRequired,c.a.func,c.a.func},153:function(e,t,a){var n;e.exports=(n=a(157))&&n.default||n},154:function(e,t,a){"use strict";var n=a(155),r=a(0),l=a.n(r),c=a(4),o=a.n(c),i=a(163),s=a.n(i);function m(e){var t=e.description,a=e.lang,r=e.meta,c=e.title,o=n.data.site,i=t||o.siteMetadata.description;return l.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:i},{property:"og:title",content:c},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:i}].concat(r)})}m.defaultProps={lang:"en",meta:[],description:""},m.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),title:o.a.string.isRequired},t.a=m},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Jolong Fun Run",description:"Come join  in a fun run with a difference. Run on a 2.2km turf horse racing track in rural Bangholme in Southside Melbourne.",author:"Nik Malyaris - nikmaly@gmail.com"}}}}},156:function(e,t,a){"use strict";var n=a(7),r=a.n(n),l=a(0),c=a.n(l),o=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={backgroundNumber:1},a}r()(t,e);var a=t.prototype;return a.handleClick=function(e){var t=2,a=this.state.backgroundNumber;function n(e){return e=(e=e<1?e=t:e)>t?e=1:e}"right"===e?(a=n(++a),this.setState({backgroundNumber:a})):"left"===e&&(a=n(--a),this.setState({backgroundNumber:a}))},a.render=function(){var e=this;return c.a.createElement("header",{className:"cm-hero-banner "+this.props.bannerType+" background-"+this.state.backgroundNumber,id:"page-banner"},c.a.createElement("div",{className:"hero-banner-content"},c.a.createElement("h1",null,this.props.bannerTitle),this.props.bannerText?c.a.createElement("p",null,this.props.bannerText):"","home-page-banner"===this.props.bannerType&&this.props.bannerLinkText&&this.props.bannerLinkURL?c.a.createElement("a",{href:this.props.bannerLinkURL,className:"cta cta-primary"},this.props.bannerLinkText):""),this.props.bannerHasCarousel?c.a.createElement("div",{className:"hero-banner-carousel-controls"},c.a.createElement("div",{className:"carousel-control scroll-left",onClick:function(){return e.handleClick("left")}}),c.a.createElement("div",{className:"carousel-control scroll-right",onClick:function(){return e.handleClick("right")}})):"","home-page-banner"===this.props.bannerType?c.a.createElement("div",{className:"hero-banner-next"},c.a.createElement("a",{href:"#main-content",className:"vsa-block-link"},"Link to Content")):"")},t}(c.a.Component);t.a=o},157:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),c=a.n(l),o=a(55),i=a(2),s=function(e){var t=e.location,a=i.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},158:function(e,t,a){"use strict";var n=a(152),r=a(4),l=a.n(r),c=a(0),o=a.n(c),i=function(e){e.footerText;return o.a.createElement("footer",{className:"cm-footer"},o.a.createElement("div",{className:"footer-content"},o.a.createElement("h2",null,"Jolong Park Fun Run"),o.a.createElement("div",{className:"footer-column footer-col-1"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(n.a,{to:"/"},"Home")),o.a.createElement("li",null,o.a.createElement(n.a,{to:"/registration"},"Registration")),o.a.createElement("li",null,o.a.createElement(n.a,{to:"/event-details"},"Event Details")),o.a.createElement("li",null,o.a.createElement(n.a,{to:"/course-details"},"Course")))),o.a.createElement("div",{className:"footer-column footer-col-2"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(n.a,{to:"/training"},"Training")),o.a.createElement("li",null,o.a.createElement(n.a,{to:"/results"},"Results")),o.a.createElement("li",null,o.a.createElement(n.a,{to:"/faqs"},"FAQs")),o.a.createElement("li",null,o.a.createElement(n.a,{to:"/contacts"},"Contacts"))))))};i.propTypes={footerText:l.a.string},i.defaultProps={footerText:""},t.a=i},159:function(e,t){},160:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children;return r.a.createElement("div",{className:"cm-rich-text"},t)}},161:function(e,t,a){"use strict";var n=a(7),r=a.n(n),l=a(4),c=a.n(l),o=a(0),i=a.n(o),s=a(152),m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("div",{className:"cm-logo"},i.a.createElement(s.a,{to:"/",className:"vsa-block-link"}))},t}(i.a.Component),u=a(35),p=a.n(u),d=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={menuDisplayed:!1},a.handleClick=a.handleClick.bind(p()(a)),a}r()(t,e);var a=t.prototype;return a.handleClick=function(){this.setState({menuDisplayed:!this.state.menuDisplayed})},a.render=function(){return i.a.createElement("div",{className:"cm-nav-links"},i.a.createElement("div",{className:"mobile-menu-icon",onClick:this.handleClick}),i.a.createElement("div",{className:"nav-wrapper visible-"+this.state.menuDisplayed},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(s.a,{to:"/registration"},"Registration")),i.a.createElement("li",null,i.a.createElement(s.a,{to:"/event-details"},"Event Details")),i.a.createElement("li",null,i.a.createElement(s.a,{to:"/course-details"},"Course")),i.a.createElement("li",null,i.a.createElement(s.a,{to:"/training"},"Training")),i.a.createElement("li",null,i.a.createElement(s.a,{to:"/results"},"Results")),i.a.createElement("li",null,i.a.createElement(s.a,{to:"/faqs"},"FAQs")),i.a.createElement("li",null,i.a.createElement(s.a,{to:"/contacts"},"Contacts")))))},t}(i.a.Component),E=function(e){e.siteTitle;return i.a.createElement("div",{className:"cm-social-links"},i.a.createElement("div",{className:"link-wrapper"},i.a.createElement("div",{className:"social-link facebook"},i.a.createElement("a",{className:"vsa-block-link",href:"https://facebook.com"},"Facebook")),i.a.createElement("div",{className:"social-link instagram"},i.a.createElement("a",{className:"vsa-block-link",href:"https://instagram.com"},"Instagram"))))};E.propTypes={socialLinks:c.a.array},E.defaultProps={linkData:["facebook","instagram"]};var h=E,f=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.handleScroll=function(){var e;e=document.getElementById("menu-bar"),window.scrollY>10?e.classList.add("scrolled"):e.classList.remove("scrolled")},a.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},a.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},a.render=function(){return i.a.createElement("nav",{className:"cm-menu-bar",id:"menu-bar"},i.a.createElement(m,null),i.a.createElement(d,null),i.a.createElement(h,null))},t}(i.a.Component);f.propTypes={navLinkData:c.a.object,socialLinkData:c.a.object},f.defaultProps={navLinkData:{},socialLinkData:{}};t.a=f},164:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children,a=e.classes;return r.a.createElement("div",{className:"text-group "+a},t)}}}]);
//# sourceMappingURL=component---src-pages-index-js-2ec1a084757784539d14.js.map