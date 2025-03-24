import { useCallback } from "react";

export function useFormatDate() {
  const formatDate = useCallback((dateString) => {
    return new Date(dateString).toLocaleDateString("tr-TR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }, []);

  return { formatDate };
}
