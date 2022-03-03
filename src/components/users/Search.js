import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';
const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const { searchUsers, clearUsers, users } = githubContext;
  const [text, setText] = useState('');
  const onChange = e => setText(e.target.value);
  const onSubmit = e => {
    if (text === '') {
      alertContext.setAlert('Please Enter Something', 'light');
    } else {
      searchUsers(text);
      setText('');
    }

    e.preventDefault();
  };

  return (
    <div>
      <form className='form' onSubmit={onSubmit}>
        <input
          name='text'
          type='text'
          placeholder='Search Here'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {users.length > 0 && (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
