import { observable, action } from 'mobx';
import axios from 'axios';

class QuizStore {

    @observable quizzes = null;

    @action getQuizzes = async () => {
        const allQuizzes = await axios.get('http://localhost:8080/quizzes');
        this.quizzes = allQuizzes.data;
    }

}

const store = new QuizStore();
export default store;