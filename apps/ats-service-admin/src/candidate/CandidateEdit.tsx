import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

export const CandidateEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
