function Error(props: any) {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 2,
        left: 0,
        bottom: 0,
        marginRight: "auto",
        padding: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className={`alert-${props.errorCategory} alert-dismissible`}
          style={{ marginTop: 400, width: "60%" }}
        >
          <a
            href="/"
            style={{
              position: "relative",
              left: "45%",
              fontSize: "16px",
              padding: "10px",
            }}
            data-dismiss="alert"
            aria-hidden="true"
            onClick={() => {
              props.setError([]);
            }}
          >
            X
          </a>
          <h5>{props.errorTitle}</h5>
          {props.errorMessage}
        </div>
      </div>
    </div>
  );
}
export default Error;
