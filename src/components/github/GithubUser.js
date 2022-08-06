import Fetch from '../Fetch';
import UserRepos from './UserRepos';

const UserDetails = data => (
  <div>
    <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
    <div>
      <h1>{data.login}</h1>
      {data.name && <p>{data.name}</p>}
      {data.location && <p>{data.location}</p>}
    </div>
    <UserRepos login={data.login} onSelect={repoName => console.log(`${repoName} is selected.`)} />
  </div>
);

const GithubUser = ({ login }) => (
  <Fetch
    uri={`https://api.github.com/users/${login}`}
    renderSuccess={UserDetails}
    loadingFallback={<h1>Loading Github user...</h1>}
  />
);

export default GithubUser;
