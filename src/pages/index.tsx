import * as React from "react"
import { graphql, PageProps } from "gatsby"
import { rhythm } from "../typography"

const PageRoute = ({ data }: PageProps<Queries.PageTemplateQuery>) => {
  console.log(data)
  React.useEffect(() => {
    if (data.webhookBodyMarkdown?.childMarkdownRemark?.frontmatter?.hotReload) {
      window.location.reload()
    }
  })
  return (
    <div style={{ marginLeft: rhythm(2.5), marginRight: rhythm(2.5) }}>
      <h1>{data.contentfulBlogPost?.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: data.contentfulBlogPost?.body?.childMarkdownRemark?.html,
        }}
      />
    </div>
  )
}

export default PageRoute

export const query = graphql`
  query PageTemplate {
    contentfulBlogPost(slug: { eq: "fast-publishing" }) {
      title
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
