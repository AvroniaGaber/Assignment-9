var Quotes = [
    {
        "quote":"It always seems ipossible its done",
        "name":"Nelson Mandela"
    },
    {
        "quote":"Always forgive your enemies; nothing annoys them so much.",
        "name":"Oscar Wilde"
    },
    {
        "quote":"We accept the love we think we deserve.",
        "name":"Stephen Chbosky, The Perks of Being a Wallflower"
    },
    {
        "quote":"Be yourself; everyone else is already taken.",
        "name":"Oscar Wilde"
    },
    {
        "quote":"A thousand words can not leave the same deep impression as a single deed.",
        "name":"Henrik Ibsen"
    },
    {
        "quote":"So many books, so little time.",
        "name":"Frank Zappa"
    },
    {
        "quote":"You only live once, but if you do it right, once is enough.",
        "name":"Mae West"
    },
    {
        "quote":"Be the change that you wish to see in the world.",
        "name":"Mahatma Gandhi"
    },
    {
        "quote":"You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        "name":"Dr. Seuss"
    },
    {
        "quote":"A room without books is like a body without a soul.",
        "name":"Marcus Tullius Cicero"
    },
    {
        "quote":"In three words I can sum up everything I've learned about life: it goes on.",
        "name":"Robert Frost"
    },
    {
        "quote":"To live is the rarest thing in the world. Most people exist, that is all.",
        "name":"Oscar Wilde"
    },
    {
        "quote":"Live as if you were to die tomorrow. Learn as if you were to live forever.",
        "name":"Mahatma Gandhi"
    },
    {
        "quote":"You miss 100% of the shots you don't take.",
        "name":"Wayne Gretzy"
    }

]

function randomSelector(arrayLength) {
    return Math.floor(Math.random() * arrayLength);
}
function newQuoteButton(){
    var newQuotes = randomSelector(Quotes.length);
    document.getElementById("Quote").innerHTML = '"' + Quotes[newQuotes].quote + '"';
    document.getElementById("writeQuoteBy").innerHTML = "-- " + Quotes[newQuotes].name;
}

