function scuberGreetingForFeet(feet) {
  if (feet <= 400) {
    return "This one is on me!";
  } else if (feet > 2000 && feet < 2500) {
    return "I will gladly take your thirty bucks."
  } else if (feet > 2500) {
    return "No can do."
  } else {
    break;
  }
}

function ternaryCheckCity(city) {
  NYC ? return "Ok, sounds good." : return "No go.";
}
