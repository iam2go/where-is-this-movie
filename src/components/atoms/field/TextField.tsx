import styled from "styled-components";

type Props = {
    children?: React.ReactNode
};
function TextField({ children}:Props ) {
    return ( <StyledTextField >
        {children}
    </StyledTextField>);
}

const StyledTextField = styled.div`
    background-color: #fff;
    border: 1px solid #dcdcdc;
    border-radius: 1rem;
    padding: 0.5rem 1.2rem;
    font-size: 1.2rem;
    line-height: 1.8rem;
    font-family: "LeferiPoint";
`;

export default TextField;