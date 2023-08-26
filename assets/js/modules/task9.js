/*
Реализовать функцию конвертации JSON в строку
*/
/*
В части конвертации объекта помог этот источник:
https://stackoverflow.com/questions/52572690/how-to-convert-object-to-string-without-json-stringify-using-javascript
*/

function toJSONString(input) {
    //конвертация строки (проверяем, если строка)
    if (typeof input == 'string') {
        return input = `"${input}"`;
        //конвертация объекта, исключая массив (проверяем, если объект, но не массив)
    } else if (typeof input == 'object' && !Array.isArray(input)) {
        /*
        перебираем массив пар [ключ, значение], созданный с помощью Object.entries(), 
        конвертруем элементы в корректные строки (как в JSON.stringify) 
        и удаляем из него функции и undefined.
        */
        const string = Object.entries(input).reduce((a, e) => {
            if (typeof e[1] != 'function' && e[1] !== undefined) {
                if (e[0] === 'num' || e[0] === 'null') {
                    a += `"${e[0]}":${e[1]},`;
                } else {
                    a += `"${e[0]}":"${e[1]}",`;
                }
            }
            return a;
        }, "`{").slice(1, -1) + "}";

        return string;
        //конвертация массива (проверяем, если массив)
    } else if (Array.isArray(input)) {
        /*
        фильтруем, чтобы убрать undefined и функции 
        (к сожалению, не придумала, как undefined и 
        функции заменять на null, да и есть ли в этом практический смысл?)
        */
        input = input.filter((i) => {
            return i !== undefined && typeof i != 'function';
        });
        return input = `${input}`;
    }
    return input = `${input}`;
}

//для проверки
const obj = {
    num: 0,
    string: "string",
    f: function () {},
    emptyString: '',
    null: null,
    undefined: undefined
};

const arr = [1, 2, 3, undefined, function () {}];

// результат (раскомментировать для проверки):
/*
console.log(`${toJSONString('hi')} тип ${typeof toJSONString('hi')}`);
console.log(`${toJSONString(5)} тип ${typeof toJSONString(5)}`);
console.log(`${toJSONString(true)} тип ${typeof toJSONString(true)}`);
console.log(`${toJSONString(obj)} тип ${typeof toJSONString(obj)}`);
console.log(`${toJSONString(arr)} тип ${typeof toJSONString(arr)}`);
*/
