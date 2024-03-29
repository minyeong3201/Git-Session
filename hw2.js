<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://cdn.tailwindcss.com"></script>
    <title>만 나이 계산기</title>
  </head>
  <body>
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-lg">
        <h1 class="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
          만 나이 계산기
        </h1>

        <p class="mx-auto mt-4 max-w-md text-center text-gray-500">
          만 나이 계산을 간편하게 :)
        </p>
          <div>
            <label for="birthday" class="text-sm font-medium">생년월일</label>

            <div class="relative mt-1">
              <input
                type="date"
                id="birthday"
                class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
              />
            </div>
          </div>

          <div>
            <label for="age" class="text-sm font-medium">만 나이</label>

            <div class="relative mt-1" id="result"></div>
          </div>

          <button
	          id="submit"
            class="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
          >
            제출하기
          </button>
      </div>
    </div>
    <script src="agecalculator.js"></script>
  </body>
</html>
```

```jsx
let el = document.getElementById('birthday');
let elResult = document.getElementById('result');
let elSubmit = document.getElementById('submit');
//각각의 값을 id를 이용하여 선택

const today = new Date();
//오늘 날짜를 today에 저장하기

function calculateAge(){
    
    let birthDate = new Date(el.value);
		//생일을 birthDate에 담기

    let age;

    if(today.getMonth() > birthDate.getMonth() ||
        (today.getMonth() == birthDate.getMonth() &&
        today.getDate() >= birthDate.getDate()
        )
    ) {
        age = today.getFullYear() - birthDate.getFullYear();
    } else {
        age = today.getFullYear() - birthDate.getFullYear() - 1;
    }

    elResult.innerText = `귀하의 만 나이는 ${age} 입니다.`;
		//출력하기
		
    return age;
}

elSubmit.addEventListener('click', calculateAge);
//버튼을 눌렀을때 실행되도록 설정하기
