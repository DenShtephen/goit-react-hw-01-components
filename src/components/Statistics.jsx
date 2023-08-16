import PropTypes from "prop-types";

export const Statistics = ({ title, stats }) => {
    return (
        <section>
            {title && <h2>{title}</h2>}
            <ul>
                {stats.map(({ id, label, percentage }) => (
                    <li key={id} style={{ backgroundColor: getRandomHexColor() }}>
                        <span>{label}</span>
                        <span>{percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.string.isRequired})).isRequired
}