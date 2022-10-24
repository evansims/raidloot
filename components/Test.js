import { useAppState } from "../contexts/state";

export default function Test() {
  const { selectedGamer, setSelectedGamer } = useAppState();

  return (
    <>
      <p>Test: {selectedGamer}</p>
      <p>
        Change gamer:
        <a href="#" onClick={() => setSelectedGamer(Math.random())}>
          Go!
        </a>
      </p>
    </>
  );
}
