var quoteArea= document.getElementById("quoteArea");
var qouteList = [];
var selectedNumber = 0;
qouteList.push(
    qoute = { text: "“Be yourself; everyone else is already taken.", author: "― Oscar Wilde" },
    qoute = { text: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”", author: "―Albert Einstein" },
    qoute = { text: "“So many books, so little time.”", author: "― Frank Zappa" },
    qoute = { text: "“A room without books is like a body without a soul.”", author: "― Marcus Tullius Cicero" },
    qoute = { text: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”", author: "― Bernard M. Baruch" },
    qoute = { text: "“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.”", author: "― William W. Purkey" },
    qoute = { text: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”", author: "― Dr. Seuss" },
    qoute = { text: "“You only live once, but if you do it right, once is enough.”", author: "― Mae West" },
    qoute = { text: "“Be the change that you wish to see in the world.”", author: "― Mahatma Gandhi" },
    qoute = { text: "“In three words I can sum up everything I've learned about life: it goes on.”", author: "― Robert Frost" },
    qoute = { text: "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”", author: "― J.K. Rowling, Harry Potter and the Goblet of Fire" },
    qoute = { text: "“Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend”", author: "― Albert Camus" },
    qoute = { text: "“If you tell the truth, you don't have to remember anything.”", author: "― Mark Twain" },
    qoute = { text: "“Friendship ... is born at the moment when one man says to another What! You too? I thought that no one but myself . . .” ", author: "― C.S. Lewis, The Four Loves    " },
    qoute = { text: "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”", author: "― Maya Angelou" },
    qoute = { text: "“A friend is someone who knows all about you and still loves you.”", author: "― Elbert Hubbard" },
    qoute = { text: "“To live is the rarest thing in the world. Most people exist, that is all.”", author: "“To live is the rarest thing in the world. Most people exist, that is all.”" },
    qoute = { text: "“Live as if you were to die tomorrow. Learn as if you were to live forever.”", author: "― Mahatma Gandhi" },
    qoute = { text: "“We accept the love we think we deserve.”", author: "― Stephen Chbosky, The Perks of Being a Wallflower" },
    qoute = { text: "“I am so clever that sometimes I don't understand a single word of what I am saying.”", author: "― Oscar Wilde, The Happy Prince and Other Stories" },
)

function generateQuote() {
    var number = generateRandomNumber();
    while (number === selectedNumber) {
        number = generateRandomNumber();
    }
    selectedNumber = number ; 
   var selectedQuote = qouteList[number];
   addToHtml(selectedQuote);
}


function generateRandomNumber() {
    var number = Math.floor((Math.random() * 19) + 1);
    return number;
}

function addToHtml(selectedQuote){
    var card = ` <div class="card text-center w-md-50 mx-auto  mt-3 mt-md-5 custom-card">
    <div class="card-body">
      <p class="card-text fs-3">${selectedQuote.text}</p>
    </div>
    <div class="card-footer text-body-secondary">
        <p class="text-muted fs-4 author">${selectedQuote.author}</p>
    </div>
  </div> `
  quoteArea.innerHTML = card ; 

}