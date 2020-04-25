// League Of Legend //

function summonerLookUp() {
    var SUMMONER_NAME = "";
    SUMMONER_NAME = $("#userName").val();

    var API_KEY = '?api_key=' + "RGAPI-ccbd365f-ac19-4184-95e1-4cc3e9ec444d";

    if (SUMMONER_NAME !== "") {

        $.ajax({
            url: 'https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + SUMMONER_NAME + API_KEY,
            type: 'GET',
            dataType: 'json',
            data: {

            },
            success: function (json) {
                var SUMMONER_NAME_NOSPACES = SUMMONER_NAME.replace(" ", "");

                SUMMONER_NAME_NOSPACES = SUMMONER_NAME_NOSPACES.toLowerCase().trim();

                summonerLevel = json[SUMMONER_NAME_NOSPACES].summonerLevel;
                summonerName = json[SUMMONER_NAME_NOSPACES].name;

                document.getElementById("sLevel").innerHTML = summonerLevel;
                document.getElementById("sName").innerHTML = summonerName;

            }
        });
    }
}