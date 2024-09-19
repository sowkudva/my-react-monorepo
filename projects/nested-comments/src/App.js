import CommentsTree from './CommentsTree.js'
import initialData from './data.js'
import { useState } from 'react'

function App() {
  const [commentText, setCommenttext] = useState('')
  const [comments, setComments] = useState(initialData)

  const handleAdd = (commentid, commentText) => {
    if (commentid === -1) {
      setComments((prevstate) => {
        const newState = structuredClone(prevstate)
        newState.unshift({ id: Date.now(), text: commentText, replies: [] })

        return newState
      })
    } else {
      console.log('are u coming here', commentid, commentText)
      //need to check for the comment id to which this is being added.
      setComments((prevState) => {
        const newState = structuredClone(prevState)
        addCommentsToTree(newState, commentid, commentText)
        console.log(newState)
        return newState
      })
    }
  }

  const deleteComments = (commentid) => {
    setComments((prevState) => {
      const newState = structuredClone(prevState)
      deleteCommentsFromTree(comments, commentid)
      return newState
    })
  }

  const addCommentsToTree = (comments, commentid, commenttext) => {
    for (let node of comments) {
      if (node.id === commentid) {
        node.replies.unshift({ id: Date.now(), text: commenttext, replies: [] })
        console.log('added', comments)
        return true
      }

      if (addCommentsToTree(node.replies, commentid, commenttext)) return true
    }
    return false
  }

  const deleteCommentsFromTree = (comments, commentid) => {
    for (let idx in comments) {
      if (comments[idx].id === commentid) {
        comments.splice(idx, 1)
        return true
      }
      if (deleteCommentsFromTree(comments[idx].replies, commentid)) return true
    }
    return false
  }

  return (
    <>
      <h4>Comments</h4>

      <div
        style={{
          display: 'flex',
          gap: '10px',
          marginBottom: '20px',
        }}
      >
        <input
          type='text'
          placeholder='Add comments here'
          onChange={(e) => {
            setCommenttext(e.target.value)
          }}
          value={commentText}
        />
        <button
          onClick={() => {
            handleAdd(-1, commentText)
            setCommenttext('')
          }}
        >
          Add
        </button>
      </div>
      <CommentsTree
        comments={comments}
        addReplies={handleAdd}
        deleteComments={deleteComments}
      />
    </>
  )
}

export default App
