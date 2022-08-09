import { useState } from 'react';
import GithubUser from './GithubUser';
import SearchForm from './SearchForm';
import UserRepos from './UserRepos';
import RepoReadme from './RepoReadme';

const Github = () => {
  const [login, setLogin] = useState('stardvst');
  const [repo, setRepo] = useState('');

  return (
    <div>
      <SearchForm value={login} onSearch={setLogin} />
      {login && <GithubUser login={login} />}
      {login && <UserRepos login={login} onSelect={setRepo} />}
      {login && repo && <RepoReadme login={login} repo={repo} />}
    </div>
  );
};

export default Github;
