import axios from "axios";

export default axios.create({
    //http://localhost:3030
    //https://backend-tamba-flowers.herokuapp.com
    baseURL: "https://backend-tamba-flowers.herokuapp.com"
});