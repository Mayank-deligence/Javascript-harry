const createTodo = async (todo) => {

    let options = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(todo),
        //     {
        //     // javascript object ko string m convert kr deta h stringify
        //     // json.parse ek valid json string ko javascript object m kr deta h
        //     title: 'Mayank',
        //     body: 'bhaii',
        //     userId: 1100,
        // }
        // ),
    }
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    let response = await p.json()
    return response
}
const getTodo = async (id) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    let r = await response.json()
    return r
}
const mainFunc = async () => {
    let todo = {
        title: 'Mayank',
        body: 'bhaii',
        userId: 1100,
    }
    let todor = await createTodo(todo)
    console.log(todor)
    console.log(await getTodo(5))
}
mainFunc()
// fetch('https://jsonplaceholder.typicode.com/posts', options)
//     .then((response) => response.json())
//     .then((json) => console.log(json));