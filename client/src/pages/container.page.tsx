import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { getContainers } from "../store/reducers/container.reducer";

function ContainerPage() {
  const dispatch = useAppDispatch();
  const containers = useAppSelector((state) => state.containers.containers);

  useEffect(
    function loadContainerData() {
      dispatch(getContainers("active"));
    },
    [dispatch]
  );

  return (
    <div>
      <h1>Container Page</h1>
      {/* Add your container page content here */}
      <pre>{JSON.stringify(containers, null, 1)}</pre>
    </div>
  );
}
export default ContainerPage;
