import { useEffect } from "react";

const useDocumentTitle = (count) => {
  useEffect(() => {
    document.title = `Count - ${count}`;
  });
};

export default useDocumentTitle;
