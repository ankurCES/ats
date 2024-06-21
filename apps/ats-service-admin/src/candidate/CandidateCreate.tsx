import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

export const CandidateCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="phoneNumber" source="phoneNumber" />
        <TextInput label="skills" multiline source="skills" />
        <SelectArrayInput
          label="skills_new"
          source="skillsNew"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="workExperience" multiline source="workExperience" />
        <NumberInput
          step={1}
          label="yearsOfExperience"
          source="yearsOfExperience"
        />
      </SimpleForm>
    </Create>
  );
};
