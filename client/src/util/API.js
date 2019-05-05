
import axios from 'axios';

export default {
    test: function(){
        console.log(`util test function hit`);
        return axios.get('/get')
    },
    get_articles: function(){
        return axios.get('/get')
    }
}