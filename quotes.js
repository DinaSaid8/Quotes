
function getquotes() {
    var quotes =[
        {auther:"-- Oscar Wilde", description:"“Be yourself; everyone else is already taken.”" },
        {auther:"-- Albert Einstein", description:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”" },
        {auther:"-- Mae West", description:"“You only live once, but if you do it right, once is enough.”" },
        {auther:"-- Mahatma Gandhi", description:"“Be the change that you wish to see in the world.”" },
        {auther:"-- Oscar Wilde", description:"“Always forgive your enemies; nothing annoys them so much.”" },
        {auther:"-- Mahatma Gandhi", description:"“Live as if you were to die tomorrow. Learn as if you were to live forever.”" },
        {auther:"-- Ralph Waldo Emerson", description:"“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”" },
        {auther:"-- Narcotics Anonymous", description:"“Insanity is doing the same thing, over and over again, but expecting different results.”" },
        {auther:"-- Andre Gide", description:"“It is better to be hated for what you are than to be loved for what you are not.”" },
        {auther:"-- Ralph Waldo Emerson", description:"“For every minute you are angry you lose sixty seconds of happiness”" },
    ];
     random = quotes[Math.floor(Math.random() * quotes.length)] ;
      console.log(random.auther)
      console.log(random.description)
     document.getElementById("desdisplay").innerHTML =  random.description;
     document.getElementById("autherdisplay").innerHTML =  random.auther  ;
    
}
