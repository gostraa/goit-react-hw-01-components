import PropTypes from 'prop-types';
import { Section, StatsTitle, StatList, StatsItem } from './Statistics.styled'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`
}

export const Statistics = ({title,stats}) => {
  return (
    <Section className="statistics">
    {title && <StatsTitle className="title">{title}</StatsTitle>}

  <StatList className="stat-list">
    {stats.map(({ id, label, percentage }) => (
      <StatsItem key={id} style={{backgroundColor: getRandomHexColor() }}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </StatsItem>
        ))}
  </StatList>
</Section>
  )
}


Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired }))
    .isRequired,
};
