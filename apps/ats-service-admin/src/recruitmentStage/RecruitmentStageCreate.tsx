import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const RecruitmentStageCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="stageName" source="stageName" />
      </SimpleForm>
    </Create>
  );
};
