import React from "react";

interface TickerTapeProps {
  texts: string[];
}

const TickerTape: React.FC<TickerTapeProps> = ({ texts }) => {
  return (
    <div className="ticker-tape-container">
      <div className="ticker-tape">
        {texts.map((text, index) => (
          <div key={index} className="ticker-tape-item">
            {text}
          </div>
        ))}
        {texts.map((text, index) => (
          <div key={`repeat-${index}`} className="ticker-tape-item">
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TickerTape;
