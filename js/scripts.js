
function Run(){
  var get_input = document.getElementById('myTextArea').value;
  document.getElementById('output').innerHTML = get_input;
};

function CopyText(){
  var get_input = document.getElementById('myTextArea');
  get_input.select();
  document.execCommand("copy");
  get_input.blur();
};

function ClearAll(){
  alert('test blyat')
  document.getElementById('myTextArea').value = 'sdads';
};
// Initialization.

const colorMap = {"apple": "red", "market": "green", "banana": "orange"};
let textArea = document.getElementById("myTextArea");
let customArea = document.querySelector(".custom-area");
let backdrop = document.querySelector(".backdrop");

// Event listeners.

textArea.addEventListener("input", function()
{
    customArea.innerHTML = applyColors(textArea.value);
});

textArea.addEventListener("scroll", function()
{
    backdrop.scrollTop = textArea.scrollTop;
});

function applyColors(text)
{
    let re = new RegExp(Object.keys(colorMap).join("|"), "gi");

    return text.replace(re, function(m)
    {
        let c = colorMap[m.toLowerCase()];
        return `<spam style="color:${c}">${m}</spam>`;
    });
}
