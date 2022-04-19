import React from "react";
import styled from "styled-components";
import LabelText from "../shared/LabelText";
import { TBank } from "../../store/bank/reducer";
import { Button } from "@mui/material";

interface TBankItemProps {
  bank: TBank;
  onClickEdit: (id: number) => () => void;
  onClickRemove: (id: number) => () => void;
}

const StyledBankItem = styled.li`
  background-color: #b2c7c7;
  width: 300px;
  padding: 10px;
  border: 2px solid #101b34;
  border-radius: 1rem;
  margin: 10px;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
    transition: all 300ms;
    background-color: #cee7e7;
  }
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const BankItem: React.FC<TBankItemProps> = (props) => {
  const { name, minDownPayment, maxLoan, loanTerm, interestRate } = props.bank;

  return (
    <StyledBankItem>
      <LabelText label={"Name"}>{name}</LabelText>
      <LabelText label={"Interest rate"}>{interestRate}</LabelText>
      <LabelText label={"Maximum Loan"}>{maxLoan}</LabelText>
      <LabelText label={"Minimum Down Payment"}>{minDownPayment}</LabelText>
      <LabelText label={"Loan term"}>{loanTerm}</LabelText>
      <StyledButtonContainer>
        <Button onClick={props.onClickEdit(props.bank.id)} variant="outlined">
          Edit
        </Button>

        <Button
          color="error"
          onClick={props.onClickRemove(props.bank.id)}
          variant="outlined"
        >
          Remove
        </Button>
      </StyledButtonContainer>
    </StyledBankItem>
  );
};

export default BankItem;
