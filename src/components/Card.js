import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GithubContext } from '../context/context';
import styled from 'styled-components';
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md';
const Card = () => {
  const { githubUser } = useContext(GithubContext);
  const { 
    avatar_url, 
    html_url, 
    name, 
    company, 
    blog, 
    bio, 
    location, 
    twitter_username 
  } = githubUser;

  return (
    <Wrapper>
      <header>
        <img src={avatar_url} alt={name}/>
        <div>
          <h4>{name}</h4>
          <p>@{twitter_username || name.toLowerCase()}</p>
        </div>
        <a href={html_url}>follow</a>
      </header>
      <p className="bio">{bio}</p>
      <div className="links">
        <p>
          <MdBusiness/> {company || 'uninformed'}
        </p>
        <p>
          <MdLocationOn/> {location || 'uninformed'}
        </p>
      </div>
      <Link to={`https://${blog}`}>
        <MdLink/> {blog || 'uninformed'}
      </Link>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  background: var(--clr-grey-10);
  padding: 1.5rem 2rem;
  border-top-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  position: relative;
  border: 2px solid var(--border-color);

  &::before {
    content: 'user';
    position: absolute;
    top: 0;
    left: -2px;
    transform: translateY(-100%);
    background: var(--clr-grey-10);
    color: var(--border-color);
    border-top-right-radius: var(--radius);
    border-top: 2px solid var(--border-color);
    border-left: 2px solid var(--border-color);
    border-right: 2px solid var(--border-color);
    border-top-left-radius: var(--radius);
    text-transform: capitalize;
    padding: 0.5rem 1rem 0 1rem;
    letter-spacing: var(--spacing);
    font-size: 1rem;
  }
  header {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    column-gap: 1rem;
    margin-bottom: 1rem;
    img {
      width: 75px;
      height: 75px;
      border-radius: 50%;
    }
    h4 {
      margin-bottom: 0.25rem;
      color: var(--clr-white);
    }
    p {
      margin-bottom: 0;
    }
    a {
      color: var(--border-color);
      border: 1px solid var(--border-color);
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        background: var(--border-color);
        color: var(--clr-white);
      }
    }
  }
  .bio {
    color: var(--clr-grey-6);
  }
  .links {
    p,
    a {
      margin-bottom: 0.25rem;
      display: flex;
      align-items: center;
      svg {
        margin-right: 0.5rem;
        font-size: 1.3rem;
      }
    }
    a {
      color: var(--clr-primary-8);
      transition: var(--transition);
      svg {
        color: var(--clr-grey-5);
      }
      &:hover {
        color: var(--clr-primary-8);
      }
    }
  }
`;
export default Card;
