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
        document.getElementById("rmpView").classList.toggle("hidden");
        document.getElementById("card").classList.toggle("hidden");
    }
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
                document.getElementById("card").classList.toggle("hidden");
                document.getElementById("rmpView").classList.toggle("hidden");
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
    var fourSlider = document.getElementById("fourSlider");
    fourSlider.oninput = function() {
        var pxBackgroundPosition = parseInt(100 * fourSlider.value);
        $(".Diagram").css("background-position", "0px " + (0 - pxBackgroundPosition) + "px");
    };
    window["FLS"] = true;
    isWebp();
})();