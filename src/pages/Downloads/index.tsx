import { Margem } from "../../components/Margem";
import { Template } from "../../components/Template";
import "./Downloads.css";
import { Item } from "../../components/Item";
import { DownloadCard } from "../../components/DownloadCard";

import { EditItems } from "./Items/EditItems";
import { CourseItems } from "./Items/CourseItems";

export function Downloads() {
  const editItemsInfo = EditItems;
  const courseItemsInfo = CourseItems;
  return (
    <>
      <Template>
        <Margem>
          <DownloadCard DownloadCardText="Edição de Vídeo🎥">
            {editItemsInfo.map((info) => (
              <Item
                key={info.itemText}
                itemTitle={info.itemTitle}
                itemText={info.itemText}
                icon={info.icon}
                itemLink={info.itemLink}
              ></Item>
            ))}
          </DownloadCard>

          <DownloadCard DownloadCardText="Cursos 📘">
            {courseItemsInfo.map((info) => (
              <Item
                key={info.itemText}
                itemTitle={info.itemTitle}
                itemText={info.itemText}
                icon={info.icon}
                itemLink={info.itemLink}
              ></Item>
            ))}
          </DownloadCard>
        </Margem>
      </Template>
    </>
  );
}
