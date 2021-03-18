import CONSTANTS from "./constans";

const ENG = {
  ID: "ID",
  NAME: "Name",
  TABLE: "Table",
  AGE: "Age",
  PREVIEW: "Preview",
  LOW_TO_HIGH: "Low to high",
  HIGH_TO_LOW: "High to low",
  SORT: "Sorting",
  VIEW: "View",
  PHONE: "Phone number",
  SEARCH: "Search",
};

const RUS = {
  ID: "ID",
  NAME: "Имя",
  TABLE: "Таблица",
  AGE: "Возраст",
  PREVIEW: "Превью",
  LOW_TO_HIGH: "По возростанию",
  HIGH_TO_LOW: "По убыванию",
  SORT: "Сортировка",
  VIEW: "Вид",
  PHONE: "Номер телефона",
  SEARCH: "Поиск",
};

function translate(language) {
  if (language === CONSTANTS.ENG) {
    return ENG;
  } else {
    return RUS;
  }
}

export default translate;
