
var arrayQuotes= [
    {
        'author': '― Oscar Wilde',
        'quote': 'Be yourself; everyone else is already taken.'
    },
    {
        'author': '― Marilyn Monroe',
        'quote': "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best"
    },
    {
        'author': '― Frank Zappa',
        'quote': "“So many books, so little time.”"
    },
    {
        'author': '― Dr. Seuss',
        'quote': "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”"
    },
    {
        'author': '― Mae West',
        'quote': "“You only live once, but if you do it right, once is enough.”"
    },
    {
        'author': '― Mahatma Gandhi',
        'quote': "“Be the change that you wish to see in the world.”"
    },
    {
        'author': '― Robert Frost',
        'quote': "“In three words I can sum up everything I've learned about life: it goes on.”"
    },
    {
        'author': '― J.K. Rowling, Harry Potter and the Goblet of Fire',
        'quote': "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”"
    },
    {
        'author': '― Mark Twain',
        'quote': "“If you tell the truth, you don't have to remember anything.”"
    },
    {
        'author': '― Elbert Hubbard',
        'quote': "“A friend is someone who knows all about you and still loves you.”"
    }
]

var quote = document.getElementById('quote')
var answer = document.getElementById('answer')

function generateQuote(){
    var random = Math.floor((Math.random()*arrayQuotes.length + 1));
    quote.innerHTML = arrayQuotes[random].quote 
    answer.innerHTML = arrayQuotes[random].author 
}
