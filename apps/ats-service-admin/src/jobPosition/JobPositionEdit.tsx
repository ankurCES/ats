import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const JobPositionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="requirements" multiline source="requirements" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
