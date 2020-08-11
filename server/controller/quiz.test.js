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

    it('should add one quiz to fakeQuizzes', async () => {  
      const newQuiz = (id,name,question, answer) => {return {id:id , name:name, question:question, answer:answer}}
      function addToQuizzes(newQuiz){
        fakeQuizes.push(newQuiz)
    }
    const quiz1 = newQuiz(3, 'mj' , 'where?', 'here')
    await addToQuizzes(quiz1);
    expect(fakeQuizes).toHaveLength(3);
});

    for (let i = 0; i<fakeQuizes.length; i++) {
        it( `quiz [${i}] should have propertys (id, name, question, answer)`, () => {
            expect(fakeQuizes[i]).toHaveProperty('id')
            expect(fakeQuizes[i]).toHaveProperty('name')
            expect(fakeQuizes[i]).toHaveProperty('question')
            expect(fakeQuizes[i]).toHaveProperty('answer')
        })
    }
});


