import * as React from "react"

import PostItem from "../PostItem"

const Hit = ({ hit }) => (
  <PostItem
    title={hit.title}
    description={hit.description}
    category={hit.category}
    date={hit.date}
    background={hit.background}
    timeToRead={hit.timeToRead}
    slug={hit.fields.slug}
  />
)

export default Hit
