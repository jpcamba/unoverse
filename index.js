var index = -1;
var verses = [
  {
    verse: "For whoever calls on the __________ shall be saved. (Romans 10:13)",
    answer: "name of the Lord"
  },
  {
    verse: "For my yoke is easy and __________. (Matthew 11:30)",
    answer: "my burden is light"
  },
  {
    verse: "You are the light of the world. A city that is set on a hill __________. (Matthew 5:14)",
    answer: "cannot be hidden"
  },
  {
    verse: "Pray without __________ (1 Thessalonians 5:17)",
    answer: "ceasing"
  },
  {
    verse: "This is the day the Lord has made; we will rejoice and __________. (Psalm 118:24)",
    answer: "be glad in it"
  },
  {
    verse: "In everything __________, for this is the will of God in Christ Jesus for you. (1 Thessalonians 5:18)",
    answer: "give thanks"
  },
  {
    verse: "Your word is a __________ and a light to my path. (Psalm 119:105)",
    answer: "lamp to my feet"
  },
  {
    verse: "Believe on the Lord Jesus Christ, and you will be saved, you and __________. (Acts 16:31)",
    answer: "your household"
  },
  {
    verse: "Delight yourself in the Lord, And He shall give you the __________. (Psalm 37:4)",
    answer: "desires of your heart"
  },
  {
    verse: "Set your mind on things __________, not on things on the earth. (Colossians 3:2)",
    answer: "above"
  },
  {
    verse: "For all have sinned and __________ of God. (Romans 3:23)",
    answer: "fall short of the glory"
  },
  {
    verse: "Oh, give thanks to the Lord, for He is good! For His mercy __________. (Psalm 136:1)",
    answer: "endures forever"
  },
  {
    verse: "The Lord is my light and my salvation -- __________? (Psalm 27:1)",
    answer: "whom shall I fear"
  },
  {
    verse: "Resist the devil and he will __________. (James 4:7)",
    answer: "flee from you"
  },
  {
    verse: "Let everything that has breath __________. (Psalm 150:6)",
    answer: "praise the Lord"
  },
  {
    verse: "Trust in the Lord with all your heart, and lean not __________. (Proverbs 3:5)",
    answer: "on your own understanding"
  },
  {
    verse: "We love because He first __________. (1 John 4:19)",
    answer: "loved us"
  },
  {
    verse: "Therefore if anyone is in Christ, he is a __________. (2 Corinthians 5:17)",
    answer: "new creation"
  },
  {
    verse: "Whatever you do, do everything for __________. (1 Corinthians 10:31)",
    answer: "the glory of God"
  },
  {
    verse: "Whatever you do, do everything for __________. (1 Corinthians 10:31)",
    answer: "the glory of God"
  },
  {
    verse: "I praise you God, for I am fearfully __________. (Psalm 139:14)",
    answer: "and wonderfully made"
  },
  {
    verse: "Even though I walk through the valley of the shadow of death, I will __________. (Psalm 23:4)",
    answer: "fear no evil"
  },
  {
    verse: "Come to me, all who labor and are heavy laden, and __________. (Matthew 11:28)",
    answer: "I will give you rest"
  },
  {
    verse: "In the world you will have tribulation. But take heart; __________. (John 16:33)",
    answer: "I have overcome the world"
  },
  {
    verse: "What then shall we say to these things? __________, who can be against us? (Romans 8:31)",
    answer: "If God is for us"
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