const readline = require("readline");

async function getInput() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const question = (query) =>
    new Promise((resolve) => rl.question(query, resolve));
  const header = "--- Music Mood ---";
  const padding = " ".repeat((process.stdout.columns - header.length) / 2);

  console.log(padding + header);
  console.log(`Let's know about your music mood today!`);

  // Type Name
  const name = await question("Type Your Name: ");

  // IF-ELSE CONDITION
  const clock = new Date().getHours();
  let greetings;

  if (clock < 12) {
    greetings = "Good Morning";
  } else {
    greetings = "Good Evening";
  }
  console.log("\n" + `Hello ${name}, ${greetings}!!!`);

  // NESTED IF CONDITION
  const day = new Date().getDay();
  let dayName;

  if (day === 0) {
    dayName = "Sunday";
  } else if (day === 1) {
    dayName = "Monday";
  } else if (day === 2) {
    dayName = "Tuesday";
  } else if (day === 3) {
    dayName = "Wednesday";
  } else if (day === 4) {
    dayName = "Thursday";
  } else if (day === 5) {
    dayName = "Friday";
  } else if (day === 6) {
    dayName = "Saturday";
  } else {
    dayName = "Invalid day of the week";
  }

  // SWITCH CASE CONDITION
  const date = new Date();
  const dateOfMonth = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  let monthName;

  switch (month) {
    case 0:
      monthName = "January";
      break;
    case 1:
      monthName = "February";
      break;
    case 2:
      monthName = "March";
      break;
    case 3:
      monthName = "April";
      break;
    case 4:
      monthName = "May";
      break;
    case 5:
      monthName = "June";
      break;
    case 6:
      monthName = "July";
      break;
    case 7:
      monthName = "August";
      break;
    case 8:
      monthName = "September";
      break;
    case 9:
      monthName = "October";
      break;
    case 10:
      monthName = "November";
      break;
    case 11:
      monthName = "December";
      break;
    default:
      monthName = "Invalid month";
  }

  console.log(`Today is ${dayName}, ${dateOfMonth} ${monthName} ${year}`);

  // FOR STATEMENT CONDITION
  const moods = ["Happy", "Worry", "Sad", "Angry"];
  console.log("How's your mood today?");

  for (let i = 0; i < moods.length; i++) {
    console.log(`${i + 1}. ${moods[i]}`);
  }

  // DO WHILE CONDITION
  let Choice;
  do {
    Choice = await question("Enter the number corresponding to your mood: ");
    Choice = parseInt(Choice);
  } while (isNaN(Choice) || Choice < 1 || Choice > moods.length);

  const selectedMood = moods[Choice - 1];
  console.log(`Your mood: ${selectedMood}`);

  // FUNCTION CONDITION
  function getMusicRecommendation(mood) {
    let recommendation;

    switch (mood.toLowerCase()) {
      case "happy":
        recommendation =
          "an Upbeat and cheerful music, ex genre: Pop, Dance.\n \n-A cheerful heart is good medicine, Let's Cheers Up!🥂- \n";
        break;
      case "worry":
        recommendation =
          "a Relaxing and calming music, ex genre: Jazz, Blues.\n \n-Do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own, You Can Do It!🥂- \n";
        break;
      case "sad":
        recommendation =
          "Comforting and soulful music, ex genre: Classic, Accoustic. We Hope you doing fine.\n \n-Blessed are those who mourn, for they will be comforted, Keep Fighting!🥂- \n";
        break;
      case "angry":
        recommendation =
          "an Energetic and aggressive music, ex genre: Rock.\n \n-A gentle answer turns away wrath, but a harsh word stirs up anger, Let's Calm Down!🥂- \n";
        break;
      default:
        recommendation =
          "We couldn't determine the appropriate recommendation.";
        break;
    }

    return recommendation;
  }

  const musicRecommendation = getMusicRecommendation(selectedMood);
  console.log(`We recommend to listen ${musicRecommendation}`);

  rl.close();
}
getInput().catch((error) => console.error("Error:", error));
