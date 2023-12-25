import timelineElements from "./assets/timelineElements";
import TimelineItem from "./TimelineItem";

export default function Timeline({ defaultColor }) {
  return (
    <div>
      {timelineElements.map((element) => {
        const colors = [
          "bg-red-500",
          "bg-blue-500",
          "bg-yellow-500",
          "bg-purple-500",
          "bg-orange-500",
        ];

        const color = defaultColor || `bg-${element.color}-500`;

        return (
          <TimelineItem key={element.id} element = {element} color = {color} />
        );
      })}
    </div>
  );
}