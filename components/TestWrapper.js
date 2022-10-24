import { useAppState } from "../contexts/state";
import Test from "./Test";

export default function TestWrapper() {
  const { selectedGamer, setSelectedGamer } = useAppState();

  return (
    <>
      <p>TestWrapper: {selectedGamer}</p>
      <Test />
    </>
  );
}
