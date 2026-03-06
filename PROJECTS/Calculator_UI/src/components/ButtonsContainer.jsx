import Styles from "./ButtonsContainer.module.css";
const ButtonsContainer = () => {
  const buttonNames = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={Styles.Button_C}>
      {buttonNames.map((buttonName) => ( <button key={buttonName}
          className={Styles.Button}>{buttonName}</button>
      ))}
    </div>
  );
};
export default ButtonsContainer;
