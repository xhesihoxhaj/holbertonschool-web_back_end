import { uploadPhoto , createUSer } from "./utils.js"
function handleProfileSignup(){
    return Promise.all([uploadPhoto(),createUSer()]);
}