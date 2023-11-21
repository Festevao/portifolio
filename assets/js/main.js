function mainScope() {
  const intemsDesc = {
    MAC: {
      name: "Media Access Controll",
      description: "Mapeia endereços IP para endereços MAC em uma rede local, criando uma tabela para \"guiar\" o host."
    },
    ARP: {
      name: "Address Resolution Protocol",
      description: "Mapeia endereços IP para endereços MAC em uma rede local, criando uma tabela para \"guiar\" o host."
    },
    ICMP: {
      name: "Internet Control Message Protocol",
      description: "Utilizado para enviar mensagens de controle e erros na rede."
    },
    TCP: {
      name: "Transmission Control Protocol",
      description: "Usa o protocolo IP afim fornecer uma comunicação confiável entre dispositivos. Bolando todo um esquema que controla requisições e respostas entre os hosts."
    },
    UDP: {
      name: "User Datagram Protocol",
      description: "Similar ao TCP, mas aqui a conexão é mais rápida com um porém: não existe \"esperar por uma resposta\", quem envia a mensagem não liga muito pro retonro positivo ou negativo."
    },
    IPV4: {
      name: "Internet Protocol verion 4",
      description: "Responsável pela comunicação na Internet, permite que os dispositivos se comuniquem em uma rede IP."
    },
    IPV6: {
      name: "Internet Protocol version 6",
      description: "Responsável pela comunicação na Internet, permite que os dispositivos se comuniquem em uma rede IP."
    },
    DHCP: {
      name: "Dynamic Host Configuration Protocol",
      description: "Esse carinha serve pra configurar a rede de dispositivos de maneira automática. Quando um host entra em uma rede, esse host precisa de um IP pra usar, saber pra quem mandar os pacotes, etc... O servidor DHCP é quem percebe a entrada desse host e deixa tudo prontinho pra esse host funcionar na internet."
    },
    SSH: {
      name: "Secure Shell",
      description: ""
    },
    DNS: {
      name: "Domain Name Server",
      description: ""
    },
    FTP: {
      name: "File Transfer Protocol",
      description: "Usado para a transferência de arquivos entre um cliente e um servidor."
    },
    SMTP: {
      name: "Simple Mail Transfer Protocol",
      description: "Utilizado para o envio de e-mails."
    },
    SMNP: {
      name: "Simple Management Network Protocol",
      description: ""
    },
    HTTP: {
      name: "Hypertext Transfer Protocol",
      description: "Usado para transmitir dados na World Wide Web."
    },
    SIP: {
      name: "",
      description: ""
    },
    LDAP: {
      name: "Lightweight Directory Access Protocol",
      description: "É um protocolo que pode ser integrado a muitos sistemas, mas seu foco é unificar o gerenciamento a partir de uma base de usuários e de permições concedidads a esses usuários (da pra integrar isso até pra controlar acesso ao wi-fi)"
    },
  }
  const myAgeSelector = document.querySelector("#spanMyAge");

  const initDevDate = new Date("2023-11-01T18:32:14-03:00");
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

  document.querySelectorAll(".networkKnowsAreaContent div").forEach((aSelector) => {
    function createSpec(name, x, y) {
      const spec = document.createElement("div");
      spec.classList.add("spec");
      spec.classList.add(name);

      const title = document.createElement("h4");
      title.append(document.createTextNode(intemsDesc[name].name));

      const string = document.createElement("hr");
      string.style.width = "100%";

      const desc = document.createElement("p");
      desc.append(document.createTextNode(intemsDesc[name].description));

      spec.append(title);
      spec.append(string);
      spec.append(desc);

      const bottomPos = window.innerHeight - (event.clientY + window.scrollY) - 10;
      const leftPos = event.clientX + window.scrollX + 10;
      
      spec.style.bottom = bottomPos + 'px';
      spec.style.left = leftPos + 'px';

      document.body.append(spec);
    }

    function showSpec(event) {
      const name = event.target.getAttribute("name");

      document.querySelectorAll(`.spec:not(.${name})`).forEach((spec) => {
        spec.remove();
      });

      const exists = !!document.querySelector(`.spec.${name}`);

      if (!exists) {
        createSpec(name, event.clientX, event.clientY);
      }
    }

    function closeSpec(event) {
      const name = event.target.getAttribute("name");

      const exists = document.querySelector(`.spec.${name}`);

      if (exists) {
        exists.remove();
      }
    }

    aSelector.addEventListener("mouseover", showSpec);
    aSelector.addEventListener("mouseout", closeSpec);
    aSelector.addEventListener("click", showSpec);
  });

  document.addEventListener("click", (event) => {
    const condition1 = event.target.classList.contains("spec");
    const consdition2 = event.target.tagName.toUpperCase() === "DIV" && event.target.parentNode.classList.contains("networkKnowsAreaContent");
    if (!condition1 && !consdition2) {
      document.querySelectorAll(".spec").forEach((spec) => {
        spec.remove();
      });
    } 
  })

  buildPage();
}
mainScope();
