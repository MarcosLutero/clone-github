import React from 'react';
import { Container, GithubLogo, SearchForm } from './styles';

export default function index() {
  return (
    <Container>
      <GithubLogo />
      <SearchForm>
        <input 
        placeholder="Entre username or repo" />
      </SearchForm>
    </Container>
  )
}
