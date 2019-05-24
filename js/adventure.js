// require /text/tracery.min.js
var index=0;
const storyGrammar = {
    // "origin": ["#[hero:#name#][heroPet:#animal#]story#"],
    "story0": ["<p>#time#, you wake up and find yourself in a #placephrase#.</p>"],
    "story1": ["<p>You feel #adverb# #feeling#, because you see #phrase#.</p>"],
    "story2": ["<p>Then you try to  #verb# #object.a# with a #subjecttool#, but you fail.</p>"],
    "story3": ["<p>Finally, with the help of #object#, you #end#.</p> "],
    "feeling": ["happy", "amazed", "free", "wonderful", "clean", "strong", "beautiful", "excited", "great", "bold", "gorgeous", "attractive", "better", "agreeable", "brave", "calm", "delightful", "festive", "gentle", "jolly", "proud", "shy", "optimistic", "cheerful", "angry", "sadistic", "moody", "cold", "pessimistic", "sad", "chilly", "thirsty", "nervous", "tired", "weak", "evil", "terrible", "dreadful", "dirty", "ugly", "dreary", "awful", "stupid", "dumb","aggravated", "miserable", "mad", "grumpy", "tearful", "selfish", "depressed", "sour"],
    "phrase": ["#subject.a# #verb# #object.a#"],
    "placephrase": ["#timeadj# #place#"],
    "subject": ["#noun#", "#adjective# #noun#"],
    "subjecttool": ["#tool#", "#adjective# #tool#"],
    "tool": ["axe", "beetle", "billhook", "comb", "Knife", "fork", " sword", " head", " shovel"],
    "object": ["#noun#", "#adjective# #noun#", "#adjective# #noun# and #adverb.a# #adjective# #noun#"],
    "adverb": ["exceptionally", "somewhat","terribly", "extremely", "slightly"],
    "adjective": ["proud", "small", "forgetful", "handsome", "comical", "wild", "elegant", "drab", "gorgeous", "shapely","heavy"],
    "noun": ["cat", "Pinocchio", "frog", "duck","doorman","devil","dwarf"],
    "place": ["hole", "well", "car", "room", "jam", "Toilet", "kettle", "schoolbag", "cellar","plane","train","rocket"," planet"],
    "verb": ["becomes friends with", "finds", "chases","eat","hit","beat","bite"],
    "time": ["At #timeadj.a# midnight", "On #timeadj.a# afternoon", "On #timeadj.a# dawn", "In #timeadj.a# morning"],
    "timeadj": ["quiet", "dark", "sunny", "sownstorm", "foggy", "wild", "bald", "beautiful", "chubby", "clean", "dazzling",  "fancy", "flabby", "glamorous", "long", "magnificent", "muscular", "plain","quaint", "scruffy", "short"],
    "end": ["dance with a #object#", "are trapped here forever", "become the king of a #placephrase#", "marry with a #object#", "return to the #timeadj# world", "awaken from a #adjective# nightmare"," return to Earth"]
}


function main() {
    let grammar = tracery.createGrammar(storyGrammar);
    var storyid="#story"+ Math.floor(index %4)+"#";
    let story = grammar.flatten(storyid);
    console.log(storyid);
    const storyDiv = document.createElement('div');
    storyDiv.style = "font-size: 30px; margin: 10%; line-height: 1.5;";
    storyDiv.innerHTML = story;
    $("#content").append(story);
    index++;
    if(index <4){
    setTimeout(main, 1500);}
    else{
        const restart = document.createElement('div');
        restart.setAttribute("class","btn");
        restart.setAttribute("onclick", "readv()");
        restart.innerHTML = "restart your adventure";
        $("#content").append(restart);
    }
    // document.body.insertAdjacentElement("beforeend", storyDiv);
}


setTimeout(main, 10);

function readv(){

    setTimeout(main, 10);
    index=0;
    $("#content").html("");
}
