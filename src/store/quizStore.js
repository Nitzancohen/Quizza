import { observable, action } from 'mobx';
import axios from 'axios';

class QuizStore {

    @observable quizzes = null;

    @action getUser = async (userName) => {
        const currentUser = await axios.get('http://localhost:8080/quizzes', {userName});
        this.quizzes = currentUser.data;
    }

}

const store = new QuizStore();
export default store;