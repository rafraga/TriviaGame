var correct_answers = ["option3",
"option8",
"option10",
"option15",
"option19",
"option21",
"option28",
"option29",
"option34",
"option38",
"option43",
"option45",
"option52",
"option53",
"option59",
"option61"]

var answers_display = ["7",
"5",
"6",
"4",
"1st",
"5th",
"2nd",
"6th",
"E A G D B E",
"E A D G B E",
"E B G D A E",
"E A D G B D",
"80",
"110",
"120",
"60",
"A B C D E E G",
"A B C D E F G H",
"A B C D E F G",
"A B C D E F ",
"Alternate",
"Alternative",
"Alternator",
"Altering",
"1",
"4",
"2",
"3",
"Minor",
"Major",
"Mojo",
"Mencor",
"8",
"4",
"16",
"2",
"A type of scale",
"The notes of a chord played individually",
"A style of Italian opera",
"A type of guitar",
"10",
"8",
"7",
"9",
"Up",
"Down",
"Same spot",
"Sharp in not a note",
"1",
"12",
"10",
"8",
"5",
"7",
"8",
"4",
"32",
"8",
"12",
"4",
"Hammer-ons, bends, slides",
"Hammer-ons, bonds, slides",
"Hammer-offs, bends, slides",
"Hammer-ons, bends, slades"];

var questions_display = ["How many strings on a standard guitar?",
"Which is the thickest string?",
"What notes are the guitar strings tuned to in standard tuning from 6th to 1st strings?",
"What is a fastest BPM (beats per minute) tempo?",
"What are the notes of music?",
"What is down/up picking called?",
"How many fingers are used to play the open string A D and E major chords?",
"Which chords are the sad sounding chords?",
"How many beats in a bar 4/4?",
"What is an arpeggio?",
"How many different notes are there in a major scale?",
"Is a sharp note up or down one fret on the guitar?",
"How many notes apart is one octave note from another in the steps of a major scale?",
"How many different notes are there in a minor pentatonic scale?",
"The most common form of blues is the XX bar blues.",
"What are 3 common lead guitar techniques?"]

var correct_counter = 0
var incorrect_counter = 0
var total_questions = 16

for (i = 1; i < 17; i++) {
    list_answers = [];
    for (j in questions_display){
        if(parseInt(parseInt(j)+1) == i){
            question = questions_display[j];
            };
        };
        
        list_answers.push("<h5 class='card-title'>" + question + "</h5>");

    for (x = 1; x < 5; x++) {
        var option_num = (((i-1)*4)+x);
        for (j in answers_display){
            if(parseInt(parseInt(j)+1) == option_num){
                display_option = answers_display[j];
                };
            };

        list_answers.push("<label class='radio'><input id='option" + option_num + "" + "' type='checkbox' value=''>" + display_option + "</label><br>");         
        };
    question_num = i;
    $("#answers" + question_num + "").html(list_answers.join(''));
    };

$("#submit").on("click", function( event ) {
    for (i in correct_answers) {
        if($("#"+correct_answers[i] + "").is(':checked')){
            correct_counter += 1;
        };
    };
    incorrect_counter = total_questions - correct_counter
    alert("SCORE - Correct answers: " + correct_counter + "" + " / Incorrect answers: " + incorrect_counter + "");
    location.reload();
});