const { default: styled } = require("styled-components");

export const HeaderAvatar = styled.div`
display: flex;
align-items: center;


button{
    height: 32px;
    width: 32px;
    margin-left: 8px;
    border-radius: 8px;
    padding: 0;
    border: none;
}
.burger-icon{
    
    width: 32px;
    height: 32px;
}
svg{
    stroke:red;
}
`