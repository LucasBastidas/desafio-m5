export function initScoreTableComp() {
	class ScoreTableEl extends HTMLElement {
		shadow: ShadowRoot;
		constructor() {
			super();
			this.shadow = this.attachShadow({ mode: "open" });
			this.render();
		}

		render() {
			const puntajeVos = this.getAttribute("vos");
			const puntajeMaquina = this.getAttribute("maquina");
			const div = document.createElement("div");
			div.setAttribute("class", "contenedor");
			const style = document.createElement("style");
			style.innerHTML = `
         .contenedor{
            border: solid 10px;
            border-radius: 5px;
				width: 280px;
				padding:20px 20px;
				background-color: white;
         }
			.puntaje{
				font-size:20px;
			}
         `;
			div.innerHTML = `
         <div class="title-cont">
         <text-element>Puntaje</text-element>
         </div>
         <div class="score-cont">
         <div>
         <p class="puntaje">Vos: ${puntajeVos || 0} </p>
         </div>
         <div>
         <p class="puntaje">Maquina: ${puntajeMaquina || 0} </p>
         </div>
         </div> 
         
         `;
			div.appendChild(style);
			this.shadow.appendChild(div);
		}
	}
	customElements.define("score-table", ScoreTableEl);
}
