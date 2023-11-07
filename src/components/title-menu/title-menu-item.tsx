"use client";
import titleMenuItemStyle from "./title-menu.module.css";

export interface ITitleMenuItem {
  index: string | number;
  txt: string;
  onClick: Function | undefined;
  selected: boolean | undefined;
}

export default function TitleMenuItem(props: ITitleMenuItem) {
  const onClicked = () => {
    if (props.selected) {
      return;
    }
    if (props.onClick) {
      props.onClick(props);
    }
  };

  return (
    <>
      <div
        className={titleMenuItemStyle.titleMenuItemStyle}
        onClick={onClicked}
      >
        <div
          style={{
            width: "100%",
            height: 40,
            borderRadius: 50,
            background: "#322e21",
            position: "absolute",
            display: props.selected ? "" : "none",
          }}
        />
        <label
          className={`${titleMenuItemStyle.menuLabelStyle} ${
            props.selected ? titleMenuItemStyle.menuLabelStyleSelected : ""
          }`}
          style={{
            zIndex: 999,
          }}
        >
          {props.txt}
        </label>
      </div>
    </>
  );
}
