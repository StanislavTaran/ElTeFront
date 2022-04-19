import React from "react";
import BankItem from "./BankItem";
import styled from "styled-components";
import { TBank } from "../../store/bank/reducer";

type TBanksListProps = {
  banks: TBank[];
  onClickEditItem: (id: number) => () => void;
  onClickRemoveItem: (id: number) => () => void;
};

const StyledBanksList = styled.ul`
  list-style: none;
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const BankList: React.FC<TBanksListProps> = (props) => {
  return (
    <div>
      {props.banks.length ? (
        <StyledBanksList>
          {props.banks.map((item) => (
            <BankItem
              onClickEdit={props.onClickEditItem}
              onClickRemove={props.onClickRemoveItem}
              key={item.id}
              bank={item}
            ></BankItem>
          ))}
        </StyledBanksList>
      ) : (
        <div>
          <h2>You have no banks yet</h2>
        </div>
      )}
    </div>
  );
};

export default BankList;
