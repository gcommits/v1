
getFetch()

function getFetch(){
    const url = 'https://api.nasa.gov/planetary/apod?api_key=G0iT7vPXTUsIUqKnVPjXijVygYEbQGhb6z9kRpYn'
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.getElementById('nasa').src = data.hdurl
        })
        .catch(err => {
            console.log('error ${err}')
        });
    }

function toggleTheme() {
    var theme = document.getElementsByTagName('link')[0];
    if (theme.getAttribute('href') == 'assets/css/cyborg.css') {
        theme.setAttribute('href', 'assets/css/simplex.css');
        document.getElementById("logo").src = "assets/img/light.png";
        document.getElementById("icon").fill = "black"
    } else {
        theme.setAttribute('href', 'assets/css/cyborg.css');
        document.getElementById("logo").src = "assets/img/dark.png";
        document.getElementById("icon").fill = "white"

    }
}