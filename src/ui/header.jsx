import Image from 'next/image';
import styled from 'styled-components';

const HeadContainer = styled.header`
  position: relative;
  height: 64px;
  align-items: center;
  padding: 0px 8px;
  margin-bottom: 48px;
  display: flex;
  border: 0 solid #e5e7eb;
  color: rgb(244 244 245);
  grid-column-start: 2;
  grid-column-end: 4;
`;

const Title = styled.span`
  margin: 0 8px;
`;

const MrabLogo = (props) => (
  <Image src="/flame.png" alt="logo" height={40} fill={`rgb(244 244 245)`} />
);

export default function Header() {
  return (
    <HeadContainer>
      <MrabLogo />
      <Title>Building Businesses</Title>
    </HeadContainer>
  );
}
