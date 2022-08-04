import PropTypes from 'prop-types'
import styles from './Statistics.module.css'


export const Statistics = ({title, stats}) => {
    return ( <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
  
      <ul className={styles.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={styles.item}
            
          >
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
)}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  label: PropTypes.string,
  percentage: PropTypes.number, 
  }


