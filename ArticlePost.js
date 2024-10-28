// src/ArticlePost.js
import React from 'react';
import { Form, Input, TextArea, Button, Header } from 'semantic-ui-react';

const ArticlePost = () => {
  return (
    <Form>
      <Header as='h4' dividing>What do you want to share</Header>
      <Form.Field>
        <label>Title</label>
        <Input placeholder='Enter your article title' />
      </Form.Field>
      <Form.Field>
        <label>Content</label>
        <TextArea placeholder='Write your article content...' />
      </Form.Field>
      <Button color='grey'>Post</Button>
    </Form>
  );
};

export default ArticlePost;
