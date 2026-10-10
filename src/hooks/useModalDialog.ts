"use client";
import { RefObject, useEffect } from "react";

// [ADDED] Native dialogs contain focus and make background content inert.
export function useModalDialog(
  ref: RefObject<HTMLDialogElement>,
  open: boolean,
) {
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog || !open) return;
    const trigger =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    // [FIXED] Keep Tab cycling inside the dialog instead of reaching browser chrome.
    const containTab = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;
      const focusable = Array.from(
        dialog.querySelectorAll<HTMLElement>(
          "a[href], button, input, select, textarea, [tabindex]",
        ),
      ).filter(
        (element) =>
          element.tabIndex >= 0 &&
          !element.matches(':disabled, [hidden], [aria-hidden="true"]') &&
          element.getClientRects().length > 0 &&
          getComputedStyle(element).visibility !== "hidden",
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first) {
        event.preventDefault();
        dialog.focus();
        return;
      }
      if (
        event.shiftKey &&
        (document.activeElement === first ||
          !dialog.contains(document.activeElement))
      ) {
        event.preventDefault();
        last.focus();
      } else if (
        !event.shiftKey &&
        (document.activeElement === last ||
          !dialog.contains(document.activeElement))
      ) {
        event.preventDefault();
        first.focus();
      }
    };
    dialog.addEventListener("keydown", containTab);
    return () => {
      dialog.removeEventListener("keydown", containTab);
      if (dialog.open) dialog.close();
      document.body.style.overflow = previousOverflow;
      if (trigger?.isConnected) trigger.focus({ preventScroll: true });
    };
  }, [ref, open]);
}
