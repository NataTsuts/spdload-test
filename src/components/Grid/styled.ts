import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 1fr);
  gap: 12px;
  justify-items: center;
  align-items: center;

  @media (min-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
`;

export default Grid;
 