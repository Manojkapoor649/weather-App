
        function checkSeason() {
            let weatherSeason = parseInt(document.getElementById('season').value);
            let result = document.getElementById('result');
            switch (weatherSeason) {
                case 1:
                    result.innerHTML = "Winter (Dec to Feb)";
                    break;
                case 2:
                    result.innerHTML = "Spring (Mar to May)";
                    break;
                case 3:
                    result.innerHTML = "Summer (Jun to Aug)";
                    break;
                case 4:
                    result.innerHTML = "Autumn (Sep to Nov)";
                    break;
                default:
                    result.innerHTML = "Invalid Chocie";


            }
        }
    