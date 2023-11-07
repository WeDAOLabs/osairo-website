import mainStyle from "@/styles/main.module.css";
import txtMenuStyle from "./txt-menu.module.css";

export interface ITxtMenuItem {
  txt: string;
  onClick?: Function;
}
export default function TxtMenuItem(props: ITxtMenuItem) {
  return (
    <>
      <div
        className={`${txtMenuStyle.txtMenuItem} ${mainStyle.flexCenter}`}
        onClick={props.onClick ? props.onClick() : null}
      >
        <label className={txtMenuStyle.txtMenuItemLabel}>{props.txt}</label>
      </div>
    </>
  );
}
