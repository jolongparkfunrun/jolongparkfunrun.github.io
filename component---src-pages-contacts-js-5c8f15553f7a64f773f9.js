(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{142:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(160),i=t(158);a.default=function(){return r.a.createElement(l.a,{pageTitle:"Contacts"},r.a.createElement(i.a,null,r.a.createElement("div",{className:"text-group general-center"},r.a.createElement("h3",{className:"vsa-center-text"},"Race Director"),r.a.createElement("div",{className:"aside-group"},r.a.createElement("h4",null,"Name:",r.a.createElement("br",null),"Phone:",r.a.createElement("br",null),"Email:"),r.a.createElement("p",null,"Sean Williams",r.a.createElement("br",null),"0412 206 821",r.a.createElement("br",null),"sean@melbournepack.com.au")))))}},151:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(4),i=t.n(l),c=t(33),s=t.n(c);t.d(a,"a",function(){return s.a});t(152),r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},152:function(e,a,t){var n;e.exports=(n=t(156))&&n.default||n},153:function(e,a,t){"use strict";var n=t(154),r=t(0),l=t.n(r),i=t(4),c=t.n(i),s=t(161),o=t.n(s);function m(e){var a=e.description,t=e.lang,r=e.meta,i=e.title,c=n.data.site,s=a||c.siteMetadata.description;return l.a.createElement(o.a,{htmlAttributes:{lang:t},title:i,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:i},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:s}].concat(r)})}m.defaultProps={lang:"en",meta:[],description:""},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),title:c.a.string.isRequired},a.a=m},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Jolong Fun Run",description:"Come join  in a fun run with a difference. Run on a 2.2km turf horse racing track in rural Bangholme in Southside Melbourne.",author:"Nik Malyaris - nikmaly@gmail.com"}}}}},155:function(e,a,t){"use strict";var n=t(4),r=t.n(n),l=t(0),i=t.n(l),c=function(e){var a=e.bannerType,t=e.bannerTitle,n=e.bannerText,r=e.bannerLinkText,l=e.bannerLinkURL;return i.a.createElement("div",{className:"cm-hero-banner "+a},i.a.createElement("div",{className:"hero-banner-content"},i.a.createElement("h1",null,t),n?i.a.createElement("p",null,n):"","home-page-banner"===a&&r&&l?i.a.createElement("a",{href:l,className:"cta cta-primary"},r):""),"home-page-banner"===a?i.a.createElement("div",{className:"hero-banner-next"},i.a.createElement("a",{href:"#main-content",className:"vsa-block-link"},"Link to Content")):"")};c.propTypes={bannerType:r.a.string,bannerTitle:r.a.string,bannerText:r.a.string,bannerLinkText:r.a.string,bannerLinkURL:r.a.string},c.defaultProps={bannerType:"content-page-banner",bannerTitle:"Title Missing",bannerText:"",bannerLinkText:"",bannerLinkURL:""},a.a=c},156:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),r=t.n(n),l=t(4),i=t.n(l),c=t(55),s=t(2),o=function(e){var a=e.location,t=s.default.getResourcesForPathnameSync(a.pathname);return t?r.a.createElement(c.a,Object.assign({location:a,pageResources:t},t.json)):null};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},a.default=o},157:function(e,a,t){"use strict";var n=t(151),r=t(4),l=t.n(r),i=t(0),c=t.n(i),s=function(e){var a=e.footerText;return c.a.createElement("div",{className:"cm-footer"},c.a.createElement("div",{className:"footer-content"},"Footer ",a,c.a.createElement(n.a,{to:"/"},"Link")))};s.propTypes={footerText:l.a.string},s.defaultProps={footerText:"Footer"},a.a=s},158:function(e,a,t){"use strict";var n=t(0),r=t.n(n);a.a=function(e){var a=e.children;return r.a.createElement("div",{className:"cm-rich-text"},a)}},159:function(e,a,t){"use strict";var n=t(151),r=t(4),l=t.n(r),i=t(0),c=t.n(i),s=function(e){e.siteTitle;return c.a.createElement("div",{className:"cm-nav-links"},c.a.createElement("ul",{className:"vsa-center-block"},c.a.createElement("li",null,c.a.createElement(n.a,{to:"/registration"},"Registration")),c.a.createElement("li",null,c.a.createElement(n.a,{to:"/event-details"},"Event Details")),c.a.createElement("li",null,c.a.createElement(n.a,{to:"/course-details"},"Course")),c.a.createElement("li",null,c.a.createElement(n.a,{to:"/training"},"Training")),c.a.createElement("li",null,c.a.createElement(n.a,{to:"/results"},"Results")),c.a.createElement("li",null,c.a.createElement(n.a,{to:"/faqs"},"FAQs")),c.a.createElement("li",null,c.a.createElement(n.a,{to:"/contacts"},"Contacts"))))};s.propTypes={linkData:l.a.string},s.defaultProps={linkData:""};var o=s,m=function(e){e.siteTitle;return c.a.createElement("div",{className:"cm-social-links"},c.a.createElement("div",{className:"link-wrapper"},c.a.createElement("div",{className:"social-link facebook"},c.a.createElement("a",{className:"vsa-block-link",href:"https://facebook.com"},"Facebook")),c.a.createElement("div",{className:"social-link instagram"},c.a.createElement("a",{className:"vsa-block-link",href:"https://instagram.com"},"Instagram"))))};m.propTypes={socialLinks:l.a.array},m.defaultProps={linkData:["facebook","instagram"]};var u=m,p=function(e){e.siteTitle;return c.a.createElement("nav",{className:"cm-menu-bar"},c.a.createElement("div",{className:"logo"},c.a.createElement(n.a,{to:"/",className:"vsa-block-link"},"Home")),c.a.createElement(o,null),c.a.createElement(u,null))};p.propTypes={navLinkData:l.a.object,socialLinkData:l.a.object},p.defaultProps={navLinkData:{},socialLinkData:{}};a.a=p},160:function(e,a,t){"use strict";t(35);var n=t(0),r=t.n(n),l=t(4),i=t.n(l),c=t(153),s=t(155),o=t(159),m=t(157),u=(t(163),function(e){var a=e.pageTitle,t=e.children;return r.a.createElement("div",{className:"page-wrapper"},r.a.createElement(c.a,{title:a}),r.a.createElement(o.a,null),r.a.createElement(s.a,{bannerType:"content-page-banner",bannerTitle:a}),r.a.createElement("main",{className:""},r.a.createElement("div",{className:"cm-content-wrapper pg-"+a.replace(" ","-").toLowerCase(),id:"main-content"},t)),r.a.createElement(m.a,null))});u.propTypes={pageTitle:i.a.string},u.defaultProps={pageTitle:"Page Title"},a.a=u}}]);
//# sourceMappingURL=component---src-pages-contacts-js-5c8f15553f7a64f773f9.js.map