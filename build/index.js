(()=>{"use strict";var e,n={227:()=>{const e=window.wp.blocks,n=window.wp.element,t=(window.wp.i18n,window.wp.blockEditor),a=JSON.parse('{"u2":"create-block/uncommon-timeline-year"}');(0,e.registerBlockType)(a.u2,{edit:function(e){let{attributes:a,setAttributes:r}=e;return(0,n.createElement)("div",(0,t.useBlockProps)({className:"uncommon-timeline-year"}),(0,n.createElement)(t.RichText,{tagName:"h3",className:"uncommon-timeline-year-title",placeholder:"Year",value:a.year,onChange:e=>r({year:e})}),(0,n.createElement)("div",{className:"uncommon-timeline-year-images"},(0,n.createElement)(t.InnerBlocks,{allowedBlocks:["core/image"],template:[["core/image",{className:"uncommon-timeline-year-image"}],["core/image",{className:"uncommon-timeline-year-image"}],["core/image",{className:"uncommon-timeline-year-image"}]]})),(0,n.createElement)(t.RichText,{tagName:"h4",className:"uncommon-timeline-year-title",placeholder:"Title",value:a.title,onChange:e=>r({title:e})}),(0,n.createElement)(t.RichText,{tagName:"p",className:"uncommon-timeline-year-description",placeholder:"Description",multiline:"p",value:a.description,onChange:e=>r({description:e})}))},save:function(e){let{attributes:a}=e;return(0,n.createElement)("div",t.useBlockProps.save({className:"uncommon-timeline-year"}),(0,n.createElement)("h3",{className:"uncommon-timeline-year-yearnumber"},a.year),(0,n.createElement)("div",{className:"uncommon-timeline-year-images"},(0,n.createElement)(t.InnerBlocks.Content,null)),(0,n.createElement)("h4",{className:"uncommon-timeline-year-title",dangerouslySetInnerHTML:{__html:a.title}}),(0,n.createElement)("div",{className:"uncommon-timeline-year-description",dangerouslySetInnerHTML:{__html:a.description}}))}})}},t={};function a(e){var r=t[e];if(void 0!==r)return r.exports;var i=t[e]={exports:{}};return n[e](i,i.exports,a),i.exports}a.m=n,e=[],a.O=(n,t,r,i)=>{if(!t){var l=1/0;for(s=0;s<e.length;s++){for(var[t,r,i]=e[s],m=!0,o=0;o<t.length;o++)(!1&i||l>=i)&&Object.keys(a.O).every((e=>a.O[e](t[o])))?t.splice(o--,1):(m=!1,i<l&&(l=i));if(m){e.splice(s--,1);var c=r();void 0!==c&&(n=c)}}return n}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[t,r,i]},a.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={826:0,431:0};a.O.j=n=>0===e[n];var n=(n,t)=>{var r,i,[l,m,o]=t,c=0;if(l.some((n=>0!==e[n]))){for(r in m)a.o(m,r)&&(a.m[r]=m[r]);if(o)var s=o(a)}for(n&&n(t);c<l.length;c++)i=l[c],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(s)},t=globalThis.webpackChunkuncommon_timeline_year=globalThis.webpackChunkuncommon_timeline_year||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})();var r=a.O(void 0,[431],(()=>a(227)));r=a.O(r)})();