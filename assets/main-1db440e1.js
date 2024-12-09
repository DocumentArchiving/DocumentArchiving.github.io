import"./modulepreload-polyfill-3cfb730f.js";let E=[{name:"\u52A8\u753B",url:"./animation.html",face:"/%E5%B0%81%E9%9D%A2/%E5%8A%A8%E7%94%BB.jpg"},{name:"\u65E0\u4EBA\u673A",url:"./\u65E0\u4EBA\u673A/index.html",face:"/%E5%B0%81%E9%9D%A2/%E6%97%A0%E4%BA%BA%E6%9C%BA.jpg"},{name:"\u624B\u67C4\u63A7\u5236\u6444\u50CF\u5934\u8DDF\u8E2A",url:"./\u624B\u67C4\u63A7\u5236\u6444\u50CF\u5934\u8DDF\u8E2A/index.html",face:"/%E5%B0%81%E9%9D%A2/%E9%95%9C%E5%A4%B4%E8%B7%9F%E8%B8%AA.jpg",article:"https://juejin.cn/post/7220321558102392892"},{name:"\u7269\u7406\u5F15\u64CE",url:"./\u7269\u7406\u5F15\u64CE/index.html",face:"/%E5%B0%81%E9%9D%A2/%E7%89%A9%E7%90%86%E5%BC%95%E6%93%8E.jpg",article:"https://juejin.cn/post/7223208523509203002"},{name:"\u5BFB\u8DEF\u57FA\u7840",url:"./\u5BFB\u8DEF\u57FA\u7840/index.html",face:"/%E5%B0%81%E9%9D%A2/%E5%AF%BB%E8%B7%AF%E5%9F%BA%E7%A1%80.jpg"},{name:"\u5BFB\u8DEF\u573A\u666F",url:"./\u5BFB\u8DEF\u573A\u666F/index.html",face:"/%E5%B0%81%E9%9D%A2/%E5%AF%BB%E8%B7%AF%E5%9C%BA%E6%99%AF.jpg",article:"https://juejin.cn/post/7232224552218247205"},{name:"\u57CE\u5E02",url:"./\u57CE\u5E02/index.html",face:"/%E5%B0%81%E9%9D%A2/%E5%9F%8E%E5%B8%82.jpg",article:"https://juejin.cn/post/7304272076650283042"},{name:"\u906E\u6321\u5224\u65AD",url:"./\u906E\u6321\u5224\u65AD/index.html",face:"/%E5%B0%81%E9%9D%A2/%E9%81%AE%E6%8C%A1%E5%88%A4%E6%96%AD.jpg",article:"https://juejin.cn/post/7306447610096517135"},{name:"\u5730\u56FE\u4E0B\u94BB",url:"./\u5730\u56FE\u4E0B\u94BB/index.html",face:"/%E5%B0%81%E9%9D%A2/%E5%9C%B0%E5%9B%BE%E4%B8%8B%E9%92%BB.jpg",article:"https://juejin.cn/post/7307166050513223680"},{name:"\u591A\u91CD\u89C6\u56FE",url:"./\u591A\u91CD\u89C6\u56FE/index.html",face:"/%E5%B0%81%E9%9D%A2/%E5%A4%9A%E9%87%8D%E5%9C%BA%E6%99%AF.jpg",article:"https://juejin.cn/post/7331030806515859466"},{name:"\u5207\u5272logo",url:"./\u5207\u5272logo/index.html",face:"/%E5%B0%81%E9%9D%A2/%E5%88%87%E5%89%B2logo.jpg",article:"https://juejin.cn/post/7337169269951283235"},{name:"\u9B54\u6CD5\u9635",url:"./\u9B54\u6CD5\u9635/index.html",face:"/%E5%B0%81%E9%9D%A2/%E9%AD%94%E6%B3%95%E9%98%B5.jpg",article:"https://juejin.cn/post/7338306790173261824"}];document.querySelector("ul").innerHTML=E.map(e=>`
  
    <li>
      <div class="face-img">
        <img src="https://three-statices.oss-cn-hangzhou.aliyuncs.com/threejs-animation${e.face}" alt="">
      </div>
      <div class="name">
        ${e.name}
      </div>
      <div class="handle">
        <div><a href="${e.url}" target="_blank">\u4EE3\u7801</a></div>
        <div><a href="${e.article}" target="_blank">\u6398\u91D1</a></div>
        <div><a href="${e.url}" target="_blank">\u6F14\u793A</a></div>
      </div>
   </li>
  `).join("");
