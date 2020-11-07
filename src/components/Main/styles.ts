import styled from 'styled-components';

export const Wrapper = styled.main`
  align-items: center;
  background: #06092b;
  color: #fff;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 3rem;
  text-align: center;
  width: 100%;
`;

export const Logo = styled.img`
  margin-bottom: 2rem;
  width: 25rem;
`;

export const Description = styled.h1`
  font-size: 2rem;
  font-weight: 400;
`;

export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(35rem, 100%);
`;
