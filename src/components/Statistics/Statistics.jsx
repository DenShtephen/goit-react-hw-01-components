import PropTypes from 'prop-types';
import {
  Card,
  StatisticsHeader,
  StatisticsList,
  StatisticsItem,
} from './Statistics.styled.js';

export const Statistics = ({ title, stats }) => {
  return (
    <Card>
      {title && <StatisticsHeader>{title}</StatisticsHeader>}
      <StatisticsList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsItem
            key={id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span>{label}</span>
            <span>{percentage}%</span>
          </StatisticsItem>
        ))}
      </StatisticsList>
    </Card>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
