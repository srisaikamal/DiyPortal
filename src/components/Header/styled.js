import styled from 'styled-components';
import media from 'styled-media-query';
import LocalizedLink from '../LocalizedLink';

export const HeaderWrapper = styled.div`
  background-color: var(--bg-light);
  ${media.greaterThan('large')`
    margin-bottom: var(--space);
  `}
  background-image: linear-gradient(to right, #65C7F7 , #0052D4);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: var(--width-container);
  margin: 0 auto;
  justify-content: flex-start;
  align-items: center;
  padding: calc(var(--space) * 1.3) var(--space);
  position: relative;
  ${media.greaterThan('medium')`
    flex-direction: row;
  `}
  ${media.greaterThan('large')`
    padding: calc(var(--space)*1.3) var(--space-sm);
  `}
`;

export const LogoLink = styled(LocalizedLink)`
  display: inline-block;
  margin-right: 0.5rem;
  width: 200px;
`;

export const NavMenu = styled.div`
  width: 100%;
  ${media.greaterThan('medium')`
    margin-left: auto;
    width: auto;
  `}
`;

// export const NavLanguages = styled.div`
//   margin-left: var(--space);
// `;
