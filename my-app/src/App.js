import React, {useState} from 'react';
/*import Counter from './components/Counter';*/
import './style/App.css';
import PostList from './components/PostList';

function App() {

  const [posts, setPosts] = useState ([
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'Javascript 2', body: 'Description'},
    {id: 3, title: 'Javascript 3', body: 'Description'}

  ])

 
  
  return (
    <div className="App">
      <form>
        <input type="text" placeholder='Название поста' />
        <input type="text" placeholder='Описание поста' />
      </form>

      <PostList posts={posts} title="Список постов 1"/>
      

     
    </div>
  );
}

export default App;
