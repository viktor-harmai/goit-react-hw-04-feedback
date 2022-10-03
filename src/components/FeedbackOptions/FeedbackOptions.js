import PropTypes from 'prop-types';
import { upFirst } from 'utils';
import {
  BtnList,
  Btn,
} from 'components/FeedbackOptions/FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnList>
      {options.map((option, idx) => (
        <li key={idx}>
          <Btn type="button" onClick={() => onLeaveFeedback(option)}>
            {upFirst(option)}
          </Btn>
        </li>
      ))}
    </BtnList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
