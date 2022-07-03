let dropdowns = document.querySelectorAll("div.ddl");

for (let dropdown of dropdowns) {
    let display = dropdown.querySelector("div.ddl-display");
    let data = dropdown.querySelectorAll("div.ddl-data > div");

    if (data.length > 0) {
        display.innerText = data[0].innerText;

        dropdown.addEventListener("click", e => {
            e.stopPropagation();

            dropdown.classList.toggle("ddl-open");
        });

        for (item of data) {
            item.addEventListener("click", e => {
                display.innerText = e.target.innerText;
            });
        }
    }
}

document.addEventListener("click", () => {
    let openDropdowns = document.querySelectorAll("div.ddl.ddl-open");

    for (let dropdown of openDropdowns) {
        dropdown.classList.remove("ddl-open");
    }
});
