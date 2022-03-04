import axios from "axios";

export default axios.create({
    //http://localhost:3030
    baseURL: "https://backend-tamba-flowers.herokuapp.com"
});