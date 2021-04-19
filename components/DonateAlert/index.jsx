import { Alert, AlertIcon, AlertDescription } from "@chakra-ui/react";
export default function CustomAlert(props) {
  return (
    <Alert status={props.status} variant="left-accent">
      <AlertIcon />
      <AlertDescription>{props.message}</AlertDescription>
    </Alert>
  );
}
