import VirtualList from "./components/list/VirtualList";

export const numberOfItems = 100000;

function App() {
    return (
        <div className="overscroll-none">
            <div className="flex flex-col items-center mt-20 h-[100vh]">
                <div className="flex flex-col items-center justify-top h-[100vh]">
                    <h1 className={"text-lg font-bold"}>Rendering {numberOfItems}</h1>
                    <VirtualList numberOfItems={numberOfItems} />
                </div>
            </div>
        </div>
    );
}

export default App;
