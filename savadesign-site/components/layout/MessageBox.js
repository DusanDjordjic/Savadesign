import classes from "./MessageBox.module.scss";
const MessageBox = ({ visible, text }) => {
  return (
    <div
      className={
        visible ? `${classes.msgBox} ${classes.visible}` : classes.msgBox
      }
    >
      <p>{text}</p>
    </div>
  );
};

export default MessageBox;
