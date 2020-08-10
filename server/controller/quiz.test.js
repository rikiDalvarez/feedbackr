const {
    getQuizzes,
    getOneQuiz,
    postQuiz,
    updateQuiz,
    postQuestion
  }  = require('./quiz')

const fakeQuizes = [{
    id:1,
    name: 'babe',
    question: 'name',
    answer: 'a'
},
{
    id:2,
    name: 'babe1',
    question: 'name1',
    answer: 'b'
}
]

const findById = (value) => {return fakeQuizes.filter(quiz => quiz.id=== value)}
describe('return a quiz with and provided id',  () => {
    it('get one', async () => {
        const quiz = await findById(1);
        expect(quiz).toBeTruthy();
        expect(quiz).toHaveLength(1);
        expect(...quiz).toHaveProperty('name', 'babe')
        
 
  
});
});


