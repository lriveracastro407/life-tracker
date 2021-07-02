//import Post from "../Post/Post";
//import NewPostForm from "../NewPostForm/NewPostForm";
import "./Home.css";

export default function Home({ user, isFetching, error }) {
  return (
    <div className="Home">
      <img
        src="http://codepath-lifetracker.surge.sh/static/media/smartwatch-screen-digital-device.e2983a85.svg"
        width="750px"
        alt="smart watch"
      />
      <p id="p1">Welcome to LifeTracker</p>
      <p id="p2">Take Control of Your Life</p>

      <div className="tiles">
        <div>
          <img
            src="http://codepath-lifetracker.surge.sh/static/media/icons-workout-48.4f4cdb05.svg"
            alt="fitness"
          />
          <p>Fitness</p>
        </div>
        <div>
          <img
            src="http://codepath-lifetracker.surge.sh/static/media/icons8-porridge-100.132d2715.svg"
            alt="food"
          />
          <p>Food</p>
        </div>
        <div>
          <img
            src="http://codepath-lifetracker.surge.sh/static/media/icons8-resting-100.81067336.svg"
            alt="sleep"
          />
          <p>Rest</p>
        </div>
        <div>
          <img
            src="http://codepath-lifetracker.surge.sh/static/media/icons8-planner-100.997ca54c.svg"
            alt="planner"
          />
          <p>Plan</p>
        </div>
      </div>

      {/* <NewPostForm user={user} addPost={addPost} /> */}

      {/* <div className="feed">
        {error ? <h2 className="error">{error}</h2> : null}
        {isFetching ? <h2>Loading...</h2> : null}
        {posts?.map((post) => (
          <Post post={post} key={post.id} user={user} />
        ))}
      </div> */}
    </div>
  );
}
