import PropTypes from 'prop-types';

import {
  StatisticList,
  StatisticItem,
} from 'components/Statistics/Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticList>
      <StatisticItem>
        <p>
          Good:<span>{good}</span>
        </p>
      </StatisticItem>
      <StatisticItem>
        <p>
          Neutral:<span>{neutral}</span>
        </p>
      </StatisticItem>
      <StatisticItem>
        <p>
          Bad:<span>{bad}</span>
        </p>
      </StatisticItem>
      <StatisticItem>
        <p>
          Total:<span>{total}</span>
        </p>
      </StatisticItem>
      <StatisticItem>
        <p>
          Positive feedback:<span>{positivePercentage}%</span>
        </p>
      </StatisticItem>
    </StatisticList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
