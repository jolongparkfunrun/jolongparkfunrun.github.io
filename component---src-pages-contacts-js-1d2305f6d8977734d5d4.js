(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{142:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(160),c=a(161);t.default=function(){return r.a.createElement(l.a,{pageTitle:"Contacts"},r.a.createElement(c.a,null,r.a.createElement("div",{className:"text-group general-center"},r.a.createElement("h3",{className:"vsa-center-text"},"Race Director"),r.a.createElement("div",{className:"aside-group"},r.a.createElement("h4",null,"Name:",r.a.createElement("br",null),"Phone:",r.a.createElement("br",null),"Email:"),r.a.createElement("p",null,"Sean Williams",r.a.createElement("br",null),"0412 206 821",r.a.createElement("br",null),"sean@melbournepack.com.au")))))}},151:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(4),c=a.n(l),i=a(33),s=a.n(i);a.d(t,"a",function(){return s.a});a(152),r.a.createContext({});c.a.object,c.a.string.isRequired,c.a.func,c.a.func},152:function(e,t,a){var n;e.exports=(n=a(156))&&n.default||n},153:function(e,t,a){"use strict";var n=a(154),r=a(0),l=a.n(r),c=a(4),i=a.n(c),s=a(162),o=a.n(s);function m(e){var t=e.description,a=e.lang,r=e.meta,c=e.title,i=n.data.site,s=t||i.siteMetadata.description;return l.a.createElement(o.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:c},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:s}].concat(r)})}m.defaultProps={lang:"en",meta:[],description:""},m.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.arrayOf(i.a.object),title:i.a.string.isRequired},t.a=m},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Jolong Fun Run",description:"Come join  in a fun run with a difference. Run on a 2.2km turf horse racing track in rural Bangholme in Southside Melbourne.",author:"Nik Malyaris - nikmaly@gmail.com"}}}}},155:function(e,t,a){"use strict";a(151);var n=a(4),r=a.n(n),l=a(0),c=a.n(l),i=function(e){var t=e.bannerType,a=e.bannerTitle,n=e.bannerText,r=e.bannerLinkText,l=e.bannerLinkURL;return c.a.createElement("div",{className:"cm-hero-banner "+t},c.a.createElement("div",{className:"hero-banner-content"},c.a.createElement("h1",null,a),n?c.a.createElement("p",null,n):"","home-page-banner"===t&&r&&l?c.a.createElement("a",{href:l,className:"cta cta-primary"},r):""),"home-page-banner"===t?c.a.createElement("div",{className:"hero-banner-next"},c.a.createElement("a",{href:"#main-content",className:"vsa-block-link"})):"")};i.propTypes={bannerType:r.a.string,bannerTitle:r.a.string,bannerText:r.a.string,bannerLinkText:r.a.string,bannerLinkURL:r.a.string},i.defaultProps={bannerType:"content-page-banner",bannerTitle:"Title Missing",bannerText:"",bannerLinkText:"",bannerLinkURL:""},t.a=i},156:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),c=a.n(l),i=a(55),s=a(2),o=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=o},157:function(e,t,a){"use strict";var n=a(158),r=a.n(n),l=(a(151),a(4),a(0)),c=a.n(l),i=function(e){return r()(e),c.a.createElement("div",{className:"cm-footer"},c.a.createElement("div",{className:"footer-content"}))};i.propTypes={},i.defaultProps={},t.a=i},158:function(e,t){e.exports=function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}},159:function(e,t,a){"use strict";var n=a(151),r=(a(4),a(0)),l=a.n(r),c=function(e){e.siteTitle;return l.a.createElement("ul",{className:"cm-nav-links"},l.a.createElement("li",null,l.a.createElement(n.a,{to:"/registration"},"Registration")),l.a.createElement("li",null,l.a.createElement(n.a,{to:"/event-details"},"Event Details")),l.a.createElement("li",null,l.a.createElement(n.a,{to:"/course-details"},"Course")),l.a.createElement("li",null,l.a.createElement(n.a,{to:"/training"},"Training")),l.a.createElement("li",null,l.a.createElement(n.a,{to:"/results"},"Results")),l.a.createElement("li",null,l.a.createElement(n.a,{to:"/faqs"},"FAQs")),l.a.createElement("li",null,l.a.createElement(n.a,{to:"/contacts"},"Contacts")))};c.propTypes={},c.defaultProps={};var i=c,s=function(e){e.siteTitle;return l.a.createElement("div",{className:"cm-social-links"},l.a.createElement("div",{className:"social-link facebook"},l.a.createElement("a",{className:"vsa-block-link",href:"https://facebook.com"},"Facebook")),l.a.createElement("div",{className:"social-link instagram"},l.a.createElement("a",{className:"vsa-block-link",href:"https://instagram.com"},"Instagram")))};s.propTypes={},s.defaultProps={};var o=s,m=function(e){e.siteTitle;return l.a.createElement("nav",{className:"cm-menu-bar"},l.a.createElement("div",{className:"logo"},l.a.createElement("a",{className:"vsa-block-link",href:"/"},"Home")),l.a.createElement(i,null),l.a.createElement(o,null))};m.propTypes={},m.defaultProps={};t.a=m},160:function(e,t,a){"use strict";a(35);var n=a(0),r=a.n(n),l=a(4),c=a.n(l),i=a(153),s=a(155),o=a(159),m=a(157),u=(a(163),function(e){var t=e.pageTitle,a=e.children;return r.a.createElement("div",{className:"page-wrapper"},r.a.createElement(i.a,{title:t}),r.a.createElement(o.a,null),r.a.createElement(s.a,{bannerType:"content-page-banner",bannerTitle:t}),r.a.createElement("main",{className:"cm-content-wrapper pg-"+t.replace(" ","-").toLowerCase(),id:"main-content"},a),r.a.createElement(m.a,null))});u.propTypes={pageTitle:c.a.string},u.defaultProps={pageTitle:"Page Title"},t.a=u},161:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children;return r.a.createElement("div",{className:"cm-rich-text"},t)}}}]);
//# sourceMappingURL=component---src-pages-contacts-js-1d2305f6d8977734d5d4.js.map