import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './postURL';

// import UserCart from '../../components/UserCart';

const PostsView = () => {
  const { isLoading, posts, error } = useSelector((state) => state.posts);
  console.log(posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <section>
      {posts &&
        posts.map((p) => {
          const { id, name } = p;
          return (
            <div key={id} className='user_cart'>
              {/* <UserCart name={name} /> */}
              <h4>{name}</h4>
            </div>
          );
        })}

      {isLoading && <h5>Loading...</h5>}
      {error && <h4>{error}</h4>}
    </section>
  );
};

export default PostsView;
