import styled from 'styled-components'
import './styles.module.css';

export default function ArticleCategory({index, v, articleName}) {
    return (
    <>
            {
                v.map((vx,i) => 
                    <Container key={vx}>
                    {
                        typeof vx !== "string" ? <ArticleCategory index={index + 1} v={vx} articleName={articleName} /> : vx === articleName ? <SelectedWrap index={index} key={i}>{vx}</SelectedWrap> : <NonSelectedWrap key={i}>{vx}</NonSelectedWrap>
                    }
                    </Container>

                )
            }
     </>
     );
}

const SelectedWrap = styled.div`
    background-color: rgb(239, 48, 106, .15);
    border-radius: 8px;
    padding: 9px 0px 9px 15px;
    color: #EF306A;
    font-size: 1rem;
    width: ${(props) => props.index === 2 ? '170px' : '160px'};
    font-weight: bold;
`

const NonSelectedWrap = styled.div`
    padding: 6px 0px 6px 18px;
    color: #989898;
    font-size: 1.125rem;
    width: 150px;

    :hover {
        cursor: pointer;
    }
`

const Container = styled.div`
    margin: 3px 0px 3px 20px;
`