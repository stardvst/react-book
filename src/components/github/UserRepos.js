import React from 'react';
import Fetch from '../Fetch';
import RepoMenu from './RepoMenu';

const UserRepos = ({ login, onSelect }) => (
  <Fetch
    uri={`https://api.github.com/users/${login}/repos`}
    renderSuccess={data => <RepoMenu repos={data} onSelect={onSelect} />}
  />
);

export default UserRepos;
