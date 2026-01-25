export default function handleResponseFromAPI(promise){
    return promise
    .then(()=>{
        return {status: 200, body: "success"};

    })
    .catch((err)=>{
        return New Error();
    })
    .finally(()=>{
console.log("Got a response from API");
    });
}