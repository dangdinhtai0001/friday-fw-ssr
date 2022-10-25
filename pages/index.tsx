import type { NextPage } from "next";
import { Button } from "components";

const Home: NextPage = () => {
  return (
    <>
      <div className="text-3xl text-green-600 p-2">Hello world!</div>
      <Button color="green-600">
        <div>button</div>
      </Button>
      <button className="bg-green-600">
        <div>button</div>
      </button>
    </>
  );
};

export default Home;
