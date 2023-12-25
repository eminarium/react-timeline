import timelineElements from "./assets/timelineElements";
import TimelineItem from "./TimelineItem";

export default function Timeline({ defaultColor }) {
  return (
    <div>
      {timelineElements.map((element) => {
        const color = defaultColor || `bg-${element.color}-500`;

        return (
          <TimelineItem key={element.id} element = {element} color = {color} />
        );
      })}
    </div>
  );
}