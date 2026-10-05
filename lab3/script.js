(function () {
  var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

  console.log("Перший спосіб: якщо ім'я починається на J, то Good Bye, якщо ні - Hello");

  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    let firstLetter = name.charAt(0).toLowerCase();

    if (firstLetter === "j") {
      byeSpeaker.speak(name);
    } else {
      helloSpeaker.speak(name);
    }
  }

  console.log("Другий спосіб: якщо ім'я закінчується на a або y, то Good Bye, якщо ні - Hello");

  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    let lastLetter = name.charAt(name.length - 1).toLowerCase();

    if (lastLetter === "a" || lastLetter === "y") {
      byeSpeaker.speak(name);
    } else {
      helloSpeaker.speak(name);
    }
  }
})();
