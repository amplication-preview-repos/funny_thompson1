import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const BulletEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Children" source="children" />
        <TextInput label="Content" source="content" />
      </SimpleForm>
    </Edit>
  );
};
