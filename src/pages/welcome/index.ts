export function initWelcomePage(params) {
	const div = document.createElement("div");
	div.setAttribute("class", "contenedor");
	const style = document.createElement("style");
	style.innerHTML = `
      .contenedor{
         
         display: flex;
         flex-direction:column;
         align-items: center;
         justify-content: space-between;
         height: 100vh;
         position: relative;
         gap:45px;
         text-align:center;
      }
      .text-cont{
         
      }
      @media(min-width:980px){
         .contenedor{
            padding: 0px 40px;
            gap: 170px;
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
      <title-element class="titulo">Piedra, Papel o Tijera</title-element>
      </div>
      <div>
      <button-element class="boton">Empezar</button-element>
      </div>
      <div class="manos-cont">
      <piedra-papel-tijera select="tijera"></piedra-papel-tijera>
      <piedra-papel-tijera select="papel"></piedra-papel-tijera>
      <piedra-papel-tijera select="piedra"></piedra-papel-tijera>
      </div>
   `;
	const boton = div.querySelector(".boton");
	boton.addEventListener("click", () => {
		params.goTo("/rules");
	});
	div.appendChild(style);
	return div;
}
