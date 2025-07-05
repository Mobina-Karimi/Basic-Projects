import { useQuery } from '@apollo/client'
import { GET_BLOG_INFO } from '../../graphql/queries'
import { Grid } from '@mui/material'
import CardEL from '../shared/CardEL'
import Loader from '../shared/Loader'

function Blogs() {
  const {loading, data, error} = useQuery(GET_BLOG_INFO)

  if(loading) return <Loader/>
  // if(error) return <h4>Error...</h4>
    if (error) {
  console.error("GraphQL Error:", error);
  return <h4>Error: {error.message}</h4>;
}
  console.log(data)
  return (
    <Grid container spacing={2}>
      {data.posts.map(post => (
        <Grid item xs={12} sm={6} md={4} key={post.id}>
         <CardEL {...post}/>
        </Grid>
      ))}
    </Grid>
  )
}

export default Blogs