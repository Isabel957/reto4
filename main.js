const quizData = [
    {
        link: "https://images.unsplash.com/photo-1629735860076-20758d10bc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        question: "Es el principal culpable de la contaminación de rios, mares, del aire y la tierra",
        a: "Los químicos",
        b: "Las fábricas",
        c: "El hombre",
        d: "Las familias",
        correct: "c",
    },
    {
        link: "https://images.unsplash.com/photo-1611270418920-2af53328f8d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
        question: "Son los principales contaminantes del medio ambiente",
        a: "Rdioactividad, desechos orgánicos",
        b: "Bolsas de basura, el hombre",
        c: "El calor, el humo",
        d: "Los componentes químicos",
        correct: "a",
    },
    {
        link: "https://images.unsplash.com/photo-1632247620235-03442fee3bff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        question: "¿En cuánto tiempo se descomponen los pañales desechables?",
        a: "3 año",
        b: "30 años",
        c: "300 años",
        d: "3000 años",
        correct: "c",
    },
    {
        link: "https://images.unsplash.com/photo-1569163139394-de4e5f43e5ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        question: "Es un medio de prevención para evitar que el medio ambiente sufra daños",
        a: "Regar fertilizantes a las plantas",
        b: "Denunciar a los cazadores",
        c: "Controlar el agua de las industrias",
        d: "Crear conciencia ciudadana",
        correct: "d",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const imgEl = document.getElementById("img-link");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    imgEl.src = currentQuizData.link;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            if(score > 2){
                quiz.innerHTML = `
                <h2>!Felicitaciones 🥳! <br>Respondiste correctamente ${score}/${quizData.length} preguntas</h2>
                
                <button><a href='index.html'>¡Jugar de Nuevo!</a></button>
            `;
            }else {
                quiz.innerHTML = `
                <h2>¡Puedes hacerlo mejor 💪!<br> Respondiste correctamente ${score}/${quizData.length} preguntas</h2>
                
                <button><a href='index.html'>¡Jugar de Nuevo!</a></button>
            `;
            }
            
        }
    }
});