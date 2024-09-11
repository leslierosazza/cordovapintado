import styled from "styled-components";
import {Row} from 'antd';

const desktopStartWidth = 992;
const tabletStartWidth = 768;
const mobileStartWidth = 767;

const desktop = `@media (min-width: ${desktopStartWidth}px)`;
const tablet = `@media (min-width: ${tabletStartWidth}px)`;
const mobile = `@media (max-width: ${mobileStartWidth}px)`;

export const GMapContainer = styled.div`
    flex: 0 0 auto;
    width: 100%;
    height: 100%;
    max-width: 300px;
    margin: 0 auto;
    margin-bottom: 20px;
`;

export const Img = styled.img`
    ${desktop}{
        display: block;
        width: 100%;
        height: 562px;
    }
    ${mobile}{
        width: 42%;
        height: auto; 
    }
`;

export const Button = styled.button`
    position: absolute;
    background-color: #C59A4C;
    color: white;
    border-color: #707070;
    box-shadow: 0 2px 0 rgba(5, 145, 255, 0.1);
    font-size: 16px;
    font-weight: 700;
    line-height: 0.3;
    height: 40px;
    padding: 25px;
    border-radius: 10px;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
        filter: opacity(0.9);
    }
`;

export const TituloBanner = styled.div`
    position: absolute;
    color: white;
    top: 400px;
    right: 564px;
    font-size: 32px;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    ${mobile}{
        top: 290px;
        right: 140px;
    }
`;

export const RowStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    ${mobile}{
        display: flex;
        flex-direction: column;
    }
`;