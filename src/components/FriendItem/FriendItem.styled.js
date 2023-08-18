import styled from "styled-components"


export const Friend = styled.li`
display: flex;
gap: 20px;
justify-content: center;
width: 250px;
box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2), 0px 6px 6px rgba(0, 0, 0, 0.3);
margin: 0 auto 30px auto;
padding: 10px;

span{
    margin: 16px 0;
}

.online {
  color: green; 
}

.offline {
  color: red; 
}

`