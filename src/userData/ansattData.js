let todaysDate = {
  day: new Date().getDay(),
  month: new Date().getMonth(),
  year: new Date().getFullYear()
};

const ansattData = [
  {
    name: "Mr. Doctor",
    email: "doctor@xyxy.no",
    phoneNumber: "12345678",
    notification: [
      {
        date: todaysDate.day + "." + todaysDate.month + "." + todaysDate.year,
        text: "Din neste kunde Marianne kommer kl 09.00."
      },
      {
        date:
          todaysDate.day + 1 + "." + todaysDate.month + "." + todaysDate.year,
        text: "Personalmøte 16.00."
      },
      {
        date:
          todaysDate.day + 1 + "." + todaysDate.month + "." + todaysDate.year,
        text: "Send inn timelister."
      },
      {
        date:
          todaysDate.day + 2 + "." + todaysDate.month + "." + todaysDate.year,
        text: "Les igjennom journaler."
      },
      {
        date:
          todaysDate.day + 4 + "." + todaysDate.month + "." + todaysDate.year,
        text: "Lunsj med Mamboo kl 1600."
      }
    ],
    messages: [
      {
        from: "Tanya Banks",
        msg:
          "Hallo! Har du mulighet til å hjelpe meg med en liten ting i morgen? Det gjelder den avtalen vi har kl 1500. Ring meg når det passer!"
      },
      {
        from: "Chingo Bing",
        msg:
            "Hallo! Har du mulighet til å hjelpe meg med en liten ting i morgen?"
      },
      {
        from: "Berit Bertnsen",
        msg:
            "Hallo! Har du mulighet til å hjelpe meg med en liten ting i morgen?"
      },
      {
        from: "Mr. Doctor",
        msg:
            "Hallo! Har du mulighet til å hjelpe meg med en liten ting i morgen?"
      },
      {
        from: "Chingu Swool",
        msg:
            "Hallo! Har du mulighet til å hjelpe meg med en liten ting i morgen?"
      }
    ]
  }
];

const activeWorkers = [
  {
    name: "Mr. Doctor",
    email: "doctor@xyxy.no",
    phoneNumber: "12345678"
  },
  {
    name: "Tanya Banks",
    email: "tanya@xyxy.no",
    phoneNumber: "12345678"
  },
  {
    name: "Bong Ming",
    email: "bing@xyxy.no",
    phoneNumber: "23445678"
  },
  {
    name: "Chingu Swool",
    email: "chingu@xyxy.no",
    phoneNumber: "45364758"
  },
  {
    name: "Berit Berntsen",
    email: "b.berntsen@xyxy.no",
    phoneNumber: "54637382"
  }
];

export { ansattData, activeWorkers };
