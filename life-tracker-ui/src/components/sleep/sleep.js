import "./sleep.css";
import NotAllowed from "../notAllowed/notAllowed";

export default function Sleep({ user }) {
  if (!user) {
    return <NotAllowed />;
  }
  return <div className="construction">In Construction...</div>;
}
