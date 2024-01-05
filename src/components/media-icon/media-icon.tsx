import mediaIconStyle from "./media-icon.module.css";
import Image from "next/image";

export interface IMediaIcon {
  txt: string;
  size: [number, number];
  onClick?: Function;
}

export default function MediaIcon(props: IMediaIcon) {
  return (
    <>
      <div className={mediaIconStyle.mediaIconBg}>
        <Image
          src={`/assets/icon-${props.txt}.png`}
          alt="media"
          width={props.size[0]}
          height={props.size[1]}
          onClick={() => (props.onClick ? props.onClick(props) : null)}
        />
      </div>
    </>
  );
}
