import axios from 'axios';

const Agent = {
    get_api: () => {
        return axios.get("https://jsonplaceholder.typicode.com/todos/1")
                .then(response => response.data)
                .catch(err => console.log(err));
    }
}

export default Agent;