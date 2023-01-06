import { Header } from "./components/Header";
import More from "./assets/more.svg";
import { List } from "./components/List";
import { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch } from "./redux/hooks";
import { addToList } from "./redux/todoSlice";
import { Item } from "./Item";
import { v4 as uuidv4 } from "uuid";
export function App() {
  const [content, setContent] = useState("");
  const dispatch = useAppDispatch();
  const newItem = new Item({ id: uuidv4(), content, isDone: false });
  function handleAddItemOnList(e: FormEvent) {
    e.preventDefault();
    dispatch(addToList(newItem));
  }
  function handleChangeContent(e: ChangeEvent<HTMLInputElement>) {
    setContent(e.target.value);
  }
  return (
    <div>
      <Header />
      <main className="max-w-736  m-auto">
        <form
          onSubmit={handleAddItemOnList}
          className=" w-full flex justify-center items-center gap-2 -mt-8"
        >
          <input
            onChange={handleChangeContent}
            className="flex-1 bg-gray-500-figma p-4 rounded-lg border box-border border-gray-700-figma focus:outline-none focus:border-purple-dark-figma text-gray-100-figma"
            type="text"
            placeholder="Adicione uma nova tarefa"
          />
          <button
            className="bg-blue-dark-figma justify-center items-center gap-2 rounded-lg text-sm text-white flex p-4 font-bold hover:bg-blue-figma transition-colors"
            type="submit"
          >
            Criar <img src={More} alt="adicionar" />
          </button>
        </form>
        <List />
      </main>
    </div>
  );
}
