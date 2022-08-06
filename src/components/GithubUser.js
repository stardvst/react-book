import Fetch from './Fetch';

const UserDetails = data => (
  <div>
    <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
    <div>
      <h1>{data.login}</h1>
      {data.name && <p>{data.name}</p>}
      {data.location && <p>{data.location}</p>}
    </div>
  </div>
);

const GithubUser = ({ login }) => {
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}`}
      renderSuccess={UserDetails}
      loadingFallback={<h1>Loading Github user...</h1>}
    />
  );
};

export default GithubUser;
