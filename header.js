// header animated titles loop
const headerElement = document.getElementById('rolling-header');
    const strings = ['SOCiETY iS $!cK Y0', 'social cred!t card reader', 'mvm', '30words'];
    let currentHeaderIndex = 0;

    function updateHeader() {
      headerElement.innerText = strings[currentHeaderIndex];
      currentHeaderIndex = (currentHeaderIndex + 1) % strings.length;
    }

setInterval(updateHeader, 3000);
