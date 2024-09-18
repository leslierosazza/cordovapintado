import styled from "styled-components";

const desktopStartWidth = 992;
const tabletStartWidth = 768;
const mobileStartWidth = 767;

const desktop = `@media (min-width: ${desktopStartWidth}px)`;
const tablet = `@media (max-width: ${tabletStartWidth}px)`;
const mobile = `@media (max-width: ${mobileStartWidth}px)`;

export const TituloBanner = styled.div`
    position: absolute;
    color: white;
    top: 400px;
    right: 483px;
    font-size: 32px;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    ${mobile}{
        top: 335px;
        right: 45px;
        width: 248px;
    }
    ${tablet}{
        top: 450px;
        right: 200px;
    }
`;

export const Btn = styled.button`
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

export const Banner = styled.img`
    position: relative;
    display: block;
    width: 100%;
    height: 562px;
    ${tablet}{
        display: block;
        width: 62%;
        height: auto;
    }
    ${mobile}{
        width: 42%;
        height: auto; 
    }
`;

export const RowStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    margin-top: 25px;
    ${mobile}{
        display: flex;
        align-content: flex-start;
    }
`;

export const Title = styled.div`
    font-weight: 600;
    font-size: 38px;
    line-height: 1.2105263157894737;
    ${mobile}{
        font-size: 35px;
    }
`;

export const Text = styled.text`
    display: block;
    text-align: justify;
    line-height: 24px;
    margin-top: 30px;
    margin-bottom: 30px;
    ${mobile}{
        width: 324px; 
    }
    ${tablet}{
        width: 700px;
    }
`;