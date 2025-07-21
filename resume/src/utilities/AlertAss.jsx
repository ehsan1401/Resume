import { Alert } from "antd";

export default function AlertAss({ message, type, classNameadd }) {
  return (
    <>
      <Alert message={message} type={type} showIcon className={classNameadd} />
    </>
  );
}
