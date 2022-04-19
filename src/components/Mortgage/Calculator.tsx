import React, { ReactNode } from "react";
import { TBank } from "../../store/bank/reducer";
import styled from "styled-components";
import {
  Button,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";

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

interface TCalculatorProps {
  bankList: TBank[];
  currentBank: TBank | null;
  values: {
    initialLoan: number;
    downPayment: number;
  };
  controls: {
    onChangeInitialLoan: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeDownPayment: (e: React.ChangeEvent<HTMLInputElement>) => void;

    onSubmit: () => void;
    onReset: () => void;

    onSelectBank: (event: SelectChangeEvent<number>, child: ReactNode) => void;
  };
}

const Calculator: React.FC<TCalculatorProps> = (props) => {
  return (
    <StyledFormContainer>
      <StyledForm>
        <StyledInputContainer>
          <InputLabel id="currentBankLabel">Bank</InputLabel>
          <Select
            fullWidth
            labelId="currentBankLabel"
            id="currentBank"
            value={props.currentBank?.id}
            label="Bank"
            onChange={props.controls.onSelectBank}
          >
            {props.bankList.map((item) => (
              <MenuItem key={item.id} value={item.id}>
                {item.name.trim()}
              </MenuItem>
            ))}
          </Select>

          <InputLabel htmlFor="initialLoan">Initial Loan</InputLabel>
          <OutlinedInput
            id="initialLoan"
            fullWidth
            size="medium"
            value={props.values.initialLoan}
            onChange={props.controls.onChangeInitialLoan}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />

          <InputLabel htmlFor="downPay">Down Payment</InputLabel>
          <OutlinedInput
            id="downPay"
            fullWidth
            size="medium"
            value={props.values.downPayment}
            onChange={props.controls.onChangeDownPayment}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </StyledInputContainer>

        <StyledButtonContainer>
          <Button
            variant="contained"
            disabled={!props.currentBank}
            onClick={props.controls.onSubmit}
          >
            Calculate
          </Button>
          <Button variant="outlined" onClick={props.controls.onReset}>
            Reset
          </Button>
        </StyledButtonContainer>
      </StyledForm>
    </StyledFormContainer>
  );
};

export default Calculator;
