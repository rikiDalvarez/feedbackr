import React from 'react';

function MultipleChoice (props) {

  const question = props.question;
  const setQuestion = props.setQuestion;

  const handleChange = function(event, index) {
    const value = event.target.value;
    if (event.target.name === "answerOptions") {
      const array = [...question.answerOptions];
      array[index] = {
        value: index,
        label: value
      }
      setQuestion({
        ...question,
        [event.target.name]: array
      })
    } else if (event.target.name === "correctAnswer") {
      console.log(value);
      setQuestion({
        ...question,
        [event.target.name]: value
      })
    }
  }

  const handleAdd = function(event, index) {
    const name = event.target.name;
    const array = [...question[name]];
    console.log('array', array);
    array.splice(index+1,0,"");
    setQuestion({
      ...question,
      [event.target.name]: array
    })
  }

  const handleRemove = function (event, index) {
    const name = event.target.name;
    const array = [...question[name]];
    array.splice(index,1);
    console.log('array', array);
    setQuestion({
      ...question,
      [event.target.name]: array
    })
  }

  return (
    <div>
      {question.answerOptions.map((option, index) => (
        <div key={index} className="question-builder__select">
          <label htmlFor="answerOptions">Answer option {String.fromCharCode(index+65)}</label>
          <input
            id="answerOptions"
            data-testid="answerOptions"
            name="answerOptions"
            value={option.label}
            onChange={(event) => handleChange(event, index)}
          ></input>
          <button
            className="add"
            type="button"
            name="answerOptions"
            onClick={(event) => handleAdd(event, index)}
          >+</button>
          <button
            className="remove"
            type="button"
            name="answerOptions"
            onClick={(event) => handleRemove(event, index)}>-</button>
        </div>
      ))
      }

      <div className="question-builder__input">
        <label>Correct answer</label>
        <select
          onChange={handleChange}
          name="correctAnswer"
        ><option value={null}></option>
          {question.answerOptions.map((option, index) => (
            <option key={index} value={option.value}>{`${String.fromCharCode(index+65)}: ${option.label}`}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default MultipleChoice;