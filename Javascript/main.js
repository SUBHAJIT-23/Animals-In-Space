function ah()
{
    window.location.href = "https://en.wikipedia.org/wiki/Horse";
}

function tg()
{
    window.location.href = "https://en.wikipedia.org/wiki/Tiger"
}

const contele = document.querySelector(".container");
const txt = ["Animals In Space"];
let ci = 0;
let chri = 0;

updateText();

function updateText()
{
  chri++;
  contele.innerHTML = `<h1>${txt[ci].slice(0, chri)}</h1>`;
  if (chri === txt[ci].length)
  {
    ci++;
    chri = 0;
  }
  if (ci === txt.length)
  {
    ci = 0;
  }
  setTimeout(updateText, 400);
}
