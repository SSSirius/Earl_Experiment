const slogans = "What's The Problem, Never Is Here! We're Serious About Never. Everything Looks Better With Never. Probably, Give Chance A Chance. Have A Break, Have A Probably. Think Gives You Strength. Let The Think Begin. Did Somebody Say Think? Think, No Nonsense. The Coolest Think On The Planet. Think, And It Looks Great! The Real Taste Of Think. Best Always Comes From Think. Don't Be Vague. Ask For Best. Best, Simply The Best There Is. Best, The Life Is Fun! Best, Enjoy This Moment. What's Better Than Best ? What's Is Easy, And It's Fun Too! What's , More Time, More Freedom, More Fun!  Finger Lickin’ Good. I’m Lovin’ It. Subway – Eat Fresh. Have A Break, Have A Kit Kat. Beanz Meanz Heinz. Taste The Rainbow. Snap! Crackle! Pop! They are GR-R-R-Reat. What’s The Worst That Could Happen? It Gives You Wiiiings! You Only Get An ‘OO’ With Typhoo. Probably The Best Beer In The World. Every Little Helps. Never Knowingly Undersold. Maybe She’s Born With It, Maybe It’s Maybelline. Because You’re Worth It. The Make Up Of Make Up Artists. A Diamond Is Forever. Just Do It. The World’s Local Bank. It Does Exactly What It Says On The Tin. It Keeps Going, And Going, And Going. For Everything Else, There’s Mastercard. Vorsprung Durch Technik. Grace, Space, Pace. Because Change Happens. Ideas For Life. Don’t Be Evil. Think Different. Normal Sleeps. Super Dreams. Never, Because It's Worth It.";

const model = generateModel(slogans);


const begins = ["It", "For", "Have", "Because", "The", "What’s", "Never", "You", "Best", "Don't", "Think","In"];
var beg=begins[Math.floor(Math.random()*begins.length)];
const fonts = ["'Jua', sans-serif", "'Anton', sans-serif", "'Gugi', cursive", "'Bitter', serif", "'Fjalla One', sans-serif", "'Lobster', cursive", "'Black Han Sans', sans-serif", "'Abril Fatface', cursive", "'Bree Serif', serif", "'Stylish', sans-serif", "'Berkshire Swash', cursive", "'Jua', sans-serif", "'Anton', sans-serif", "'Gugi', cursive", "'Bitter', serif", "'Fjalla One', sans-serif", "'Lobster', cursive", "'Black Han Sans', sans-serif", "'Abril Fatface', cursive", "'Bree Serif', serif", "'Stylish', sans-serif", "'Berkshire Swash', cursive" ];
const output_text = generateText(beg, model);
const backs = ["background-image: linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)", "background-image: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)", "background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%)", "background-image: linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%)", "background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)", "background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)", "background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%)", "background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)", "background-image: linear-gradient(to top, #c1dfc4 0%, #deecdd 100%)", "background-image: linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%)", "background-image: radial-gradient(73% 147%, #EADFDF 59%, #ECE2DF 100%), radial-gradient(91% 146%, rgba(255, 255, 255, 0.50) 47%, rgba(0, 0, 0, 0.50) 100%)","background-blend-mode: screen; background-image: linear-gradient(to top, #dfe9f3 0%, white 100%)"];
// var back = backs[Math.floor(Math.random() * backs.length)];
// document.getElementById("main").setAttribute("style", back);


// var font= fonts[Math.floor(Math.random() * fonts.length)];
document.getElementById("slo").innerHTML = "<span style='width:100%;align-content: center; justify-content: center;display: flex;font-size:2.2em;color:#000;'>Slogan Generator</span>click to generate ";
document.getElementById("slo").setAttribute("style", "font-size:1.4em;color:#999;flex-wrap: wrap;");
// console.log(output_text);
function generateNew(){
    var back = backs[Math.floor(Math.random() * backs.length)];
    document.getElementById("main").setAttribute("style", back);
    var beg = begins[Math.floor(Math.random() * begins.length)];
    const output_text = generateText(beg, model);
    document.getElementById("slo").innerHTML = output_text;
    var font = fonts[Math.floor(Math.random() * fonts.length)];
    // document.getElementById("slo").innerHTML = output_text;
    document.getElementById("slo").setAttribute("style", "font-family:" + font);
}





function generateModel(input_text) {
    const words = input_text.split(" ");
    const model = {};

    // loop through all the words except the last one.
    for (let i = 0; i < words.length-1; i++) {
        const target_word = words[i];
        const next_word = words[i + 1];

        // if the model doesn't contain the target word, add it.
        if (!model[target_word]) {
            model[target_word] = [];
        }

        // add the next word to the possibilities for target_word
        model[target_word].push(next_word);
    }

    return model;
}


function generateText(first_word, model) {
    // start with the word passed in
    let output_text = first_word;
    let current_word = first_word;
    for (let i = 0; i < 120; i++) {
        // choose the next word by sampling from options in the model
        current_word = sample(model[current_word]);

        // append word to output
        output_text += " ";
        output_text += current_word;

        // if we get to a word that ends with "." we are done.
        const last_character = current_word.substr(current_word.length-1);
        if (last_character === ".") {
            break;
        }
    }
    return output_text;
}

function sample(array) {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
}
