const url = document.getElementById('url');
const min = document.getElementById('min');
min.value = 1;
const max = document.getElementById('max');
max.value = 2;

const randomize = document.getElementById('randomize');
randomize.onclick = () =>
{
    let finalURL = url.value;
    let mi = parseInt(min.value);
    let ma = parseInt(max.value);
    let rng = Math.floor(Math.random() * (ma - mi + 1)) + mi;
    finalURL = finalURL.replace('*', rng.toString());
    window.open(finalURL, '_blank');
};