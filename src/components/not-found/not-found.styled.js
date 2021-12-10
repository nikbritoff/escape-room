import { Link } from 'components/common/common';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100vh;
`;

const Main = styled.main`
  background-color: #1A1A1A;
  flex-grow: 1;
`;

const Section = styled.section`
  width: 420px;
  margin-top: 16.7vh;
  margin-right: auto;
  margin-left: auto;
  padding-top: 94px;
  text-align: center;
`;

const Title = styled.h1`
  display: block;
  color: #F0F0F0;
  margin-bottom: 20px;
  font-size: 32px;
  line-height: 1.1875;
`;

const LinkToMain = styled(Link)`
  display: block;
  padding: 16px 20px 13px;
  color: #F0F0F0;
  background-color: #F2890F;
  border-radius: 3px;
  font-size: 14px;
  line-height: 16px;
  -webkit-letter-spacing: 0.03em;
  -moz-letter-spacing: 0.03em;
  -ms-letter-spacing: 0.03em;
  letter-spacing: 0.03em;
  font-weight: 600;
  color: #F0F0F0;
  text-transform: uppercase;
`;

export {
  Container,
  Main,
  Section,
  Title,
  LinkToMain,
}


