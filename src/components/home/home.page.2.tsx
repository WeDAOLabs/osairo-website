import mainStyle from "@/styles/main.module.css";

export default function HomePage2() {
  return (
    <>
      <div
        className={mainStyle.containerFullPage}
        style={{
          justifyContent: "center",
          alignItems: "center",
          background: "#d1dcfe",
        }}
      >
        <h1
          style={{
            fontSize: 30,
          }}
        >
          HomePage2
        </h1>
      </div>
    </>
  );
}
