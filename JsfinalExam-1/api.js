
const QuestionApi = {
    post: async (Question) => {
        let req = await fetch("http://localhost:3000/Questions", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(Question)

        })
    },
    get: async () => {
        let req = await fetch("http://localhost:3000/Questions");
        let res = await req.json();
        return res
    },

    patch: async (id, Question) => {
        let req = await fetch(`http://localhost:3000/Questions/${id}`, { 
            method: "PATCH",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(Question)
        });
    },
    delete: async (id) => {

        let req = await fetch(`http://localhost:3000/Questions/${id}`, {
            method: "DELETE",

        })
    }
}

export default QuestionApi