// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";



var FirstSlider = document.getElementById("firstSlider");
var FirstOutput = document.getElementById("firstDemo");
FirstOutput.innerHTML = FirstSlider.value; // Display the default slider value


// Update the current slider value (each time you drag the slider handle)

FirstSlider.oninput = function () {
  FirstOutput.innerHTML = this.value;
  var pxBackgroundPosition = (FirstSlider.value / 5) * 55
  $('.AngleIndicator').css('background-position', '0px ' + (0 - (pxBackgroundPosition)) + 'px');
}


var secondSlider = document.getElementById("secondSlider");
var secondOutput = document.getElementById("Description");
secondOutput.innerHTML = `<label>Modest</label><span class="Value"><span class="Percent">20-60%</span> of sky</span>`;
// Display the default slider value

// Update the current slider value (each time you drag the slider handle)

secondSlider.oninput = function () {
  if (secondSlider.value == 0) {
    secondOutput.innerHTML = `<label>None or very little</label><span class="Value">less than <span class="Percent">20%</span> of sky</span>`;
  } else if (secondSlider.value == 1) {
    secondOutput.innerHTML = `<label>Modest</label><span class="Value"><span class="Percent">20-60%</span> of sky</span>`;
  } else if (secondSlider.value == 2) {
    secondOutput.innerHTML = `<label>Significant</label><span class="Value"><span class="Percent">60-80%</span> of sky</span>`;
  } else {
    secondOutput.innerHTML = `<label>Heavy</label><span class="Value">more than<span class="Percent">80%</span>of sky</span>`;
  }
  var pxBackgroundPosition = parseInt(secondSlider.value * 112);
  $('.Diagram').css('background-position', '0px ' + (0 - (pxBackgroundPosition)) + 'px');

}

//========================================================================================================================================================
// MAP
//========================================================================================================================================================


var mapSlider = document.getElementById("mapSlider");
var mapOutput = document.getElementById("hiddenValueMap");
mapOutput.value = mapSlider.value; // Display the default slider value


// Update the current slider value (each time you drag the slider handle)

mapSlider.oninput = function () {
  mapOutput.value = this.value;

  var pxBackgroundPosition = mapSlider.value * 195;
  $('.ArrayDirection').css('background-position', '0px ' + parseInt(0 - pxBackgroundPosition) + 'px');
}

//========================================================================================================================================================
//Step1 Next Button
var step1Next = document.getElementById('cphMainContent');

step1Next.addEventListener('click', step1NextHandler);

function step1NextHandler() {
  var getNum = document.getElementById('cphMainContentInput').value;
  DrawMap(getNum)
}
//========================================================================================================================================================
//Step2 Back Button
var step2BackButton = document.getElementById('step2BackButton');

step2BackButton.addEventListener('click', step2BackButtonHandler);

function step2BackButtonHandler() {
  document.getElementById('rmpView').classList.toggle('hidden');
  document.getElementById('card').classList.toggle('hidden');
}


//========================================================================================================================================================
// MAP Create

// need delete
//document.getElementById('rmpView').classList.toggle('hidden');


function DrawMap(getNum) {

  var geocoder = new google.maps.Geocoder();
  var address = getNum;
  geocoder.geocode({ 'address': address }, function (results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      if (results[0].types[0] == 'postal_code') {
        var latitude = results[0].geometry.location.lat();
        var longitude = results[0].geometry.location.lng();
        var data = {};
        data.title = results[0].formatted_address;
        data.lat = latitude;
        data.lng = longitude;
        var mapOptions = { center: new google.maps.LatLng(latitude, longitude), zoom: 19, mapTypeId: google.maps.MapTypeId.HYBRID };
        var infoWindow = new google.maps.InfoWindow();
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

        //========================================================================================================================================================
        // NEED DELETE COMMENT
        document.getElementById('card').classList.toggle('hidden');
        document.getElementById('rmpView').classList.toggle('hidden');
        document.getElementById("mapAllert").classList.add('hidden');

        //========================================================================================================================================================

        var marker;
        (function (marker, data) {
          google.maps.event.addListener(marker, "click", function (e) {
            infoWindow.setContent("<div style ='width:200px;height:50px'>" + data.title + "</div>");
            infoWindow.open(map, marker);
          });
        })(marker, data);
        document.getElementById("map").style.display = "block";
      } else {
        document.getElementById("mapAllert").classList.remove('hidden');
      }
    } else {
      document.getElementById("mapAllert").classList.remove('hidden');
    }
  });
};

//========================================================================================================================================================


var fourSlider = document.getElementById("fourSlider");
//var mapOutput = document.getElementById("hiddenValueMap");
//mapOutput.value = mapSlider.value; // Display the default slider value


// Update the current slider value (each time you drag the slider handle)

fourSlider.oninput = function () {
  //mapOutput.value = this.value;

  var pxBackgroundPosition = parseInt(fourSlider.value * 100);
  $('.Diagram').css('background-position', '0px ' + (0 - (pxBackgroundPosition)) + 'px');
}