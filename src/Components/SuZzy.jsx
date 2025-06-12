import React, { useRef, useEffect } from "react";
import p5 from "p5";

const SuZzy = () => {
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      let font = null;

      p.setup = () => {
        p.createCanvas(Math.min(400, p.windowWidth * 0.9), 200).parent(
          sketchRef.current
        );
        p.textAlign(p.CENTER, p.CENTER);
        p.textSize(60);
        p.noStroke();

        // Cargar la fuente y luego dibujar
        p.loadFont(
          "https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/font/SourceCodePro-Bold.otf",
          (loadedFont) => {
            font = loadedFont;
          }
        );
      };

      p.draw = () => {
        p.background(0);
        let emoColor =
          p.frameCount % 30 < 15 ? p.color(255, 0, 255) : p.color(255);
        p.fill(emoColor);

        if (font) {
          p.textFont(font);
        }

        p.text("SuZzy", p.width / 2, p.height / 2);

        // Emo decoraciones
        p.textSize(20);
        p.text("x_x", p.width / 2 - 120, p.height / 2 - 40);
        p.text("♥", p.width / 2 + 100, p.height / 2 + 40);
        p.text("★", p.width / 2 - 130, p.height / 2 + 50);
        p.textSize(60); // restaurar tamaño para el siguiente frame
      };
    };

    const myP5 = new p5(sketch);

    return () => {
      myP5.remove(); // Limpieza al desmontar el componente
    };
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "220px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        ref={sketchRef}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      />
    </div>
  );
};

export default SuZzy;
