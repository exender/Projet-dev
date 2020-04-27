// League Of Legend //

/* https://developer.mozilla.org/fr/docs/Web/HTTP/CORS/Errors/CORSAllowOriginManquant 
Faut add un bail sur le serv pour faire des requêtes
*/

if (window.XMLHttpRequest) {
    // code for modern browsers
    var xhttp = new XMLHttpRequest();
} else {
    // code for old IE browsers
    var xhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

var sumName = "";

function summonerLookUp() {
    var SUMMONER_NAME = document.getElementById("userName").value;

    var API_KEY = "RGAPI-ccbd365f-ac19-4184-95e1-4cc3e9ec444d";

    if (SUMMONER_NAME !== "") {
        xhttp.open("GET", "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + SUMMONER_NAME + '?api_key=' + API_KEY, true);
        xhttp.send();
    }
}

function Name() {
    alert(sumName);
}

/* 
if (SUMMONER_NAME !== "") {
        xhttp.open({
            type: "GET",
            url: "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + SUMMONER_NAME + '?api_key=' + API_KEY,
            async: true,
            dataType: "json",
            data: {},
            success: function (json) {
                var SUMMONER_NAME_NOSPACES = SUMMONER_NAME.replace(" ", "");

                SUMMONER_NAME_NOSPACES = SUMMONER_NAME_NOSPACES.toLowerCase().trim();

                summonerLevel = json[SUMMONER_NAME_NOSPACES].summonerLevel;
                summonerID = json[SUMMONER_NAME_NOSPACES].id;

                document.getElementById("sLevel").innerHTML = summonerLevel;
                document.getElementById("sID").innerHTML = summonerID;

                sumName = json[SUMMONER_NAME_NOSPACES].name;
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("error getting Summoner data!");
            }
        });

    }
    */