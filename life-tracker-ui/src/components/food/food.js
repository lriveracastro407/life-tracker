import "./food.css";
import NotAllowed from "../notAllowed/notAllowed";

export default function Nutrition({ user }) {
  if (!user) {
    return <NotAllowed />;
  }
  return <div className="construction">In Construction...</div>;
}
