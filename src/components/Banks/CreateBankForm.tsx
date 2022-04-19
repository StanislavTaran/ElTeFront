import React from "react";
import {
  Button,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import styled from "styled-components";

interface TCreateBankFormProps {
  handleConfirm: () => void;
  handleCancel: () => void;
  formControls: {
    handleChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleChangeInterestRate: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleChangeMaxLoan: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleChangeMinDownPayment: (
      e: React.ChangeEvent<HTMLInputElement>
    ) => void;
    handleChangeLoanTerm: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  formValues: {
    name: string;
    interestRate: number;
    maxLoan: number;
    minDownPayment: number;
    loanTerm: number;
  };
}

const StyledFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledForm = styled.form`
  background-color: aliceblue;
  padding: 8px;
  width: 300px;
  border: 1px solid black;
  border-radius: 0.3rem;
`;

const StyledInputContainer = styled.div`
  padding: 6px 0;
  margin-bottom: 12px;
`;

const CreateBankForm: React.FC<TCreateBankFormProps> = (props) => {
  return (
    <StyledFormContainer>
      <StyledForm>
        <StyledInputContainer>
          <InputLabel htmlFor="name">Name</InputLabel>
          <OutlinedInput
            id="name"
            fullWidth
            size="small"
            value={props.formValues.name}
            onChange={props.formControls.handleChangeName}
          />

          <InputLabel htmlFor="interestRate">Interest rate</InputLabel>
          <OutlinedInput
            id="interestRate"
            fullWidth
            size="small"
            value={props.formValues.interestRate}
            onChange={props.formControls.handleChangeInterestRate}
            startAdornment={<InputAdornment position="start">%</InputAdornment>}
          />

          <InputLabel htmlFor="maxLoan">MAX Loan</InputLabel>
          <OutlinedInput
            id="maxLoan"
            fullWidth
            size="small"
            value={props.formValues.maxLoan}
            onChange={props.formControls.handleChangeMaxLoan}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />

          <InputLabel htmlFor="minDownPay">MIN Down Payment</InputLabel>
          <OutlinedInput
            id="minDownPay"
            fullWidth
            size="small"
            value={props.formValues.minDownPayment}
            onChange={props.formControls.handleChangeMinDownPayment}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />

          <InputLabel htmlFor="loanTerm">Loan Term</InputLabel>
          <OutlinedInput
            id="loanTerm"
            fullWidth
            size="small"
            value={props.formValues.loanTerm}
            onChange={props.formControls.handleChangeLoanTerm}
          />
        </StyledInputContainer>

        <StyledButtonContainer>
          <Button variant="contained" onClick={props.handleConfirm}>
            Save
          </Button>
          <Button variant="outlined" onClick={props.handleCancel}>
            Cancel
          </Button>
        </StyledButtonContainer>
      </StyledForm>
    </StyledFormContainer>
  );
};

export default CreateBankForm;
