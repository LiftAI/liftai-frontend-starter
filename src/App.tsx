import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useForm } from "react-hook-form";
import { sum } from "./sum";

function App() {
  const { register, watch, handleSubmit } = useForm<{
    a: number;
    b: number;
  }>({
    defaultValues: {
      a: 0,
      b: 0,
    },
  });

  const a = watch("a");
  const b = watch("b");

  return (
    <>
      <div className="flex justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold">LiftAI Starter Template</h1>
      <p>
        Edit the values to see the sum updated. Submit to see how handleSubmit
        works
      </p>
      <form
        onSubmit={handleSubmit((data) => {
          alert("form submitted with data: \n" + JSON.stringify(data, null, 2));
        })}
      >
        <div className="card">
          <div className="inputs">
            <input
              type="number"
              className="border-2 p-2 rounded"
              {...register("a", {
                valueAsNumber: true,
              })}
            />
            <input
              type="number"
              className="border-2 p-2 rounded"
              {...register("b", {
                valueAsNumber: true,
              })}
            />
          </div>
          <div>sum is is {sum(a, b)}</div>
          <button type="submit">Submit</button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
      </form>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
