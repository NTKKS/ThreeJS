function changeFloorPlan(num) {
    var map = document.getElementById('map');
    var btns = ["btn1", "btn2", "btn3", "btn4"];
    btns.forEach(btn => {
        if (document.getElementById(btn).classList.contains("active")) {
            document.getElementById(btn).classList.remove("active");
        };
    });

    switch (num) {
        case 1:
            document.getElementById("btn1").classList.add('active');
            map.style.backgroundImage = "url('img/1np/1np.jpg')";
            map.innerHTML = '<svg xmlns = "http://www.w3.org/2000/svg" viewBox = "0 0 3508 4961"><path id="Relax" class="cls-1" onclick="changePanorama(1)" d="M1910,1958h5q3.495,88.995,7,178c1.64,9.36-3.04,13.08-4,18q0.495,21.495,1,43h34c0.33-3.33.67-6.67,1-10q151.485-.495,303-1c0.18,15.65,26.13,10.72,41,10,1.66-15.87,3.88-31.57-1-47-2-.33-4-0.67-6-1-3.77-65.48-23.92-135.34-19-199q84.99-.495,170-1c11.65,0,55.5-2.78,61,2q28.5,174.99,57,350c2.24,22.68,23.56,108.15,18,123q-317.97,1.005-636,2c-0.24,11.1-1.68,20.61,1,29q27,0.495,54,1,1.995,55.5,4,111-89.49.495-179,1-0.495,10.005-1,20H1709q-0.495-10.005-1-20-90.99.495-182,1,2.505-56.49,5-113h54q-0.495-14.505-1-29-318.465,1.005-637,2v-3l33-224q142.98-.495,286-1,0.495-6,1-12,152.49-.495,305-1v11q18.495-.495,37-1v-45c-6.78-3.25-5.69-12.99-5-23q2.505-84.99,5-170h5c0.25-18.44,37.56-11,55-11h241v10Zm-212,232c-3.78,3.04-6.75,4.24-9,9-6.24,15.46-2.26,91.37,2,105,12.29,4.72,99.55,8.73,109,0,11.56-7.88,6.93-101.04,0-112C1770.64,2186.55,1730.84,2189.92,1698,2190Z"/><path id="VstupniHala" class="cls-2" onclick="changePanorama(2)" d="M2851,3042h-20q-3,10.005-6,20H2723c-0.33-1.33-.67-2.67-1-4,4.46-3.77,2.92-9.44,2-16-19.72,2.05-38.09-1.94-50-5h-55c-12.44,0-36.48-3.49-45,2-6.66,4.3-7.17,13.72-7,25h-5a41.632,41.632,0,0,0,2-21c-11.32,2.09-43.89-5.16-53,3q-1.995,8.505-4,17h-52c0.63-8.15,1.24-11.31,1-20q-62.49,1.005-125,2-1.005,10.005-2,20h-54a45.592,45.592,0,0,0,1-21c-40.11,6.16-106.9-10.09-152,2q-1.005,9-2,18h-51q0.495-9.495,1-19-53.49.495-107,1c-0.63,47.13-2.83,103.24,5,150l3,78q2.505,63.99,5,128c-0.33.67-.67,1.33-1,2q-9.495.495-19,1-0.495,6-1,12-43.5.495-87,1-0.495,9-1,18h-47c0.39-16.8,3.47-44.55-7-51-10.31-6.35-91.75-3.18-105,0-8.56,11.86-3.67,35.57-7,52h-25q-1.5-9.495-3-19-45.495.495-91,1-0.495-10.5-1-21h-22q3-115.485,6-231c-1.65-37.45,11.59-87.53,2-122H1398c-11.75,0-56.47-2.8-62,2q-0.495,9-1,18h-56q-1.5-9.495-3-19H1117v20q-25.995-.495-52-1-2.505-9.495-5-19-43.995.495-88,1c-26.562-6.96-81.456-7.08-108,0q-25.5.495-51,1c-1.056,7.45-3.177,12.04,0,19H713q-3-9.495-6-19H689v-3c9.775-32.37,10.945-59.22,16-90,1.214-7.39-.73-17.36,2-25,13.451-37.64,16.928-94.67,27-142q4.5-26.49,9-53-2.5-7.995-5-16-199.48,1.005-399,2,15.5-61.995,31-124,198.98-.495,398-1,12.5-69.495,25-139H922q-14,91.485-28,183-6,39.99-12,80,2.5,12,5,24l690-3c0.33-1.33.67-2.67,1-4q1.995-72,4-144c124.69-.04,238.16-0.97,364-1,4.01,47.71-2.25,99.71,7,148q237.48-1.005,475-2,76.485-.495,153-1,31.5,0.495,63,1c0.98-8.19,3.84-12.92,5-19q-9.495-54-19-108-7.5-51.495-15-103c-4.42-16.09-10.04-41.28-10-61,3.67,0.33,7.33.67,11,1h124q1.005,5.505,2,11,2.505-10.5,5-21h11v1q-2.505,9.495-5,19-4.5,2.505-9,5c-1.96,7.14,4.18,22.7,6,27,2.88,6.83.11,18.84,2,27q10.995,55.5,22,111c20.49,81.34,28.3,166.64,45,244,9.47,43.9,12.2,70.32,22,116Q2846,3015,2851,3042ZM1194,2810c-4.08,2.43-8.93,3.7-11,8-5.85,12.18-2.3,91.09,1,104,13.67,9.85,100.29,9.78,114,0,5.71-20.93,5.21-84.87,0-106C1278.62,2802.89,1224.13,2809.74,1194,2810Zm978,0-9,6c-5.67,20.9-5.28,81.01-1,104q4.005,3.495,8,7c18.01,5.09,102.07,2.95,107-7,7.27-13.22,2.59-94.06-2-106C2252.15,2803.3,2202.35,2809.82,2172,2810Z"/><path id="Vchod" class="cls-3" onclick="changePanorama(3)" d="M1549,3446c-0.31,35.64-7.1,77.96-1,111q165.99-1.005,332-2c16.88-.83,109.1,5.54,115-2,11.11-27.33-6.64-71.47-1-102l907-3q42,226.98,84,454H561v-1q38.5-222.48,77-445,169.983-.495,340-1c1.174-12.19,20.344-8.73,33-8Q1279.98,3446.505,1549,3446Z"/></svg>';
            break;
        case 2:
            document.getElementById("btn2").classList.add('active');
            map.style.backgroundImage = "url('img/2np/2np.jpg')";
            map.innerHTML = (
                '<svg xmlns = "http://www.w3.org/2000/svg" viewBox = "0 0 3508 4961">' +
                '</svg>'
            );
            break;
        case 3:
            document.getElementById("btn3").classList.add('active');
            map.style.backgroundImage = "url('img/3np/3np.jpg')";
            map.innerHTML = (
                '<svg xmlns = "http://www.w3.org/2000/svg" viewBox = "0 0 3508 4961">' +
                '</svg>'
            );
            break;
        case 4:
            document.getElementById("btn4").classList.add('active');
            map.style.backgroundImage = "url('img/4np/4np.jpg')";
            map.innerHTML = (
                '<svg xmlns = "http://www.w3.org/2000/svg" viewBox = "0 0 3508 4961">' +
                '</svg>'
            );
            break;
    }
}

function changePanorama(room) {
    switch (room) {
        case 1:
            console.log("Relax clicked")
            break;
        case 2:
            console.log("VstupniHala clicked")
            break;
        case 3:
            console.log("Vchod clicked")
            break;

        default:
            console.log(room + " clicked")
            break;
    }

}