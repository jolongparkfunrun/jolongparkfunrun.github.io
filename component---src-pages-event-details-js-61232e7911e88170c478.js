(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{145:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(162),i=t(160),c=t(164);a.default=function(){return l.a.createElement(r.a,{pageTitle:"Event Details"},l.a.createElement(i.a,null,l.a.createElement(c.a,null,l.a.createElement("h3",null,"Bib Collection"),l.a.createElement("p",null,"Friday afternoon and Saturday morning at Jolong Park.")),l.a.createElement(c.a,null,l.a.createElement("h3",null,"Event Times"),l.a.createElement("p",null,"2.2km starts at 8.15am, 6.6km starts at 8.30am. he start/finish line is at the same place on the horse track near the main entrance.")),l.a.createElement(c.a,null,l.a.createElement("h3",null,"Car Parking"),l.a.createElement("p",null,"2.2km starts at 8.15am, 6.6km starts at 8.30am. he start/finish line is at the same place on the horse track near the main entrance.")),l.a.createElement(c.a,null,l.a.createElement("h3",null,"Food and Drink"),l.a.createElement("p",null,"Water will be provided at the finish of each 2.2km loop. An assortment of food and drinks will be for sale on the day.")),l.a.createElement(c.a,null,l.a.createElement("h3",null,"Presentations"),l.a.createElement("p",null,"Presentation of awards will commence at 10.00am under a large shelter near the finish line.")),l.a.createElement(c.a,null,l.a.createElement("h3",null,"Prizes:"),l.a.createElement("p",null,"Medals and the $400 prize money ($200 for the 1st Male and 1st Female in 6.6km).",l.a.createElement("br",null),"Sponsor's Prizes and/or Medals for Placegetters in following categories:"),l.a.createElement("div",{className:"aside-group"},l.a.createElement("h4",null,"2.2 km",l.a.createElement("br",null),"1st, 2nd and 3rd"),l.a.createElement("ul",null,l.a.createElement("li",null,"Open Male and Female"),l.a.createElement("li",null,"45+ Male and Female"),l.a.createElement("li",null,"u/18 Male and Female"),l.a.createElement("li",null,"u/15 Male and Female"),l.a.createElement("li",null,"u/12 Male and Female"))),l.a.createElement("div",{className:"aside-group"},l.a.createElement("h4",null,"6.6 km",l.a.createElement("br",null),"1st, 2nd and 3rd"),l.a.createElement("ul",null,l.a.createElement("li",null,"Open Male and Female"),l.a.createElement("li",null,"45+ Male and Female"),l.a.createElement("li",null,"u/18 Male and Female"),l.a.createElement("li",null,"u/15 Male and Female"),l.a.createElement("li",null,"u/12 Male and Female"),l.a.createElement("li",null,"u/9 Male and Female"))))))}},152:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(4),i=t.n(r),c=t(33),s=t.n(c);t.d(a,"a",function(){return s.a});t(153),l.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},153:function(e,a,t){var n;e.exports=(n=t(157))&&n.default||n},154:function(e,a,t){"use strict";var n=t(155),l=t(0),r=t.n(l),i=t(4),c=t.n(i),s=t(163),o=t.n(s);function m(e){var a=e.description,t=e.lang,l=e.meta,i=e.title,c=n.data.site,s=a||c.siteMetadata.description;return r.a.createElement(o.a,{htmlAttributes:{lang:t},title:i,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:i},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:s}].concat(l)})}m.defaultProps={lang:"en",meta:[],description:""},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),title:c.a.string.isRequired},a.a=m},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Jolong Fun Run",description:"Come join  in a fun run with a difference. Run on a 2.2km turf horse racing track in rural Bangholme in Southside Melbourne.",author:"Nik Malyaris - nikmaly@gmail.com"}}}}},156:function(e,a,t){"use strict";var n=t(7),l=t.n(n),r=(t(4),t(0)),i=t.n(r),c=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={backgroundNumber:0},t}l()(a,e);var t=a.prototype;return t.handleClick=function(e){var a=5,t=this.state.backgroundNumber;function n(e){return e=(e=e<0?e=a:e)>a?e=0:e}"right"===e?(t=n(++t),this.setState({backgroundNumber:t})):"left"===e&&(t=n(--t),this.setState({backgroundNumber:t}))},t.render=function(){var e=this;return i.a.createElement("div",{className:"cm-hero-banner "+this.props.bannerType+" background-"+this.state.backgroundNumber,id:"page-banner"},i.a.createElement("div",{className:"hero-banner-content"},i.a.createElement("h1",null,this.props.bannerTitle),this.props.bannerText?i.a.createElement("p",null,this.props.bannerText):"","home-page-banner"===this.props.bannerType&&this.props.bannerLinkText&&this.props.bannerLinkURL?i.a.createElement("a",{href:this.props.bannerLinkURL,className:"cta cta-primary"},this.props.bannerLinkText):""),this.props.bannerHasCarousel?i.a.createElement("div",{className:"hero-banner-carousel-controls"},i.a.createElement("div",{className:"carousel-control scroll-left",onClick:function(){return e.handleClick("left")}}),i.a.createElement("div",{className:"carousel-control scroll-right",onClick:function(){return e.handleClick("right")}})):"","home-page-banner"===this.props.bannerType?i.a.createElement("div",{className:"hero-banner-next"},i.a.createElement("a",{href:"#main-content",className:"vsa-block-link"},"Link to Content")):"")},a}(i.a.Component);a.a=c},157:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),l=t.n(n),r=t(4),i=t.n(r),c=t(55),s=t(2),o=function(e){var a=e.location,t=s.default.getResourcesForPathnameSync(a.pathname);return t?l.a.createElement(c.a,Object.assign({location:a,pageResources:t},t.json)):null};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},a.default=o},158:function(e,a,t){"use strict";var n=t(152),l=t(4),r=t.n(l),i=t(0),c=t.n(i),s=function(e){var a=e.footerText;return c.a.createElement("div",{className:"cm-footer"},c.a.createElement("div",{className:"footer-content"},"Footer ",a,c.a.createElement(n.a,{to:"/"},"Link")))};s.propTypes={footerText:r.a.string},s.defaultProps={footerText:"Footer"},a.a=s},159:function(e,a){},160:function(e,a,t){"use strict";var n=t(0),l=t.n(n);a.a=function(e){var a=e.children;return l.a.createElement("div",{className:"cm-rich-text"},a)}},161:function(e,a,t){"use strict";var n=t(7),l=t.n(n),r=t(152),i=t(4),c=t.n(i),s=t(0),o=t.n(s),m=function(e){e.siteTitle;return o.a.createElement("div",{className:"cm-nav-links"},o.a.createElement("ul",{className:"vsa-center-block"},o.a.createElement("li",null,o.a.createElement(r.a,{to:"/registration"},"Registration")),o.a.createElement("li",null,o.a.createElement(r.a,{to:"/event-details"},"Event Details")),o.a.createElement("li",null,o.a.createElement(r.a,{to:"/course-details"},"Course")),o.a.createElement("li",null,o.a.createElement(r.a,{to:"/training"},"Training")),o.a.createElement("li",null,o.a.createElement(r.a,{to:"/results"},"Results")),o.a.createElement("li",null,o.a.createElement(r.a,{to:"/faqs"},"FAQs")),o.a.createElement("li",null,o.a.createElement(r.a,{to:"/contacts"},"Contacts"))))};m.propTypes={linkData:c.a.string},m.defaultProps={linkData:""};var u=m,p=function(e){e.siteTitle;return o.a.createElement("div",{className:"cm-social-links"},o.a.createElement("div",{className:"link-wrapper"},o.a.createElement("div",{className:"social-link facebook"},o.a.createElement("a",{className:"vsa-block-link",href:"https://facebook.com"},"Facebook")),o.a.createElement("div",{className:"social-link instagram"},o.a.createElement("a",{className:"vsa-block-link",href:"https://instagram.com"},"Instagram"))))};p.propTypes={socialLinks:c.a.array},p.defaultProps={linkData:["facebook","instagram"]};var d=p,E=function(e){function a(){return e.apply(this,arguments)||this}l()(a,e);var t=a.prototype;return t.handleScroll=function(){var e;e=document.getElementById("menu-bar"),document.getElementById("page-banner"),window.scrollY>10?e.classList.add("scrolled"):e.classList.remove("scrolled")},t.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},t.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},t.render=function(){return o.a.createElement("nav",{className:"cm-menu-bar",id:"menu-bar"},o.a.createElement("div",{className:"logo"},o.a.createElement(r.a,{to:"/",className:"vsa-block-link"},"Home")),o.a.createElement(u,null),o.a.createElement(d,null))},a}(o.a.Component);E.propTypes={navLinkData:c.a.object,socialLinkData:c.a.object},E.defaultProps={navLinkData:{},socialLinkData:{}};a.a=E},162:function(e,a,t){"use strict";t(35);var n=t(0),l=t.n(n),r=t(4),i=t.n(r),c=t(154),s=t(156),o=t(161),m=t(158),u=(t(165),t(159),function(e){var a=e.pageTitle,t=e.children;return l.a.createElement("div",{className:"page-wrapper"},l.a.createElement(c.a,{title:a}),l.a.createElement(o.a,null),l.a.createElement(s.a,{bannerType:"content-page-banner",bannerTitle:a}),l.a.createElement("main",{className:""},l.a.createElement("div",{className:"cm-content-wrapper pg-"+a.replace(" ","-").toLowerCase(),id:"main-content"},t)),l.a.createElement(m.a,null))});u.propTypes={pageTitle:i.a.string},u.defaultProps={pageTitle:"Page Title"},a.a=u},164:function(e,a,t){"use strict";var n=t(0),l=t.n(n);a.a=function(e){var a=e.children;return l.a.createElement("div",{className:"text-group"},a)}}}]);
//# sourceMappingURL=component---src-pages-event-details-js-61232e7911e88170c478.js.map