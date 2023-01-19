import styled from 'styled-components'
import './styles.module.css';
import ArticleCategoryItem from './Item.jsx';
export default function ArticleCategory({v, articleName}) {
    return (
    <>
        <Wrap>
            <ArticleCategoryItem v={v} articleName={articleName}/>
        </Wrap>
     </>
     );
}

const Wrap = styled.div`
    width: 200px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #dddddd;
    padding-top: 60px;
    padding-left: 15px;
    position: fixed;
    z-index: 1;
`