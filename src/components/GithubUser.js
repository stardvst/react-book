import { useEffect } from 'react';
import { useState } from 'react';

const saveJSON = (key, data) => localStorage.setItem(key, JSON.stringify(data));
const loadJSON = key => key && JSON.parse(localStorage.getItem(key));

const GithubUser = ({ login }) => {
  const [data, setData] = useState(loadJSON(`user:${login}`));
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    fetch(`https://api.github.com/users/${login}`)
      .then(res => res.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [login, data]);

  if (loading) return <h1>Loading Github user...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (!data) return null;

  return (
    <div>
      <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
    </div>
  );
};

export default GithubUser;
