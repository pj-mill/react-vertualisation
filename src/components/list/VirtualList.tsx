import { useState } from "react";
import ListItem from "./ListItem";
const listItemHeight = 35;
const windowHeight = 500;
const overscan = 20; // Number of extra items to render before the visible range

const VirtualList = ({ numberOfItems }: { numberOfItems: number }) => {
    const [scrollTop, setScrollTop] = useState(0);
    const startIndex = Math.max(Math.floor(scrollTop / listItemHeight) - overscan);
    const endIndex = Math.min(numberOfItems, Math.floor((scrollTop + windowHeight) / listItemHeight) + overscan);

    const generateRows = () => {
        const items: JSX.Element[] = [];
        for (let i = startIndex; i < endIndex; i++) {
            items.push(<ListItem key={i} index={i} listItemHeight={listItemHeight} />);
        }

        return items;
    };

    return (
        <div
            className="overflow-y-scroll w-full border-2 border-black relative"
            style={{ height: `${windowHeight}px` }}
            onScroll={(e) => {
                setScrollTop(e.currentTarget.scrollTop);
            }}
        >
            <div
                style={{
                    height: `${numberOfItems * listItemHeight}px`,
                }}
            >
                {generateRows()}
            </div>
        </div>
    );
};

export default VirtualList;
