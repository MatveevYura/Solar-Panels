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
        if (0 == secondSlider.value) secondOutput.innerHTML = `<label>None or very little</label><span class="Value">less than <span class="Percent">20%</span> of sky</span>`; else if (1 == secondSlider.value) secondOutput.innerHTML = `<label>Modest</label><span class="Value"><span class="Percent">20-60%</span> of sky</span>`; else if (2 == secondSlider.value) secondOutput.innerHTML = `<label>Significant</label><span class="Value"><span class="Percent">60-80%</span> of sky</span>`; else if (3 == secondSlider.value) secondOutput.innerHTML = `<label>Heavy</label><span class="Value">more than<span class="Percent">80%</span>of sky</span>`;
        var pxBackgroundPosition = parseInt(112 * secondSlider.value);
        $(".Diagram").css("background-position", "0px " + (0 - pxBackgroundPosition) + "px");
    };
    var mapSlider = document.getElementById("mapSlider");
    var mapOutput = document.getElementById("hiddenValueMap");
    mapOutput.value = mapSlider.value;
    mapSlider.oninput = function() {
        mapOutput.value = this.value;
        var pxBackgroundPosition = 195 * mapSlider.value;
        $(".ArrayDirection").css("background-position", "0px " + parseInt(0 - pxBackgroundPosition) + "px");
    };
    var step1Next = document.getElementById("cphMainContent");
    step1Next.addEventListener("click", step1NextHandler);
    function step1NextHandler() {
        var getNum = document.getElementById("cphMainContentInput").value;
        DrawMap(getNum);
    }
    var step2BackButton = document.getElementById("step2BackButton");
    step2BackButton.addEventListener("click", step2BackButtonHandler);
    function step2BackButtonHandler() {
        document.getElementById("rmpView").classList.add("hidden");
        document.getElementById("card").classList.remove("hidden");
    }
    var step3BackButton = document.getElementById("step3BackButton");
    step3BackButton.addEventListener("click", step3BackButtonHandler);
    function step3BackButtonHandler() {
        document.getElementById("rmpView").classList.remove("hidden");
        document.getElementById("resultsBlock").classList.add("hidden");
        document.getElementById("header__block").classList.remove("hidden");
    }
    step3BackButton;
    function DrawMap(getNum) {
        var geocoder = new google.maps.Geocoder;
        var address = getNum;
        geocoder.geocode({
            address
        }, (function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) if ("postal_code" == results[0].types[0]) {
                var latitude = results[0].geometry.location.lat();
                var longitude = results[0].geometry.location.lng();
                var data = {};
                data.title = results[0].formatted_address;
                data.lat = latitude;
                data.lng = longitude;
                var mapOptions = {
                    center: new google.maps.LatLng(latitude, longitude),
                    zoom: 19,
                    mapTypeId: google.maps.MapTypeId.HYBRID
                };
                var infoWindow = new google.maps.InfoWindow;
                var map = new google.maps.Map(document.getElementById("map"), mapOptions);
                document.getElementById("card").classList.add("hidden");
                document.getElementById("rmpView").classList.remove("hidden");
                document.getElementById("mapAllert").classList.add("hidden");
                var marker;
                (function(marker, data) {
                    google.maps.event.addListener(marker, "click", (function(e) {
                        infoWindow.setContent("<div style ='width:200px;height:50px'>" + data.title + "</div>");
                        infoWindow.open(map, marker);
                    }));
                })(marker, data);
                document.getElementById("map").style.display = "block";
            } else document.getElementById("mapAllert").classList.remove("hidden"); else document.getElementById("mapAllert").classList.remove("hidden");
        }));
    }
    document.getElementById("resultsBlock").classList.add("hidden");
    var fourSlider = document.getElementById("fourSlider");
    fourSlider.oninput = function() {
        var pxBackgroundPosition = parseInt(100 * fourSlider.value);
        $(".Diagram").css("background-position", "0px " + (0 - pxBackgroundPosition) + "px");
    };
    var step2NextButton = document.getElementById("step2NextButton");
    step2NextButton.addEventListener("click", step2NextButtonHandler);
    function step2NextButtonHandler() {
        calculations();
        document.getElementById("rmpView").classList.add("hidden");
        document.getElementById("header__block").classList.add("hidden");
        document.getElementById("card").classList.add("hidden");
        document.getElementById("resultsBlock").classList.remove("hidden");
    }
    function getRandomArbitrary(min = 250, max = 280) {
        return Math.random() * (max - min) + min;
    }
    function getRandomCO2(min = 640, max = 650) {
        return Math.random() * (max - min) + min;
    }
    function getRandomFuel(min = 180, max = 190) {
        return Math.random() * (max - min) + min;
    }
    function getRandomSEG(min = 120, max = 130) {
        return Math.random() * (max - min) + min;
    }
    var getRandomTest = 10;
    function getRandomGenerate(min = 1350, max = 1360) {
        return Math.random() * (max - min) + min;
    }
    function calculations() {
        var sizeOfTheSystem = document.getElementById("sizeOfTheSystem");
        var intGenerationID = document.getElementById("intGenerationID");
        if (0 != intGenerationID.value) {
            sizeOfTheSystem.innerHTML = intGenerationID.value;
            if (2 != intGenerationID.value) var panel = (intGenerationID.value - 2) / .5 * 493 + 3971; else panel = 3971;
        } else if (0 == fourSlider.value) {
            sizeOfTheSystem.innerHTML = 2;
            panel = 3971;
        } else if (1 == fourSlider.value) {
            sizeOfTheSystem.innerHTML = 4;
            panel = (sizeOfTheSystem.innerHTML - 2) / .5 * 493 + 3971;
        } else if (2 == fourSlider.value) {
            sizeOfTheSystem.innerHTML = 6;
            panel = (sizeOfTheSystem.innerHTML - 2) / .5 * 493 + 3971;
        } else if (3 == fourSlider.value) {
            sizeOfTheSystem.innerHTML = 8;
            panel = (sizeOfTheSystem.innerHTML - 2) / .5 * 493 + 3971;
        }
        if (FirstSlider.value <= 15 || FirstSlider.value >= 55) var newFirstSlider = .9; else newFirstSlider = 1;
        if (0 == secondSlider.value) var newSecondSlider = 1; else if (1 == secondSlider.value) newSecondSlider = .8; else if (2 == secondSlider.value) newSecondSlider = .6; else if (3 == secondSlider.value) newSecondSlider = .4;
        var potentialAnnualBenefit = document.getElementById("potentialAnnualBenefit");
        var potentialCO2saving = document.getElementById("potentialCO2saving");
        var potentialFuelBillSaving = document.getElementById("potentialFuelBillSaving");
        var potentialPaymentsFromSEG = document.getElementById("potentialPaymentsFromSEG");
        var potentialLifetimeBenefit = document.getElementById("potentialLifetimeBenefit");
        var potentialLifetimeCO2Saving = document.getElementById("potentialLifetimeCO2Saving");
        var potentialLifetimeFuelBillSaving = document.getElementById("potentialLifetimeFuelBillSaving");
        var potentialLifetimePaymentsFromSEG = document.getElementById("potentialLifetimePaymentsFromSEG");
        var estimatedInstallationCosts = document.getElementById("estimatedInstallationCosts");
        var potentialLifetimeNetBenefit = document.getElementById("potentialLifetimeNetBenefit");
        var energyGeneratedByThePanels = document.getElementById("energyGeneratedByThePanels");
        potentialAnnualBenefit.innerHTML = getRandomArbitrary().toFixed(0) * newFirstSlider.toFixed(0) * newSecondSlider.toFixed(0) * (.5 * sizeOfTheSystem.innerHTML).toFixed(0);
        potentialCO2saving.innerHTML = getRandomCO2().toFixed(0) * newFirstSlider.toFixed(0) * newSecondSlider.toFixed(0) * (.5 * sizeOfTheSystem.innerHTML).toFixed(0);
        potentialFuelBillSaving.innerHTML = getRandomFuel().toFixed(0) * newFirstSlider.toFixed(0) * newSecondSlider.toFixed(0) * (.5 * sizeOfTheSystem.innerHTML).toFixed(0);
        potentialPaymentsFromSEG.innerHTML = getRandomSEG().toFixed(0) * newFirstSlider.toFixed(0) * newSecondSlider.toFixed(0) * (.5 * sizeOfTheSystem.innerHTML).toFixed(0);
        potentialLifetimeBenefit.innerHTML = 24 * potentialAnnualBenefit.innerHTML;
        potentialLifetimeCO2Saving.innerHTML = 24 * potentialCO2saving.innerHTML;
        potentialLifetimeFuelBillSaving.innerHTML = 24 * potentialFuelBillSaving.innerHTML;
        potentialLifetimePaymentsFromSEG.innerHTML = 24 * potentialPaymentsFromSEG.innerHTML;
        estimatedInstallationCosts.innerHTML = panel.toFixed(0);
        potentialLifetimeNetBenefit.innerHTML = getRandomTest.toFixed(0) * newFirstSlider.toFixed(0) * newSecondSlider.toFixed(0) * (.5 * sizeOfTheSystem.innerHTML).toFixed(0);
        energyGeneratedByThePanels.innerHTML = getRandomGenerate().toFixed(0) * newFirstSlider.toFixed(0) * newSecondSlider.toFixed(0) * (.5 * sizeOfTheSystem.innerHTML).toFixed(0);
    }
    window["FLS"] = true;
    isWebp();
})();