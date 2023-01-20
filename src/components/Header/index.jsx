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
    height: 3.8rem;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ececec;
    position: fixed;
    z-index: 2;
`

const ServiceIcon = styled.img`
    width: 2.8rem;
    height: 2.8rem;
    margin: 0px 30px 0px 20px;
`