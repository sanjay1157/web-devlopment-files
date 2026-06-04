function InputBox({ name, setName }) {
  return (
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Enter your name"
    />
  );
}

export default InputBox;