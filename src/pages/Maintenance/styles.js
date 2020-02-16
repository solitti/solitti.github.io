import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-content: center;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  .box-contact {
    display: flex;
    flex-direction: column;
    padding: 10px;
    font-family: monospace;
    color: #fff;

    span {
      font-family: FiraCodeRetina;
      font-size: 15px;

      a {
        color: #fff;
        text-decoration: none;
      }
    }
  }

  .box-logo {
    display: flex;
    flex-direction: column;
    padding: 10px;

    .logo {
      font-family: MontHeavy;
      font-style: italic;
      font-size: 30px;
      color: #fff;
      line-height: 20px;
    }

    .nature {
      font-family: MontHeavy;
      font-style: italic;
      font-size: 14px;
      color: #4c22b5;
      text-align: right;
      margin-right: 4.5px;
    }
  }
`;
