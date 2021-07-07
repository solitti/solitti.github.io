import styled from 'styled-components';

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
    color: #aaa;
    margin-bottom: 15px;

    span {
      font-family: FiraCodeRetina;
      font-size: 13px;
      padding: 5px;

      a {
        color: #aaa;
        text-decoration: none;
      }

      * {
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
      font-size: 50px;
      color: #fff;
      line-height: 30px;
    }

    .nature {
      font-family: MontHeavy;
      font-style: italic;
      font-size: 24px;
      color: #4c22b5;
      text-align: right;
      margin-right: 4.5px;
    }
  }
`;
