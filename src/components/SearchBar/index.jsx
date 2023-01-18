import styled from 'styled-components';

export default function SerchBar() {
    return (
        <>
            <Wrap>
                <Title>누구나 배울 가치는 있습니다</Title>
                <SearchInput placeholder='강의 검색하기'/>
            </Wrap>
        </>
    );
}

const Wrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 60px;
    align-items: center;
`

const Title = styled.span`
    font-size: 23px;
    font-weight: bold;
`

const SearchInput = styled.input`
    width: 90%;
    max-width: 400px;
    border-radius: 100px;
    border: 0;
    background-color: #ffe8ef;
    color: #EF306A;
    padding: 11px 30px 11px 30px;
    border: 1px solid #EF306A;
    margin-top: 13px;
    font-size: 14px;
    outline: none;

    ::placeholder {
        color: #ef306976;
    }
`