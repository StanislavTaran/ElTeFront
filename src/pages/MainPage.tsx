import RegularLayout from "../layouts/RegularLayout";
import React, { useEffect, useState } from "react";
import BankList from "../components/Banks/BanksList";
import { Button, Modal, Portal } from "@mui/material";
import CreateBankForm from "../components/Banks/CreateBankForm";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../store/store";
import {
  createBankAction,
  fetchAllBanksAction,
  removeBankAction,
  updateBankAction,
} from "../store/bank/actions";
import { TBank } from "../store/bank/reducer";

const MainPage: React.FC = () => {
  const [showModalCreate, setShowModalCreate] = useState(false);
  const banksList = useAppSelector((state: RootState) => state.banks.banksList);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllBanksAction());
  }, []);

  const [bankId, setBankId] = useState(0);
  const [name, setName] = useState("");
  const [interestRate, setInterestRate] = useState(0);
  const [maxLoan, setMaxLoan] = useState(0);
  const [minDownPayment, setMinDownPayment] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);

  const resetInputs = () => {
    setName("");
    setInterestRate(0);
    setMaxLoan(0);
    setMinDownPayment(0);
    setLoanTerm(0);
  };

  const handleSetName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  const handleSetInterestRate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.currentTarget.value);
    if (isNaN(value) || value >= Number.MAX_SAFE_INTEGER || value < 0) {
      return;
    }
    setInterestRate(value);
  };

  const handleSetMaxLoan = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.currentTarget.value);
    if (isNaN(value) || value >= Number.MAX_SAFE_INTEGER || value < 0) {
      return;
    }
    setMaxLoan(value);
  };

  const handleSetMinDownPayment = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.currentTarget.value);
    if (isNaN(value) || value >= Number.MAX_SAFE_INTEGER || value < 0) {
      return;
    }

    if (value >= maxLoan) {
      return;
    }
    setMinDownPayment(value);
  };

  const handleSetLoanTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.currentTarget.value);
    if (isNaN(value) || value >= Number.MAX_SAFE_INTEGER || value < 0) {
      return;
    }
    setLoanTerm(value);
  };

  const handleCloseModal = () => {
    setShowModalCreate(false);
    resetInputs();
  };

  const handleClickCreateBank = () => {
    setShowModalCreate(true);
  };

  const handleClickEditBank = (id: number) => () => {
    const bank = banksList.find((item) => item.id === id);
    if (bank) {
      setBankId(bank.id);
      setName(bank.name);
      setInterestRate(bank.interestRate);
      setMaxLoan(bank.maxLoan);
      setMinDownPayment(bank.minDownPayment);
      setLoanTerm(bank.loanTerm);

      setShowModalCreate(true);
    } else {
      return;
    }
  };

  const handleUpdateBank = () => {
    const data: TBank = {
      id: bankId,
      name,
      interestRate,
      maxLoan,
      minDownPayment,
      loanTerm,
    };
    dispatch(updateBankAction(data));
    setShowModalCreate(false);
    setBankId(0);
    resetInputs();
  };

  const handleCreateBank = () => {
    const data: Omit<TBank, "id"> = {
      name,
      interestRate,
      maxLoan,
      minDownPayment,
      loanTerm,
    };
    dispatch(createBankAction(data));
    setShowModalCreate(false);
    resetInputs();
  };

  const handleRemoveBank = (id: number) => () => {
    dispatch(removeBankAction(id));
  };

  return (
    <RegularLayout>
      <BankList
        onClickEditItem={handleClickEditBank}
        onClickRemoveItem={handleRemoveBank}
        banks={banksList}
      ></BankList>
      <Button variant="contained" onClick={handleClickCreateBank}>
        Add bank
      </Button>
      <Portal>
        <Modal open={showModalCreate}>
          <CreateBankForm
            handleConfirm={!bankId ? handleCreateBank : handleUpdateBank}
            handleCancel={handleCloseModal}
            formControls={{
              handleChangeName: handleSetName,
              handleChangeLoanTerm: handleSetLoanTerm,
              handleChangeMaxLoan: handleSetMaxLoan,
              handleChangeInterestRate: handleSetInterestRate,
              handleChangeMinDownPayment: handleSetMinDownPayment,
            }}
            formValues={{
              name,
              maxLoan,
              interestRate,
              loanTerm,
              minDownPayment,
            }}
          ></CreateBankForm>
        </Modal>
      </Portal>
    </RegularLayout>
  );
};

export default MainPage;
