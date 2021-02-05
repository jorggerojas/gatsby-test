
import { useStaticQuery, graphql } from "gatsby"

const Data = () => {
  const data = useStaticQuery(graphql`
    {
      allGhostPost {
        edges {
          node {
            title
            authors {
              name
              profile_image
            }
            feature_image
            excerpt
          }
        }
      }
    }
  `)
  return data.allGhostPost.edges;
}

export default Data