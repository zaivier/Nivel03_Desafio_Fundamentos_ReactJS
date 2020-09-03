import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}
interface NavItemLinkProps {
  actualPage?: string;
  activatedRoute: boolean;
}
export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;

        & + a {
          margin-left: 32px;
        }

        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
`;

export const NavItemLink = styled.div<NavItemLinkProps>`
  display: none;
  ${(props: NavItemLinkProps) =>
    props.actualPage === '/'
      ? css`
          position: absolute;
          width: 73px;
          height: 2px;
          left: 1315px;
          top: 69px;

          background: #ff872c;
        `
      : css`
          position: absolute;
          width: 73px;
          height: 2px;
          left: 1420px;
          top: 69px;

          background: #ff872c;
        `}
  ${props =>
    props.activatedRoute
      ? css`
          display: block;
        `
      : null}
`;
