// header animated titles loop
const headerElement = document.getElementById('rolling-header');
    const strings = ['12 art projects rescued from the void', 'featuring...', 'dehzer', '/|\\ v /|\\', 'social cred!t card reader', 'terminal glitch', 'digital rips', 'smush', 'marmalade malaise', 'bills board', 'geogen', 'toot', 'CG', 'FUNT', 'Hang out, look around, enjoy yourself!', 'PVC'];
    let currentHeaderIndex = 0;

    function updateHeader() {
      headerElement.innerText = strings[currentHeaderIndex];
      currentHeaderIndex = (currentHeaderIndex + 1) % strings.length;
    }

setInterval(updateHeader, 3500);
