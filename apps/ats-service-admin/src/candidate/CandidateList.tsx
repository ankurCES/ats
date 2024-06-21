import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CandidateList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Candidates"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="phoneNumber" source="phoneNumber" />
        <TextField label="skills" source="skills" />
        <TextField label="skills_new" source="skillsNew" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="workExperience" source="workExperience" />
        <TextField label="yearsOfExperience" source="yearsOfExperience" />
      </Datagrid>
    </List>
  );
};
