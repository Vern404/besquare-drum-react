import React from "react";
import "./target-container.css";
import { KeyConfig, keyConfigs } from "../../Helpers/sounds";

type TargetContainerProps = {
  onKeyMatch: (KeyConfig: KeyConfig) => void;
};

const TargetContainer = ({ onKeyMatch }: TargetContainerProps) => {
  const [activeKey, setActiveKey] = React.useState<string>();

  React.useEffect(() => {
    const handleKeyDown = (ev: KeyboardEvent) => {
      const key = ev.key;

      const keyConfig = keyConfigs.find((item) => item.key === key);

      if (keyConfig) {
        onKeyMatch(keyConfig);
        setActiveKey(keyConfig.key);
        const audio = new Audio(keyConfig?.sound);
        audio.play();

        audio.onended = () => {
          setActiveKey(undefined);
        };
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onKeyMatch]);
  return (
    <div className="control container">
      {keyConfigs.map((item) => (
        <div
          key={item.id}
          className={`control card ${activeKey === item.key && "playing"}`}
        >
          <div className="label container">{item.key}</div>
          <div className="key container">{item.id.split("_").join(" ")}</div>
        </div>
      ))}
    </div>
  );
};

export default TargetContainer;
