import styled from "styled-components"
import media from "styled-media-query"

export const AvatarWrapper = styled.div`
  .gatsby-image-wrapper {
    border-radius: 50%;
    width: 3.75rem;
    height: 3.75rem;
    margin: auto;

    ${media.lessThan("large")`
      width: 1.875rem;
      height: 1.875rem;
    `}
  }
`
