import styled from 'styled-components'
import './styles.module.css';
import ArticleCategoryItem from './Item.jsx';
export default function ArticleCategory({index, v, articleName}) {
    return (
    <>
        <Wrap>
            <ArticleCategoryItem index v={v} articleName={articleName}/>
        </Wrap>
     </>
     );
}

const Wrap = styled.div`
    width: 260px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding-top: 5rem;
    position: fixed;
    z-index: 1;
`