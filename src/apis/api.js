import url from "./url";
import path from "./paths";

const endpointCAD = url().urlCAD;
const endpointSWN = url().urlSWN;
const endpointFD = url().urlFD;
let apiCAD = path()[0];
let apiSWN = path()[1];
let apiFD = path()[2];


const api = () => {
    let APIList = [];
    let linkSWN = endpointSWN + apiSWN
    let linkFD = endpointFD + apiFD

    for (let i = 0; i < apiCAD.length; i++) {
        let apiCAD = path()[0][i];
        let linkCAD = endpointCAD + apiCAD
        APIList.push(linkCAD)
    };

    APIList.push(linkSWN, linkFD)

    return APIList;
};

export default api;