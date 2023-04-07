function validate(username, experience, level) {
  // проверяем заполнение поля "Имя"
  if (username === "") {
    return "Введите имя";
  }
  
  // проверяем заполнение поля "Опыт работы"
  if (experience === "") {
    return "Введите опыт работы";
  }
  
  // проверяем значение поля "Опыт работы"
  if (experience < 0 || experience > 99) {
    return "Вы ввели неверное значение опыта работы";
  }
  
  // если все проверки прошли успешно, формируем и возвращаем строку с приглашением на собеседование
  return `${username}, нас устраивает Ваш опыт работы (${experience} ${getExperienceWordEnding(experience)}) и уровень квалификации (${level}). Приходите на собеседование.`;
}

// функция, возвращающая правильное окончание для слова "год"
function getExperienceWordEnding(experience) {
  if (experience >= 11 && experience <= 14) {
    return "лет";
  }
  const lastDigit = experience % 10;
  switch (lastDigit) {
    case 1:
      return "год";
    case 2:
    case 3:
    case 4:
      return "года";
    default:
      return "лет";
  }
}
