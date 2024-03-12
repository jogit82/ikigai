"use client";
import { useEffect, useState } from "react";  

export default function Github() {
  const [githubData, setGithubData] = useState({
  "login": "jogit82",
  "id": 13838032,
  "node_id": "MDQ6VXNlcjEzODM4MDMy",
  "avatar_url": "https://avatars.githubusercontent.com/u/13838032?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/jogit82",
  "html_url": "https://github.com/jogit82",
  "followers_url": "https://api.github.com/users/jogit82/followers",
  "following_url": "https://api.github.com/users/jogit82/following{/other_user}",
  "gists_url": "https://api.github.com/users/jogit82/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/jogit82/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/jogit82/subscriptions",
  "organizations_url": "https://api.github.com/users/jogit82/orgs",
  "repos_url": "https://api.github.com/users/jogit82/repos",
  "events_url": "https://api.github.com/users/jogit82/events{/privacy}",
  "received_events_url": "https://api.github.com/users/jogit82/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Jo Chong",
  "company": null,
  "blog": "",
  "location": "Seattle",
  "email": null,
  "hireable": true,
  "bio": "Full Stack Software/Web Developer",
  "twitter_username": null,
  "public_repos": 67,
  "public_gists": 3,
  "followers": 6,
  "following": 7,
  "created_at": "2015-08-17T18:02:13Z",
  "updated_at": "2023-11-27T22:57:49Z"
});
  const [githubUser, setGithubUser] = useState('jogit82');
  const [githubReposUrl, setGithubReposUrl] = useState("");
  const [githubRepos, setGithubRepos] = useState([""]);

  const fetchData = () => {
    return fetch(`https://api.github.com/users/${githubUser}`)
      .then((response) => response.json())
      .then((data) => {
        setGithubData(data);
        setGithubReposUrl(data.repos_url)
      });
  }

  const retrieveRepos = () => {
    return fetch(`https://gh-pinned-api.vercel.app/api?user=${githubUser}`)
      .then((response) => response.json())
      .then((repos) => setGithubRepos(repos));
  }

  useEffect(() => {
    fetchData()
  }, []);

  useEffect(() => {
      retrieveRepos();
  }, [githubReposUrl]);

  return (
    <div className="row">
      <div className="row g-1">
        <div className="col-auto"><input type="text" placeholder="Search for User" onChange={(e) => setGithubUser(e.target.value)} className="form-control" /></div>
        <div className="col-auto"><button onClick={fetchData} className="btn btn-primary mb-3">Search Github</button>
        </div>
      </div>
      <div className="row">
        <div>
          <img src={githubData.avatar_url} height="100" width="100" /></div>
        <div>
          <p className="pzero">{githubData.name}{!githubData.location ? "" : <span> (from {githubData.location})</span>}</p>
        </div>
        {!githubData.bio ? "" : <p className="pzero">{githubData.bio}</p>}
      </div>
      <div className="row">
        {githubRepos.map((repo) => (
          <div key="{repo.url}" className="card m-1" style={{ width: "18rem" }}>
            {/* <img src="..." className="card-img-top" alt="..."/> */}
            <div className="card-body">
              <h5 className="card-title">{repo.name}</h5>
              <p className="card-text">{repo.description}</p>
            </div>
            {!repo.tags ? '' :
              <ul className="list-group list-group-flush">
                {repo.tags.map((tag) => 
                  <li key={tag} className="list-group-item">{tag}</li>
                )}
              </ul>
            }
            <div className="card-body">
              <a href="{repo.url}" target="blank" className="card-link">Go to Repo</a>
              <a href="#" className="card-link">{repo.url}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
