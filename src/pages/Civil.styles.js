import styled from "styled-components";

const desktopStartWidth = 992;
const tabletStartWidth = 768;
const mobileStartWidth = 767;

const desktop = `@media (min-width: ${desktopStartWidth}px)`;
const tablet = `@media (max-width: ${tabletStartWidth}px)`;
const mobile = `@media (max-width: ${mobileStartWidth}px)`;

export const Button = styled.button`
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
    position: relative;
    left: 740px;
    bottom: 65px;
    ${mobile}{
        left: 90px;
        bottom: 0px; 
        padding: 18px;
        line-height: 0.1;
    }
    &:hover {
        filter: opacity(0.9);
    }
`;

export const Rectangulo = styled.div`
    width: 170px;
    height: 50px;
    background: white;
    color: black;
    border-radius: 5px;
    border: 2px solid #707070;
    padding: 0px 37px;
    font-weight: 600;
    line-height: 45px;
    cursor: pointer;
`;

export const Banner = styled.img`
    display: block;
    width: 940px;
    height: 490px;
    ${tablet}{
        display: block;
        width: 57%;
        height: auto;
    }
    ${mobile}{
        width: 34%;
        height: auto; 
    }
`;

export const RowStyled = styled.div`
    padding: 20px 20px 0;
`;

export const Title = styled.h1`
    font-size: 38px;
    font-weight: 600;
    line-height: 1.2105263157894737;
    ${mobile}{
        font-size: 25px;
    }
`;

export const Text = styled.text`
    display: block;
    text-align: justify;
    line-height: 22px;
    margin-bottom: 20px;
    ${mobile}{
        width: 245px;
    }
`;