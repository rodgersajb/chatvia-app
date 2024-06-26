export default function InputFile() {
  return (
    <input
      className="border border-black-500 round-md"
      type="file"
      name="file"
      placeholder="upload an image!"
      required
    />
  );
}
