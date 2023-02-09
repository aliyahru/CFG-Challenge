const questions = [
    {
        question: "Which date is International Day of Women & Girls in Science?",
        optionA: " 12th Janusry",
        optionB: "15th May",
        optionC: "5th June",
        optionD: "11th February",
        correctOption: "optionD"
    },

    {
        question: "What was Ada Lovelace known for?",
        optionA: "Horse Riding",
        optionB: "Mathematics",
        optionC: "Space Travel",
        optionD: "Medicine",
        correctOption: "optionB"
    },

    {
        question: "Mae C. Jemison was a chemical engineer and... ?",
        optionA: "A mathematician",
        optionB: "Physisist",
        optionC: "A cook",
        optionD: "a NASA Astronaut",
        correctOption: "optionD"
    },

    {
        question: "Marie Maynard Daly conducted groundbreaking studies in...?",
        optionA: "Space Flights",
        optionB: "Haematology",
        optionC: "Cholesterol, sugars and proteins",
        optionD: "Mathematics",
        correctOption: "optionC"
    },

    {
        question: "Which of these roles fall under a STEM career path?",
        optionA: "Chef",
        optionB: "Personal Trainer",
        optionC: "Financial Advisor",
        optionD: "Software Developer",
        correctOption: "optionD"
    },

    {
        question: "Katherine G. Johnson was an employee at ?",
        optionA: "NASA",
        optionB: "Microsoft",
        optionC: "Deloitte",
        optionD: "MI7",
        correctOption: "optionA"
    },

    {
        question: "What university did Marie Curie enroll into?",
        optionA: "The University of Colarado",
        optionB: "The University of Antarctica",
        optionC: "The Floating University, Poland",
        optionD: "The Univerdity of Science, Poland",
        correctOption: "optionC"
    },

    {
        question: "What percentage of girls aged 7-10 think there aren't enough women in STEM?",
        optionA: "18%",
        optionB: "50%",
        optionC: "23%",
        optionD: "42%",
        correctOption: "optionA"
    },

    {
        question: "In 2019/2020 what percentage of girls enrolled in a STEM topic at A level compared to 55% of boys?",
        optionA: "16%",
        optionB: "2%",
        optionC: "30%",
        optionD: "9%",
        correctOption: "optionD"
    },

    {
        question: "Who was the 1st female Nobel laureate?",
        optionA: "Beyonce",
        optionB: "Madonna",
        optionC: "Ada Lovelace",
        optionD: "Marie Curie",
        correctOption: "optionD"
    },

    {
        question: "What percentage of women are in cutting edge fields such A.I?",
        optionA: "19%",
        optionB: "40%",
        optionC: "22%",
        optionD: "8%",
        correctOption: "optionC"
    },

    {
        question: "Who was the 1st (and only to date) woman to win Nobel prizes in two different sciences?",
        optionA: "Marie Curie",
        optionB: "Katherine G. Johnson",
        optionC: "Augusta Ada King",
        optionD: "Rebecca Cole",
        correctOption: "optionA"
    },


    {
        question: "Who is considered as the 'Mother of Computing'?",
        optionA: "Melinda French Gates ",
        optionB: "Ada Lovelace",
        optionC: "Mariah Carey",
        optionD: "Naiomi Campbell",
        correctOption: "optionB"
    },

    {
        question: "In 1987 who applied to be an astronaut at NASA and was 1 of 15 accepted out of 2,000 applicants?",
        optionA: "Mary Elliot Hill",
        optionB: "Ada Lovelace",
        optionC: "Mary Seacole",
        optionD: "Mae C. Jemison",
        correctOption: "optionD"
    },

    {
        question: "Which two female mathematicians were colleagues of Katherine G. Johnson?",
        optionA: "Dortohy Vaughan & Mary Jackson",
        optionB: "Mary Jackson & Mae C. Johnson",
        optionC: "Dorothy Vaughan & Rebecca Cole",
        optionD: "Mae C. Johnson & Rebecca Cole",
        correctOption: "optionA"
    },

    {
        question: "On 12 September,1992, who was the first African American woman to travel in space aboard the Endeavour?",
        optionA: "Katherine G. Johnson",
        optionB: "Rebecca Cole",
        optionC: "Mae C. Jemison",
        optionD: "Mary Jackson",
        correctOption: "optionC"
    },

    {
        question: "Who was the first African American woman to obtain a PhD in chemistry in the United States?",
        optionA: "Mary Elliot Hill ",
        optionB: "Augusta Ada King",
        optionC: "Michelle Williams",
        optionD: "Mae C. Jemison",
        correctOption: "optionA"
    },

    {
        question: "In which year did Mary Elliott Hill gain her degree ?",
        optionA: "2021",
        optionB: "1932",
        optionC: "1929",
        optionD: "2002",
        correctOption: "optionC"
    },

    {
        question: "What is one reason we should support, encourage and celebrate women and girls in science and technology?",
        optionA: "So that women can surpass men and boys in STEM studies and careers",
        optionB: "So that women and men can compete in who is the better gender in STEM careers",
        optionC: "There is no reason",
        optionD: "To give women and girls the same opportunities as boys and men to persue STEM education opportunities or careers",
        correctOption: "optionD"
    },

    {
        question: "Who actively promoted the use of radium to alleviate suffering during World War I?",
        optionA: "Marie Curie",
        optionB: "Ada Lovelace",
        optionC: "Katherine G. Johnson",
        optionD: "Hillary Clinton",
        correctOption: "optionA"
    },

    {
        question: "Who studied at Hunter College High School, an all-female institution?",
        optionA: "Ada Lovelace",
        optionB: "Katherine G. Johnson",
        optionC: "Marie Curie",
        optionD: "Mary Manard Daly",
        correctOption: "optionD"
    },

    {
        question: "Who from a young age developed interests in anthropology, archaeology, evolution, and astronomy?",
        optionA: "Jenifer Lopez",
        optionB: "Mae C. Jemison",
        optionC: "Mary Elliot Hill",
        optionD: "None of these women",
        correctOption: "optionB"
    },

    {
        question: "Who, while in Paris, obtained Licenciateships in Physics and the Mathematical Sciences?",
        optionA: "Kelly Rowland",
        optionB: "Marie Curie",
        optionC: "Dorothy Vaughan",
        optionD: "All of these women",
        correctOption: "optionB"
    },

    {
        question: "International Day of Women & Girls in Science is marked by...?",
        optionA: "The World Health Organisation",
        optionB: "The Government",
        optionC: "The United Nations",
        optionD: "The President of the United States",
        correctOption: "optionC"
    },

    {
        question: "Underrepresentation of women’s contribution to research and development means...?",
        optionA: "Their needs and perspectives are unlikely to be overlooked in the design of products that impact our daily lives",
        optionB: "Women will always be picked first for jobs in STEM",
        optionC: "Their needs and perspectives are likely to be overlooked in the design of products that impact our daily lives",
        optionD: "Nothing",
        correctOption: "optionC"
    }

]


let shuffledQuestions = [] //Shuffled

function handleQuestions() { 
    //10 Questions from shuffle 
//10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //current question number
let playerScore = 0  //player score
let wrongAttempt = 0 //amount of wrong answers picked 
let indexNumber = 0 //display next question



function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            
            correctOption = option.labels[0].id
        }
    })

    
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delay to next questions
    setTimeout(() => {
        if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//background reset after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

function handleEndGame() {
    let remark = null
    let remarkColor = null

    // stats
    if (playerScore <= 3) {
        remark = "Dont worry, you can take the quiz again!"
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Good effort, let's see if you can do better."
        remarkColor = "orange"
    }

    else if (playerScore >= 7 && playerScore <9) {
    remark = "Well Done! Almost top marks, can we tempt you to try again? "
    remarkColor = "green"
    }
    else if (playerScore = 10) {
        remark = "Excellent work!"
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //scoreboard
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//close, then resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}


function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}
