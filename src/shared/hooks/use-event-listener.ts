import { useEffect, useRef } from "react";

export default function useEventListener(
  eventType:any,
  callback:any,
  element = window
) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (element == null) return;
    const handler = (e:any) => callbackRef.current(e);
    element.addEventListener(eventType, handler);

    // eslint-disable-next-line consistent-return
    return () => element.removeEventListener(eventType, handler);
  }, [eventType, element]);
}
