import type { GatsbyNode } from "gatsby"
import path from "path"

type webhookBodyType = {
  type: string
  markdown: string
  fileName: string
}

export const sourceNodes: GatsbyNode[`sourceNodes`] = async ({
  actions,
  webhookBody,
  createContentDigest,
}) => {
  const body = webhookBody as webhookBodyType
  const contentDigest = createContentDigest(body)
  const { createNode } = actions

  console.log({ body })
  if (webhookBody) {
    if (body.type === `markdown`) {
      createNode({
        id: `webhook-markdown`,
        ...body,
        internal: {
          type: `WebhookBodyMarkdown`,
          mediaType: `text/markdown`,
          content: body.markdown,
          contentDigest,
        },
      })
    }
  }

  // Hacky way to set type.
  // Always create one node
  createNode({
    id: `webhook-markdown-fixed`,
    type: `markdown`,
    markdown: `yo`,
    hotReload: false,
    internal: {
      type: `WebhookBodyMarkdown`,
      mediaType: `text/markdown`,
      content: `---
hotReload: false
title: "super"
---
`,
      contentDigest: `fixed`,
    },
  })
}
