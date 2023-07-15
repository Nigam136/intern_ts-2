function updateStates() {
  var country = document.getElementById("country").value;
  var stateSelect = document.getElementById("state");
  var citySelect = document.getElementById("city");

  stateSelect.innerHTML = '<option value="">Select</option>';
  citySelect.innerHTML = '<option value="">Select</option>';
  stateSelect.disabled = true;
  citySelect.disabled = true;

  if (country === "india") {
    stateSelect.disabled = false;

    var states = ["Maharashtra", "Karnataka", "Tamil nadu"];
    for (var i = 0; i < states.length; i++) {
      var option = document.createElement("option");
      option.text = states[i];
      stateSelect.add(option);
    }
  } else if (country === "usa") {
    stateSelect.disabled = false;
    var states = ["California", "New York", "Florida"];
    for (var i = 0; i < states.length; i++) {
      var option = document.createElement("option");
      option.text = states[i];
      stateSelect.add(option);
    }
  }
}

function updateCities() {
  var state = document.getElementById("state").value;
  var citySelect = document.getElementById("city");

  citySelect.innerHTML = '<option value="">Select</option>';
  citySelect.disabled = true;

  if (state === "Maharashtra") {
    citySelect.disabled = false;
    var cities = ["Mumbai", "Pune", "Nagpur"];
    for (var i = 0; i < cities.length; i++) {
      var option = document.createElement("option");
      option.text = cities[i];
      citySelect.add(option);
    }
  } else if (state === "Karnataka") {
    citySelect.disabled = false;
    var cities = ["Bengaluru", "Mysuru", "Hubli"];
    for (var i = 0; i < cities.length; i++) {
      var option = document.createElement("option");
      option.text = cities[i];
      citySelect.add(option);
    }
  } else if (state === "Tamil Nadu") {
    citySelect.disabled = false;
    var cities = ["Chennai", "Coimbatore", "Madurai"];
    for (var i = 0; i < cities.length; i++) {
      var option = document.createElement("option");
      option.text = cities[i];
      citySelect.add(option);
    }
  } else if (state === "California") {
    citySelect.disabled = false;
    var cities = ["Los Angeles", " San Diego", "San Francisco"];
    for (var i = 0; i < cities.length; i++) {
      var option = document.createElement("option");
      option.value = cities[i];
      citySelect.add(option);
    }
  } else if (state === "New York") {
    citySelect.disabled = false;
    var cities = ["Buffalo", "Rochester", "Albany"];
    for (var i = 0; i < cities.length; i++) {
      var option = document.createElement("option");
      option.value = cities[i];
      citySelect.add(option);
    }
  } else if (state === "Florida") {
    citySelect.disabled = false;
    var cities = ["Alachua", "Alford", "Alva"];
    for (var i = 0; i < cities.length; i++) {
      var option = document.createElement("option");
      option.value = cities[i];
      citySelect.add(option);
    }
  }
}
