import styled from 'styled-components'
import './styles.module.css';

export default function ArticleCategory({v, articleName}) {
    console.log(articleName)
    return (
    <>
            {
                v.map((vx,i) => 
                    <Container key={vx}>
                    {
                        typeof vx !== "string" ? <ArticleCategory v={vx} /> : vx === articleName ? <SelectedWrap key={i}>{vx}</SelectedWrap> : <NonSelectedWrap key={i}>{vx}</NonSelectedWrap>
                    }
                    </Container>

                )
            }
     </>
     );
}

const SelectedWrap = styled.div`
    background-color: rgb(239, 48, 106, .2);
    border-radius: 5px;
    padding: 5px 0px 5px 15px;
    color: #EF306A;
    border: 1.5px solid #EF306A;
    font-size: 13px;
    width: 150px;
`

const NonSelectedWrap = styled.div`
    padding: 5px 0px 5px 15px;
    color: #989898;
    font-size: 13px;
    width: 130px;

    :hover {
        cursor: pointer;
    }
`

const Container = styled.div`
    margin: 3px 0px 3px 10px;
`