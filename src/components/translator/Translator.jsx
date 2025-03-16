import React, { useState } from "react";
import axios from "axios";

const Translator = () => {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [language, setLanguage] = useState("de"); // Default to German

  const translateText = async () => {
    try {
      const response = await axios.post(
        "https://libretranslate.com/translate",
        {
          q: text,
          source: language === "de" ? "en" : "de",
          target: language,
          format: "text",
        }
      );

      setTranslatedText(response.data.translatedText);
    } catch (error) {
      console.error("Translation Error:", error);
      setTranslatedText("Translation failed. Try again.");
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">English - German Translator</h2>
      <textarea
        className="w-full p-2 border rounded-md"
        rows="4"
        placeholder="Enter text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="flex items-center justify-between mt-3">
        <select
          className="p-2 border rounded-md"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="de">Translate to German</option>
          <option value="en">Translate to English</option>
        </select>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={translateText}
        >
          Translate
        </button>
      </div>
      {translatedText && (
        <div className="mt-4 p-2 border rounded-md bg-gray-100">
          <strong>Translated:</strong> {translatedText}
        </div>
      )}
    </div>
  );
};

export default Translator;
