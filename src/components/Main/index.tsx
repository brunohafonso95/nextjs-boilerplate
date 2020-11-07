import * as S from './styles';

export interface MainProps {
  description?: string;
  background?: string;
}

const Main = ({
  description = 'Typescript, NextJS e Styled Components',
}: MainProps) => (
  <S.Wrapper>
    <S.Logo
      src="/assets/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado."
    />
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/assets/hero-illustration.svg"
      alt="Desenvolvedor de frente para o código numa mesa."
    />
  </S.Wrapper>
);

export default Main;
