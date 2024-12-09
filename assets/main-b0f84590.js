import"./modulepreload-polyfill-3cfb730f.js";const n=document.querySelector("ul"),s=document.querySelector("input"),c=document.querySelector("button");let a="";c.addEventListener("click",()=>{a=s.value,t()});let i=[];fetch("https://three-statices.oss-cn-hangzhou.aliyuncs.com/threejs-animation/assets/json/data.json").then(e=>e.json()).then(e=>{i=e,t()});const t=()=>{n.innerHTML=i.filter(e=>e.name.includes(a)).map(e=>`
    <li>
      <div class="face-img">
        <img src="https://three-statices.oss-cn-hangzhou.aliyuncs.com/threejs-animation${e.face_url}" alt="">
      </div>
      <div class="name">
        ${e.name}
      </div>
      <div class="price">${e.type==="free"?"\u514D\u8D39":`\uFFE5${e.price}`}</div>
      <div class="handle">
        <div><a href="${e.demo_url}" target="_blank">\u6F14\u793A</a></div>
        <div><a href="${e.article_url}" target="_blank">\u6398\u91D1</a></div>
      ${e.buy_url?`<div><a href="${e.buy_url}" target="_blank">\u6E90\u7801</a></div>`:""}
      </div>
  </li>
`).join("")};
