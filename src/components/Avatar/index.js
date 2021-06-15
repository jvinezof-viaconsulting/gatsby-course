import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import * as S from "./styled"

const Avatar = () => (
  <S.AvatarWrapper>
    <StaticImage
      src="../../images/profile-photo.png"
      alt="João Vinezof Avatar"
      placeholder="tracedSVG"
    />
  </S.AvatarWrapper>
)

export default Avatar
