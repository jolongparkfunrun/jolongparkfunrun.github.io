(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{144:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(162),o=a(160),c=a(164);t.default=function(){return r.a.createElement(l.a,{pageTitle:"Course Details"},r.a.createElement(o.a,null,r.a.createElement(c.a,null,r.a.createElement("p",{className:"vsa-center-text"},"Jolong Park is a all in the one, purpose-built, state-of-the-art equestrian property, which is only a short 35-minute drive from Melbourne. Jolong Park features stables, clubhouse, a 2,000 metre sand training track and a 2,200 meter grass racetrack."),r.a.createElement("p",{className:"vsa-center-text"},"The event will take place on the 2,200 meter grass race track. The race distances will consist of full laps of the track, starting at a single lap for a 2.2km total distance, witha longer event of three laps for a 6.6km distance.")),r.a.createElement(c.a,null,r.a.createElement("h3",null,"Track Location:"),r.a.createElement("p",null,"Jolong Park, 88-128 Riverend Rd, Bangholme, Victoria")),r.a.createElement(c.a,{centered:!1},r.a.createElement("h3",null,"Transport Options:"),r.a.createElement("div",{className:"aside-group"},r.a.createElement("h4",null,"Car"),r.a.createElement("p",null,"Jolong Park is just off the Mornington Peninsula Freeway to the East or Eastlink to the West.",r.a.createElement("br",null),"Travel time is ~35 minutes from Melbourne CBD and ~15 minutes from Frankston.",r.a.createElement("br",null),"An on site car park will be provided free of charge.")),r.a.createElement("div",{className:"aside-group"},r.a.createElement("h4",null,"Train"),r.a.createElement("p",null,"Chelsea Station is a 3km from Chelsea Train Station on the Frankston Line."))),r.a.createElement(c.a,{classes:"vsa-center-text"},r.a.createElement("a",{href:"https://www.google.com/maps/place/Jolong+Park/@-38.0428439,145.1374475,14.35z/data=!4m5!3m4!1s0x6ad612a8275a3ba3:0x2e9c092257cee2c2!8m2!3d-38.0430386!4d145.1474738"},"Google Maps"),r.a.createElement("img",{src:"/static/media/images/map-jolong-zoomed-out.png",alt:"Zoomed Out Map"}),r.a.createElement("img",{src:"/static/media/images/map-jolong-zoomed-in.png",alt:"Zoomed In Map"}))))}},152:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(4),o=a.n(l),c=a(33),i=a.n(c);a.d(t,"a",function(){return i.a});a(153),r.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},153:function(e,t,a){var n;e.exports=(n=a(157))&&n.default||n},154:function(e,t,a){"use strict";var n=a(155),r=a(0),l=a.n(r),o=a(4),c=a.n(o),i=a(163),s=a.n(i);function m(e){var t=e.description,a=e.lang,r=e.meta,o=e.title,c=n.data.site,i=t||c.siteMetadata.description;return l.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:i},{property:"og:title",content:o},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:i}].concat(r)})}m.defaultProps={lang:"en",meta:[],description:""},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),title:c.a.string.isRequired},t.a=m},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Jolong Fun Run",description:"Come join  in a fun run with a difference. Run on a 2.2km turf horse racing track in rural Bangholme in Southside Melbourne.",author:"Nik Malyaris - nikmaly@gmail.com"}}}}},156:function(e,t,a){"use strict";var n=a(7),r=a.n(n),l=a(0),o=a.n(l),c=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={backgroundNumber:0},a}r()(t,e);var a=t.prototype;return a.handleClick=function(e){var t=5,a=this.state.backgroundNumber;function n(e){return e=(e=e<0?e=t:e)>t?e=0:e}"right"===e?(a=n(++a),this.setState({backgroundNumber:a})):"left"===e&&(a=n(--a),this.setState({backgroundNumber:a}))},a.render=function(){var e=this;return o.a.createElement("header",{className:"cm-hero-banner "+this.props.bannerType+" background-"+this.state.backgroundNumber,id:"page-banner"},o.a.createElement("div",{className:"hero-banner-content"},o.a.createElement("h1",null,this.props.bannerTitle),this.props.bannerText?o.a.createElement("p",null,this.props.bannerText):"","home-page-banner"===this.props.bannerType&&this.props.bannerLinkText&&this.props.bannerLinkURL?o.a.createElement("a",{href:this.props.bannerLinkURL,className:"cta cta-primary"},this.props.bannerLinkText):""),this.props.bannerHasCarousel?o.a.createElement("div",{className:"hero-banner-carousel-controls"},o.a.createElement("div",{className:"carousel-control scroll-left",onClick:function(){return e.handleClick("left")}}),o.a.createElement("div",{className:"carousel-control scroll-right",onClick:function(){return e.handleClick("right")}})):"","home-page-banner"===this.props.bannerType?o.a.createElement("div",{className:"hero-banner-next"},o.a.createElement("a",{href:"#main-content",className:"vsa-block-link"},"Link to Content")):"")},t}(o.a.Component);t.a=c},157:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),o=a.n(l),c=a(55),i=a(2),s=function(e){var t=e.location,a=i.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},158:function(e,t,a){"use strict";var n=a(152),r=a(4),l=a.n(r),o=a(0),c=a.n(o),i=function(e){e.footerText;return c.a.createElement("footer",{className:"cm-footer"},c.a.createElement("div",{className:"footer-content"},c.a.createElement("h2",null,"Jolong Park Fun Run"),c.a.createElement("div",{className:"footer-column footer-col-1"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(n.a,{to:"/"},"Home")),c.a.createElement("li",null,c.a.createElement(n.a,{to:"/registration"},"Registration")),c.a.createElement("li",null,c.a.createElement(n.a,{to:"/event-details"},"Event Details")),c.a.createElement("li",null,c.a.createElement(n.a,{to:"/course-details"},"Course")))),c.a.createElement("div",{className:"footer-column footer-col-2"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(n.a,{to:"/training"},"Training")),c.a.createElement("li",null,c.a.createElement(n.a,{to:"/results"},"Results")),c.a.createElement("li",null,c.a.createElement(n.a,{to:"/faqs"},"FAQs")),c.a.createElement("li",null,c.a.createElement(n.a,{to:"/contacts"},"Contacts"))))))};i.propTypes={footerText:l.a.string},i.defaultProps={footerText:""},t.a=i},159:function(e,t){},160:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children;return r.a.createElement("div",{className:"cm-rich-text"},t)}},161:function(e,t,a){"use strict";var n=a(7),r=a.n(n),l=a(152),o=a(4),c=a.n(o),i=a(0),s=a.n(i),m=a(35),u=a.n(m),p=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={menuDisplayed:!1},a.handleClick=a.handleClick.bind(u()(a)),a}r()(t,e);var a=t.prototype;return a.handleClick=function(){this.setState({menuDisplayed:!this.state.menuDisplayed})},a.render=function(){return s.a.createElement("div",{className:"cm-nav-links"},s.a.createElement("div",{className:"mobile-menu-icon",onClick:this.handleClick}),s.a.createElement("div",{className:"nav-wrapper visible-"+this.state.menuDisplayed},s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement(l.a,{to:"/registration"},"Registration")),s.a.createElement("li",null,s.a.createElement(l.a,{to:"/event-details"},"Event Details")),s.a.createElement("li",null,s.a.createElement(l.a,{to:"/course-details"},"Course")),s.a.createElement("li",null,s.a.createElement(l.a,{to:"/training"},"Training")),s.a.createElement("li",null,s.a.createElement(l.a,{to:"/results"},"Results")),s.a.createElement("li",null,s.a.createElement(l.a,{to:"/faqs"},"FAQs")),s.a.createElement("li",null,s.a.createElement(l.a,{to:"/contacts"},"Contacts")))))},t}(s.a.Component),d=function(e){e.siteTitle;return s.a.createElement("div",{className:"cm-social-links"},s.a.createElement("div",{className:"link-wrapper"},s.a.createElement("div",{className:"social-link facebook"},s.a.createElement("a",{className:"vsa-block-link",href:"https://facebook.com"},"Facebook")),s.a.createElement("div",{className:"social-link instagram"},s.a.createElement("a",{className:"vsa-block-link",href:"https://instagram.com"},"Instagram"))))};d.propTypes={socialLinks:c.a.array},d.defaultProps={linkData:["facebook","instagram"]};var E=d,h=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.handleScroll=function(){var e;e=document.getElementById("menu-bar"),window.scrollY>10?e.classList.add("scrolled"):e.classList.remove("scrolled")},a.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},a.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},a.render=function(){return s.a.createElement("nav",{className:"cm-menu-bar",id:"menu-bar"},s.a.createElement("div",{className:"logo"},s.a.createElement(l.a,{to:"/",className:"vsa-block-link"},"Home")),s.a.createElement(p,null),s.a.createElement(E,null))},t}(s.a.Component);h.propTypes={navLinkData:c.a.object,socialLinkData:c.a.object},h.defaultProps={navLinkData:{},socialLinkData:{}};t.a=h},162:function(e,t,a){"use strict";a(36);var n=a(0),r=a.n(n),l=a(4),o=a.n(l),c=a(154),i=a(156),s=a(161),m=a(158),u=(a(165),a(159),function(e){var t=e.pageTitle,a=e.children;return r.a.createElement("div",{className:"page-wrapper"},r.a.createElement(c.a,{title:t}),r.a.createElement(s.a,null),r.a.createElement(i.a,{bannerType:"content-page-banner",bannerTitle:t}),r.a.createElement("main",{className:"page-content"},r.a.createElement("div",{className:"cm-content-wrapper pg-"+t.replace(" ","-").toLowerCase(),id:"main-content"},a)),r.a.createElement(m.a,null))});u.propTypes={pageTitle:o.a.string},u.defaultProps={pageTitle:"Page Title"},t.a=u},164:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children,a=e.classes;return r.a.createElement("div",{className:"text-group "+a},t)}}}]);
//# sourceMappingURL=component---src-pages-course-details-js-ef5fe7171ec352cc93eb.js.map