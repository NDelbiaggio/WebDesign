var mesData;

var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v1/all')
request.onload = function () {
    var data = JSON.parse(request.responseText);
    mesData = data;
    setCountries(data);
}
request.send();

function setCountries(data) {
    var lst = document.getElementById("lstCountries");
    for (var i = 0; i < data.length; i++) {
        var option = document.createElement("option");
        option.setAttribute('value', i)
        var country = data[i].name;
        option.text = country;
        lst.add(option)
        if (country == "Finland") {
            lst.getElementsByTagName('option')[i].selected = "selected";
            loadFormat()
        }
    }
}

function loadFormat() {
    var input = document.getElementById("phoneNumber");
    var country = document.getElementById("lstCountries");
    var ind = country.options[country.selectedIndex].value;

    //var phone = document.createElement('i');
    //phone.setAttribute('class', 'glyphicon');
    //phone.setAttribute('class', 'glyphicon-phone-alt');
    //input.
    input.innerHTML = "+" + mesData[ind].callingCodes[0];
}

