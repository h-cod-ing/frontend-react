import styled from 'styled-components';

export default function HeaderButton() {
    return (
        <>
            <LoginButton>회원가입</LoginButton>
            <SigninButton>로그인</SigninButton>
        </>
    );
}

const LoginButton = styled.button`
    height: 30px;
    width: 70px;
    border-radius: 5px;
    font-size: 12px;
    background-color: #F0F0F0;
    color: #000;
    border: 0;
    margin-right: 10px;
`

const SigninButton = styled.button`
    height: 30px;
    width: 70px;
    border-radius: 5px;
    font-size: 12px;
    background-color: #EF306A;
    color: #fff;
    border: 0;
    margin-right: 60px;
`