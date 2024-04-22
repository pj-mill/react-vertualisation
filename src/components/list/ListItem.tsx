const ListItem = ({ index, listItemHeight }: { index: number; listItemHeight: number }) => {
    return (
        <div
            style={{ height: `${listItemHeight}px`, top: `${listItemHeight * index}px`, backgroundColor: index % 2 === 0 ? "#f0f0f0" : "#ffffff" }}
            className="text-center w-full absolute"
        >
            List Item - {index}
        </div>
    );
};

export default ListItem;
