import styled from "styled-components"


export const Table = styled.table`
border-collapse: collapse;
  width: 500px;
  font-family: Arial, sans-serif;
  font-size: 14px;
  margin: 0 auto ;

  th {
  background-color: #f2f2f2;
  text-align: left;
  padding: 10px;
  border: 1px solid #ddd;
}

td {
  padding: 8px;
  border: 1px solid #ddd;
}


tr:nth-child(even) {
  background-color: #f2f2f2;
}


`