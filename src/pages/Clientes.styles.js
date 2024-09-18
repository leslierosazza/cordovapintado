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
    right: 600px;
    font-size: 32px;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    ${mobile}{
        top: 280px;
        right: 96px;
    }
`;

export const Banner = styled.img`
    position: relative;
    display: block;
    width: 100%;
    height: 562px;
    ${tablet}{
        display: block;
        width: 80%;
        height: auto;
    }
    ${mobile}{
        width: 42%;
        height: auto; 
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

export const ColStyled = styled.div`
    display: block;
    flex: 0 0 25%;
    max-width: 25%;
    ${mobile}{
        padding: 10px;
    }
`;