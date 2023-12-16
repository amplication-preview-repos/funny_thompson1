import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const BulletCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Children" source="children" />
        <TextInput label="Content" source="content" />
      </SimpleForm>
    </Create>
  );
};
