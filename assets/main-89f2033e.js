import"./modulepreload-polyfill-3cfb730f.js";const s=document.querySelector(".menuList"),r=document.querySelector(".linkList"),c=document.querySelector("input"),l=document.querySelector("button");let n="";l.addEventListener("click",()=>{n=c.value,i()});let a=[];fetch("https://three-statices.oss-cn-hangzhou.aliyuncs.com/threejs-animation/assets/json/data.json").then(e=>e.json()).then(e=>{a=e,i()}),fetch("https://three-statices.oss-cn-hangzhou.aliyuncs.com/threejs-animation/assets/json/link.json").then(e=>e.json()).then(e=>{r.innerHTML=e.map(t=>`<li><a href="${t.url}" target="_blank">${t.name}</a></li>`).join("")});const i=()=>{s.innerHTML=a.filter(e=>e.name.includes(n)).map(e=>`
    <li>
      <div class="face-img">
        <img src="https://three-statices.oss-cn-hangzhou.aliyuncs.com/threejs-animation${e.face_url}" alt="">
         <div class="handle">
        <div><a href="${e.demo_url}" target="_blank">\u6F14\u793A</a></div>
        <div><a href="${e.article_url}" target="_blank">\u6398\u91D1</a></div>
      ${e.buy_url?`<div><a href="${e.buy_url}" target="_blank">\u6E90\u7801</a></div>`:""}
      </div>
      </div>
      <div class="name">
        ${e.name}
      </div>
      <div class="price" style="background-color: ${e.type==="free"?"#ef1952":"rgb(25, 129, 239)"}">${e.type==="free"?"\u514D\u8D39":`\uFFE5${e.price}`}</div>
     
  </li>
`).join("")};
