const quizQuestions = [
    {
        question: "Fråga 1 av 5:\nVilka av dessa övningar brukar räknas som basövningar?",
        a: "Marklyft",
        b: "Benspark",
        c: "Bicepscurls",
        d: "Hopprep",
        correct: "a",
    },
    {
        question: "Fråga 2 av 5:\nVilken muskel tränar du när du gör övningen 'rodd'?",
        a: "Rumpa",
        b: "Rygg",
        c: "Mage",
        d: "Bröst",
        correct: "b",
    },
    {
        question: "Fråga 3 av 5:\nVilken övning gör du vanligtvis inte med en kettlebell?",
        a: "Swing",
        b: "Snatch",
        c: "Clean",
        d: "Throw",
        correct: "d",
    },
    {
        question: "Fråga 4 av 5:\nVad behöver du för redskap för att göra en armhävning?",
        a: "Gummiband",
        b: "Inga",
        c: "Skivstång",
        d: "Hantlar",
        correct: "c",
    },
    {
        question: "Fråga 5 av 5:\nVilket är det svenska ordet för 'squat'?",
        a: "Höftlyft",
        b: "Situps",
        c: "Dips",
        d: "Knäböj",
        correct: "d",
    },
];

var quiz = document.getElementById('quiz')
var answers = document.querySelectorAll('.answer')
var questions = document.getElementById('question')
var a_text = document.getElementById('a_text')
var b_text = document.getElementById('b_text')
var c_text = document.getElementById('c_text')
var d_text = document.getElementById('d_text')
var submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    var currentQuizQuestion = quizQuestions[currentQuiz]
    
    questions.innerText = currentQuizQuestion.question
    a_text.innerText = currentQuizQuestion.a
    b_text.innerText = currentQuizQuestion.b
    c_text.innerText = currentQuizQuestion.c
    d_text.innerText = currentQuizQuestion.d
}

function deselectAnswers() {
    answers.forEach(answers => answers.checked = false)
}

function getSelected() {
    let answer

    answers.forEach(answers => {
        if(answers.checked) {
            answer = answers.id
        }
    })

    return answer
}



submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if(answer) {
        if(answer === quizQuestions[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizQuestions.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>Du svarade rätt på ${score} av ${quizQuestions.length} frågor!</h2>

                <button onclick="location.reload()">Spela igen</button>
            `
        }
    }
})