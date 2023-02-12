import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
  text-align: center;
  padding: 1.5rem;
  border-radius: 1.25rem;
  box-shadow: 3px 3px 7px var(--card-shadow);
  transition: 0.8s;
  :hover {
    box-shadow: 3px 3px 7px var(--card-shadow-hover);
    transform: scale(1.05);
  }
  img {
    margin: 0.5rem;
  }
  div {
    line-height: 1.5rem;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const Id = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--dragon);
  border-radius: 1.5rem;
  padding: 0.2rem 1.5rem;
  color: white;
  font-size: 0.8rem;
  margin-left: auto;
  line-height: 1.5rem;
  height: 2rem;
`;

export const FavoriteToggle = styled.img`
  max-width: 30px;
`;
