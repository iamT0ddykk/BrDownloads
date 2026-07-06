import type React from "react";
import "./downloadCard.css";
type DownloadCardProps = {
  DownloadCardText: string;
  children: React.ReactNode;
};

export function DownloadCard(props: DownloadCardProps) {
  return (
    <>
    <div className="download-card-container">
      <p className="download-card-title">{props.DownloadCardText}</p>

      <div className="donwload-container">{props.children}</div>
      </div>
    </>
  );
}
