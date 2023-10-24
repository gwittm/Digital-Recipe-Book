import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  gap: 0.5 rem;
  flex-direction: column;
  border: solid black, 1em;
  padding: 1 em;
`;

export default function FormularRecipe({ onSubmit, formName, defaultData }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmit(data);
  }

  return (
    <>
      <StyledForm aria-labelledby={formName} onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          defaultValue={defaultData?.title}
        />

        <label>
          prepared with:
          <select name="prepared">
            <option value="Oven">Oven</option>
            <option value="Microwave">Microwave</option>
            <option value="Stove" selected="selected">
              Stove
            </option>
            <option value="Grill">Grill</option>
          </select>
        </label>

        <label>
          Type:
          <select name="type">
            <option value="Cake">Cake</option>
            <option value="Dish">Dish</option>
          </select>
        </label>

        <label htmlFor="neededTime">Time:</label>
        <input
          id="neededTime"
          name="neededTime"
          type="time"
          defaultValue={defaultData?.neededTime}
        />

        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          defaultValue={defaultData?.description}
        ></textarea>
        <button type="submit">
          {defaultData ? "Update recipe" : "Add recipe"}
        </button>
      </StyledForm>
    </>
  );
}
