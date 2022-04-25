const state = {
	data: {
		currentGame: {
			myPlay: [],
			computerPlay: [],
		},
		history: {
			myWins: [],
			computerWins: [],
		},
		win: [],
	},
	listeners: [],
	init() {
		const localData = localStorage.getItem("saved-state");
		const inicial = this.getState();

		if (localStorage.getItem("saved-state")) {
			this.setState(JSON.parse(localData));
		} else {
			this.setState({
				currentGame: { myPlay: [], computerPlay: [] },
				history: { myWins: [], computerWins: [] },
				win: [],
			});
		}
	},
	getState() {
		return this.data;
	},
	setMyPlay() {
		const currentState = this.getState();
		this.setState(currentState);
	},
	setComputerMove() {
		const movimiento = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
		if (movimiento === 1) {
			this.data.currentGame.computerPlay[0] = "piedra";
		} else if (movimiento === 2) {
			this.data.currentGame.computerPlay[0] = "papel";
		} else if (movimiento === 3) {
			this.data.currentGame.computerPlay[0] = "tijera";
		}
	},
	setWinner() {
		const myPlay = this.data.currentGame.myPlay[0];
		const computerPlay = this.data.currentGame.computerPlay[0];
		if (myPlay === computerPlay) {
			this.data.win[0] = 3;
		} else if (myPlay === "piedra" && computerPlay === "tijera") {
			this.data.win[0] = 1;

			this.data.history.myWins.push(1);
			var currentState = this.getState();
			this.setState(currentState);
		} else if (myPlay === "papel" && computerPlay === "piedra") {
			this.data.win[0] = 1;

			this.data.history.myWins.push(1);
			var currentState = this.getState();
			this.setState(currentState);
		} else if (myPlay === "tijera" && computerPlay === "papel") {
			this.data.win[0] = 1;
			this.data.history.myWins.push(1);

			var currentState = this.getState();
			this.setState(currentState);
		} else if (myPlay === "tijera" && computerPlay === "piedra") {
			this.data.win[0] = 2;
			this.data.history.computerWins.push(1);

			var currentState = this.getState();
			this.setState(currentState);
		} else if (myPlay === "piedra" && computerPlay === "papel") {
			this.data.win[0] = 2;
			this.data.history.computerWins.push(1);

			var currentState = this.getState();
			this.setState(currentState);
		} else if (myPlay === "papel" && computerPlay === "tijera") {
			this.data.win[0] = 2;
			this.data.history.computerWins.push(1);

			var currentState = this.getState();
			this.setState(currentState);
		}
	},
	setState(newState) {
		this.data = newState;
		for (const callbacks of this.listeners) {
			callbacks(newState);
		}
		localStorage.setItem("saved-state", JSON.stringify(newState));
	},

	suscribe(callback: (any) => any) {
		this.listeners.push(callback);
	},
};

export { state };
