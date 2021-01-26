import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

Form.Input = styled.input`
    width: 100%;
    height: 40px;
    padding: 10px;
    color: ${({ theme }) => theme.colors.contrastText};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.mainBg};
    border-radius: ${({ theme }) => theme.borderRadius};

    &:focus{
        outline: none;
    }
`;

Form.Button = styled.button`
    width: 100%;
    height: 36px;
    margin-top: 24px;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: ${({ theme }) => theme.borderRadius};
    color: ${({ theme }) => theme.colors.contrastText};
    transition: .3s;

    &:hover{
        border: 1px solid ${({ theme }) => theme.colors.terciary};
        background-color: ${({ theme }) => theme.colors.terciary};
        transition: .3s;
    }

    &:disabled{
        border: 1px solid ${({ theme }) => theme.colors.secondary};
        background-color: ${({ theme }) => theme.colors.mainBg}; 
    }
`;

export default Form;
