
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
            }
            feature_image
            plaintext
          }
        }
      }
    }
  `)
  return data.allGhostPost.edges;
}

export default Data