import { useState } from "react";
import "./App.css";
import TodoList from "./TodoList/TodoList";
import AutoSelect from "./AutoSelect/AutoSelect";
import PlayRedDotGame from "./TestInterview/Interview";
import InfiniteScroll from "./Infinite Scroll/InfiniteScroll";
import VirtualizedList from "./Virtualized List/VirtualizedList";
import HookUsed from "./UseDebounceHook/UseDebounceHook";

function App() {
  return (
    <>
      {/* <h1>Todo List</h1>
      <TodoList/>
      <h1>Auto Complete Select</h1>
      <AutoSelect/> */}
      {/* <h1>Red Dot Game</h1>
       <PlayRedDotGame /> */}
      {/* <h1>Infinite Scroll</h1> */}
      {/* <InfiniteScroll /> */}
      {/* <h1>Virtualized List</h1>
      <VirtualizedList/> */}
      <h1>Debounced Search</h1>
      <HookUsed />
    </>
  );
}

export default App;
