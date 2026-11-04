// Menú movil
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".menu");

toggle.addEventListener("click", () => {
	nav.classList.toggle("active");
});

// Tema oscuro / claro / sistema

const root = document.documentElement;
const estado = document.getElementById("estado");
const oscuroSistema = matchMedia("(prefers-color-scheme: dark)");

const botones = document.querySelectorAll(".selector button");
function pintar() {
	const elegido = root.dataset.theme || "system";
	botones.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.tema === elegido)));
}
botones.forEach((b) =>
	b.addEventListener("click", () => {
		const t = b.dataset.tema;
		if (t === "system") {
			delete root.dataset.theme;
			try {
				localStorage.removeItem("tema");
			} catch (e) {}
		} else {
			root.dataset.theme = t;
			try {
				localStorage.setItem("tema", t);
			} catch (e) {}
		}
		pintar();
	}),
);
oscuroSistema.addEventListener("change", pintar);
pintar();
