import QuestionApi from "./api.js";
let id = -1

const handleSubmit = (e) => {
    e.preventDefault();
    let Question = {
            Question: document.getElementById('Question').value,
            Option1: document.getElementById('Option1').value,
            Option2: document.getElementById('Option2').value,
            Option3: document.getElementById('Option3').value,
            Option4: document.getElementById('Option4').value,
            Ans: document.getElementById('answer').value       
    }
    console.log(Question);
 
    window.location.reload()

}
document.getElementById("form").addEventListener("submit", handleSubmit)

// ui 
const uiMaker = (Questions) => {
    Questions.map((ele) => {
        let div = document.createElement("div");
        let Option1 = document.createElement("h5");
        Option1.innerHTML = ele.Option1;
        let Option2 = document.createElement("h5");
        Option2.innerHTML = ele.Option2;
        let Option3 = document.createElement("h5");
        Option3.innerHTML = ele.Option3;
        let Option4 = document.createElement("h5");
        Option4.innerHTML = ele.Option4;
        let answer = document.createElement("h5");
        answer.innerHTML = ele.Ans;

        div.append(Option1, Option2, Option3, Option4,answer)
        document.getElementById("list").append(div)
    })

}
const getQuestion = async () => {
    console.log(await QuestionApi.get())
    uiMaker(await QuestionApi.get())
}
getQuestion()