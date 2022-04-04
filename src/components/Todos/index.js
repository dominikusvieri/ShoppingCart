import PropTypes from 'prop-types';
import styles from './Todos.module.css';
import minusIcon from '../../assets/minus-icon.svg';
import plusIcon from '../../assets/plus-icon.svg';

const Todos = ({todos, onSubstraction, onAddition}) => {
    return(
        <div className={styles.todos}>
            {todos.map((todo, index) => {
              return(
                <div key={index} className={styles.todo}>
                  {todo.title}
                  <div className={styles.todoIconWrapper}>
                    <div className={styles.todoCount}>
                      {todo.count}</div>
                  </div>

                  <button onClick={() => onSubstraction(index)} className={styles.todoActionButton}>
                    <img src={minusIcon} alt='minus icon'/>
                  </button>
                  <button onClick={() => onAddition(index)} className={styles.todoActionButton}>
                    <img src={plusIcon} alt='plus icon'/>
                  </button>
                </div>
              )
            })}
        </div>
    )
}

Todos.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        count: PropTypes.number
    })),
    onSubstraction: PropTypes.func,
    onAddition: PropTypes.func
}

export default Todos;