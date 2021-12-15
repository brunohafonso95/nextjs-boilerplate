import { MainProps } from './interfaces';
import * as S from './styles';

const Main = ({ title = 'NextJS Boilerplate' }: MainProps) => {
  return (
    <S.Wrapper>
      <h1>{title}</h1>
    </S.Wrapper>
  );
};
export default Main;
