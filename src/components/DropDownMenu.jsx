import DropDownStyle from "./DropDownMenu.module.css";

function Dropdown() {
  return (
  <div className={DropDownStyle.dropdown}>
    <button class={DropDownStyle.dropbtn}>Dropdown</button>
    <div class={DropDownStyle.dropdownContent}>
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div>
  );
}

export default Dropdown;