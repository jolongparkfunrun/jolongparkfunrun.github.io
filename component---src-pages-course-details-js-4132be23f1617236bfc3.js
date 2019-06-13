(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{144:function(e,t,a){"use strict";a.r(t),a.d(t,"mapImage",function(){return u}),a.d(t,"query",function(){return d});var n=a(0),r=a.n(n),i=a(162),l=a(160),s=a(164),o=a(172),c=a.n(o),u="3640303194",d="1830494924";t.default=function(e){e.data;return r.a.createElement(i.a,{pageTitle:"Course Details"},r.a.createElement(l.a,null,r.a.createElement(s.a,null,r.a.createElement("p",null,"Jolong Park is a all in the one, purpose-built, state-of-the-art equestrian property, which is only a short 35-minute drive from Melbourne. Jolong Park features stables, clubhouse, a 2,000 metre sand training track and a 2,200 meter grass racetrack."),r.a.createElement("p",null,"The event will take place on the 2,200 meter grass race track. The race distances will consist of full laps of the track, starting at a single lap for a 2.2km total distance, witha longer event of three laps for a 6.6km distance.")),r.a.createElement(s.a,null,r.a.createElement("h3",null,"Track Location:"),r.a.createElement("p",null,"Jolong Park, 88-128 Riverend Rd, Bangholme, Victoria")),r.a.createElement(s.a,{centered:!1},r.a.createElement("h3",null,"Transport Options:"),r.a.createElement("div",{className:"aside-group"},r.a.createElement("h4",null,"Car"),r.a.createElement("p",null,"Jolong Park is just off the Mornington Peninsula Freeway to the East or Eastlink to the West.",r.a.createElement("br",null),"Travel time is ~35 minutes from Melbourne CBD and ~15 minutes from Frankston.",r.a.createElement("br",null),"An on site car park will be provided free of charge.")),r.a.createElement("div",{className:"aside-group"},r.a.createElement("h4",null,"Train"),r.a.createElement("p",null,"Chelsea Station is a 3km from Chelsea Train Station on the Frankston Line."))),r.a.createElement(s.a,{classes:"vsa-center-text"},r.a.createElement("a",{href:"https://www.google.com/maps/place/Jolong+Park/@-38.0428439,145.1374475,14.35z/data=!4m5!3m4!1s0x6ad612a8275a3ba3:0x2e9c092257cee2c2!8m2!3d-38.0430386!4d145.1474738"},"Jolong Park on Google Maps"),r.a.createElement(StaticQuery,{query:d,render:function(e){return r.a.createElement(c.a,{fluid:e.mapZoomedOut.childImageSharp.fluid,alt:""})}}),r.a.createElement(StaticQuery,{query:d,render:function(e){return r.a.createElement(c.a,{fluid:e.mapZoomedIn.childImageSharp.fluid,alt:""})}}))))}},152:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),l=a.n(i),s=a(33),o=a.n(s);a.d(t,"a",function(){return o.a});a(153),r.a.createContext({});l.a.object,l.a.string.isRequired,l.a.func,l.a.func},153:function(e,t,a){var n;e.exports=(n=a(157))&&n.default||n},154:function(e,t,a){"use strict";var n=a(155),r=a(0),i=a.n(r),l=a(4),s=a.n(l),o=a(163),c=a.n(o);function u(e){var t=e.description,a=e.lang,r=e.meta,l=e.title,s=n.data.site,o=t||s.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:l},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:o}].concat(r)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),title:s.a.string.isRequired},t.a=u},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Jolong Fun Run",description:"Come join  in a fun run with a difference. Run on a 2.2km turf horse racing track in rural Bangholme in Southside Melbourne.",author:"Nik Malyaris - nikmaly@gmail.com"}}}}},156:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),l=a.n(i),s=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={backgroundNumber:1},a}r()(t,e);var a=t.prototype;return a.handleClick=function(e){var t=2,a=this.state.backgroundNumber;function n(e){return e=(e=e<1?e=t:e)>t?e=1:e}"right"===e?(a=n(++a),this.setState({backgroundNumber:a})):"left"===e&&(a=n(--a),this.setState({backgroundNumber:a}))},a.render=function(){var e=this;return l.a.createElement("header",{className:"cm-hero-banner "+this.props.bannerType+" background-"+this.state.backgroundNumber,id:"page-banner"},l.a.createElement("div",{className:"hero-banner-content"},l.a.createElement("h1",null,this.props.bannerTitle),this.props.bannerText?l.a.createElement("p",null,this.props.bannerText):"","home-page-banner"===this.props.bannerType&&this.props.bannerLinkText&&this.props.bannerLinkURL?l.a.createElement("a",{href:this.props.bannerLinkURL,className:"cta cta-primary"},this.props.bannerLinkText):""),this.props.bannerHasCarousel?l.a.createElement("div",{className:"hero-banner-carousel-controls"},l.a.createElement("div",{className:"carousel-control scroll-left",onClick:function(){return e.handleClick("left")}}),l.a.createElement("div",{className:"carousel-control scroll-right",onClick:function(){return e.handleClick("right")}})):"","home-page-banner"===this.props.bannerType?l.a.createElement("div",{className:"hero-banner-next"},l.a.createElement("a",{href:"#main-content",className:"vsa-block-link"},"Link to Content")):"")},t}(l.a.Component);t.a=s},157:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),s=a(55),o=a(2),c=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=c},158:function(e,t,a){"use strict";var n=a(152),r=a(4),i=a.n(r),l=a(0),s=a.n(l),o=function(e){e.footerText;return s.a.createElement("footer",{className:"cm-footer"},s.a.createElement("div",{className:"footer-content"},s.a.createElement("h2",null,"Jolong Park Fun Run"),s.a.createElement("div",{className:"footer-column footer-col-1"},s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement(n.a,{to:"/"},"Home")),s.a.createElement("li",null,s.a.createElement(n.a,{to:"/registration"},"Registration")),s.a.createElement("li",null,s.a.createElement(n.a,{to:"/event-details"},"Event Details")),s.a.createElement("li",null,s.a.createElement(n.a,{to:"/course-details"},"Course")))),s.a.createElement("div",{className:"footer-column footer-col-2"},s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement(n.a,{to:"/training"},"Training")),s.a.createElement("li",null,s.a.createElement(n.a,{to:"/results"},"Results")),s.a.createElement("li",null,s.a.createElement(n.a,{to:"/faqs"},"FAQs")),s.a.createElement("li",null,s.a.createElement(n.a,{to:"/contacts"},"Contacts"))))))};o.propTypes={footerText:i.a.string},o.defaultProps={footerText:""},t.a=o},159:function(e,t){},160:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children;return r.a.createElement("div",{className:"cm-rich-text"},t)}},161:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(4),l=a.n(i),s=a(0),o=a.n(s),c=a(152),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",{className:"cm-logo"},o.a.createElement(c.a,{to:"/",className:"vsa-block-link"}))},t}(o.a.Component),d=a(34),m=a.n(d),f=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={menuDisplayed:!1},a.handleClick=a.handleClick.bind(m()(a)),a}r()(t,e);var a=t.prototype;return a.handleClick=function(){this.setState({menuDisplayed:!this.state.menuDisplayed})},a.render=function(){return o.a.createElement("div",{className:"cm-nav-links"},o.a.createElement("div",{className:"mobile-menu-icon",onClick:this.handleClick}),o.a.createElement("div",{className:"nav-wrapper visible-"+this.state.menuDisplayed},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(c.a,{to:"/registration"},"Registration")),o.a.createElement("li",null,o.a.createElement(c.a,{to:"/event-details"},"Event Details")),o.a.createElement("li",null,o.a.createElement(c.a,{to:"/course-details"},"Course")),o.a.createElement("li",null,o.a.createElement(c.a,{to:"/training"},"Training")),o.a.createElement("li",null,o.a.createElement(c.a,{to:"/results"},"Results")),o.a.createElement("li",null,o.a.createElement(c.a,{to:"/faqs"},"FAQs")),o.a.createElement("li",null,o.a.createElement(c.a,{to:"/contacts"},"Contacts")))))},t}(o.a.Component),p=function(e){e.siteTitle;return o.a.createElement("div",{className:"cm-social-links"},o.a.createElement("div",{className:"link-wrapper"},o.a.createElement("div",{className:"social-link facebook"},o.a.createElement("a",{className:"vsa-block-link",href:"https://facebook.com"},"Facebook")),o.a.createElement("div",{className:"social-link instagram"},o.a.createElement("a",{className:"vsa-block-link",href:"https://instagram.com"},"Instagram"))))};p.propTypes={socialLinks:l.a.array},p.defaultProps={linkData:["facebook","instagram"]};var h=p,g=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.handleScroll=function(){var e;e=document.getElementById("menu-bar"),window.scrollY>10?e.classList.add("scrolled"):e.classList.remove("scrolled")},a.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},a.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},a.render=function(){return o.a.createElement("nav",{className:"cm-menu-bar",id:"menu-bar"},o.a.createElement(u,null),o.a.createElement(f,null),o.a.createElement(h,null))},t}(o.a.Component);g.propTypes={navLinkData:l.a.object,socialLinkData:l.a.object},g.defaultProps={navLinkData:{},socialLinkData:{}};t.a=g},162:function(e,t,a){"use strict";a(36);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),s=a(154),o=a(156),c=a(161),u=a(158),d=(a(165),a(159),function(e){var t=e.pageTitle,a=e.children;return r.a.createElement("div",{className:"page-wrapper"},r.a.createElement(s.a,{title:t}),r.a.createElement(c.a,null),r.a.createElement(o.a,{bannerType:"content-page-banner",bannerTitle:t}),r.a.createElement("main",{className:"page-content"},r.a.createElement("div",{className:"cm-content-wrapper pg-"+t.replace(" ","-").toLowerCase(),id:"main-content"},a)),r.a.createElement(u.a,null))});d.propTypes={pageTitle:l.a.string},d.defaultProps={pageTitle:"Page Title"},t.a=d},164:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children,a=e.classes;return r.a.createElement("div",{className:"text-group "+a},t)}},172:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.default=void 0;var r,i=n(a(7)),l=n(a(34)),s=n(a(75)),o=n(a(76)),c=n(a(0)),u=n(a(4)),d=function(e){var t=(0,o.default)({},e),a=t.resolutions,n=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),r&&(t.loading="eager"),t},m=Object.create({}),f=function(e){var t=d(e),a=t.fluid?t.fluid.src:t.fixed.src;return m[a]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,g=h&&window.IntersectionObserver,E=new WeakMap;var b=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),E.delete(e.target),t())}})},{rootMargin:"200px"})),r);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},v=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",l=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+n+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+s+o+a+r+t+l+i+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=c.default.forwardRef(function(e,t){var a=e.sizes,n=e.srcSet,r=e.src,i=e.style,l=e.onLoad,u=e.onError,d=e.loading,m=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading"]);return c.default.createElement("img",(0,o.default)({sizes:a,srcSet:n,src:r},m,{onLoad:l,onError:u,ref:t,loading:d,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});y.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var k=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&f(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!p&&g&&!t.critical&&!a.seenBefore;var n=t.critical||h&&(p||!a.useIOSupport);return a.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,l.default)((0,l.default)(a))),a.handleRef=a.handleRef.bind((0,l.default)((0,l.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=b(e,function(){var e=f(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=d(e),a=t.fluid?t.fluid.src:t.fixed.src,m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=d(this.props),t=e.title,a=e.alt,n=e.className,r=e.style,i=void 0===r?{}:r,l=e.imgStyle,s=void 0===l?{}:l,u=e.placeholderStyle,m=void 0===u?{}:u,f=e.placeholderClassName,p=e.fluid,h=e.fixed,g=e.backgroundColor,E=e.durationFadeIn,b=e.Tag,k=e.itemProp,w=e.loading,S=!1===this.state.fadeIn||this.state.imgLoaded,L=!0===this.state.fadeIn&&!this.state.imgCached,N=(0,o.default)({opacity:S?1:0,transition:L?"opacity "+E+"ms":"none"},s),T="boolean"==typeof g?"lightgray":g,C={transitionDelay:E+"ms"},R=(0,o.default)({opacity:this.state.imgLoaded?0:1},L&&C,s,m),I={title:t,alt:this.state.isVisible?"":a,style:R,className:f};if(p){var O=p;return c.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(O.srcSet)},c.default.createElement(b,{style:{width:"100%",paddingBottom:100/O.aspectRatio+"%"}}),T&&c.default.createElement(b,{title:t,style:(0,o.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},L&&C)}),O.base64&&c.default.createElement(y,(0,o.default)({src:O.base64},I)),O.tracedSVG&&c.default.createElement(y,(0,o.default)({src:O.tracedSVG},I)),this.state.isVisible&&c.default.createElement("picture",null,O.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:O.srcSetWebp,sizes:O.sizes}),c.default.createElement(y,{alt:a,title:t,sizes:O.sizes,src:O.src,crossOrigin:this.props.crossOrigin,srcSet:O.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:k,loading:w})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:v((0,o.default)({alt:a,title:t,loading:w},O))}}))}if(h){var x=h,z=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:x.width,height:x.height},i);return"inherit"===i.display&&delete z.display,c.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:z,ref:this.handleRef,key:"fixed-"+JSON.stringify(x.srcSet)},T&&c.default.createElement(b,{title:t,style:(0,o.default)({backgroundColor:T,width:x.width,opacity:this.state.imgLoaded?0:1,height:x.height},L&&C)}),x.base64&&c.default.createElement(y,(0,o.default)({src:x.base64},I)),x.tracedSVG&&c.default.createElement(y,(0,o.default)({src:x.tracedSVG},I)),this.state.isVisible&&c.default.createElement("picture",null,x.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:x.srcSetWebp,sizes:x.sizes}),c.default.createElement(y,{alt:a,title:t,width:x.width,height:x.height,sizes:x.sizes,src:x.src,crossOrigin:this.props.crossOrigin,srcSet:x.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:k,loading:w})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:v((0,o.default)({alt:a,title:t,loading:w},x))}}))}return null},t}(c.default.Component);k.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var w=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string}),S=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string});k.propTypes={resolutions:w,sizes:S,fixed:w,fluid:S,fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"])};var L=k;t.default=L}}]);
//# sourceMappingURL=component---src-pages-course-details-js-4132be23f1617236bfc3.js.map