import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import PostItem from "../components/PostItem"
import Pagination from "../components/Pagination"

import * as S from "../components/ListWrapper/styled"

const BlogList = props => {
  const postList = props.data.allMarkdownRemark.edges

  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : `/page/${currentPage - 1}`
  const nextPage = `/page/${currentPage + 1}`

  return (
    <Layout>
      <Seo title="Home" />
      <S.ListWrapper>
        {postList.map(
          ({
            node: {
              id,
              frontmatter: { title, description, category, date, background },
              timeToRead,
              fields: { slug },
            },
          }) => (
            <PostItem
              key={id}
              title={title}
              description={description}
              category={category}
              date={date}
              background={background}
              timeToRead={timeToRead}
              slug={slug}
            />
          )
        )}
      </S.ListWrapper>
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Layout>
  )
}

export const query = graphql`
  query allPosts($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            category
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            background
          }
          timeToRead
          fields {
            slug
          }
        }
      }
    }
  }
`

export default BlogList
