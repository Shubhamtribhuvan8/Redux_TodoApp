import React from 'react'
import DeleteData from '../A/DeleteData'
import PostRequest from '../A/PostRequest'

export default function Todo() {
  return (
    <div>
      <PostRequest/>
      <DeleteData/>
    </div>
  )
}
