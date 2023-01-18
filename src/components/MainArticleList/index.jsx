import styled from 'styled-components';

export default function MainArticleList() {
    return (
        <>
            <Wrap>
                <div>
                    <Title>강의 목록 </Title>
                    <ArticleCount>13</ArticleCount>
                </div>
            </Wrap>
        </>
    );
}

const Wrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 40px;
`

const Title = styled.span`
    font-size: 30px;
    font-weight: bold;
`

const ArticleCount = styled.span`
    font-size: 13px;
    color: #bbbbbb;
    font-weight: bold;
`