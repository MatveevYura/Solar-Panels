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