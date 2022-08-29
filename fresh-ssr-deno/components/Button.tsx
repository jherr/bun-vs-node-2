/** @jsx h */
import { h } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function Button(props: h.JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
    />
  );
}
