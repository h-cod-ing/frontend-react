import styled from 'styled-components'
import Header from '../components/Header/index';
import ArticleView from '../components/Article/ArticleView';
import ArticleCategory from '../components/ArticleCategory';
import { request } from '../lib/customAxios';
import { useEffect, useState } from 'react';

export default function Article() {
    const [article, setArticle] = useState(["로딩중..."])
    useEffect(() => {
        request({ method: 'get', url: '/'}).then(function (response) {
            setArticle(response.data.data)
        });
    }, [])

    return (
        <>
            <Header/>
            <Wrap>
                <ArticleCategory v={["HTML 기초", ["HTML 기본 구조", "HTML 요소 구조"], "HTML 텍스트 요소", "단락 (Paragraph)", "서식", "인용구", "주석", "엔티티", "마치며"]}/>
                <ArticleView category={'Typescript'} title={'Oein과 함께하는 Typescript 강좌'} article={article}/>
            </Wrap>
        </>
    );
}

const Wrap = styled.div`
    width: 100%;
    display: flex;
`