import styled from 'styled-components';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { createTheme, ThemeProvider  } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        white: {
          main: '#ffffff',
          darker: '#ffffff',
        },
    },
  });

export default function NextPageButton({NextArticle}) {
    return (
        <>
        <Wrap>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <Title>다음 강의 바로가기</Title>
                <NextArticleTitle>{NextArticle}</NextArticleTitle>
            </div>
            <ThemeProvider theme={theme}>
                <ChevronRightIcon color='white'/>
            </ThemeProvider>
        </Wrap>
        </>
    );
}

const Wrap = styled.div`
    width: 42%;
    background-color: var(--service-color);
    padding: 12px 10px 12px 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    :hover {
        cursor: pointer;
    }
`

const Title = styled.span`
    font-weight: bold;
    color: #fff;
    font-size: 1.125rem;
`

const NextArticleTitle = styled.span`
    color: #fff;
    font-size: 0.9rem;
    margin-top: 2px;
`