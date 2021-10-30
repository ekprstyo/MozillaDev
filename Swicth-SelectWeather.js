const select = document.querySelector('select');
        const p = document.querySelector('p');

        select.addEventListener('change',weather);

        function weather() {
            // const choice = select.value;

            switch (select.value) {
                case "sunny" :
                    p.textContent = 'It is nice and sunny outside todat. Wear shorts! Go to the beach, or the park, and get an ice cream.';
                    break;
                case "rainy" :
                    p.textContent = 'Rainy is falling outside: take a rain coat and a brolly, and don\'t stay out for too long.';
                    break;
                case "snowing" :
                    p.textContent = 'The snow is coming down - it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
                    break;
                case "overcast" :
                    p.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
                    break;
                default :
                    p.textContent = "";
            } 
        }