import "./form.scss";
import EmojiPickerInput from "../emojiPicker/EmojiPickerInput.jsx";
export default function Form() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="prenom">Prénom</label>
      <input type="text" name="prenom" id="prenom" />
      <label htmlFor="nom">Nom</label>
      <input type="text" name="nom" id="nom" />
      <EmojiPickerInput />
      <button className="btn">Envoyer</button>
    </form>
  );
}
