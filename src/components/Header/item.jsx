import styled from 'styled-components';

export default function HeaderListItem({text, href}) {
    return (
        <>
            <ListItem href={href}>{text}</ListItem>
        </>
    );
}

const ListItem = styled.a`
    font-size: 1.1rem;
    color: #917979;
    margin-right: 20px;
    text-decoration-line: none;
    /* font-weight: 500; */
    transition: .2s;
    :hover {
        cursor: pointer;
        color: #EF306A;
        font-weight: 700;
    }
`