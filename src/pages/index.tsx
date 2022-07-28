import * as React from "react"
import { graphql, PageProps } from "gatsby"

const PageRoute = ({ data }: PageProps<Queries.PageTemplateQuery>) => {
  console.log(data)
  React.useEffect(() => {
    if (data.webhookBodyMarkdown?.childMarkdownRemark?.frontmatter?.hotReload) {
      window.location.reload()
    }
  })
  return (
    <div>
      <h1>
        {data.webhookBodyMarkdown?.childMarkdownRemark?.frontmatter?.title}
      </h1>
      <div
        dangerouslySetInnerHTML={{
          __html: data.webhookBodyMarkdown?.childMarkdownRemark?.html,
        }}
      />
    </div>
  )
}

export default PageRoute

export const query = graphql`
  query PageTemplate {
    webhookBodyMarkdown(id: { eq: "webhook-markdown" }) {
      childMarkdownRemark {
        html
        frontmatter {
          title
          hotReload
        }
      }
    }
  }
`
