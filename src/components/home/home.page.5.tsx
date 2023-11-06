import mainStyle from "@/styles/main.module.css";

export default function HomePage5() {
  return (
    <>
      <div
        className={mainStyle.containerFullPage}
        style={{
          justifyContent: "center",
          alignItems: "center",
          background: "#c4e4ce",
        }}
      >
        <h1
          style={{
            fontSize: 30,
          }}
        >
          HomePage5
        </h1>
      </div>
    </>
  );
}
