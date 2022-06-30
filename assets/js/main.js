
getFetch()

function getFetch(){
    const url = 'https://api.nasa.gov/planetary/apod?api_key=G0iT7vPXTUsIUqKnVPjXijVygYEbQGhb6z9kRpYn'
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.querySelector('img').src = data.hdurl

        })
        .catch(err => {
            console.log('error ${err}')
        });
    }

function toggleTheme() {
    var theme = document.getElementsByTagName('link')[0];
    if (theme.getAttribute('href') == 'assets/css/cyborg.css') {
        theme.setAttribute('href', 'assets/css/simplex.css');
        document.getElementById("toggle").innerHTML = "Simplex";
    } else {
        theme.setAttribute('href', 'assets/css/cyborg.css');
        document.getElementById("toggle").innerHTML = "Cyborg"
    }
}