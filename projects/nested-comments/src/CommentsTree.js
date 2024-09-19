import { useState } from 'react'

function CommentsTree({ comments, addReplies, deleteComments }) {
  const [showInput, setShowInput] = useState(-1)
  const [inputReply, setInputReply] = useState('')

  const cancelReply = () => {
    setShowInput(-1)
    setInputReply('')
  }

  const handleReply = (commentid) => {
    if (inputReply) {
      addReplies(commentid, inputReply)
      setShowInput(-1)
    }
    setInputReply('')
  }

  return comments.map((comment) => (
    <div key={comment.id}>
      <div className='comment'>
        <img src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'></img>
        <div>
          <p>{comment.text}</p>
          {showInput === comment.id && (
            <input
              type='text'
              placeholder='Add reply'
              onChange={(e) => {
                setInputReply(e.target.value)
              }}
              value={inputReply}
            />
          )}
          {showInput === comment.id ? (
            <>
              <button
                onClick={() => {
                  handleReply(comment.id)
                }}
              >
                Add
              </button>
              <button onClick={cancelReply}>Cancel</button>
            </>
          ) : (
            <>
              <button onClick={() => setShowInput(comment.id)}>Reply</button>
              <button onClick={() => deleteComments(comment.id)}>Delete</button>
            </>
          )}
        </div>
      </div>
      <div className='replies'>
        <CommentsTree
          comments={comment.replies}
          addReplies={addReplies}
          deleteComments={deleteComments}
        />
      </div>
    </div>
  ))
}

export default CommentsTree
