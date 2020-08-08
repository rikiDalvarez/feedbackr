import { handleChange, handleSubmit} from './formFunctions';


describe('handleChange', () => {
    let question = {question: ''};
    const setQuestion = (value) => {question = value}

    it('target.name !== answerOptions', () => {
        const event = {target: { value: 'banana', name: 'question'}}

        handleChange(event, null, setQuestion, question);
        console.log(question);

        expect(question.question).toBe('banana');

    })

    it('target.name !== answerOptions', () => {
        const event = {target: { value: 'banana', name: 'answerOptions'}}

        handleChange(event, null, setQuestion, question);
        console.log(question);

        expect(question.answerOptions).not.toBe('banana');

    })
})
