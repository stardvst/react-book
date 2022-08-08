import React from 'react';
import { useEffect } from 'react';
import useIterator from '../../hooks/useIterator';
import RepoReadme from './RepoReadme';

const RepoMenu = ({ repos = [], login, onSelect }) => {
  const [repo, previous, next] = useIterator({ items: repos });
  const name = repo?.name;

  useEffect(() => {
    if (!name) return;
    onSelect(name);
  }, [name, onSelect]);

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <button onClick={previous}>&lt;</button>
        <p>{name}</p>
        <button onClick={next}>&gt;</button>
      </div>
      <RepoReadme login={login} repo={name} />
    </div>
  );
};

export default RepoMenu;
