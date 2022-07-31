import { useEffect } from 'react';
import { useState } from 'react';

const saveJSON = (key, data) => localStorage.setItem(key, JSON.stringify(data));
const loadJSON = key => key && JSON.parse(localStorage.getItem(key));

const GithubUser = ({ login }) => {
  const [data, setData] = useState(loadJSON(`user:${login}`));

  useEffect(() => {
    if (!data) return;
    if (data.login === login && loadJSON(`user:${login}`)) return;
    const { name, avatar_url, location } = data;
    saveJSON(`user:${login}`, {
      name,
      login,
      avatar_url,
      location,
    });
  }, [data, login]);

  useEffect(() => {
    if (!login) return;
    if (data && data.login === login) return;
    fetch(`https://api.github.com/users/${login}`)
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, [login, data]);

  if (data) return <pre>{JSON.stringify(data, null, 2)}</pre>;

  return null;
};

export default GithubUser;
