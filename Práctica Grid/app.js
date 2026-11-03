const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".menu");

toggle.addEventListener("click", () => {
	nav.classList.toggle("active");
});
