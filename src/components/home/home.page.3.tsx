import mainStyle from "@/styles/main.module.css";

export default function HomePage3() {
  return (
    <>
      <div
        className={mainStyle.containerFullPage}
        style={{
          justifyContent: "center",
          alignItems: "center",
          background: "#dbcdf2",
        }}
      >
        <h1
          style={{
            fontSize: 30,
          }}
        >
          HomePage3
        </h1>
      </div>
    </>
  );
}
