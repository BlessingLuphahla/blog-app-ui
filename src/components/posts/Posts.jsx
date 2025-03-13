import Post from '../post/Post'
import './posts.css'

export default function Posts(props) {
  return (
    <div className='posts'>
      {props.posts.length ? (
        props.posts.map((post, index) => (
          <Post key={index} post={post} />
        ))
      ) : (
        <div>
          Posts not found...
        </div>
      )}
    </div>
  )
}
