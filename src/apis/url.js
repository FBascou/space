const url = () => {
    //SBDB Close-Approach Data API (CAD) - GET
    const urlCAD = 'https://ssd-api.jpl.nasa.gov/cad.api';

    //Fireball Data API (FD) - GET
    const urlFD = 'https://ssd-api.jpl.nasa.gov/fireball.api';

    //Space Weather Notification - NASA - GET
    const urlSWN = 'https://api.nasa.gov/DONKI/notifications';

    //Lunar & Solar Eclipses - NASA
    const urlE = require('./eclipses.json');

    return {urlCAD, urlFD, urlSWN, urlE};
};

export default url;