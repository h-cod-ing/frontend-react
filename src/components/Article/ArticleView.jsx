import styled from 'styled-components'
import MarkdownRenderer from './markdown/MarkdownRender';
import './markdown/components.css';
import NextPageButton from './button/NextPage';
import BeforePageButton from './button/BeforePage';
export default function ArticleView({category, title, article}) {
    return (
        <>
        <Wrap>
            <div>
                <Category>{category}</Category>
                <Time>⏱ 3분 소요</Time>
            </div>
            <Title>{title}</Title>
            <MarkdownRenderer markdown={article}></MarkdownRenderer>
            <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '30px'}}>
                <BeforePageButton BeforeArticle={'HTML 요소 구조'}/>
                <NextPageButton NextArticle={'HTML 요소 구조'}/>
            </div>
        </Wrap>
        </>
    );

}

const Wrap = styled.div`
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    padding: 70px 0px 0px 245px;
`

const Category = styled.span`
    background-color: var(--service-color);
    color: #fff;
    padding: 3px 8px 5px 8px;
    width: fit-content;
    font-size: 10px;
    border-radius: 7px;
`

const Time = styled.span`
    background-color: #ededed;
    color: #3b3b3b;
    padding: 3px 8px 5px 8px;
    width: fit-content;
    font-size: 10px;
    border-radius: 7px;
    margin-left: 8px;
`

const Title = styled.span`
    font-size: 28px;
    font-weight: bold;
    margin: 7px 0px 15px 0px;
`