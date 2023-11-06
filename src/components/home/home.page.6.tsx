import mainStyle from "@/styles/main.module.css";

export default function HomePage6() {
  return (
    <>
      <div
        className={mainStyle.containerFullPage}
        style={{
          justifyContent: "center",
          alignItems: "center",
          background: "#3b3e3a",
        }}
      >
        <h1
          style={{
            fontSize: 30,
          }}
        >
          HomePage6
        </h1>
      </div>
    </>
  );
}