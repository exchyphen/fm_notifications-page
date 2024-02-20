import "./notification.css";

const Notification = (props) => {
  const bgColor = props.state ? "var(--white)" : "var(--light-grayish-blue-1)";

  // function help place the correct element based on type
  const createContentFromType = () => {
    if (props.type === "picture") {
      return (
        <img
          className="notification-picture"
          src={props.typeData}
          alt="commented on this picture"
        ></img>
      );
    }

    if (props.type === "pm") {
      return <div className="pm-container">{props.typeData}</div>;
    }

    return <span className="inline-type-data">{props.typeData}</span>;
  };

  return (
    <button
      className="notification-container"
      tabIndex="0"
      onClick={props.onClick}
      style={{ backgroundColor: `${bgColor}` }}
    >
      <img
        className="notification-img"
        src={props.img}
        alt={`${props.name} img`}
      ></img>
      <div className="notification-content">
        <div className="notification-text-wrapper">
          <div className="notification-text">
            <span className="notification-name">{props.name}</span>{" "}
            <span className="notification-flavor-text">{props.flavorText}</span>{" "}
            {props.type !== "pm" && props.type !== "picture"
              ? createContentFromType()
              : null}{" "}
            {props.state ? null : (
              <div className="unread-notification-circle"></div>
            )}
          </div>
          {props.type === "picture" ? createContentFromType() : null}
        </div>
        <div className="notification-time">{`${props.time} ago`}</div>
        {props.type === "pm" ? createContentFromType() : null}
      </div>
    </button>
  );
};

export default Notification;
