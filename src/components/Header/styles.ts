import styled from 'styled-components';


export const Container = styled.div`
  height: 4rem;
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Content = styled.div`
  ul {
    display: flex;
    li {
      transition: color 0.2s;
      &:hover {
        color: var(--blue-100);
      }
      & + li {
        margin-left: 1rem;
      }
    }
  }
`;