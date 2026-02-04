import { createContext, useContext, useState, type ReactNode } from "react";
import PopUp from "../Pop-up/Pop-up";

interface PopupContextType {
  openPopup: (
    title: string,
    desc: string,
    imageLink: string,
    image?: string,
  ) => void;
}

const PopupContext = createContext<PopupContextType | undefined>(undefined);

export function PopupProvider({ children }: { children: ReactNode }) {
  const [popupContent, setPopupContent] = useState<{
    title: string;
    desc: string;
    picture?: string;
    imageLink: string;
  } | null>(null);

  const openPopup = (
    title: string,
    desc: string,
    imageLink: string,
    image?: string,
  ) => {
    setPopupContent({ title, desc, picture: image, imageLink });
  };

  return (
    <PopupContext.Provider value={{ openPopup }}>
      {children}
      {popupContent && (
        <PopUp
          title={popupContent.title}
          content={popupContent.desc}
          picture={popupContent.picture || ""}
          imageLink={popupContent.imageLink}
          onClose={() => setPopupContent(null)}
        />
      )}
    </PopupContext.Provider>
  );
}

export function usePopup() {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error("usePopup must be used within a PopupProvider");
  }
  return context;
}
