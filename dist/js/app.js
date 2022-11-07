(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    var FirstSlider = document.getElementById("firstSlider");
    var FirstOutput = document.getElementById("firstDemo");
    FirstOutput.innerHTML = FirstSlider.value;
    FirstSlider.oninput = function() {
        FirstOutput.innerHTML = this.value;
        var pxBackgroundPosition = FirstSlider.value / 5 * 55;
        $(".AngleIndicator").css("background-position", "0px " + (0 - pxBackgroundPosition) + "px");
    };
    var secondSlider = document.getElementById("secondSlider");
    var secondOutput = document.getElementById("Description");
    secondOutput.innerHTML = `<label>Modest</label><span class="Value"><span class="Percent">20-60%</span> of sky</span>`;
    secondSlider.oninput = function() {
        if (0 == secondSlider.value) secondOutput.innerHTML = `<label>None or very little</label><span class="Value">less than <span class="Percent">20%</span> of sky</span>`; else if (1 == secondSlider.value) secondOutput.innerHTML = `<label>Modest</label><span class="Value"><span class="Percent">20-60%</span> of sky</span>`; else if (2 == secondSlider.value) secondOutput.innerHTML = `<label>Significant</label><span class="Value"><span class="Percent">60-80%</span> of sky</span>`; else secondOutput.innerHTML = `<label>Heavy</label><span class="Value">more than<span class="Percent">80%</span>of sky</span>`;
        var pxBackgroundPosition = parseInt(112 * secondSlider.value);
        $(".Diagram").css("background-position", "0px " + (0 - pxBackgroundPosition) + "px");
    };
    window["FLS"] = true;
    isWebp();
})();