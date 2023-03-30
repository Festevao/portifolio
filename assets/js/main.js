function mainScope() {
  const myAgeSelector = document.querySelector("#spanMyAge");

  const initDevDate = new Date("2023-03-27T18:32:14-03:00");
  const atualDate = new Date();
  const devDiff = atualDate.getTime() - initDevDate.getTime();

  const msMinute = 60 * 1000;
  const msHour = 60 * msMinute;
  const msDay = 24 * msHour;

  const spendDays = Math.floor(devDiff / msDay);
  const spendHours = Math.floor((devDiff % msDay) / msHour);
  const spendMinutes = Math.floor((devDiff % msHour) / msMinute);

  alert(
    `Parado aiii !!! Preciso te avisar que essa página está em processo de contrução, esse processo foi iniciado à ${spendDays} dias, ${spendHours} horas e ${spendMinutes} minutos. E eu to bastante apertado no trabalho terminando ela nos horários vagos, então eu peço um pouco de paciencia hehe. Mas se quiser dar uma espiada pra ver como ta ficando, fica a vontatde !`
  );

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

  buildPage();
}
mainScope();
