let languages = ["ActionScript", "AppleScript", "Asp", "BASIC", "C", "C++", "C#", "Clojure", "COBOL", "ColdFusion", "Erlang", "Fortran", "Groovy", "Haskell", "Java", "JavaScript", "Lisp", "Perl", "PHP", "Python", "Ruby", "Scala", "Scheme"];
let minimumTermLength = 2;

function autocomplete(id, source) {
    let input = document.getElementById(id);

    let div = document.createElement("div");

    div.classList.add("autocomplete");
    div.innerHTML = `
        <input type="text" id="${id}" />
        <ul class="autocomplete-list hidden" data-id="${id}"></ul>`;

    input.replaceWith(div);

    input = document.getElementById(id);
    let list = document.querySelector(`.autocomplete-list[data-id="${id}"]`);

    input.addEventListener("keyup", () => {
        list.innerHTML = "";

        let term = input.value.toLowerCase();

        if (term.length < minimumTermLength) {
            list.classList.add("hidden");
            return;
        }

        let foundWords = source.filter(x => x.toLowerCase().includes(term));

        if (foundWords.length == 0) {
            list.classList.add("hidden");
            return;
        }

        for (let word of foundWords) {
            let item = document.createElement("li");

            item.innerText = word;
            list.appendChild(item);

            item.addEventListener("click", () => {
                input.value = word;
                list.classList.add("hidden");
            });
        }

        list.classList.remove("hidden");
    });
}

autocomplete("languages", languages);
