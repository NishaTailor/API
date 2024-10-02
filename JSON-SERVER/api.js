
const studentApi = {
    post: async (student) => {
        let req = await fetch("http://localhost:3000/student", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(student)

        })
    },
    get: async () => {
        let req = await fetch("http://localhost:3000/student");
        let res = await req.json();
        return res
    },
    patch: async (id, student) => {
        let req = await fetch(`http://localhost:3000/student/${id}`, {
            method: "PATCH",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(student)

        })
    },
    delete: async (id) => {

        let req = await fetch(`http://localhost:3000/student/${id}`, {
            method: "DELETE",

        })
    }
}

export default studentApi