import styled from 'styled-components';

export const BtnList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

export const Btn = styled.button`
  padding: 6px 22px;
  border: none;
  border-radius: 4px;
  min-width: 80px;

  background-color: #f5f4fa;
  color: #212121;

  font-family: inherit;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.63;
  letter-spacing: 0.03em;
  text-align: center;

  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #2196f3;
    color: #ffffff;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;
