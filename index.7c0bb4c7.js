function e(e,n,t,a){Object.defineProperty(e,n,{get:t,set:a,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},i=n.parcelRequire9acc;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){a[e]=n},n.parcelRequire9acc=i),i.register("27Lyk",(function(n,t){var a,i;e(n.exports,"register",(()=>a),(e=>a=e)),e(n.exports,"resolve",(()=>i),(e=>i=e));var r={};a=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)r[n[t]]=e[n[t]]},i=function(e){var n=r[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),i("27Lyk").register(JSON.parse('{"dZpbI":"index.7c0bb4c7.js","8y9Os":"tijera.6a2fdda1.svg","7Wckl":"piedra.c88f7ccf.svg","cZ2RA":"papel.5f79bbf0.svg","62y4l":"Star 1.925a67b3.svg","4EwmJ":"Star 2.9846907e.svg"}'));var r;r=new URL(i("27Lyk").resolve("8y9Os"),import.meta.url).toString();var o;o=new URL(i("27Lyk").resolve("cZ2RA"),import.meta.url).toString();var s;s=new URL(i("27Lyk").resolve("7Wckl"),import.meta.url).toString();var l;l=new URL(i("27Lyk").resolve("62y4l"),import.meta.url).toString();var p;p=new URL(i("27Lyk").resolve("4EwmJ"),import.meta.url).toString();const d={data:{currentGame:{myPlay:[],computerPlay:[]},history:{myWins:[],computerWins:[]},win:[]},listeners:[],init(){const e=localStorage.getItem("saved-state");this.getState();localStorage.getItem("saved-state")?this.setState(JSON.parse(e)):this.setState({currentGame:{myPlay:[],computerPlay:[]},history:{myWins:[],computerWins:[]},win:[]})},getState(){return this.data},setMyPlay(){const e=this.getState();this.setState(e)},setComputerMove(){const e=Math.floor(3*Math.random())+1;1===e?this.data.currentGame.computerPlay[0]="piedra":2===e?this.data.currentGame.computerPlay[0]="papel":3===e&&(this.data.currentGame.computerPlay[0]="tijera")},setWinner(){const e=this.data.currentGame.myPlay[0],n=this.data.currentGame.computerPlay[0];if(e===n)this.data.win[0]=3;else if("piedra"===e&&"tijera"===n){this.data.win[0]=1,this.data.history.myWins.push(1);var t=this.getState();this.setState(t)}else if("papel"===e&&"piedra"===n){this.data.win[0]=1,this.data.history.myWins.push(1);t=this.getState();this.setState(t)}else if("tijera"===e&&"papel"===n){this.data.win[0]=1,this.data.history.myWins.push(1);t=this.getState();this.setState(t)}else if("tijera"===e&&"piedra"===n){this.data.win[0]=2,this.data.history.computerWins.push(1);t=this.getState();this.setState(t)}else if("piedra"===e&&"papel"===n){this.data.win[0]=2,this.data.history.computerWins.push(1);t=this.getState();this.setState(t)}else if("papel"===e&&"tijera"===n){this.data.win[0]=2,this.data.history.computerWins.push(1);t=this.getState();this.setState(t)}},setState(e){this.data=e;for(const n of this.listeners)n(e);localStorage.setItem("saved-state",JSON.stringify(e))},suscribe(e){this.listeners.push(e)}};const c=[{path:/\/welcome/,component:function(e){const n=document.createElement("div");n.setAttribute("class","contenedor");const t=document.createElement("style");return t.innerHTML="\n      .contenedor{\n         \n         display: flex;\n         flex-direction:column;\n         align-items: center;\n         justify-content: space-between;\n         height: 100vh;\n         position: relative;\n         gap:45px;\n         text-align:center;\n      }\n      .text-cont{\n         \n      }\n      @media(min-width:980px){\n         .contenedor{\n            padding: 0px 40px;\n            gap: 170px;\n         }\n      }\n      .manos-cont{\n         display:flex;\n         gap:40px;\n         position:relative;\n         bottom: 0px;\n      }\n   ",n.innerHTML='\n      <div class="text-cont">\n      <title-element class="titulo">Piedra, Papel o Tijera</title-element>\n      </div>\n      <div>\n      <button-element class="boton">Empezar</button-element>\n      </div>\n      <div class="manos-cont">\n      <piedra-papel-tijera select="papel"></piedra-papel-tijera>\n      <piedra-papel-tijera select="piedra"></piedra-papel-tijera>\n      <piedra-papel-tijera select="tijera"></piedra-papel-tijera>\n      </div>\n   ',n.querySelector(".boton").addEventListener("click",(()=>{e.goTo("/rules")})),n.appendChild(t),n}},{path:/\/rules/,component:function(e){const n=document.createElement("div"),t=document.createElement("style");return n.setAttribute("class","contenedor"),t.innerHTML="\n      .contenedor{\n         display: flex;\n         flex-direction:column;\n         align-items: center;\n         justify-content: space-between;\n         height: 100vh;\n         position: relative;\n         gap:143px;\n         text-align:center;\n      }\n      @media(min-width:980px){\n         .contenedor{\n            padding: 40px 0px 0px 0px;\n            gap: 150px;\n         }\n      }\n      .text-cont{\n\n      }\n      @media(min-width:980px){\n         .text-cont{\n            height:400px;\n            width:270px;\n         }\n      }\n      .manos-cont{\n         display:flex;\n         gap:40px;\n         position:relative;\n         bottom: 0px;\n      }\n   ",n.innerHTML='\n      <div class="text-cont">\n      <text-element>Presioná jugar\n      y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</text-element>\n      </div>\n      <div>\n      <button-element class="boton">¡Jugar!</button-element>\n      </div>\n      <div class="manos-cont">\n      <piedra-papel-tijera select="papel"></piedra-papel-tijera>\n      <piedra-papel-tijera select="piedra"></piedra-papel-tijera>\n      <piedra-papel-tijera select="tijera"></piedra-papel-tijera>\n      </div>\n   ',n.querySelector(".boton").addEventListener("click",(()=>{e.goTo("/ready")})),n.appendChild(t),n}},{path:/\/ready/,component:function(e){const n=document.createElement("div"),t=document.createElement("style");n.setAttribute("class","contenedor"),t.innerHTML="\n   .contenedor{\n      height: 100%;\n      padding-left: 30px;\n      padding-right:30px;\n      display:flex;\n      flex-direction: column;\n      justify-content: space-between;\n      align-items:center\n   }\n   .reloj{\n      margin-top: 50px;\n   }\n   .manos-cont{\n      display:flex;\n      gap: 40px;\n      position:fixed;\n      bottom:-10px;\n   }\n   .piedra{\n   }\n   .papel{\n   }\n   .tijera{\n   }\n   ",n.innerHTML='\n   <countdown-element class="reloj" time=3></countdown-element>\n   <div class="manos-cont">\n      <piedra-papel-tijera  select="papel" class="tijera"></piedra-papel-tijera>\n      <piedra-papel-tijera select="piedra" class="papel"></piedra-papel-tijera>\n      <piedra-papel-tijera  select="tijera" class="piedra"></piedra-papel-tijera>\n      </div>\n   ',d.data.currentGame.computerPlay;const a=n.querySelector(".piedra"),i=n.querySelector(".papel"),r=n.querySelector(".tijera");n.querySelector(".tijera").addEventListener("click",(()=>{t.innerHTML="\n      .contenedor{\n         height: 100vh;\n         padding-left: 30px;\n         padding-right:30px;\n         display:flex;\n         flex-direction: column;\n         justify-content: space-between;\n      }\n      .reloj{\n         margin-top: 50px;\n      }\n      .manos-cont{\n         display:flex;\n         justify-content: space-around;\n      }\n      .piedra{\n         position: relative;\n         top: 60px;\n      }\n      .papel{\n         position: relative;\n         top: 60px;\n      }\n      .tijera{\n         position: relative;\n         top: 60px;\n         animation: myAnim 1s ease 1s 1 normal forwards;   \n      }\n      @keyframes myAnim {\n         0% {\n            transform: translateY(0);\n         }\n      \n         100% {\n            transform: translateY(-100px);\n         }\n      }\n      ",a.style.display="none",i.style.display="none",d.data.currentGame.myPlay[0]="tijera",d.setComputerMove(),o=1,d.setWinner(),setTimeout((function(){e.goTo("/play")}),2e3)})),n.querySelector(".papel").addEventListener("click",(()=>{t.innerHTML="\n      .contenedor{\n         height: 100vh;\n         padding-left: 30px;\n         padding-right:30px;\n         display:flex;\n         flex-direction: column;\n         justify-content: space-between;\n      }\n      .reloj{\n         margin-top: 50px;\n      }\n      .manos-cont{\n         display:flex;\n         justify-content: space-around;\n      }\n      .reloj{\n         margin-top: 50px;\n      }\n      .piedra{\n         position: relative;\n         top: 60px;\n      }\n      .tijera{\n         position: relative;\n         top: 60px;\n      }\n      .papel{\n         position: relative;\n         top: 60px;\n         animation: myAnim 1s ease 1s 1 normal forwards;   \n      }\n      @keyframes myAnim {\n         0% {\n            transform: translateY(0);\n         }\n      \n         100% {\n            transform: translateY(-100px);\n         }\n      }\n      ",a.style.display="none",r.style.display="none",d.data.currentGame.myPlay[0]="papel",d.setComputerMove(),o=1,d.setWinner(),setTimeout((function(){e.goTo("/play")}),2e3)})),n.querySelector(".piedra").addEventListener("click",(()=>{t.innerHTML="\n      .contenedor{\n         height: 100vh;\n         padding-left: 30px;\n         padding-right:30px;\n         display:flex;\n         flex-direction: column;\n         justify-content: space-between;\n      }\n      .reloj{\n         margin-top: 50px;\n      }\n      .manos-cont{\n         display:flex;\n         justify-content: space-around;\n      }\n      .piedra{\n         position: relative;\n         top: 60px;\n      }\n      .tijera{\n         position: relative;\n         top: 60px;\n      }\n      .piedra{\n         position: relative;\n         top: 60px;\n         animation: myAnim 1s ease 1s 1 normal forwards; \n      }\n      @keyframes myAnim {\n         0% {\n            transform: translateY(0);\n         }\n      \n         100% {\n            transform: translateY(-100px);\n         }\n      }\n      ",i.style.display="none",r.style.display="none",d.data.currentGame.myPlay[0]="piedra",d.setComputerMove(),o=1,d.setWinner(),setTimeout((function(){e.goTo("/play")}),2e3)}));let o=0,s=4;const l=setInterval((()=>{s--,0==s&&0==o&&(window.alert("Se terminó tu tiempo!"),e.goTo("/welcome"),clearInterval(l))}),1e3);return n.appendChild(t),n}},{path:/\/play/,component:function(e){const n=document.createElement("div"),t=document.createElement("style");return n.setAttribute("class","contenedor"),t.innerHTML="\n      .contenedor{\n         height: 100%;\n         padding-left: 30px;\n         padding-right:30px;\n         display:flex;\n         flex-direction: column;\n         justify-content: space-between;\n         align-items: center;\n      }\n      .computadora{\n         transform: rotate(-180deg);\n         position: fixed;\n         top: -10px;\n      }\n      .yo{\n         position: fixed;\n         bottom: -10px;\n      }\n      .result-lose-cont{\n         display: none;\n      }\n      .result-win-cont{\n         display: none;\n      }\n      .empate{\n         display:none;\n      }\n      .boton{\n         display:none;\n      }\n      .boton-reiniciar{\n         display:none;\n      }\n   ",1==d.data.win[0]?n.innerHTML=`\n         <piedra-papel-tijera class="computadora" size="grande" select="${d.data.currentGame.computerPlay}"></piedra-papel-tijera>\n         <piedra-papel-tijera class="yo" size="grande" select="${d.data.currentGame.myPlay}"></piedra-papel-tijera>\n         <div class="result-win-cont">\n         <resultado-estrella select="win"></resultado-estrella>\n         <score-table  vos= ${d.data.history.myWins.length} maquina= ${d.data.history.computerWins.length} ></score-table>\n         <button-element class="boton">Otra vez</button-element>\n         <button-element class="boton-reiniciar" color="red" border-color="#461010">Reiniciar score</button-element>\n         </div>\n      `:2==d.data.win[0]?n.innerHTML=`\n         <piedra-papel-tijera class="computadora" size="grande" select="${d.data.currentGame.computerPlay}"></piedra-papel-tijera>\n         <piedra-papel-tijera class="yo" size="grande" select="${d.data.currentGame.myPlay}"></piedra-papel-tijera>\n         <div class="result-lose-cont">\n         <resultado-estrella select="lose"></resultado-estrella>\n         <score-table vos= ${d.data.history.myWins.length} maquina= ${d.data.history.computerWins.length} ></score-table>\n         <button-element class="boton">Otra vez</button-element>\n         <button-element class="boton-reiniciar" color="red" border-color="#461010" >Reiniciar score</button-element>\n         </div>\n         \n         `:n.innerHTML=`\n         \n         <piedra-papel-tijera class="computadora" size="grande" select="${d.data.currentGame.computerPlay}"></piedra-papel-tijera>\n         <piedra-papel-tijera class="yo" size="grande" select="${d.data.currentGame.myPlay}"></piedra-papel-tijera>\n         <div class="result-empate-cont">\n         <title-element color="blue" class="empate">EMPATE</title-element>\n         <button-element class="boton">Otra vez</button-element>\n         <button-element class="boton-reiniciar" color="red" border-color="#461010" >Reiniciar score</button-element>\n         </div>\n         \n         `,n.appendChild(t),setTimeout((function(){t.innerHTML="\n      .contenedor{\n         height: 100vh;\n         padding-left: 30px;\n         padding-right:30px;\n         display:flex;\n         flex-direction: column;\n         justify-content: space-between;\n         align-items: center;\n      }\n      .computadora{\n         transform: rotate(-180deg);\n         position: relative;\n         top: -10px;\n      }\n      .yo{\n         position: relative;\n         top: 10px;\n      }\n      .result-lose-cont{\n         height: 100%;\n         width: 100%;\n         background-color: rgba(137, 73, 73, 0.9);;\n         position: absolute;\n         display: flex;\n         flex-direction:column;\n         padding: 30px 30px;\n         justify-content: center;\n         align-items: center;\n      }\n      .result-win-cont{\n         height: 100%;\n         width: 100%;\n         background-color: rgba(136, 137, 73, 0.9);;;\n         position: absolute;\n         display: flex;\n         flex-direction:column;\n         padding: 30px 30px;\n         justify-content: center;\n         align-items: center;\n      }\n      .result-empate-cont{\n         height: 100%;\n         width: 100%;\n         background-color: rgb(73 107 137 / 52%);\n         position: absolute;\n         display: flex;\n         flex-direction:column;\n         padding: 30px 30px;\n         justify-content: center;\n         align-items:center;\n      }\n      .empate{\n         display:block;\n      }\n      .boton{\n         padding-top:10px;\n      }\n      .boton-reiniciar{\n         padding-top: 10px;\n      }\n   "}),1e3),n.querySelector(".boton").addEventListener("click",(()=>{e.goTo("/rules")})),n.querySelector(".boton-reiniciar").addEventListener("click",(()=>{localStorage.clear(),d.init()})),n}}];!function(){document.querySelector(".root");d.init(),function(e){function n(e){history.pushState({},"",e),t(e)}function t(e){console.log("soy el handleRoute y esta es la ruta "+e);for(const t of c)if(t.path.test(e)){const e=t.component({goTo:n}),a=document.querySelector(".content");a.firstChild&&a.firstChild.remove(),a.appendChild(e)}}console.log(location.pathname),"/"==location.pathname&&n("/welcome"),location.host.includes(".github.io")?n("/welcome"):t(location.pathname),window.onpopstate=function(e){t(location.pathname)}}(),function(){class e extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){const e=this.textContent,n=this.getAttribute("color"),t=document.createElement("style");t.innerHTML=`\n            .title{\n               font-family: American Typewriter;\n               font-size: 80px;\n               font-weight: 700;\n               color:${n||"#009048"};\n\t\t\t\t\t\n            }\n         `,this.shadow.innerHTML=`\n            <div>\n            <h2 class="title">${e}</h2>\n            </div>\n         `,this.shadow.appendChild(t)}}customElements.define("title-element",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){const e=this.textContent,n=this.getAttribute("color"),t=document.createElement("style");t.innerHTML=`\n            .text{\n               text-family:'American Typewriter';\n               font-size: 40px;\n               font-weight: 600;\n               text-align:center;\n               color:${n||"black"}\n            }\n         `,this.shadow.innerHTML=`\n            <div>\n            <p class="text">${e}</p>\n            </div>\n         `,this.shadow.appendChild(t)}}customElements.define("text-element",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.render()}render(){this.getAttribute("type");const e=this.getAttribute("color"),n=this.getAttribute("border-color"),t=this.textContent;var a=this.attachShadow({mode:"open"}),i=document.createElement("div");i.setAttribute("class","container");var r=document.createElement("button");r.setAttribute("class","button"),r.textContent=t;var o=document.createElement("style");o.innerHTML=`\n         .container{\n            display: flex;\n            justify-content: center;\n            \n         }\n         .button{\n            font-family: 'Odibee Sans', cursive;\n            font-size:45px;\n            color: #D8FCFC;\n            height: 87px;\n            width: 322px;\n            border: solid 10px;\n            border-radius:10px;\n            border-color: ${n||"#001997"};\n            background-color: ${e||"#006CFC"} ;\n         }\n         `,a.appendChild(o),a.appendChild(i),i.appendChild(r)}}customElements.define("button-element",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){const e=document.createElement("style"),n=this.getAttribute("select"),t=document.createElement("div"),a=this.getAttribute("size"),i=document.createElement("img");i.setAttribute("class","imagen"),e.innerHTML="\n            .imagen{\n\t\t\t\t\t\n            }\n         ","piedra"===n?i.src=`\n            ${s}\n         `:"papel"===n?i.src=`\n            ${o}`:"tijera"===n&&(i.src=`\n            ${r}\n         `),e.innerHTML="grande"===a?"\n            .imagen{\n\t\t\t\t\theight: 300px;\n            }\n         ":"\n            .imagen{\n\t\t\t\t\theight: 160px\n            }\n         ",this.shadow.appendChild(e),this.shadow.appendChild(t),t.appendChild(i)}}customElements.define("piedra-papel-tijera",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){const e=document.createElement("style"),n=this.getAttribute("select"),t=document.createElement("div"),a=document.createElement("img");a.setAttribute("class","imagen"),e.innerHTML="\n            .imagen{\n\t\t\t\t\tcolor: red;\n            }\n         ","win"===n?a.src=l:"lose"===n&&(a.src=p),this.shadow.appendChild(e),this.shadow.appendChild(t),t.appendChild(a)}}customElements.define("resultado-estrella",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){const e=this.getAttribute("vos"),n=this.getAttribute("maquina"),t=document.createElement("div");t.setAttribute("class","contenedor");const a=document.createElement("style");a.innerHTML="\n         .contenedor{\n            border: solid 10px;\n            border-radius: 5px;\n\t\t\t\twidth: 280px;\n\t\t\t\tpadding:20px 20px;\n\t\t\t\tbackground-color: white;\n         }\n\t\t\t.puntaje{\n\t\t\t\tfont-size:20px;\n\t\t\t}\n         ",t.innerHTML=`\n         <div class="title-cont">\n         <text-element>Puntaje</text-element>\n         </div>\n         <div class="score-cont">\n         <div>\n         <p class="puntaje">Vos: ${e||0} </p>\n         </div>\n         <div>\n         <p class="puntaje">Maquina: ${n||0} </p>\n         </div>\n         </div> \n         \n         `,t.appendChild(a),this.shadow.appendChild(t)}}customElements.define("score-table",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.render()}render(){var e=this.attachShadow({mode:"open"}),n=document.createElement("style"),t=this.getAttribute("time"),a=JSON.parse(t)+1;n.innerHTML=`\n         #clock {\n            width: 300px;\n            height: 300px;\n            border-radius: 50%;\n            border: solid 10px;\n            background-color: fff0;\n            margin: auto;\n            animation: myAnim 1s ease 0s ${a} normal forwards;\n         }\n         @keyframes myAnim {\n            0%,\n            100% {\n               transform: translateX(0%);\n               transform-origin: 50% 50%;\n            }\n         \n            15% {\n               transform: translateX(-30px) rotate(-6deg);\n            }\n         \n            30% {\n               transform: translateX(15px) rotate(6deg);\n            }\n         \n            45% {\n               transform: translateX(-15px) rotate(-3.6deg);\n            }\n         \n            60% {\n               transform: translateX(9px) rotate(2.4deg);\n            }\n         \n            75% {\n               transform: translateX(-6px) rotate(-1.2deg);\n            }\n         }\n         \n         span {\n            display: block;\n            width: 100%;\n            margin: auto;\n            padding-top: 70px;\n            text-align: center;\n            font-size: 150px;\n         }\n         `,e.innerHTML=`\n         <div id="clock">\n\t      <span id="seconds">${t}</span>\n         </div>\n         `;let i=t;setTimeout((function n(){i--,e.getElementById("seconds").innerHTML=String(i),i>0&&setTimeout(n,1e3)}),1e3),e.appendChild(n)}}customElements.define("countdown-element",e)}()}();
//# sourceMappingURL=index.7c0bb4c7.js.map