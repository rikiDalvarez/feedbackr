export default function dbReducer (state = [], action) {
  const { type } = action
    switch(type) {
        case 'SET_DB':
            return [...action.quizzes]; //how the state is going to be updated
        default:
          return state;
    }
}
