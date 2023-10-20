import styled from "styled-components";
import { StyledButton } from "./StyledButton.js";

const FormContainer = styled.form`
  display: grid;
  gap: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: inherit;
  border: 3px solid black;
  border-radius: 0.5rem;
`;

const Textarea = styled.textarea`
  font-family: inherit;
  border: 3px solid black;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

const Label = styled.label`
  font-weight: bold;
`;

export default function Form({ onSubmit, formName, defaultData }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmit(data);
  }

  return (
    <>
      <FormContainer aria-labelledby={formName} onSubmit={handleSubmit}>
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          name="title"
          type="text"
          defaultValue={defaultData?.title}
        />

        <Label>
          prepared with:
          <select name="prepared">
            <option value="Oven">Oven</option>
            <option value="Microwave">Microwave</option>
            <option value="Stove" selected="selected">
              Stove
            </option>
            <option value="Grill">Grill</option>
          </select>
        </Label>

        <Label>
          Type:
          <select name="type">
            <option value="Cake">Cake</option>
            <option value="Dish">Dish</option>
          </select>
        </Label>

        <Label htmlFor="neededTime">needed Time:</Label>
        <Input
          id="neededTime"
          name="neededTime"
          type="time"
          defaultValue={defaultData?.neededTime}
        />

        <Label htmlFor="description">Description</Label>
        <Textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          defaultValue={defaultData?.description}
        ></Textarea>

        <StyledButton type="submit">
          {defaultData ? "Update recipe" : "Add recipe"}
        </StyledButton>
      </FormContainer>
    </>
  );
}
