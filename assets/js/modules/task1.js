const palindrome = (x) => {

    /*
    Делаем проверку: 
    - переводим х в строку методом toString(), убираем все пробелы в строке, 
    затем разбиваем полученную строку на массив из символов и ставим элементы 
    массива в обратном порядке методом reverse();
    - получившийся результат сравниваем с изначальным х, приведенным к строке без пробелов.

    Если значения равны, то это палиндром.
    */
    if (x.toString().replace(/\s/g, '').split('').reverse().join('') == x.toString().replace(/\s/g, '')) {
        console.log(x + ' - это палиндром')
    } else {
        console.log(x + ' - это не палиндром')
    }
  }


  // результат (раскомментировать для проверки):
  
  /*
  console.log(palindrome('аргентина манит негра'));
  console.log(palindrome(121));
  console.log(palindrome(123));
  console.log(palindrome(0));
  console.log(palindrome('12 3 21'));
  */

  export {palindrome};