import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const CandidateShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="phoneNumber" source="phoneNumber" />
        <TextField label="skills" source="skills" />
        <TextField label="skills_new" source="skillsNew" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="workExperience" source="workExperience" />
        <TextField label="yearsOfExperience" source="yearsOfExperience" />
      </SimpleShowLayout>
    </Show>
  );
};
