import PropTypes from 'prop-types'
import css from 'components/Statistics/Statistics.module.css'
import data from 'components/Statistics/data.json'

export const Statistics = ({title, stats}) => {
    return ( <section className={css.statistics}>
    <h2 className={css.title}>{title}</h2>
    <ul className={css.statList}>
   
    {data.map(stats => (
      <li className={css.item} key={stats.id} >
        <span className={css.label}>{stats.label}</span>
        <span className={css.percentage}>{stats.percentage}</span>
      </li>))}
      
    </ul>
  </section> 
)}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  label: PropTypes.string,
  percentage: PropTypes.number, 
  }


