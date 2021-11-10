import styled, {keyframes, css} from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  /* background-color: #fff; */
  background: #216DB8;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0,0,0, 0.2);
  padding: 32px;
  margin: 80px auto;

  h1 {
    font-size: 22px;

    img {
      margin-right: 8px;
    }
  }

`;


export const Form = styled.form`
  margin-top: 32px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid ${props => (props.error ? '#ff0000' : '#fff')};
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 18px;
    background: #216DB8;
    
    &::placeholder {
      color: #fff
    }
}
`;

//Animaçãoes do botão 
const animate = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading
}))`
  background: #1E293B;
  border: 0;
  border-radius: 4px;
  margin-left: 8px;
  padding: 0 16px;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: opacity 0.2s;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }

  ${props => props.loading && 
    css`
      svg {
        animation: ${animate} 2s linear infinite
      }
    `
  }
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 24px;

  li {
    padding: 16px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background: #fff;


    & + li {
      margin-top: 16px;
    }

    span {
      color: #216DB8;
      padding: 12px 8px;
      font-weight: bold;
      font-size: 18px;
    }

    img {
      width: 160px;
      height: 160px;
      border-radius: 50%;
      border: 4px solid #216DB8;
      margin: 12px 8px;
    }

    a {
      color: #216DB8;
      text-decoration: none;
    }

  }
`;

export const ButtonClear = styled.button.attrs({
  type: 'button'
})`
  margin: 8px 0;
  padding: 8px 4px;
  border-radius: 4px;
  border: 0;
  color: #216db8;
  font-weight: bold;

`;

export const PageAction = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 8px;

  button {
    outline: 0;
    border: 0;
    color: #216db8;
    padding: 6px 8px;
    border-radius: 8px;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;