var index = -1;
var verses = [
  {
    verse: "For whoever calls on the _____ of the Lord shall be saved. (Romans 10:13)",
    answer: "name"
  },
  {
    verse: "For my yoke is easy and my burden is _____. (Matthew 11:30)",
    answer: "light"
  },
  {
    verse: "You are the light of the world. A city that is set on a hill cannot be _____. (Matthew 5:14)",
    answer: "hidden"
  },
  {
    verse: "Pray without _____ (1 Thessalonians 5:17)",
    answer: "ceasing"
  },
  {
    verse: "This is the day the Lord has made; we will rejoice and be _____ in it. (Psalm 118:24)",
    answer: "glad"
  },
  {
    verse: "In everything give _____, for this is the will of God in Christ Jesus for you. (1 Thessalonians 5:18)",
    answer: "thanks"
  },
  {
    verse: "Your word is a _____ to my feet and a light to my path. (Psalm 119:105)",
    answer: "lamp"
  },
  {
    verse: "Believe on the Lord Jesus Christ, and you will be saved, you and your _____. (Acts 16:31)",
    answer: "household"
  },
  {
    verse: "Delight yourself in the Lord, and He shall give you the _____ of your heart. (Psalm 37:4)",
    answer: "desires"
  },
  {
    verse: "Set your mind on things _____, not on things on the earth. (Colossians 3:2)",
    answer: "above"
  },
  {
    verse: "For all have sinned and fall short of the _____ of God. (Romans 3:23)",
    answer: "glory"
  },
  {
    verse: "Oh, give thanks to the Lord, for He is good! For His mercy endures _____. (Psalm 136:1)",
    answer: "forever"
  },
  {
    verse: "The Lord is my light and my salvation - whom shall I _____? (Psalm 27:1)",
    answer: "fear"
  },
  {
    verse: "Resist the devil and he will _____ from you. (James 4:7)",
    answer: "flee"
  },
  {
    verse: "Let everything that has breath _____ the Lord. (Psalm 150:6)",
    answer: "praise"
  },
  {
    verse: "Trust in the Lord with all your heart, and lean not on your own _____. (Proverbs 3:5)",
    answer: "understanding"
  },
  {
    verse: "We love because He first _____ us. (1 John 4:19)",
    answer: "loved"
  },
  {
    verse: "Therefore if anyone is in Christ, he is a new _____. (2 Corinthians 5:17)",
    answer: "creation"
  },
  {
    verse: "Whatever you do, do everything for the _____ of God. (1 Corinthians 10:31)",
    answer: "glory"
  },
  {
    verse: "I praise you God, for I am fearfully and _____ made. (Psalm 139:14)",
    answer: "wonderfully"
  },
  {
    verse: "Even though I walk through the valley of the shadow of death, I will fear no _____. (Psalm 23:4)",
    answer: "evil"
  },
  {
    verse: "Come to me, all who labor and are heavy laden, and I will give you _____. (Matthew 11:28)",
    answer: "rest"
  },
  {
    verse: "In the world you will have tribulation. But take heart; I have _____ the world. (John 16:33)",
    answer: "overcome"
  },
  {
    verse: "What then shall we say to these things? If _____ is for us, who can be against us? (Romans 8:31)",
    answer: "God"
  }
];

window.onload = function() {
  verses = _.shuffle(verses);
  $('#answerDiv').hide();
}

function submit() {
  var answer = $('#answer').val();
  
  // Play Again
  if ($('#submit').text() === 'Play Again') {
    location.reload();
  }

  // Check answer
  if (index > -1 && answer.toLowerCase() !== verses[index].answer.toLowerCase()) {
    displayGameOver();
    return;
  }

  // Display question
  displayVerse(++index);
}

function displayVerse(index) {
  if (index === verses.length) {
    displayGameEnd();
    return;
  }

  $('#verse').text(verses[index].verse);
  $('#answerDiv').show();
  $('#answer').val('');
  $('#submit').text('Submit');
}

function displayGameOver() {
  $('#verse').text('Game Over');
  $('#answerDiv').hide();
  $('#submit').text('Play Again');
}

function displayGameEnd() {
  $('#verse').text('Congrats!');
  $('#answerDiv').hide();
  $('#submit').text('Play Again');
}
