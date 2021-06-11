import styled from "styled-components"
import media from "styled-media-query"

export const SidebarWrapper = styled.aside`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20rem;
  height: 100vh;
  padding: 2rem;
  text-align: center;
  border-right: 1px solid var(--borders);
  background: var(--mediumBackground);

  ${media.lessThan("large")`
    height: auto;
    width: 100%;
    align-items: flex-start;
    padding: 1rem 2rem;
  `}
`
