import mainStyle from "@/styles/main.module.css";

export default function HomePage4() {
  return (
    <>
      <div
        className={mainStyle.containerFullPage}
        style={{
          justifyContent: "center",
          alignItems: "center",
          background: "#fbeedd",
        }}
      >
        <h1
          style={{
            fontSize: 30,
          }}
        >
          HomePage4
        </h1>
      </div>
    </>
  );
}
