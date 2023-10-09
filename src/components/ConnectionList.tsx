import {
  List,
  Datagrid,
  TextField,
  NumberField,
  DateField,
  DateInput,
  NumberInput,
} from "react-admin";

const userFilters = [
  <DateInput
    key="dateInput"
    label="DateStamp"
    source="DatestampUTC"
    defaultValue="2023-10-04"
  />,
  <NumberInput key="size" label="Size" source="bytesTx" />,
];

export const ConnectionList = (props: any) => (
  <List {...props} filters={userFilters}>
    <Datagrid rowClick="edit">
      <TextField label="ID" source="id" />
      <DateField label="Start Time" source="startTimestampUTC" />
      <TextField label="IpAddress" source="ipAddress" />
      <NumberField label="Port" source="port" />
      <DateField label="End Time" source="endTimestampUTC" />
      <NumberField label="Size" source="bytesTx" />
      <TextField label="Disconnect Reason" source="disconnectReason" />
      <TextField label="FileName" source="fileName" />
      <TextField label="SerialNo" source="serialNo" />
      <DateField label="DateStamp" source="DatestampUTC" />
    </Datagrid>
  </List>
);