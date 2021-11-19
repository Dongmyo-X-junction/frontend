import TimelineItem  from "./TimelineItem";
import posts from "../data/posts";

import "./Timeline.scss";

export default function Timeline() {
    return (
        <div className="timeline">
            {posts.map(post => <TimelineItem {...post} />)}
        </div>
    )
}