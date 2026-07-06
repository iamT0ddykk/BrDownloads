import "./Item.css";

type itemProps = {
  itemTitle: string;
  itemText: string;
  icon: React.ReactNode;
  itemLink: string;
};

export function Item(props: itemProps) {
  return (
    <>
      <div className="item">
        <div className="icone">{props.icon}</div>
        <h3>{props.itemTitle}</h3>
        <a href={props.itemLink} target="_blank">
          {props.itemText}
        </a>
      </div>
    </>
  );
}
