import styled from 'styled-components';

export default function MainBanner({text, description}) {
    return (
        <>
        <Wrap>
            <TopPopularity>최고 인기 🔥</TopPopularity>
            <Title>{text}</Title>
            <Description>{description}</Description>
            <DescripitionImage src={'#'}></DescripitionImage>
        </Wrap>
        </>
    );
}

const Wrap = styled.div`
    width: 100%;
    height: 250px;
    background-color: #3E3CF7;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const TopPopularity = styled.span`
    font-size: 13px;
    color: #3E3CF7;
    background-color: #fff;
    padding: 4px 15px 4px 15px;
    margin-bottom: 5px;
    border-radius: 20px;
    font-weight: 500;
`

const Title = styled.span`
    font-size: 30px;
    color: #fff;
    font-weight: bold;
`

const Description = styled.span`
    font-size: 18px;
    color: #fff;
    font-weight: 500;
`

const DescripitionImage = styled.img`
    // TODO: 나중에 수정하기
`