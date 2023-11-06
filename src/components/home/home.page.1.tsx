import mainStyle from "@/styles/main.module.css";

export default function HomePage1() {
  return (
    <>
      <div
        className={mainStyle.containerFullPage}
        style={{
          justifyContent: "center",
          alignItems: "center",
          background: "#dbeecd",
        }}
      >
        <h1
          style={{
            fontSize: 30,
          }}
        >
          HomePage1
        </h1>
      </div>
    </>
  );
}
