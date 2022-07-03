function initCarousel(elem, images) {
    elem.classList.add("carousel");

    let imgHTML = "<img src='" + images.join("' /><img src='") + "' />";

    let bullets = "";
    for (var i = 0; i < images.length; i++) {
        bullets += "<span data-index=" + i + "></span>";
    }

    elem.innerHTML = `
        <div class="carousel-left">&lt;</div>
        <div class="carousel-right">&gt;</div>
        <div class="carousel-data">${imgHTML}</div>
        <div class="carousel-bullets">${bullets}</div>
    `;

    let imageList = elem.querySelectorAll("div.carousel-data > img");
    imageList[0].classList.add("active");

    let bulletList = elem.querySelectorAll("div.carousel-bullets > span");
    bulletList[0].classList.add("active");

    let index = 0;

    elem.querySelector("div.carousel-left").addEventListener("click", () => {
        if (index > 0) {
            index--;
        }
        else {
            index = images.length - 1;
        }
        
        refreshCarousel();
    });

    elem.querySelector("div.carousel-right").addEventListener("click", () => {
        if (index < images.length - 1) {
            index++;
        }
        else {
            index = 0;
        }

        refreshCarousel();
    });

    for (let bullet of bulletList) {
        bullet.addEventListener("click", () => {
            index = parseInt(bullet.getAttribute("data-index"));

            refreshCarousel();
        });
    }

    function refreshCarousel() {
        for (var i = 0; i < images.length; i++) {
            if (i == index) {
                imageList[i].classList.add("active");
                bulletList[i].classList.add("active");
            }
            else {
                imageList[i].classList.remove("active");
                bulletList[i].classList.remove("active");
            }
        }
    }
}

initCarousel(document.getElementById("my-carousel"), [
    "https://upload.wikimedia.org/wikipedia/commons/b/b7/Metallica_logo.png",
    "https://lh3.googleusercontent.com/Q66qgtwpSMXB-oRxCttFGz51747QeMB1SP2vUVZvSXx4wPOkeiDXMUonwyO9jeDszl2h5QNg1V_wYB0=w2600-h1083-p-l90-rj",
    "https://imagesmtv-a.akamaihd.net/uri/mgid:ao:image:mtv.com:209606?height=1238&width=2201&format=jpg&quality=.7"
]);

initCarousel(document.getElementById("my-other-carousel"), [
    "data:image/jpeg;base64,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",
    "https://s.yimg.com/ny/api/res/1.2/xJnuMbP2_mIPzOpxXk2.fg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM2MA--/https://s.yimg.com/uu/api/res/1.2/qPW4HQVR0NuNZzQDMycgHw--~B/aD0xMDgwO3c9MTkyMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/gobankingrates_644/7827dd98611977d4841319efe035543c"
]);
