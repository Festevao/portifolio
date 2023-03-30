function animationScope() {
  const animationSvgSelector = document.querySelector("#brSvg");
  const minasPathSelector = document.querySelector('path[id="BRA601"]');
  const piauiPathSelector = document.querySelector('path[id="BRA622"]');
  const rioPathSelector = document.querySelector('path[id="BRA627"]');
  const scPathSelector = document.querySelector('path[id="BRA614"]');
  const mapPings = document.querySelectorAll("path.map_ping");
  const statesScript = [
    minasPathSelector,
    piauiPathSelector,
    minasPathSelector,
    minasPathSelector,
    rioPathSelector,
    scPathSelector,
    minasPathSelector,
  ];

  function showPingAndHideOthers(index) {
    for (let i = 0; i < mapPings.length; i++) {
      if (i !== index) {
        mapPings[i].style.fill = "#7C7C7C";
        mapPings[i].style.pointerEvents = "none";
        mapPings[i].style.cursor = "unset";
        mapPings[i].style.opacity = "0";
      }
    }
    mapPings[index].style.fill = "rgb(184, 69, 69)";
    mapPings[index].style.cursor = "pointer";
    mapPings[index].style.opacity = "1";
    mapPings[index].style.pointerEvents = "unset";
  }

  mapPings.forEach(function (ping, index) {
    ping.addEventListener("click", function () {
      if (index + 1 <= statesScript.length - 1) {
        statesScript[index].style.opacity = "0";
        showPingAndHideOthers(index + 1);
        statesScript[index + 1].style.opacity = "1";
      } else alert("acabou, vai dormir");
    });
  });

  minasPathSelector.addEventListener("click", function () {
    const pathsToHide = animationSvgSelector.querySelectorAll(
      'path:not([id="BRA601"]):not(.map-ping)'
    );
    pathsToHide.forEach(function (path) {
      path.style.opacity = "0";
      path.style.pointerEvents = "none";
    });
    showPingAndHideOthers(0);
    minasPathSelector.style.fill = "#7C7C7C";
    minasPathSelector.style.pointerEvents = "none";
    minasPathSelector.style.cursor = "unset";
  });
}

animationScope();
