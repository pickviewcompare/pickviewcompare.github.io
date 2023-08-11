// header animated titles loop
const headerElement = document.getElementById('rolling-header');
    const strings = ['12 Artists rescued from the void', 'featuring...', 'dehzer', '/|\\ v /|\\', 'social cred!t card reader', 'terminal glitch', 'digital rips', 'smush', 'marmalade malaise', 'bills boards', 'geogen', 'toot', 'CG', 'S!$Y', 'PVC'];
    let currentHeaderIndex = 0;

    function updateHeader() {
      headerElement.innerText = strings[currentHeaderIndex];
      currentHeaderIndex = (currentHeaderIndex + 1) % strings.length;
    }

setInterval(updateHeader, 3000);
