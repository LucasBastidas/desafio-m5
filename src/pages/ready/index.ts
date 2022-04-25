import { state } from "../../state";
export function initReadyPage(params) {
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
      align-items:center
   }
   .reloj{
      margin-top: 50px;
   }
   .manos-cont{
      display:flex;
      gap: 40px;
      position:fixed;
      bottom:-10px;
   }
   .piedra{
   }
   .papel{
   }
   .tijera{
   }
   `;
	div.innerHTML = `
   <countdown-element class="reloj" time=3></countdown-element>
   <div class="manos-cont">
      <piedra-papel-tijera  select="papel" class="tijera"></piedra-papel-tijera>
      <piedra-papel-tijera select="piedra" class="papel"></piedra-papel-tijera>
      <piedra-papel-tijera  select="tijera" class="piedra"></piedra-papel-tijera>
      </div>
   `;
	var computerMove = state.data.currentGame.computerPlay;

	//BOTONES//
	const piedra = div.querySelector(".piedra");
	const papel = div.querySelector(".papel");
	const tijera = div.querySelector(".tijera");

	const botonTijera = div.querySelector(".tijera");
	botonTijera.addEventListener("click", () => {
		style.innerHTML = `
      .contenedor{
         height: 100vh;
         padding-left: 30px;
         padding-right:30px;
         display:flex;
         flex-direction: column;
         justify-content: space-between;
      }
      .reloj{
         margin-top: 50px;
      }
      .manos-cont{
         display:flex;
         justify-content: space-around;
      }
      .piedra{
         position: relative;
         top: 60px;
      }
      .papel{
         position: relative;
         top: 60px;
      }
      .tijera{
         position: relative;
         top: 60px;
         animation: myAnim 1s ease 1s 1 normal forwards;   
      }
      @keyframes myAnim {
         0% {
            transform: translateY(0);
         }
      
         100% {
            transform: translateY(-100px);
         }
      }
      `;
		piedra.style.display = "none";
		papel.style.display = "none";
		state.data.currentGame.myPlay[0] = "tijera";
		state.setComputerMove();
		aux = 1;

		state.setWinner();
		setTimeout(function () {
			params.goTo("/play");
		}, 2000);
	});
	const botonPapel = div.querySelector(".papel");
	botonPapel.addEventListener("click", () => {
		style.innerHTML = `
      .contenedor{
         height: 100vh;
         padding-left: 30px;
         padding-right:30px;
         display:flex;
         flex-direction: column;
         justify-content: space-between;
      }
      .reloj{
         margin-top: 50px;
      }
      .manos-cont{
         display:flex;
         justify-content: space-around;
      }
      .reloj{
         margin-top: 50px;
      }
      .piedra{
         position: relative;
         top: 60px;
      }
      .tijera{
         position: relative;
         top: 60px;
      }
      .papel{
         position: relative;
         top: 60px;
         animation: myAnim 1s ease 1s 1 normal forwards;   
      }
      @keyframes myAnim {
         0% {
            transform: translateY(0);
         }
      
         100% {
            transform: translateY(-100px);
         }
      }
      `;

		piedra.style.display = "none";
		tijera.style.display = "none";
		state.data.currentGame.myPlay[0] = "papel";
		state.setComputerMove();
		aux = 1;

		state.setWinner();
		setTimeout(function () {
			params.goTo("/play");
		}, 2000);
	});
	const botonPiedra = div.querySelector(".piedra");
	botonPiedra.addEventListener("click", () => {
		style.innerHTML = `
      .contenedor{
         height: 100vh;
         padding-left: 30px;
         padding-right:30px;
         display:flex;
         flex-direction: column;
         justify-content: space-between;
      }
      .reloj{
         margin-top: 50px;
      }
      .manos-cont{
         display:flex;
         justify-content: space-around;
      }
      .piedra{
         position: relative;
         top: 60px;
      }
      .tijera{
         position: relative;
         top: 60px;
      }
      .piedra{
         position: relative;
         top: 60px;
         animation: myAnim 1s ease 1s 1 normal forwards; 
      }
      @keyframes myAnim {
         0% {
            transform: translateY(0);
         }
      
         100% {
            transform: translateY(-100px);
         }
      }
      `;

		papel.style.display = "none";
		tijera.style.display = "none";
		state.data.currentGame.myPlay[0] = "piedra";
		state.setComputerMove();
		aux = 1;

		state.setWinner();
		setTimeout(function () {
			params.goTo("/play");
		}, 2000);
	});

	//CONTADOR//
	let aux = 0;
	let left = 4;
	const interval = setInterval(() => {
		left--;
		if (left == 0 && aux == 0) {
			window.alert("Se terminó tu tiempo!");
			params.goTo("/welcome");
			clearInterval(interval);
		}
	}, 1000);
	div.appendChild(style);
	return div;
}
