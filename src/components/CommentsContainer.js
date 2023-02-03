import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { apiCall } from '../redux/comments/actionComments'

const CommentsContainer = () => {

  const apiData = useSelector(state => state.comments)//recuperer le state de Comments depuis le reducer Comments
  const dispatch = useDispatch()

  // console.log(apiData)

  useEffect(() => {
    dispatch(apiCall())//lancer AXIOS

  }, [dispatch]);


  //afficher les Commentaires récupérés
  const displayApiData = apiData.isLoading ? (
    <p>Loading ...</p>
  )
    : apiData.error ? (
      <p>{apiData.error}</p>

    )
      :
      (
        apiData.comments.map(comment => {
          return (
            <div key={comment.id} className="comments">
              <p>{comment.body}</p>

            </div>
          )
        })
      )



  return (
    <div><>
      <h2>Commentaires : </h2>
      <hr />
      {displayApiData}

    </></div>
  )
}

export default CommentsContainer