import React from "react";
import styled from "styled-components";

type TLabelTextProps = {
  label: string;
};

const StyledLabelSpan = styled.span`
  color: #007580;
  font-weight: bold;
  padding-right: 10px;
`;

const StyledValue = styled.span`
  color: #051805;
  font-weight: bold;
`;

const StyledTextContainer = styled.p`
  display: flex;
  justify-content: space-between;
`;

const LabelText: React.FC<TLabelTextProps> = (props) => {
  return (
    <StyledTextContainer>
      <StyledLabelSpan>{props.label}</StyledLabelSpan>
      <StyledValue>{props.children}</StyledValue>
    </StyledTextContainer>
  );
};

export default LabelText;
