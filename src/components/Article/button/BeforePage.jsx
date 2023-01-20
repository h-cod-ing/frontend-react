import styled from 'styled-components';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { createTheme, ThemeProvider  } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        gray: {
          main: '#868686',
          darker: '#868686',
        },
    },
  });

export default function BeforePageButton({BeforeArticle}) {
    return (
        <>
        <Wrap>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <Title>이전 강의 가기</Title>
                <NextArticleTitle>{BeforeArticle}</NextArticleTitle>
            </div>
            <ThemeProvider theme={theme}>
                <KeyboardArrowLeftIcon color='gray'/>
            </ThemeProvider>
        </Wrap>
        </>
    );
}

const Wrap = styled.div`
    width: 42%;
    background-color: #EDEDED;
    padding: 12px 20px 12px 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    
    :hover {
        cursor: pointer;
    }
`

const Title = styled.span`
    font-weight: bold;
    color: #868686;
    font-size: 1.125rem;
`

const NextArticleTitle = styled.span`
    color: #868686;
    font-size: 0.9rem;
    margin-top: 2px;
    text-align: right;
`