
function weatherPic(d, ic) {
    var condition;

    //let arr =['clear sky', 'few clouds', 'scattered clouds', 'broken clouds', 'shower rain', 'rain', 'thunderstorm', 'snow', 'mist'];
    let arr1 = ['01', '02', '03', '04', '09', '10', '11', '13', '50'];

    let picArr = [
        ['https://w0.peakpx.com/wallpaper/122/458/HD-wallpaper-tree-green-grass-field-blue-sky-anime-background-anime-background.jpg', 'https://c8.alamy.com/comp/2MN2W5P/anime-background-art-of-endless-beautiful-blue-sky-with-lots-of-clouds-neural-network-generated-art-digitally-generated-image-not-based-on-any-actu-2MN2W5P.jpg', 'https://rare-gallery.com/uploads/posts/967650-anime-anime-girls-school-uniform-sky-clouds-original-characters.png', 'https://rare-gallery.com/thumbs/919075-anime-anime-girls-landscape-artwork-alone-sky.jpg', 'https://img5.goodfon.com/wallpaper/nbig/e/1e/devochka-dozhd-liven-perila-zont-liagushka-klumba-tsvety-gor.jpg', 'https://i.ytimg.com/vi/An1ZrG0mbf4/maxresdefault.jpg', 'https://i.imgflip.com/vwn4o.jpg?a467280', 'https://w0.peakpx.com/wallpaper/185/948/HD-wallpaper-snow-day-female-umbrella-building-cute-stair-walkway-girl-snow-anime-anime-girl-stairway.jpg', 'https://imagedelivery.net/9sCnq8t6WEGNay0RAQNdvQ/UUID-cl90h6z5d2402079tqyzuqs2hsu/public'],
        ['https://e0.pxfuel.com/wallpapers/139/732/desktop-wallpaper-anime-night-giant-moon-starry-sky-anime-girl-winter-for-widescreen.jpg', 'https://wallpapercave.com/wp/wp6315366.jpg', 'https://wallpapercave.com/wp/wp6708005.jpg', 'https://w0.peakpx.com/wallpaper/916/689/HD-wallpaper-dark-night-cars-clouds-buildings-broken.jpg', 'https://e0.pxfuel.com/wallpapers/596/786/desktop-wallpaper-night-people-street-rain-umbrella-art-the-shower-lane-by-beeple-beeple-purple-rain-for-section-%D0%B0%D1%80%D1%82.jpg', 'https://c4.wallpaperflare.com/wallpaper/905/431/666/anime-anime-girls-artwork-rain-wallpaper-preview.jpg', 'https://i.imgflip.com/vwn4o.jpg?a467280', 'https://e1.pxfuel.com/desktop-wallpaper/939/928/desktop-wallpaper-anime-snow-anime-night-winter.jpg', 'https://c.wallhere.com/photos/dd/79/power_lines_anime_trees_street_light_signs_road_utility_pole-244070.jpg!d', 'https://w0.peakpx.com/wallpaper/497/291/HD-wallpaper-rainy-day-street-anime-other.jpg']


    ];

    if (ic.endsWith('d')) {
        for (let i = 0; i < 9; i++) {
            if (ic.includes(arr1[i])) {
                condition = picArr[0][i];
            }
        }
    } else {
        for (let i = 0; i < 9; i++) {
            if (ic.includes(arr1[i])) {
                condition = picArr[1][i];
            }
        }

    }
    return condition;
}

let weather = {
    apiKey: "b437cc4b78263e49129e32688d1a4c63",
    takeWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + this.apiKey + "&units=metric")
            .then((response) => response.json()).then(data => this.display(data));
    },
    display: function (data) {
        const { name } = data;
        const { description } = data.weather[0];
        const { icon } = data.weather[0];
        const {humidity} = data.main;
        const {speed} = data.wind;
        const {pressure} = data.main;
        const imgUrl = weatherPic(description, icon);
        const {temp} = data.main;

        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
        document.querySelector(".city").innerText = name;
        document.querySelector(".condition").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".pic img").src = imgUrl;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " mph"
        document.querySelector(".depression").innerText = "Depression porbability: " + pressure + "%";
        document.querySelector(".weather").classList.remove("loading");
        

    },
    search: function(){
        this.takeWeather(document.querySelector(".search").value);
    },
};

document.querySelector(".searchBar button").addEventListener("click", function(){weather.search()});
document.querySelector(".search").addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        weather.search();
    }
});

//weather.takeWeather("Tokyo");