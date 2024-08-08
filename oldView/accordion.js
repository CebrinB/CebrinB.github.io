document.querySelector('#one').addEventListener("click", e => {
  showFull(e.target);
});

document.querySelector('#two').addEventListener("click", e => {
  console.log('edit horse2');
});

document.querySelector('#three').addEventListener("click", e => {
  console.log('edit horse3');
});

function showFull(li) {
    let panel = li.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
     panel.style.maxHeight = panel.scrollHeight + "px";
    }
}