const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = '津田の気温は摂氏で32度。:insertx: は散歩に出かけました。:inserty: に到着すると、彼らは数分間恐怖に見入っていました。その後、:insertz:。ボブはすべてを見ていましたが、驚きませんでした — :insertx: は300ポンドあり、それは暑い日でした。'';
const insertX = ['ウィリー・ゴブリン', 'ビッグ・ダディ', 'サンタクロース'];
const insertY = ['スープキッチン', 'ディズニーランド', 'ホワイトハウス'];
const insertZ = ['突然燃え上がった', '歩道に水たまりに溶けた', 'ナメクジになって這い去った'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
