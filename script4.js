const locations = [
  { image: 'image/amaharasi.jpg', lat: 36.8158, lng: 137.0469 }, // 雨晴海岸
  { image: 'image/kurobe.jpg', lat: 36.5668, lng: 137.6638 }, // 黒部ダム
  { image: 'image/zuiryuji.jpg', lat: 36.7355, lng: 137.0110 }, // 瑞龍寺
  { image: 'image/gokayama.jpg', lat: 36.4281, lng: 136.9360 }, // 五箇山
  { image: 'image/gokayama2.jpg', lat: 36.4282, lng: 136.9360 }, // 五箇山２
  { image: 'image/himi.jpg', lat: 36.8644, lng: 136.9875 }, // 道の駅氷見
  { image: 'image/himi2.jpg', lat: 36.8644, lng: 136.9866 }, // 氷見２
  { image: 'image/himi3.jpg', lat: 36.8644, lng: 136.9866 }, // 氷見３
  { image: 'image/hotaika.jpg', lat: 36.7741, lng: 137.3449 }, // ほたるいか
  { image: 'image/josi.jpg', lat: 36.6940, lng: 137.2108 }, // 城址公園
  { image: 'image/josi2.jpg', lat: 36.6921, lng: 137.2106 }, // 城址公園２
  { image: 'image/kaiomaru.jpg', lat: 36.7800, lng: 137.1081 }, // 海王丸パーク
  { image: 'image/kaiomaru2.jpg', lat: 36.7808, lng: 137.1089 }, // 海王丸２
  { image: 'image/kansui.jpg', lat: 36.7092, lng: 137.2132 }, // 環水公園
  { image: 'image/kansui2.jpg', lat: 36.7081, lng: 137.2137 }, // 環水公園２
  { image: 'image/kansui3.jpg', lat: 36.7093, lng: 137.2124 }, // 環水公園３
  { image: 'image/kurobekyokoku.jpg', lat: 36.8147, lng: 137.5879 }, // 黒部峡谷
  { image: 'image/mikurigaike.jpg', lat: 36.5812, lng: 137.5960 }, // みくりが
  { image: 'image/oyamajinjya.jpg', lat: 36.5731, lng: 137.6178 }, // 雄山神社
  { image: 'image/takaokadaibutu.jpg', lat: 36.7458, lng: 137.0169 }, // 大仏
  { image: 'image/tonami.jpg', lat: 36.6393, lng: 136.9611 }, // 砺波
  { image: 'image/tonami2.jpg', lat: 36.6393, lng: 136.9611 }, // 砺波２
  { image: 'image/toyabiju2.jpg', lat: 36.7110, lng: 137.2100 }, // 富山美術館
  { image: 'image/toyabiju3.jpg', lat: 36.7110, lng: 137.2100 }, // 美術館２
  { image: 'image/toyabiju4.jpg', lat: 36.7102, lng: 137.2105 }, // 美術館３
];

let selectedLocation = null;
let userGuess = null;
let resultMap = null;
let currentRound = 1;
let totalScore = 0;

function showRules() {
  document.getElementById('title-screen').style.display = 'none';
  document.getElementById('rules-screen').style.display = 'flex';
}

function goToTitle() {
  document.getElementById('rules-screen').style.display = 'none';
  document.getElementById('title-screen').style.display = 'flex';
}

function startGame() {
  document.getElementById('title-screen').style.display = 'none';
  document.getElementById('game-screen').style.display = 'flex';
  currentRound = 1;
  totalScore = 0;
  loadRound();
}

function loadRound() {
  document.getElementById('round-number').innerText = currentRound;
  const randomIndex = Math.floor(Math.random() * locations.length);
  selectedLocation = locations[randomIndex];
  document.getElementById('random-image').src = selectedLocation.image;
}

function goToMap() {
  document.getElementById('game-screen').style.display = 'none';
  document.getElementById('map-screen').style.display = 'flex';

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: { lat: 36.6943, lng: 137.2128 }, // 初期位置を富山に設定
  });

  map.addListener('click', (event) => {
    userGuess = { lat: event.latLng.lat(), lng: event.latLng.lng() };
    alert(`選択した位置: 緯度 ${userGuess.lat}, 経度 ${userGuess.lng}`);
  });
}

function submitGuess() {
  if (!userGuess) {
    alert('位置を選択してください！');
    return;
  }

  const distance = calculateDistance(
    selectedLocation.lat,
    selectedLocation.lng,
    userGuess.lat,
    userGuess.lng
  );

  totalScore += distance;

  document.getElementById('map-screen').style.display = 'none';
  document.getElementById('result-screen').style.display = 'flex';
  document.getElementById('result-text').innerText = 
    `あなたの回答は正解の位置と ${distance.toFixed(2)} km 離れています！`;

  // 結果地図を初期化
  resultMap = new google.maps.Map(document.getElementById('result-map'), {
    zoom: 15,
    center: selectedLocation, // 正解の位置を中心に
  });

  // 正解の位置にマーカーを表示
  new google.maps.Marker({
    position: selectedLocation,
    map: resultMap,
    label: '答え',
  });

  // ユーザーの解答位置にマーカーを表示
  new google.maps.Marker({
    position: userGuess,
    map: resultMap,
    label: '解答',
  });

  // 二点を線で結ぶ
  new google.maps.Polyline({
    path: [selectedLocation, userGuess],
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2,
    map: resultMap,
  });
}

function nextRound() {
  if (currentRound < 10) {
    currentRound++;
    userGuess = null;
    document.getElementById('result-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'flex';
    loadRound();
  } else {
    showFinalScore();
  }
}

function showFinalScore() {
  document.getElementById('result-screen').style.display = 'none';
  document.getElementById('final-score-screen').style.display = 'flex';

  const averageScore = totalScore / 10;
  let comment = '';
  if (averageScore < 1) {
    comment = '素晴らしい！あなたは富山マスターです！';
  } else if (averageScore < 2) {
    comment = '良い結果です！富山の観光地が分かってきましたか？';
  } else {
    comment = '富山についてまだあまり知らないようですね。このゲームをプレーして一緒に富山について学びましょう！';
  }

  document.getElementById('final-score-text').innerText = 
    `合計スコア: ${totalScore.toFixed(2)} km\n${comment}`;
}

function restartGame() {
  document.getElementById('final-score-screen').style.display = 'none';
  document.getElementById('title-screen').style.display = 'flex';
}

function calculateDistance(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = degToRad(lat2 - lat1);
  const dLng = degToRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(degToRad(lat1)) * Math.cos(degToRad(lat2)) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function degToRad(deg) {
  return deg * (Math.PI / 180);
}
