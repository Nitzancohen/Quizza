import { observable, action } from 'mobx';
import axios from 'axios';

class QuizStore {
    @observable user = null;
    @observable quizzes = null;
    @observable quiz = null;
    // 
    @observable isLoading = true;

    // TODO - userResults
    // @observable userResults = null;

    @action addUser = async (userName) => {
        const newUser = await axios.get('http://localhost:8080/user/' + userName);
        this.user = newUser.data;
    }

    @action getQuizzes = async ()=> {
        const allQuizzes = await axios.get('http://localhost:8080/quizzes');
        this.quizzes = allQuizzes.data;
    }

    @action getCurrentQuizz = async (quizID)=> { 
        const currentQuizz = await axios.get('http://localhost:8080/quiz/' + quizID);
        this.quiz = currentQuizz.data;
    }

    @action saveQuiz = async (header, questions, results)=> {
        let newQuiz = {
            title: header.title,
            desc: header.description,
            questions: questions,
            results: results
        }
        let q = await axios.post('http://localhost:8080/quiz', newQuiz)
        console.log(q.data);
    }

}

const store = new QuizStore();
export default store;