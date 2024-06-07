import Button from "./Button";
import { list } from "../../utils/buttonNameList";
import { useRef } from "react";

const ButtonList = () => {
  const listRef = useRef(null);

  const scrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="flex items-center">
      <button
        className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
        onClick={scrollLeft}
      >
        &#9664; {/* Left arrow symbol */}
      </button>
      <div
        className="flex overflow-x-auto scroll-smooth scrollbar-hide mx-2"
        ref={listRef}
      >
        {list.map((item) => (
          <div className="flex-none" key={item}>
            <Button name={item} />
          </div>
        ))}
      </div>
      <button
        className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
        onClick={scrollRight}
      >
        &#9654; {/* Right arrow symbol */}
      </button>
    </div>
  );
};

export default ButtonList;
