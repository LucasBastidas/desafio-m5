import { state } from "../../state";
export function initRulesPage(params) {
	const div = document.createElement("div");
	const style = document.createElement("style");
	div.setAttribute("class", "contenedor");
	style.innerHTML = `
      .contenedor{
         display: flex;
         flex-direction:column;
         align-items: center;
         justify-content: space-between;
         height: 100vh;
         position: relative;
         gap:143px;
         text-align:center;
      }
      @media(min-width:980px){
         .contenedor{
            padding: 40px 0px 0px 0px;
            gap: 150px;
         }
      }
      .text-cont{

      }
      @media(min-width:980px){
         .text-cont{
            height:400px;
            width:270px;
         }
      }
      .manos-cont{
         display:flex;
         gap:40px;
         position:relative;
         bottom: 0px;
      }
   `;
	div.innerHTML = `
      <div class="text-cont">
      <text-element>Presioná jugar
      y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</text-element>
      </div>
      <div>
      <button-element class="boton">¡Jugar!</button-element>
      </div>
      <div class="manos-cont">
      <piedra-papel-tijera select="papel"></piedra-papel-tijera>
      <piedra-papel-tijera select="piedra"></piedra-papel-tijera>
      <piedra-papel-tijera select="tijera"></piedra-papel-tijera>
      </div>
   `;
	const boton = div.querySelector(".boton");
	boton.addEventListener("click", () => {
		params.goTo("/ready");
	});
	div.appendChild(style);
	return div;
}
