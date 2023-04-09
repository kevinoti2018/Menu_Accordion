
import Question from './Question';
const Questions = ({quizes})=>{
    return(
        <div className='container'>
            <h1>Questions</h1>

            {quizes.map(quiz=>{
                return(
                    <Question key={quiz.id} {...quiz} />
                )
            })}
        </div>
    )
}

export default Questions