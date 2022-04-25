import { initWelcomePage } from "./pages/welcome";
import { initRulesPage } from "./pages/rules";
import { initReadyPage } from "./pages/ready";
import { initPlayPage } from "./pages/play";
const routes = [
	{
		path: /\/welcome/,
		component: initWelcomePage,
	},
	{
		path: /\/rules/,
		component: initRulesPage,
	},
	{
		path: /\/ready/,
		component: initReadyPage,
	},
	{
		path: /\/play/,
		component: initPlayPage,
	},
];

export function initRouter(container: Element) {
	console.log(location.pathname);

	function goTo(path) {
		history.pushState({}, "", path);
		handleRoute(path);
	}

	function handleRoute(route) {
		console.log("soy el handleRoute y esta es la ruta " + route);
		for (const r of routes) {
			if (r.path.test(route)) {
				const el = r.component({ goTo: goTo });
				const contentEl = document.querySelector(".content");
				if (contentEl.firstChild) {
					contentEl.firstChild.remove();
				}
				contentEl.appendChild(el);
			}
		}
	}
	if (location.pathname == "/") {
		goTo("/welcome");
	}
	if (location.host.includes(".github.io")) {
		goTo("/welcome");
	} else {
		handleRoute(location.pathname);
	}
	window.onpopstate = function (event) {
		handleRoute(location.pathname);
	};
}
