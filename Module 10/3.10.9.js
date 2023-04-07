function toShortDate(date) {
  return `${date.getDate()}.${date.getMonth()+ 1}.${date.getFullYear()}`;
}

function validate(username, birthday, experience, level) {
  if (!username) {
    return "Введите имя";
  }
  
  if (!birthday) {
    return "Введите дату рождения";
  }
  
  const birthdate = new Date(birthday);
  const currentDate = new Date(2023, 2, 4);
  if ((currentDate - birthdate) / (1000 * 60 * 60 * 24 * 365.25) < 18) {
    return "Приходите к нам через пару лет";
  }
  
  if (!experience) {
    return "Введите опыт работы";
  }
  
  if (+experience < 0 || +experience > 99) {
    return "Вы ввели неверное значение опыта работы";
  }
  
    let interviewDay = (birthdate.getDay() == 0) ? 0 : (birthdate.getDay() - 1);
    interviewDay = 20 + interviewDay;

  const interviewDate = new Date(2023, 2, interviewDay);
  
 
  const resultString = `${username}, нас устраивает Ваш опыт работы (${experience} ${getExperienceWord(experience)}) и уровень квалификации (${level}). Приходите на собеседование ${toShortDate(interviewDate)}.`;
  return resultString;
}

function getExperienceWord(years) {
  if (years % 10 === 1 && years % 100 !== 11) {
    return "год";
  } else if ([2, 3, 4].includes(years % 10) && ![12, 13, 14].includes(years % 100)) {
    return "года";
  } else {
    return "лет";
  }
}
