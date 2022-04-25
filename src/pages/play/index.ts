import { state } from "../../state";
export function initPlayPage(params) {
	const div = document.createElement("div");
	const style = document.createElement("style");
	div.setAttribute("class", "contenedor");
	style.innerHTML = `
      .contenedor{
         height: 100%;
         padding-left: 30px;
         padding-right:30px;
         display:flex;
         flex-direction: column;
         justify-content: space-between;
         align-items: center;
      }
      .computadora{
         transform: rotate(-180deg);
         position: fixed;
         top: -10px;
      }
      .yo{
         position: fixed;
         bottom: -10px;
      }
      .result-lose-cont{
         display: none;
      }
      .result-win-cont{
         display: none;
      }
      .empate{
         display:none;
      }
      .boton{
         display:none;
      }
      .boton-reiniciar{
         display:none;
      }
   `;

	if (state.data.win[0] == 1) {
		div.innerHTML = `
         <piedra-papel-tijera class="computadora" size="grande" select="${state.data.currentGame.computerPlay}"></piedra-papel-tijera>
         <piedra-papel-tijera class="yo" size="grande" select="${state.data.currentGame.myPlay}"></piedra-papel-tijera>
         <div class="result-win-cont">
         <resultado-estrella select="win"></resultado-estrella>
         <score-table  vos= ${state.data.history.myWins.length} maquina= ${state.data.history.computerWins.length} ></score-table>
         <button-element class="boton">Otra vez</button-element>
         <button-element class="boton-reiniciar" color="red" border-color="#461010">Reiniciar score</button-element>
         </div>
      `;
	} else if (state.data.win[0] == 2) {
		div.innerHTML = `
         <piedra-papel-tijera class="computadora" size="grande" select="${state.data.currentGame.computerPlay}"></piedra-papel-tijera>
         <piedra-papel-tijera class="yo" size="grande" select="${state.data.currentGame.myPlay}"></piedra-papel-tijera>
         <div class="result-lose-cont">
         <resultado-estrella select="lose"></resultado-estrella>
         <score-table vos= ${state.data.history.myWins.length} maquina= ${state.data.history.computerWins.length} ></score-table>
         <button-element class="boton">Otra vez</button-element>
         <button-element class="boton-reiniciar" color="red" border-color="#461010" >Reiniciar score</button-element>
         </div>
         
         `;
	} else {
		div.innerHTML = `
         
         <piedra-papel-tijera class="computadora" size="grande" select="${state.data.currentGame.computerPlay}"></piedra-papel-tijera>
         <piedra-papel-tijera class="yo" size="grande" select="${state.data.currentGame.myPlay}"></piedra-papel-tijera>
         <div class="result-empate-cont">
         <title-element color="blue" class="empate">EMPATE</title-element>
         <button-element class="boton">Otra vez</button-element>
         <button-element class="boton-reiniciar" color="red" border-color="#461010" >Reiniciar score</button-element>
         </div>
         
         `;
	}

	div.appendChild(style);

	setTimeout(function () {
		style.innerHTML = `
      .contenedor{
         height: 100vh;
         padding-left: 30px;
         padding-right:30px;
         display:flex;
         flex-direction: column;
         justify-content: space-between;
         align-items: center;
      }
      .computadora{
         transform: rotate(-180deg);
         position: relative;
         top: -10px;
      }
      .yo{
         position: relative;
         top: 10px;
      }
      .result-lose-cont{
         height: 100%;
         width: 100%;
         background-color: rgba(137, 73, 73, 0.9);;
         position: absolute;
         display: flex;
         flex-direction:column;
         padding: 30px 30px;
         justify-content: center;
         align-items: center;
      }
      .result-win-cont{
         height: 100%;
         width: 100%;
         background-color: rgba(136, 137, 73, 0.9);;;
         position: absolute;
         display: flex;
         flex-direction:column;
         padding: 30px 30px;
         justify-content: center;
         align-items: center;
      }
      .result-empate-cont{
         height: 100%;
         width: 100%;
         background-color: rgb(73 107 137 / 52%);
         position: absolute;
         display: flex;
         flex-direction:column;
         padding: 30px 30px;
         justify-content: center;
         align-items:center;
      }
      .empate{
         display:block;
      }
      .boton{
         padding-top:10px;
      }
      .boton-reiniciar{
         padding-top: 10px;
      }
   `;
	}, 1000);
	const boton = div.querySelector(".boton");
	boton.addEventListener("click", () => {
		params.goTo("/rules");
	});
	const botonReiniciar = div.querySelector(".boton-reiniciar");
	botonReiniciar.addEventListener("click", () => {
		localStorage.clear();
		state.init();
	});

	return div;
}
