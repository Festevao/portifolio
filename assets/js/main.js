function mainScope() {
  const myAgeSelector = document.querySelector("#spanMyAge");

  const initDevDate = new Date("2023-04-10T18:32:14-03:00");
  const atualDate = new Date();
  const devDiff = atualDate.getTime() - initDevDate.getTime();

  const msMinute = 60 * 1000;
  const msHour = 60 * msMinute;
  const msDay = 24 * msHour;

  const spendDays = Math.floor(devDiff / msDay);
  const spendHours = Math.floor((devDiff % msDay) / msHour);
  const spendMinutes = Math.floor((devDiff % msHour) / msMinute);

  alert(
    `Parado aiii !!! Preciso te avisar que essa página está em processo de construção, esse processo foi iniciado à ${spendDays} dias, ${spendHours} horas e ${spendMinutes} minutos. E eu estou bastante apertado no trabalho terminando ela nos horários vagos, então eu peço um pouco de paciencia hehe. Mas se quiser dar uma olhadinha pra ver como está ficando, fique à vontatde!`
  );

  function waitForElm(selector) {
    return new Promise((resolve) => {
      if (document.querySelector(selector)) {
        return resolve(document.querySelector(selector));
      }

      const observer = new MutationObserver((mutations) => {
        if (document.querySelector(selector)) {
          resolve(document.querySelector(selector));
          observer.disconnect();
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });
    });
  }

  function defineMyAge() {
    const myBDay = new Date("1999-02-04T10:00:00-03:00");
    const now = new Date();
    const diff = now.getTime() - myBDay.getTime();
    const myAge = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    const ageTextNode = document.createTextNode(`${myAge}`);
    myAgeSelector.append(ageTextNode);
  }

  function buildPage() {
    defineMyAge();
  }

  GitHubCalendar(".calendar", "festevao", {
    responsive: true,
    global_stats: false,
    tooltips: true,
  });

  document.querySelector(".calendar").style.minHeight = "11vh";
  (async () => {
    (await waitForElm(".calendar .width-full")).remove();
  })();

  buildPage();
}
mainScope();
