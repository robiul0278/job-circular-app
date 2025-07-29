"use client";

import { useEffect, useRef } from "react";
import { useUpdateViewsMutation } from "@/redux/api/api";

const Views = ({ id,}: { id: string}) => {
  const [updateViews] = useUpdateViewsMutation();
  const hasUpdated = useRef(false); // guard flag

  useEffect(() => {
    if (id && !hasUpdated.current) {
      hasUpdated.current = true; // mark as triggered
      updateViews(id)
    }
  }, [id, updateViews]);

  return null;
};

export default Views;
