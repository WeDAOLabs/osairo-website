import mainStyle from "@/styles/main.module.css";
import txtMenuStyle from "./txt-menu.module.css";

export interface ITxtMenuItem {
  txt: string;
  onClick?: Function;
  bgColor?: string;
  txtColor?: string;
  fontFamily?: string;
  fontSize?: number;
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
        style={{
          background: props?.bgColor ? props?.bgColor : "#555C50",
        }}
      >
        <label
          className={txtMenuStyle.txtMenuItemLabel}
          style={{
            color: props?.txtColor ? props?.txtColor : "white",
            fontFamily: props?.fontFamily ? props?.fontFamily : "Arial Hebrew",
            fontSize: props?.fontSize ? props?.fontSize : 20,
          }}
        >
          {props.txt}
        </label>
      </div>
    </>
  );
}
