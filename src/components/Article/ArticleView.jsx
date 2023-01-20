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
    max-width: 560px;
    display: flex;
    flex-direction: column;
    padding: 85px 0px 0px 280px;
`

const Category = styled.span`
    background-color: var(--service-color);
    color: #fff;
    padding: 4px 15px 4px 15px;
    width: fit-content;
    font-size: 1rem;
    border-radius: 100px;
    font-weight: bold;
`

const Time = styled.span`
    background-color: #ededed;
    color: #3b3b3b;
    width: fit-content;
    padding: 4px 15px 4px 15px;
    font-size: 1rem;
    border-radius: 100px;
    margin-left: 8px;
`

const Title = styled.span`
    font-size: 2.5rem;
    font-weight: bold;
    margin: 14px 0px 15px 0px;
`