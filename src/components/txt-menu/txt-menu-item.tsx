import mainStyle from "@/styles/main.module.css";
import txtMenuStyle from "./txt-menu.module.css";

export interface ITxtMenuItem {
  txt: string;
  onClick?: Function;
}
export default function TxtMenuItem(props: ITxtMenuItem) {
  const onItemClicked = () => {
    props.onClick ? props.onClick() : null;
  };

  return (
    <>
      <div
        className={`${txtMenuStyle.txtMenuItem} ${mainStyle.flexCenter}`}
        onClick={onItemClicked}
      >
        <label className={txtMenuStyle.txtMenuItemLabel}>{props.txt}</label>
      </div>
    </>
  );
}
