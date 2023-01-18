import styled from 'styled-components'
import './styles.module.css';
import ArticleCategoryItem from './Item.jsx';
export default function ArticleCategory({v}) {
    console.log(v)
    return (
    <>
        <Wrap>
            <ArticleCategoryItem v={v} articleName={'HTML 기초'}/>
        </Wrap>
     </>
     );
}

const Wrap = styled.div`
    width: 190px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #dddddd;
    padding-top: 60px;
    padding-left: 15px;
`