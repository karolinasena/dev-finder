import { useState, useEffect } from "react";
import { MapPin, Link, Twitter, Briefcase } from "react-feather";
import axios from 'axios';
import { ProfileContainer } from "./style";

export function Profile({ username }) {
  const [userProfileInfo, setUserProfileInfo] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    if (username) {
      const API_URL = `https://api.github.com/users/${username}`;
      axios.get(API_URL).then(response => {
        const data = response.data;

        const date = new Date(data.created_at); 
        const created_at = new Intl.DateTimeFormat('en-US', { day: 'numeric', month: 'long', year: 'numeric'} ).format(date);

        setUserProfileInfo({
          name: data.name,
          login: data.login,
          avatar_url: data.avatar_url,
          bio: data.bio,
          twitter: data.twitter_username,
          company: data.company,
          blog: data.blog,
          location: data.location,
          followers: data.followers,
          following: data.following,
          repos: data.public_repos,
          created_at
        });

      }).catch(err => {
        setError(true);
      });
    }
  }, [username]);


  return (

    <ProfileContainer>
      {username.length ? (

        <div className="container-profile">
          <div className="image-profile">
            <img src={userProfileInfo.avatar_url} alt="" />
          </div>

          <div className="info-profile">
            <div className="personal-info">
              <div className="name">
                <h2 className="fullname">{userProfileInfo.name}</h2>
                <span className="username">@{userProfileInfo.login}</span>
              </div>

              <span className="joined">Joined {userProfileInfo.created_at}</span>
            </div>

            <div className="bio">
              <span>{userProfileInfo.bio}</span>
            </div>

            <div className="container-repositories">
              <div className="repositories">
                <div className="repo">
                  <span>Repos</span>
                  <h4 className="repositories-quantity">{userProfileInfo.public_repos}</h4>
                </div>

                <div className="followers">
                  <span>Followers</span>
                  <h4 className="followers-quantity">{userProfileInfo.followers}</h4>
                </div>

                <div className="followers">
                  <span>Following</span>
                  <h4 className="following-quantity">{userProfileInfo.following}</h4>
                </div>
              </div>
            </div>

            <div className="professional-info">
              <div className="professional-address">
                <div className="professional location">
                  <MapPin color="#0078FF"
                  />
                  <span>{userProfileInfo.location || "Not available"}</span>
                </div>

                <div className="professional company">
                  <Briefcase
                    color="#0078FF"
                    size={24}
                  />
                  <span>{userProfileInfo.company || "Not available"}</span>
                </div>
              </div>


              <div className="social">
                <div className="professional twitter">
                  <Twitter color="#0078FF"
                    size={24}
                  />
                  <span>{userProfileInfo.twitter_username || "Not available"}</span>
                </div>

                <div className="professional website">

                  <Link
                    color="#0078FF"
                    size={24}
                  />
                  <span>{userProfileInfo.blog || "Not available"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <img className="background" src="octocat.png" alt="Octocat" />
      )}
    </ProfileContainer>
  );
}