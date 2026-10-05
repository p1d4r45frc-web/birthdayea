const wishes = document.querySelectorAll(".wish-card");

wishes.forEach((card) => {

    card.addEventListener("click", () => {

        card.classList.toggle("opened");

    });

});
const animatedElements = document.querySelectorAll(
    ".about, .gallery-section, .wishes-section, .gallery-item, .wish-card"
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    {
        threshold: 0.15
    }
);

animatedElements.forEach((element) => {
    element.classList.add("hidden");
    observer.observe(element);
});

// =========================
// ИНТЕРАКТИВНЫЙ КОНВЕРТ
// =========================

const envelope = document.querySelector(".envelope");

if (envelope) {
    envelope.addEventListener("click", () => {
        envelope.classList.toggle("opened");
    });
}
