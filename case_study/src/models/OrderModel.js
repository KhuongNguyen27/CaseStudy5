import axios from "axios";

class OrderModel {
    constructor() {
        this.api_url = 'http://127.0.0.1:8000/api/orders';
    }


    async checkout(data) {
        const res = await axios.post(this.api_url + '/checkout' , data)
        return res.data;
    }  

}

export default new OrderModel();