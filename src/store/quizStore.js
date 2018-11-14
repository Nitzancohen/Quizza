import { observable, action } from 'mobx';
import axios from 'axios';

class QuizStore {

    @observable quizzes = null;
    @observable quiz = null;

    @action getQuizzes = async ()=> {
        const allQuizzes = await axios.get('http://localhost:8080/quizzes');
        this.quizzes = allQuizzes.data;
    }

    @action getCurrentQuizz = async (quizID)=> { 
        const currentQuizz = await axios.get('http://local:8080/quiz/' + quizID);
        this.quiz = currentQuizz.data;
    }

}

const store = new QuizStore();
export default store;