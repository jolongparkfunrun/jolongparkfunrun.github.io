(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{146:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(161),i=t(159),c=t(163);a.default=function(){return l.a.createElement(r.a,{pageTitle:"Registration"},l.a.createElement(i.a,null,l.a.createElement(c.a,null,l.a.createElement("h3",null,"Registration"),l.a.createElement("a",{href:"#"},"Please check back soon for registration.")),l.a.createElement(c.a,null,l.a.createElement("h3",null,"Fees:"),l.a.createElement("div",{className:"aside-group"},l.a.createElement("h4",null,"2.2 km"),l.a.createElement("ul",null,l.a.createElement("li",null,"Child (under 18) - $17"),l.a.createElement("li",null,"Adult - $25"),l.a.createElement("li",null,"Senior (65+) - $20"),l.a.createElement("li",null,"Family (2 Adults, 2 Children) - $60"))),l.a.createElement("div",{className:"aside-group"},l.a.createElement("h4",null,"6.6 km"),l.a.createElement("ul",null,l.a.createElement("li",null,"Child (under 18) - $28"),l.a.createElement("li",null,"Adult - $45"),l.a.createElement("li",null,"Senior (65+) - $35"),l.a.createElement("li",null,"Family (2 Adults, 2 Children) - $90")))),l.a.createElement(c.a,null,l.a.createElement("h3",null,"Late Entry:"),l.a.createElement("p",null,"For late entries after ",l.a.createElement("span",{style:{color:"red"}},"XX/XXX/XXXX"),", an additional fee applies:"),l.a.createElement("div",{className:"aside-group"},l.a.createElement("h4",null,"2.2 km"),l.a.createElement("ul",null,l.a.createElement("li",null,"+ $5"))),l.a.createElement("div",{className:"aside-group"},l.a.createElement("h4",null,"6.6 km"),l.a.createElement("ul",null,l.a.createElement("li",null,"+ $10")))),l.a.createElement(c.a,null,"Bib Collection will take place on Friday afternoon and Saturday morning at Jolong Park.")))}},151:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(4),i=t.n(r),c=t(33),s=t.n(c);t.d(a,"a",function(){return s.a});t(152),l.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},152:function(e,a,t){var n;e.exports=(n=t(156))&&n.default||n},153:function(e,a,t){"use strict";var n=t(154),l=t(0),r=t.n(l),i=t(4),c=t.n(i),s=t(162),o=t.n(s);function m(e){var a=e.description,t=e.lang,l=e.meta,i=e.title,c=n.data.site,s=a||c.siteMetadata.description;return r.a.createElement(o.a,{htmlAttributes:{lang:t},title:i,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:i},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:s}].concat(l)})}m.defaultProps={lang:"en",meta:[],description:""},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),title:c.a.string.isRequired},a.a=m},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Jolong Fun Run",description:"Come join  in a fun run with a difference. Run on a 2.2km turf horse racing track in rural Bangholme in Southside Melbourne.",author:"Nik Malyaris - nikmaly@gmail.com"}}}}},155:function(e,a,t){"use strict";t(151);var n=t(4),l=t.n(n),r=t(0),i=t.n(r),c=function(e){var a=e.bannerType,t=e.bannerTitle,n=e.bannerText,l=e.bannerLinkText,r=e.bannerLinkURL;return i.a.createElement("div",{className:"cm-hero-banner "+a},i.a.createElement("div",{className:"hero-banner-content"},i.a.createElement("h1",null,t),n?i.a.createElement("p",null,n):"","home-page-banner"===a&&l&&r?i.a.createElement("a",{href:r,className:"cta cta-primary"},l):""),"home-page-banner"===a?i.a.createElement("div",{className:"hero-banner-next"},i.a.createElement("a",{href:"#main-content",className:"vsa-block-link"})):"")};c.propTypes={bannerType:l.a.string,bannerTitle:l.a.string,bannerText:l.a.string,bannerLinkText:l.a.string,bannerLinkURL:l.a.string},c.defaultProps={bannerType:"content-page-banner",bannerTitle:"Title Missing",bannerText:"",bannerLinkText:"",bannerLinkURL:""},a.a=c},156:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),l=t.n(n),r=t(4),i=t.n(r),c=t(55),s=t(2),o=function(e){var a=e.location,t=s.default.getResourcesForPathnameSync(a.pathname);return t?l.a.createElement(c.a,Object.assign({location:a,pageResources:t},t.json)):null};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},a.default=o},157:function(e,a,t){"use strict";var n=t(158),l=t.n(n),r=(t(151),t(4),t(0)),i=t.n(r),c=function(e){return l()(e),i.a.createElement("div",{className:"cm-footer"},i.a.createElement("div",{className:"footer-content"}))};c.propTypes={},c.defaultProps={},a.a=c},158:function(e,a){e.exports=function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}},159:function(e,a,t){"use strict";var n=t(0),l=t.n(n);a.a=function(e){var a=e.children;return l.a.createElement("div",{className:"cm-rich-text"},a)}},160:function(e,a,t){"use strict";var n=t(151),l=(t(4),t(0)),r=t.n(l),i=function(e){e.siteTitle;return r.a.createElement("div",{className:"cm-nav-links"},r.a.createElement("ul",{className:"vsa-center-block"},r.a.createElement("li",null,r.a.createElement(n.a,{to:"/registration"},"Registration")),r.a.createElement("li",null,r.a.createElement(n.a,{to:"/event-details"},"Event Details")),r.a.createElement("li",null,r.a.createElement(n.a,{to:"/course-details"},"Course")),r.a.createElement("li",null,r.a.createElement(n.a,{to:"/training"},"Training")),r.a.createElement("li",null,r.a.createElement(n.a,{to:"/results"},"Results")),r.a.createElement("li",null,r.a.createElement(n.a,{to:"/faqs"},"FAQs")),r.a.createElement("li",null,r.a.createElement(n.a,{to:"/contacts"},"Contacts"))))};i.propTypes={},i.defaultProps={};var c=i,s=function(e){e.siteTitle;return r.a.createElement("div",{className:"cm-social-links"},r.a.createElement("div",{className:"link-wrapper"},r.a.createElement("div",{className:"social-link facebook"},r.a.createElement("a",{className:"vsa-block-link",href:"https://facebook.com"},"Facebook")),r.a.createElement("div",{className:"social-link instagram"},r.a.createElement("a",{className:"vsa-block-link",href:"https://instagram.com"},"Instagram"))))};s.propTypes={},s.defaultProps={};var o=s,m=function(e){e.siteTitle;return r.a.createElement("nav",{className:"cm-menu-bar"},r.a.createElement("div",{className:"logo"},r.a.createElement("a",{className:"vsa-block-link",href:"/"},"Home")),r.a.createElement(c,null),r.a.createElement(o,null))};m.propTypes={},m.defaultProps={};a.a=m},161:function(e,a,t){"use strict";t(35);var n=t(0),l=t.n(n),r=t(4),i=t.n(r),c=t(153),s=t(155),o=t(160),m=t(157),u=(t(164),function(e){var a=e.pageTitle,t=e.children;return l.a.createElement("div",{className:"page-wrapper"},l.a.createElement(c.a,{title:a}),l.a.createElement(o.a,null),l.a.createElement(s.a,{bannerType:"content-page-banner",bannerTitle:a}),l.a.createElement("main",{className:""},l.a.createElement("div",{className:"cm-content-wrapper pg-"+a.replace(" ","-").toLowerCase(),id:"main-content"},t)),l.a.createElement(m.a,null))});u.propTypes={pageTitle:i.a.string},u.defaultProps={pageTitle:"Page Title"},a.a=u},163:function(e,a,t){"use strict";var n=t(0),l=t.n(n);a.a=function(e){var a=e.children;return l.a.createElement("div",{className:"text-group"},a)}}}]);
//# sourceMappingURL=component---src-pages-registration-js-244e439b0f4b38cde159.js.map