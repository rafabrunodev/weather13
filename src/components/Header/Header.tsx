import styled from "styled-components";
import { colors, device } from "../../utils";

const HeaderEl = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  color: ${colors.main};
  flex-direction: column;

  @media ${device.laptop} {
    flex-direction: row;
    padding-top: 0;
  }
`;

const Title = styled.h2`
  font-size: 30px;
  margin: 10px;

  @media ${device.laptop} {
    padding: 30px;
    margin-left: -40px;
  }
`;

const Link = styled.a`
  color: ${colors.main};

  &:hover{
    color: ${colors.main};
    opacity: .8;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderEl>
      <Link href="https://www.linkedin.com/in/rafaelbrunoweb/">
        by Rafael Bruno
      </Link>
      <Title>Weather13</Title>
      <Link href="">GitHub</Link>
    </HeaderEl>
  );
};

export default Header;
