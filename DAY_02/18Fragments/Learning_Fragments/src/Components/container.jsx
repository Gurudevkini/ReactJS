// import styles from "./Container.module.css";
// const Container =(props) =>
// {
//   return
//   (  <div className={styles.container} >{props.children}</div>
//   );
// };
// export default container; 


import styles from "./Container.module.css";

const Container = ({children}) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

export default Container;

// when i use container you can store it nicely in the way its become easy to rep
// 