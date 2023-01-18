import styled from 'styled-components';
import Favicon from '../../asset/favicon.png';
import HeaderListItem from './item';
import HeaderButton from './button'

export default function Home() {
    return (
        <>
            <Wrap>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <ServiceIcon src={Favicon} />
                    <div>
                        <HeaderListItem text={'강의'} href={'#'}/>
                        <HeaderListItem text={'퀴즈'} href={'#'}/>
                        <HeaderListItem text={'수강평'} href={'#'}/>
                        <HeaderListItem text={'FAQ'} href={'#'}/>
                    </div>
                </div>
                <div>
                    {/* <HeaderButton/> */}
                </div>
            </Wrap>
        </>
    );
}

const Wrap = styled.div`
    width: 100%;
    height: 48px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #dddddd;
    position: fixed;
`

const ServiceIcon = styled.img`
    width: 35px;
    height: 35px;
    margin: 0px 30px 0px 20px;
`