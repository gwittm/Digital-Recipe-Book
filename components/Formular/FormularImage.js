import Image from "next/image";

export default function FormularImage() {
  async function handleImageSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    console.log("data: ", data);
  }
  return (
    <form onSubmit={handleImageSubmit}>
      <input type="file" name="file" accept="image/*" />
      <button type="submit">upload image</button>
    </form>
  );
}
