import Header from '../components/Header/index';
import MainBanner from '../components/MainBanner';
import SerchBar from '../components/SearchBar';
import MainArticleList from '../components/MainArticleList';
export default function Home() {
    return (
        <>
            <Header/>
            <MainBanner text={'직접 해보며 배우는 웹개발'} description={'입문부터 실전까지 믿고 듣는 강의'}/>
            <MainArticleList/>
            {/* <SerchBar/> */}
        </>
    );
}