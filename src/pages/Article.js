import styled from 'styled-components'
import Header from '../components/Header/index';
import ArticleView from '../components/Article/ArticleView';
import ArticleCategory from '../components/ArticleCategory';
import { request } from '../lib/customAxios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Article() {
    const UrlParams = useParams();
    const [apiData, setApiData] = useState({article: '로딩 중...', category: ["로딩 중..."]})
    useEffect(() => {
        request({ method: 'get', url: `/article/${UrlParams.category}/${UrlParams.index}`}).then(function (response) {
            setApiData(response.data)
        });
    }, [])

    return (
        <>
            <Header/>
            <Wrap>
                <ArticleCategory v={apiData.category} articleName={'Typescript 강좌'}/>
                <ArticleView category={'Typescript'} title={'Oein과 함께하는 Typescript 강좌'} article={apiData.article}/>
            </Wrap>
        </>
    );
}

const Wrap = styled.div`
    width: 100%;
    display: flex;
`