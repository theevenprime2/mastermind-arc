import React from 'react'

import { PageTemplate, Header, Footer } from 'components'
import { PostForm, PostList } from 'containers'

const InstructionsPage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <PostForm />
      <PostList limit={15} />
    </PageTemplate>
  )
}

export default InstructionsPage
