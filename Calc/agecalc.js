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