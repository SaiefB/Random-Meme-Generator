const meme = document.getElementById("meme");
const api_url = "https://meme-api.com/gimme";

async function getMeme(url) {
    const response = await fetch(url);
    var data = await response.json();
    meme.src = data.url;
}

getMeme(api_url)

function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + meme.src, "Tweet Window", "width=600, height=500")
}