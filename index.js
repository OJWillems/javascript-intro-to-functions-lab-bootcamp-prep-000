function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log (string.toUpperCase())
}

function logWhisper (string) {
  console.log (string.toLowerCase())
}

function sayHiToGrandma (string) {
  if (string === string.toLowerCase()){
    return "I can't hear you!"
<<<<<<< HEAD
  }else if (string === string.toUpperCase()){
    return "YES INDEED!"
  }else if (string === "I love you, Grandma."){
=======
  }else if(string === string.toUpperCase()){
    return "YES INDEED!"
  }else(string === "I love you, Grandma."){
>>>>>>> b84720d62e10087312eef2ac8c3da295c9925325
    return "I love you, too."
  }
}