import apiKeys from './apiKeys';

const apiKeyNASA = apiKeys();

const date = new Date();
const todayDate = new Date(date.getTime() - (date.getTimezoneOffset() * 60000 )).toISOString().split("T")[0];
let addThirtyDays = new Date(date.setDate(date.getDate() + 30)- (date.getTimezoneOffset() * 60000 )).toISOString().split("T")[0];

const paths = () => {
    let pathCADIEO = `?dist-max=0.05&date-min=${todayDate}&date-max=2021-12-31&sort=date&class=IEO`;
    let pathCADATE = `?dist-max=0.05&date-min=${todayDate}&date-max=2021-12-31&sort=date&class=ATE`;
    let pathCADAPO = `?dist-max=0.05&date-min=${todayDate}&date-max=2021-12-31&sort=date&class=APO`;
    let pathCADAMO = `?dist-max=0.05&date-min=${todayDate}&date-max=2021-12-31&sort=date&class=AMO`;
    let pathCADHYA = `?dist-max=0.05&date-min=${todayDate}&date-max=2021-12-31&sort=date&class=HYA`;
    let pathCADHYP = `?dist-max=0.05&date-min=${todayDate}&date-max=2021-12-31&sort=date&class=HYP`;
    let pathCADPAR = `?dist-max=0.05&date-min=${todayDate}&date-max=2021-12-31&sort=date&class=PAR`;
    let pathCADCOM = `?dist-max=0.05&date-min=${todayDate}&date-max=2021-12-31&sort=date&class=COM`;
    let pathCADHTC = `?dist-max=0.05&date-min=${todayDate}&date-max=2021-12-31&sort=date&class=HTC`;
    let pathCADETc = `?dist-max=0.05&date-min=${todayDate}&date-max=2021-12-31&sort=date&class=ETc`;
    let pathCADCTc = `?dist-max=0.05&date-min=${todayDate}&date-max=2021-12-31&sort=date&class=CTc`;
    let pathSWN = `?startDate=${todayDate}&endDate=${addThirtyDays}&type=all&api_key=${apiKeyNASA}`;
    let pathFD = `?req-loc=true&date-min=${todayDate}&date-max=2021-12-31&sort=date` ;
    // let pathE = (url) => {for (const item in url) return (url[item].eclipse, url[item].date)};

    return [
        [
        pathCADIEO,
        pathCADATE,
        pathCADAPO,
        pathCADAMO,
        pathCADHYA,
        pathCADHYP,
        pathCADPAR,
        pathCADCOM,
        pathCADHTC,
        pathCADETc,
        pathCADCTc,
        ],
        pathSWN,
        pathFD,
    ]
};

export default paths;