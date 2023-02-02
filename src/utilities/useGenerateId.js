import { useMemo } from "react";

let counter = 0;

const useGenerateId = () => {
  const key = useMemo(() => ++counter, []);

  return (suffix) => `key${key}_${suffix}`;
};

export default useGenerateId;