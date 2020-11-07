import * as S from './styles';

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/assets/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado."
    />
    <S.Description>Typescript, NextJS e Styled Components</S.Description>
    <S.Illustration
      src="/assets/hero-illustration.svg"
      alt="Desenvolvedor de frente para o código numa mesa."
    />
  </S.Wrapper>
);

export default Main;
