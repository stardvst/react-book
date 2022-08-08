import React, { useState, useCallback, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const RepoReadme = ({ login, repo }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [markdown, setMarkdown] = useState('');

  const loadReadme = useCallback(async (login, repo) => {
    setLoading(true);
    const uri = `https://api.github.com/repos/${login}/${repo}/readme`;
    const { download_url } = await fetch(uri).then(res => res.json());
    const markdown = await fetch(download_url).then(res => res.text());
    console.log(`readme for ${login}/${repo}`, markdown);
    setMarkdown(markdown);
    setLoading(false);
  }, []);


  useEffect(() => {
    if (!(login && repo)) return;
    loadReadme(login, repo).catch(setError);
  }, [login, repo, loadReadme]);

  if (loading) return <p>Loading...</p>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  return <ReactMarkdown children={markdown} rehypePlugins={[rehypeRaw]} />;
};

export default RepoReadme;
