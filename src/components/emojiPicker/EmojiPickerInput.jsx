import { useRef } from "react";
import EmojiPicker from "./EmojiPicker.jsx";
export default function EmojiPickerInput() {
  const inputRef = useRef(null);
  return (
    <div className="box-emoji">
      <label htmlFor="message">Message</label>
      <EmojiPicker ref={inputRef} />
      <textarea ref={inputRef} name="message" id="message"></textarea>
    </div>
  );
}
