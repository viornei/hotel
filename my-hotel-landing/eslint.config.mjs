import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:prettier/recommended",
  ),

  {
    rules: {
      semi: ["error", "always"], // Требовать точки с запятой
      quotes: ["error", "double"], // Использовать двойные кавычки
      "no-unused-vars": "warn", // Предупреждать о неиспользуемых переменных
      "react/react-in-jsx-scope": "off", // Отключить требование импорта React
    },
  },
];

export default eslintConfig;
