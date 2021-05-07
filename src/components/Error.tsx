function Error(props : any) {
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
        backgroundColor: "rgba(0,0,0,0.5)",
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
          style={{ marginTop: 400, width: "50%" }}
        >
          <button
            style={{
              position: "relative",
              left: "45%",
              fontSize: "16px",
            }}
            type="button"
            className="close"
            data-dismiss="alert"
            aria-hidden="true"
            onClick={() => {
              props.setError([]);
            }}
          >
            Close
          </button>
          <h5>{props.errorTitle}</h5>
          {props.errorMessage}
        </div>
      </div>
    </div>
  );
}
export default Error;
