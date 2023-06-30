import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Wrapper = styled.div`
  max-width: 300px;
`;

export const Column = styled.div`
  flex: 1;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: row;
  align-items: center;
  margin-top: 20px;
`;

export const Title = styled.h2`
   font-style: normal;
   font-weight: 700;
   font-size: 32px;
   max-width: 90%;
   margin-bottom: 20px;
   line-height: 44px;

   color: #fff;
`;

export const TitleRegister = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 8px;
    line-height: 44px;
`;

export const SubTitleRegister = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 35px;
    line-height: 25px;
`;