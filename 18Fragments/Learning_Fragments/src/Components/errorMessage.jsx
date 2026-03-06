
const Errormsg = ({items}) => {
  return (
  <>
  {items.length===0  && <h3 className = "guru-hungry "> I AM STILL HUNGRY</h3>}
  </>
  );
}
export default Errormsg;